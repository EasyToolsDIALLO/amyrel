import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/hooks/useReveal";
import { products, categories, type Category } from "@/data/products";

type Search = { cat?: Category };

export const Route = createFileRoute("/produits/")({
  validateSearch: (s: Record<string, unknown>): Search => {
    const cat = s.cat;
    if (cat === "Visage" || cat === "Corps" || cat === "Cheveux") return { cat };
    return {};
  },
  head: () => ({
    meta: [
      { title: "Collection — Amyrel Cosmétique" },
      { name: "description", content: "Toute notre collection de gelées d'huile botaniques pour le visage, le corps et les cheveux." },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { cat } = Route.useSearch();
  const filtered = cat ? products.filter((p) => p.category === cat) : products;

  return (
    <div className="amyrel-shell min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
          <Reveal>
            <div className="text-[11px] tracking-[0.32em] uppercase text-accent">La Collection</div>
            <h1 className="font-display text-5xl text-primary mt-4">Nos soins botaniques</h1>
            <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              Visage, corps, cheveux : explorez chaque rituel selon vos besoins.
            </p>
          </Reveal>
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            <FilterChip label="Tout" active={!cat} to={{}} />
            {categories.map((c) => (
              <FilterChip key={c} label={c} active={cat === c} to={{ cat: c }} />
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 60}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-sm text-muted-foreground py-20">Aucun produit dans cette catégorie pour le moment.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FilterChip({ label, active, to }: { label: string; active: boolean; to: Search }) {
  return (
    <Link
      to="/produits"
      search={to}
      className={`px-5 py-2.5 text-[11px] tracking-[0.24em] uppercase border transition ${
        active ? "bg-primary text-primary-foreground border-primary" : "border-border text-foreground hover:border-primary"
      }`}
    >
      {label}
    </Link>
  );
}