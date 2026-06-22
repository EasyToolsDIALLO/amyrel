import { Link } from "@tanstack/react-router";
import { Search, User, ShoppingBag, Sparkles, ChevronDown } from "lucide-react";
import { products, categories, type Category } from "@/data/products";
import logoAmyrel from "@/assets/logo-amyrel-transparent.png.asset.json";

const brandLinks = [
  { label: "Notre histoire", desc: "Les origines d'Amyrel et notre mission." },
  { label: "Nos engagements", desc: "Naturalité, équité, traçabilité." },
  { label: "Savoir-faire", desc: "L'art de la gelée d'huile." },
];
const blogLinks = [
  { label: "Tous les articles", desc: "Le journal Amyrel." },
  { label: "Ingrédients", desc: "À la rencontre de nos actifs." },
  { label: "Rituels beauté", desc: "Routines & inspirations." },
];
export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border/60">
      <div className="bg-primary text-primary-foreground text-[11px] tracking-[0.18em] uppercase">
        <div className="mx-auto max-w-7xl px-6 py-2 flex justify-between">
          <span>◇ Livraison offerte dès 60€ d'achat</span>
          <div className="hidden md:flex gap-6">
            <span>Contact</span>
            <span>Nos ingrédients</span>
            <span>Journal</span>
            <span>FAQ</span>
            <span>FR</span>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center">
          <img src={logoAmyrel.url} alt="Amyrel Cosmétique" className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden lg:flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-foreground/80 font-medium">
          <CollectionMenu />
          <DropdownMenu label="LA MARQUE" items={brandLinks} />
          <DropdownMenu label="BLOG" items={blogLinks} to="/blog" />
          <Link to="/diagnostic" className="px-3 py-2 hover:text-primary transition">Diagnostic</Link>
        </nav>
        <div className="flex items-center gap-4 text-foreground/80">
          <Link
            to="/diagnostic"
            className="hidden md:inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2.5 text-[10px] tracking-[0.24em] uppercase hover:bg-accent/90 transition"
          >
            <Sparkles className="h-3.5 w-3.5" /> Diagnostic beauté
          </Link>
          <button aria-label="Recherche" className="hover:text-primary"><Search className="h-5 w-5" /></button>
          <button aria-label="Compte" className="hover:text-primary"><User className="h-5 w-5" /></button>
          <button aria-label="Panier" className="hover:text-primary"><ShoppingBag className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
}

function DropdownMenu({ label, items, to }: { label: string; items: { label: string; desc: string }[]; to?: "/blog" }) {
  return (
    <div className="relative group">
      <button className="px-3 py-2 inline-flex items-center gap-1 hover:text-primary transition">
        {label} <ChevronDown className="h-3 w-3 opacity-60 group-hover:rotate-180 transition-transform" />
      </button>
      <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <div className="w-72 bg-card border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] p-4">
          {items.map((it) => {
            const inner = (
              <div className="px-3 py-2.5 hover:bg-secondary transition cursor-pointer">
                <div className="text-[11px] tracking-[0.2em] uppercase text-primary">{it.label}</div>
                <div className="text-xs text-muted-foreground mt-1 normal-case tracking-normal">{it.desc}</div>
              </div>
            );
            return to ? (
              <Link key={it.label} to={to} className="block">{inner}</Link>
            ) : (
              <div key={it.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function CollectionMenu() {
  return (
    <div className="relative group">
      <button className="px-3 py-2 inline-flex items-center gap-1 hover:text-primary transition">
        COLLECTION <ChevronDown className="h-3 w-3 opacity-60 group-hover:rotate-180 transition-transform" />
      </button>
      <div className="fixed left-1/2 -translate-x-1/2 top-[8.5rem] pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        <div className="w-[min(92vw,720px)] bg-card border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] p-6 grid grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryColumn key={cat} cat={cat} />
          ))}
          <div className="col-span-3 border-t border-border pt-4 flex items-center justify-between">
            <span className="text-xs text-muted-foreground normal-case tracking-normal">Explorez l'ensemble de nos soins botaniques.</span>
            <Link to="/produits" className="text-[11px] tracking-[0.24em] uppercase text-accent">Toute la collection →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryColumn({ cat }: { cat: Category }) {
  const list = products.filter((p) => p.category === cat).slice(0, 4);
  return (
    <div>
      <Link to="/produits" search={{ cat }} className="text-[11px] tracking-[0.2em] uppercase text-primary block mb-3 hover:text-accent">
        {cat.toUpperCase()}
      </Link>
      <ul className="space-y-2 normal-case tracking-normal">
        {list.length ? list.map((p) => (
          <li key={p.slug}>
            <Link to="/produits/$slug" params={{ slug: p.slug }} className="flex items-center gap-3 group/i hover:text-primary">
              <img src={p.bottle} alt="" className="h-10 w-10 object-cover bg-secondary" />
              <div>
                <div className="text-xs text-foreground uppercase tracking-wider">{p.name}</div>
                <div className="text-[10px] text-muted-foreground">{p.baseline}</div>
              </div>
            </Link>
          </li>
        )) : <li className="text-xs text-muted-foreground">Bientôt disponible</li>}
      </ul>
    </div>
  );
}