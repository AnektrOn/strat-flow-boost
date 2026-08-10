import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const adminPassword = Deno.env.get("REVIEW_ADMIN_PASSWORD");
    if (!adminPassword) return json({ error: "Moderation not configured" }, 500);

    let payload: Record<string, unknown>;
    try {
      payload = await req.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400);
    }

    if (typeof payload.password !== "string" || payload.password !== adminPassword) {
      return json({ error: "Unauthorized" }, 401);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const action = payload.action;

    if (action === "list") {
      const { data, error } = await supabase
        .from("client_reviews")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(200);
      if (error) return json({ error: error.message }, 500);
      return json({ reviews: data ?? [] });
    }

    if (action === "set-status") {
      const id = payload.id;
      const status = payload.status;
      const note = payload.note;
      if (typeof id !== "string" || id.length === 0) return json({ error: "Missing id" }, 400);
      if (status !== "pending" && status !== "approved" && status !== "rejected") {
        return json({ error: "Invalid status" }, 400);
      }
      if (note != null && (typeof note !== "string" || note.length > 2000)) {
        return json({ error: "Invalid note" }, 400);
      }

      const { data, error } = await supabase
        .from("client_reviews")
        .update({ status, moderation_note: (note as string | null) ?? null })
        .eq("id", id)
        .select()
        .maybeSingle();
      if (error) return json({ error: error.message }, 500);
      if (!data) return json({ error: "Review not found" }, 404);
      return json({ review: data });
    }

    return json({ error: "Unknown action" }, 400);
  } catch (e) {
    return json({ error: e instanceof Error ? e.message : "Unexpected error" }, 500);
  }
});
