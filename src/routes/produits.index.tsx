import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from "lucide-react";
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

const MIN_PRICE = Math.floor(Math.min(...products.map((p) => p.price)));
const MAX_PRICE = Math.ceil(Math.max(...products.map((p) => p.price)));

function CollectionPage() {
  const { cat: urlCat } = Route.useSearch();
  const [selectedCats, setSelectedCats] = useState<Category[]>(urlCat ? [urlCat] : []);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = selectedCats.length === 0 || selectedCats.includes(p.category);
      const priceMatch = p.price <= maxPrice;
      return catMatch && priceMatch;
    });
  }, [selectedCats, maxPrice]);

  const toggleCat = (c: Category) => {
    setSelectedCats((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  };

  const hasActiveFilters = selectedCats.length > 0 || maxPrice < MAX_PRICE;

  const resetFilters = () => {
    setSelectedCats([]);
    setMaxPrice(MAX_PRICE);
  };

  return (
    <div className="amyrel-shell min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <section className="mx-auto max-w-7xl px-6 pt-16 pb-10 text-center">
          <Reveal>
            <div className="text-[11px] tracking-[0.32em] uppercase text-accent">La Collection</div>
            <h1 className="font-display text-5xl text-primary mt-4">Nos soins botaniques</h1>
            <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              Visage, corps, cheveux : explorez chaque rituel selon vos besoins.
            </p>
          </Reveal>
        </section>

        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
            <span className="text-xs text-muted-foreground">{filtered.length} produit{filtered.length !== 1 ? "s" : ""}</span>
            <button
              onClick={() => setSidebarOpen((v) => !v)}
              className="md:hidden inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase border border-border px-4 py-2 hover:border-primary transition"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filtres
            </button>
          </div>

          <div className="flex gap-10 items-start">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? "block" : "hidden"} md:block w-full md:w-56 shrink-0`}>
              <div className="sticky top-32 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.28em] uppercase text-foreground font-semibold">Filtres</span>
                  {hasActiveFilters && (
                    <button onClick={resetFilters} className="inline-flex items-center gap-1 text-[10px] text-muted-foreground hover:text-primary transition">
                      <X className="h-3 w-3" /> Réinitialiser
                    </button>
                  )}
                </div>

                {/* Catégorie */}
                <div className="border-t border-border pt-4">
                  <button
                    onClick={() => setCatOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-foreground mb-3"
                  >
                    Catégorie
                    {catOpen ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
                  </button>
                  {catOpen && (
                    <div className="space-y-2.5">
                      {categories.map((c) => (
                        <label key={c} className="flex items-center gap-2.5 cursor-pointer group">
                          <div
                            onClick={() => toggleCat(c)}
                            className={`h-4 w-4 border flex items-center justify-center shrink-0 transition cursor-pointer ${
                              selectedCats.includes(c) ? "bg-primary border-primary" : "border-border group-hover:border-primary"
                            }`}
                          >
                            {selectedCats.includes(c) && <div className="h-2 w-2 bg-primary-foreground" />}
                          </div>
                          <span
                            onClick={() => toggleCat(c)}
                            className="text-xs text-foreground/80 group-hover:text-primary transition"
                          >
                            {c}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Prix */}
                <div className="border-t border-border pt-4">
                  <button
                    onClick={() => setPriceOpen((v) => !v)}
                    className="w-full flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-foreground mb-3"
                  >
                    Prix
                    {priceOpen ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
                  </button>
                  {priceOpen && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>{MIN_PRICE}€</span>
                        <span className="text-primary font-medium">{maxPrice}€</span>
                      </div>
                      <input
                        type="range"
                        min={MIN_PRICE}
                        max={MAX_PRICE}
                        step={1}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full accent-primary cursor-pointer"
                      />
                      <div className="text-[10px] text-muted-foreground">Jusqu'à {maxPrice}€</div>
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* Grille produits */}
            <div className="flex-1 min-w-0">
              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-sm text-muted-foreground">Aucun produit ne correspond à vos filtres.</p>
                  <button onClick={resetFilters} className="mt-4 text-xs tracking-[0.2em] uppercase text-accent hover:underline">
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {filtered.map((p, i) => (
                    <Reveal key={p.slug} delay={i * 60}>
                      <ProductCard product={p} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}