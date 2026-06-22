import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produits/$slug"
      params={{ slug: product.slug }}
      className="group relative block bg-card overflow-hidden"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.bottle}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-105"
          loading="lazy"
        />
        <img
          src={product.bottleScene}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-105"
          loading="lazy"
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 bg-primary text-primary-foreground py-3 text-[10px] tracking-[0.24em] uppercase flex items-center justify-center gap-2"
        >
          <ShoppingBag className="h-3.5 w-3.5" /> Achat rapide
        </button>
      </div>
      <div className="p-5 text-center">
        <div className="text-[11px] tracking-[0.24em] uppercase text-accent">{product.name}</div>
        <div className="text-xs text-muted-foreground mt-1">{product.baseline}</div>
        <div className="text-sm mt-3 text-foreground">{product.price.toFixed(2).replace(".", ",")} €</div>
      </div>
    </Link>
  );
}