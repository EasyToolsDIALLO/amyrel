import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/hooks/useReveal";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Journal — Amyrel Cosmétique" },
      { name: "description", content: "Articles, conseils et histoires autour des ingrédients botaniques africains." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
          <Reveal>
            <div className="text-[11px] tracking-[0.32em] uppercase text-accent">Le Journal</div>
            <h1 className="font-display text-5xl text-primary mt-4">Histoires de plantes & rituels</h1>
            <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              Plongez au cœur des ingrédients qui composent nos formules.
            </p>
          </Reveal>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-24 grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <Link to="/blog/$slug" params={{ slug: a.slug }} className="group block bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.24em] uppercase text-accent">{a.category} · {a.readingTime}</div>
                  <h2 className="font-display text-2xl text-primary mt-3 group-hover:text-accent transition">{a.title}</h2>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{a.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}