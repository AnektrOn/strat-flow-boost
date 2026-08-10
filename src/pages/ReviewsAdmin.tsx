import { useCallback, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

type Review = {
  id: string;
  created_at: string;
  locale: string;
  full_name: string;
  activity: string | null;
  role_title: string | null;
  program_kind: string | null;
  program_name: string | null;
  program_period: string | null;
  rating: number;
  evolution_score: number | null;
  headline: string | null;
  body: string;
  recommend: string | null;
  email: string | null;
  status: string;
  moderation_note: string | null;
};

type Filter = "pending" | "approved" | "rejected" | "all";

const inputCls =
  "w-full bg-n-surface border border-n-border rounded px-3 py-2 text-sm text-n-text placeholder:text-n-faint focus:outline-none focus:border-n-gold-dim transition-colors";

const ReviewsAdmin = () => {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState<Filter>("pending");
  const [notes, setNotes] = useState<Record<string, string>>({});

  useEffect(() => {
    document.title = "Reviews moderation";
  }, []);

  const call = useCallback(
    async (body: Record<string, unknown>) => {
      const { data, error } = await supabase.functions.invoke("moderate-reviews", {
        body: { password, ...body },
      });
      if (error) throw new Error(error.message);
      if (data?.error) throw new Error(data.error);
      return data;
    },
    [password],
  );

  const load = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    try {
      const data = await call({ action: "list" });
      setReviews(data.reviews ?? []);
      setAuthed(true);
    } catch (err) {
      toast({
        title: "Access denied",
        description: err instanceof Error ? err.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const setStatus = async (id: string, status: string) => {
    try {
      const data = await call({ action: "set-status", id, status, note: notes[id] ?? null });
      setReviews((rs) => rs.map((r) => (r.id === id ? data.review : r)));
      toast({ title: `Review ${status}` });
    } catch (err) {
      toast({
        title: "Action failed",
        description: err instanceof Error ? err.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  if (!authed) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={load} className="w-full max-w-sm">
          <h1 className="font-display text-2xl text-n-text mb-2">Moderation</h1>
          <p className="text-sm text-n-muted mb-6">Enter the moderation password.</p>
          <input
            type="password"
            className={inputCls}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button type="submit" className="btn-pill mt-6" disabled={loading}>
            <span>{loading ? "Checking…" : "Sign in"}</span>
          </button>
        </form>
      </main>
    );
  }

  const filtered = reviews.filter((r) => (filter === "all" ? true : r.status === filter));

  return (
    <main className="min-h-screen py-16">
      <div className="container-nomos max-w-[960px]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h1 className="font-display text-3xl text-n-text">Reviews moderation</h1>
          <button type="button" className="btn-outline" onClick={() => load()} disabled={loading}>
            {loading ? "Loading…" : "Refresh"}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {(["pending", "approved", "rejected", "all"] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider rounded border transition-colors ${
                filter === f
                  ? "border-n-gold-dim bg-n-gold/15 text-n-gold"
                  : "border-n-border text-n-muted hover:text-n-text"
              }`}
            >
              {f} ({f === "all" ? reviews.length : reviews.filter((r) => r.status === f).length})
            </button>
          ))}
        </div>

        {filtered.length === 0 && <p className="text-sm text-n-muted">No reviews here.</p>}

        <div className="flex flex-col gap-6">
          {filtered.map((r) => (
            <article key={r.id} className="border border-n-border rounded-lg p-6 bg-n-surface">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <p className="font-semibold text-sm text-n-text">
                    {r.full_name}
                    {r.role_title ? ` — ${r.role_title}` : ""}
                  </p>
                  <p className="text-xs text-n-muted">
                    {r.activity ?? "—"} · {r.program_name ?? r.program_kind ?? "—"} ·{" "}
                    {r.program_period ?? "—"} · {r.locale.toUpperCase()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        className={`w-3.5 h-3.5 ${
                          n <= r.rating ? "fill-n-gold text-n-gold" : "text-n-border"
                        }`}
                      />
                    ))}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-n-muted">{r.status}</span>
                </div>
              </div>

              {r.headline && <p className="text-sm text-n-text italic mb-2">“{r.headline}”</p>}
              <p className="text-sm text-n-muted whitespace-pre-line mb-3">{r.body}</p>
              {r.recommend && (
                <p className="text-xs text-n-faint mb-3">Recommends to: {r.recommend}</p>
              )}
              <p className="text-xs text-n-faint mb-4">
                Evolution: {r.evolution_score ?? "—"}/10 · {new Date(r.created_at).toLocaleString()}
                {r.email ? ` · ${r.email}` : ""}
              </p>

              <input
                className={inputCls}
                placeholder="Moderation note (internal)"
                value={notes[r.id] ?? r.moderation_note ?? ""}
                onChange={(e) => setNotes((n) => ({ ...n, [r.id]: e.target.value }))}
              />

              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setStatus(r.id, "approved")}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setStatus(r.id, "rejected")}
                >
                  Reject
                </button>
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => setStatus(r.id, "pending")}
                >
                  Back to pending
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ReviewsAdmin;
