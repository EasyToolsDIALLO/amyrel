import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Sparkles, RotateCcw } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/diagnostic")({
  head: () => ({
    meta: [
      { title: "Diagnostic beauté — Amyrel" },
      { name: "description", content: "Répondez à quelques questions et découvrez les soins Amyrel adaptés à votre peau." },
    ],
  }),
  component: Diagnostic,
});

type Answer = { id: string; value: string; map: Record<string, number> };

const questions: { id: string; question: string; options: Answer[] }[] = [
  {
    id: "skin",
    question: "Comment décririez-vous votre peau ?",
    options: [
      { id: "dry", value: "Sèche & inconfortable", map: { baobab: 3, "dattier-du-desert": 2 } },
      { id: "mixed", value: "Mixte à grasse", map: { moringa: 3, hibiscus: 2 } },
      { id: "sensitive", value: "Sensible & réactive", map: { toloucouna: 3, "dattier-du-desert": 2 } },
      { id: "mature", value: "Mature ou en perte d'éclat", map: { hibiscus: 3, baobab: 2 } },
    ],
  },
  {
    id: "concern",
    question: "Quelle est votre préoccupation principale ?",
    options: [
      { id: "glow", value: "Manque d'éclat", map: { hibiscus: 3, moringa: 1 } },
      { id: "nourish", value: "Nourrir en profondeur", map: { baobab: 3, "dattier-du-desert": 1 } },
      { id: "soothe", value: "Apaiser les rougeurs", map: { toloucouna: 3 } },
      { id: "purify", value: "Purifier le grain de peau", map: { moringa: 3 } },
    ],
  },
  {
    id: "area",
    question: "Quelle zone souhaitez-vous traiter ?",
    options: [
      { id: "face", value: "Visage", map: { moringa: 1, hibiscus: 1 } },
      { id: "body", value: "Corps", map: { baobab: 1, toloucouna: 1 } },
      { id: "hair", value: "Cheveux & cuir chevelu", map: { "dattier-du-desert": 2 } },
      { id: "all", value: "Routine complète", map: { baobab: 1, hibiscus: 1, moringa: 1 } },
    ],
  },
  {
    id: "texture",
    question: "Quelle texture préférez-vous ?",
    options: [
      { id: "light", value: "Légère & fondante", map: { moringa: 2, hibiscus: 1 } },
      { id: "rich", value: "Riche & enveloppante", map: { baobab: 2, "dattier-du-desert": 1 } },
      { id: "balm", value: "Baumée & cocon", map: { toloucouna: 2 } },
    ],
  },
];

function Diagnostic() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [done, setDone] = useState(false);

  const onPick = (opt: Answer) => {
    const next = { ...scores };
    for (const [slug, w] of Object.entries(opt.map)) next[slug] = (next[slug] ?? 0) + w;
    setScores(next);
    if (step + 1 < questions.length) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => {
    setStep(0);
    setScores({});
    setDone(false);
  };

  const ranked = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 2);

  const q = questions[step];
  const progress = done ? 100 : (step / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 py-16 pb-20 lg:pb-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.32em] uppercase text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Diagnostic beauté
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-primary mt-4">Trouvez votre rituel idéal</h1>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
              Quelques questions suffisent pour vous recommander les soins Amyrel les mieux adaptés à votre peau.
            </p>
          </div>

          <div className="mt-10 h-1 bg-secondary overflow-hidden">
            <div className="h-full bg-primary transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>

          {!done ? (
            <div key={step} className="mt-12 animate-[fade-in_0.4s_ease-out]">
              <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground text-center">
                Étape {step + 1} / {questions.length}
              </div>
              <h2 className="font-display text-3xl text-primary text-center mt-3">{q.question}</h2>
              <div className="grid sm:grid-cols-2 gap-3 mt-8">
                {q.options.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => onPick(o)}
                    className="text-left p-5 border border-border bg-card hover:border-primary hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)] transition group"
                  >
                    <div className="text-sm text-foreground group-hover:text-primary transition">{o.value}</div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-12 animate-[fade-in_0.4s_ease-out]">
              <div className="text-center">
                <div className="text-[11px] tracking-[0.32em] uppercase text-accent">Vos recommandations</div>
                <h2 className="font-display text-3xl text-primary mt-3">Voici vos soins idéaux</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {ranked.map((p) => <ProductCard key={p.slug} product={p} />)}
              </div>
              <div className="flex flex-wrap justify-center gap-3 mt-10">
                <button onClick={reset} className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-[11px] tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition">
                  <RotateCcw className="h-3.5 w-3.5" /> Recommencer
                </button>
                <Link to="/produits" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-[11px] tracking-[0.24em] uppercase hover:bg-primary/90 transition">
                  Voir toute la collection <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}