import { Typewriter } from "@/components/ui/typewriter";

export default function TypewriterDemo() {
  const words = [
    "Tu te demandes ce que la métaphysique peut apporter à ton business.",
    "Si tu es ici, ce n'est pas un hasard. Tu as déjà tout essayé.",
    "Ici, on parle de vingt ans d'avance. On parle d'avant-gardisme.",
  ];

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-8 text-3xl font-semibold sm:text-5xl">
          <Typewriter words={words} speed={40} delayBetweenWords={2000} cursor cursorChar="|" />
        </h1>
      </div>
    </main>
  );
}
