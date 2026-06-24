import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Minus, Plus, Truck, ShieldCheck, Leaf, Star, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Botanical } from "@/components/site/Botanical";

export const Route = createFileRoute("/produits/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Gelée d'huile ${p.baseline.toLowerCase()} | Amyrel` : "Produit | Amyrel";
    const desc = p ? p.description.slice(0, 155) : "";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/produits/${params.slug}` },
        ...(p ? [{ property: "og:image", content: p.bottle }] : []),
      ],
      links: [{ rel: "canonical", href: `/produits/${params.slug}` }],
      scripts: p ? [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: `Amyrel ${p.name}`,
          description: p.description,
          image: p.bottle,
          offers: { "@type": "Offer", priceCurrency: "EUR", price: p.price.toFixed(2), availability: "https://schema.org/InStock" },
        }),
      }] : [],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [tab, setTab] = useState<"desc" | "actifs" | "conseils" | "inci">("desc");
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState<"50" | "100">("100");
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="amyrel-shell min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="pb-16 lg:pb-0">
        <nav className="mx-auto max-w-7xl px-6 pt-8 text-xs text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <ChevronRight className="h-3 w-3" />
          <span>Collection</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <section className="relative mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-10 grid md:grid-cols-2 gap-6 md:gap-12">
          <Botanical name="olive" className="absolute -top-4 right-0 w-[160px] hidden md:block" opacity={0.16} rotate={12} />
          <Botanical name="hibiscus" className="absolute -bottom-8 -left-6 w-[180px] hidden md:block" opacity={0.13} rotate={-10} />
          <div className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-3 md:gap-4">
            <div className="flex flex-col gap-3">
              {[product.bottle, product.ingredient, product.bottle, product.ingredient].map((src, i) => (
                <button key={i} className="aspect-square overflow-hidden border border-border product-shot-bg-soft">
                  <img src={src} alt="" className="w-full h-full object-contain p-2" loading="lazy" />
                </button>
              ))}
            </div>
            <div className="aspect-[4/5] overflow-hidden product-shot-bg relative">
              <img src={product.bottle} alt={product.name} className="w-full h-full object-contain p-4 md:p-10 drop-shadow-2xl" />
            </div>
          </div>

          <div className="md:py-6">
            <div className="text-[11px] tracking-[0.32em] uppercase text-accent">{product.tagline}</div>
            <h1 className="font-display text-4xl md:text-5xl text-primary mt-3">{product.name}</h1>
            <div className="flex items-center gap-2 mt-3">
              {[0,1,2,3,4].map(i => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}
              <span className="text-xs text-muted-foreground ml-2">142 avis vérifiés</span>
            </div>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <div className="text-[11px] tracking-[0.24em] uppercase text-foreground/70 mb-3">Format</div>
              <div className="flex gap-3">
                {(["50", "100"] as const).map((s) => (
                  <button key={s} onClick={() => setSize(s)} className={`px-5 py-3 text-xs tracking-[0.18em] uppercase border ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground"}`}>
                    {s} ml
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div className="font-display text-3xl text-primary">{(product.price * (size === "100" ? 1 : 0.65)).toFixed(2).replace(".", ",")} €</div>
              <div className="flex items-center border border-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 text-primary"><Minus className="h-3 w-3" /></button>
                <span className="px-4 text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 text-primary"><Plus className="h-3 w-3" /></button>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button className="flex-1 bg-primary text-primary-foreground px-7 py-4 text-xs tracking-[0.24em] uppercase hover:bg-primary/90">Ajouter au panier</button>
              <button className="flex-1 border border-primary text-primary px-7 py-4 text-xs tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground transition">Acheter maintenant</button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-2 pt-4 border-t border-border">
              {[{Icon: Truck, t: "Livraison offerte dès 60€"},{Icon: ShieldCheck, t: "Paiement sécurisé"},{Icon: Leaf, t: "Formule clean & vegan"}].map(({Icon,t}) => (
                <div key={t} className="flex flex-col items-center text-center gap-2">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.4} />
                  <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground leading-tight">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="flex flex-wrap justify-center gap-8 border-b border-border pb-4 text-[11px] tracking-[0.24em] uppercase">
              {[
                { k: "desc", l: "Description" },
                { k: "actifs", l: "Actifs & ingrédients" },
                { k: "conseils", l: "Conseils d'utilisation" },
                { k: "inci", l: "Composition INCI" },
              ].map((t) => (
                <button key={t.k} onClick={() => setTab(t.k as typeof tab)} className={`pb-2 ${tab === t.k ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}>
                  {t.l}
                </button>
              ))}
            </div>
            <div className="mt-8 text-sm text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
              {tab === "desc" && <p>{product.description}</p>}
              {tab === "actifs" && <ul className="space-y-2">{product.actifs.map((a: string) => <li key={a}>— {a}</li>)}</ul>}
              {tab === "conseils" && <p>{product.conseils}</p>}
              {tab === "inci" && <p className="text-xs">{product.inci}</p>}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent">Les bénéfices</h2>
            <p className="font-display text-3xl text-primary mt-3">Une peau visiblement transformée.</p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {product.benefits.map((b: { title: string; text: string }) => (
                <div key={b.title} className="bg-card p-8 text-left">
                  <div className="h-10 w-10 rounded-full border border-primary/30 grid place-items-center mb-4">
                    <Leaf className="h-4 w-4 text-primary" strokeWidth={1.4} />
                  </div>
                  <div className="font-display text-2xl text-primary">{b.title}</div>
                  <p className="text-sm text-muted-foreground mt-2">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ritual */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent">Rituel d'application</h2>
              <p className="font-display text-3xl text-primary mt-3">Trois gestes pour révéler votre peau.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 mt-14">
              {product.ritual.map((r: { step: string; title: string; text: string }) => (
                <div key={r.step} className="text-center">
                  <div className="font-display text-5xl text-accent">{r.step}</div>
                  <div className="mt-3 text-xs tracking-[0.24em] uppercase text-primary">{r.title}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Star ingredient */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={product.ingredient} alt={product.ingredientName} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.32em] uppercase text-accent">L'ingrédient star</div>
              <h2 className="font-display text-4xl text-primary mt-3">{product.ingredientName}</h2>
              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">{product.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-foreground">
                {product.actifs.map((a: string) => <li key={a} className="flex gap-3"><span className="text-accent">◆</span> {a}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Key Ingredients */}
        <section className="bg-secondary/60 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent">Ingrédients clés</h2>
              <p className="font-display text-3xl text-primary mt-3">Au cœur de la formule</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {product.keyIngredients.map((k: { name: string; latin: string; image: string; benefits: string[]; articleSlug: string }) => (
                <div key={k.name} className="bg-background p-6 flex gap-6 group">
                  <div className="shrink-0 w-28 h-28 rounded-full overflow-hidden">
                    <img src={k.image} alt={k.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-2xl text-primary">{k.name}</div>
                    <div className="text-xs italic text-muted-foreground mt-1">{k.latin}</div>
                    <ul className="mt-3 space-y-1 text-sm text-foreground/90">
                      {k.benefits.map((b: string) => (
                        <li key={b} className="flex gap-2"><span className="text-accent">◆</span> {b}</li>
                      ))}
                    </ul>
                    <Link to="/blog/$slug" params={{ slug: k.articleSlug }} className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-accent hover:text-primary transition">
                      Lire sur le journal <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-card py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent">Avis clients</h2>
              <p className="font-display text-3xl text-primary mt-3">4.8/5 — 142 avis vérifiés</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "Aïssatou, 32 ans", t: "Ma peau est visiblement plus douce et nourrie, un indispensable." },
                { n: "Léa, 28 ans", t: "Une texture sublime, mon teint est plus lumineux dès la première semaine." },
                { n: "Fatima, 41 ans", t: "Le sensoriel est parfait. Je recommande à toutes mes amies." },
              ].map((r) => (
                <div key={r.n} className="bg-background p-8">
                  <div className="flex gap-1 text-accent">{[0,1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-accent" />)}</div>
                  <p className="mt-4 text-sm text-foreground leading-relaxed">« {r.t} »</p>
                  <div className="text-xs text-muted-foreground mt-4">— {r.n}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-sell */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl text-primary">Vous aimerez aussi</h2>
                <p className="text-sm text-muted-foreground mt-2">Composez votre rituel complet.</p>
              </div>
              <Link to="/" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-primary">
                Voir la collection <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {others.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}