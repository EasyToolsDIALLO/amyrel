import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getArticle, articles } from "@/data/articles";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    return {
      meta: [
        { title: a ? `${a.title} — Journal Amyrel` : "Journal Amyrel" },
        { name: "description", content: a?.excerpt ?? "" },
        ...(a ? [{ property: "og:image", content: a.image }] : []),
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-4xl text-primary">Article introuvable</h1>
        <Link to="/blog" className="text-accent mt-4 inline-block">Retour au journal</Link>
      </div>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const product = article.productSlug ? getProduct(article.productSlug) : undefined;
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        <nav className="mx-auto max-w-4xl px-6 pt-8 text-xs text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-primary">Accueil</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/blog" className="hover:text-primary">Journal</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{article.title}</span>
        </nav>

        <article className="mx-auto max-w-3xl px-6 py-12">
          <div className="text-[10px] tracking-[0.24em] uppercase text-accent">{article.category} · {article.readingTime}</div>
          <h1 className="font-display text-4xl md:text-5xl text-primary mt-4 leading-tight">{article.title}</h1>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">{article.excerpt}</p>
          <div className="aspect-[16/9] overflow-hidden mt-10">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="mt-10 space-y-5 text-base text-foreground/90 leading-relaxed">
            {article.content.map((p: string, i: number) => <p key={i}>{p}</p>)}
          </div>

          {product && (
            <aside className="mt-12 bg-card border border-border p-6 flex flex-col sm:flex-row gap-6 items-center">
              <img src={product.bottle} alt={product.name} className="w-32 h-32 object-cover" />
              <div className="flex-1">
                <div className="text-[11px] tracking-[0.24em] uppercase text-accent">Le produit associé</div>
                <h3 className="font-display text-2xl text-primary mt-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{product.baseline}</p>
              </div>
              <Link to="/produits/$slug" params={{ slug: product.slug }} className="bg-primary text-primary-foreground px-6 py-3 text-[11px] tracking-[0.24em] uppercase inline-flex items-center gap-2 hover:bg-primary/90 transition">
                Découvrir <ArrowRight className="h-3 w-3" />
              </Link>
            </aside>
          )}
        </article>

        <section className="bg-card py-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-display text-2xl text-primary mb-8">À lire aussi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {others.map((a) => (
                <Link key={a.slug} to="/blog/$slug" params={{ slug: a.slug }} className="group block bg-background">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] tracking-[0.24em] uppercase text-accent">{a.category}</div>
                    <h3 className="font-display text-xl text-primary mt-2 group-hover:text-accent transition">{a.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}