import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Reveal } from "@/hooks/useReveal";
import ingMoringa from "@/assets/ing-moringa.jpg";
import ingBaobab from "@/assets/ing-baobab.jpg";
import ingHibiscus from "@/assets/ing-hibiscus.jpg";
import ingDattier from "@/assets/ing-dattier.jpg";
import ingToloucouna from "@/assets/ing-toloucouna.jpg";

const items = [
  { name: "Moringa", baseline: "L'arbre de vie", image: ingMoringa, slug: "moringa-arbre-de-vie" },
  { name: "Baobab", baseline: "Le géant millénaire", image: ingBaobab, slug: "baobab-arbre-millenaire" },
  { name: "Hibiscus", baseline: "Le botox végétal", image: ingHibiscus, slug: "hibiscus-botox-vegetal" },
  { name: "Dattier du désert", baseline: "Trésor des dunes", image: ingDattier, slug: "dattier-tresor-du-desert" },
  { name: "Toloucouna", baseline: "L'apaisant naturel", image: ingToloucouna, slug: "toloucouna-apaisant-naturel" },
  { name: "Karité", baseline: "Beurre nourrissant", image: ingBaobab, slug: "moringa-arbre-de-vie" },
  { name: "Argan", baseline: "Or liquide", image: ingMoringa, slug: "baobab-arbre-millenaire" },
];

export function IngredientsRail() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", dragFree: true });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent">Ingrédients phares</h2>
              <p className="font-display text-3xl md:text-4xl text-primary mt-3 max-w-xl leading-snug">
                Une bibliothèque vivante d'actifs végétaux d'exception.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/blog" className="text-[11px] tracking-[0.24em] uppercase text-primary inline-flex items-center gap-2 hover:text-accent transition">
                Découvrir le journal <ArrowRight className="h-3 w-3" />
              </Link>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Précédent"
                  onClick={() => emblaApi?.scrollPrev()}
                  disabled={!canPrev}
                  className="h-10 w-10 grid place-items-center border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Suivant"
                  onClick={() => emblaApi?.scrollNext()}
                  disabled={!canNext}
                  className="h-10 w-10 grid place-items-center border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="overflow-hidden" ref={emblaRef}>
        <ul className="flex gap-5 px-4 md:px-6 pb-4">
          {items.map((it, i) => (
            <li key={it.name + i} className="shrink-0 w-[260px] md:w-[300px]">
              <Link to="/blog/$slug" params={{ slug: it.slug }} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <img
                    src={it.image}
                    alt={it.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                    <div className="font-display text-2xl">{it.name}</div>
                    <div className="text-[11px] tracking-[0.18em] uppercase opacity-90 mt-1">{it.baseline}</div>
                  </div>
                </div>
                <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-primary inline-flex items-center gap-2 group-hover:text-accent transition">
                  Lire l'article <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}