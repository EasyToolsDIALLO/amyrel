import { createFileRoute, Link } from "@tanstack/react-router";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, Leaf, Sparkles, Heart, MapPin } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { IngredientsRail } from "@/components/site/IngredientsRail";
import { Reveal } from "@/hooks/useReveal";
import { products } from "@/data/products";
import { Botanical } from "@/components/site/Botanical";
import gammeGelee from "@/assets/gamme-gelee.png.asset.json";
import gammeCheveux from "@/assets/gamme-cheveux.png.asset.json";
import serumVisage from "@/assets/serum-visage.png.asset.json";
import gelsMoussant from "@/assets/gels-moussant.png.asset.json";
import karite from "@/assets/karite.png.asset.json";
import soinsDouchesAll from "@/assets/soins-douches-all.png.asset.json";
import modelBestseller from "@/assets/model-bestseller.jpg.asset.json";
import texL from "@/assets/texture-oil-left.jpg";
import texR from "@/assets/texture-oil-right.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amyrel Cosmétique — Cosmétique botanique africaine" },
      { name: "description", content: "Découvrez nos gelées d'huiles précieuses aux actifs végétaux africains : Moringa, Baobab, Hibiscus, Dattier du désert, Toloucouna." },
      { property: "og:title", content: "Amyrel Cosmétique" },
      { property: "og:description", content: "Les trésors végétaux africains au service de votre peau." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="amyrel-shell min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <BestSellers />
        <IngredientsRail />
        <DiagnosticBanner />
        <Assurances />
        <Stats />
        <Story />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[520px] md:min-h-[620px] flex flex-col justify-center">
      <Botanical name="hibiscus" className="absolute -top-10 -right-16 w-[260px] md:w-[380px] z-[2] botanical-float" opacity={0.16} rotate={-12} />
      <Botanical name="olive" className="absolute bottom-8 left-4 w-[160px] md:w-[220px] z-[2]" opacity={0.18} rotate={8} />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo.url}
      />
      <div className="relative max-w-7xl pl-6 pr-6 pt-16 pb-16 md:pt-24 md:pb-24 min-h-[520px] md:min-h-[620px] flex flex-col justify-center z-[3]">
        <div className="max-w-xl animate-[fade-in_0.8s_ease-out]">
          <div className="text-[11px] tracking-[0.32em] uppercase text-accent mb-6 font-semibold">Made in Sénégal</div>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.05] text-primary">La nature, la science, l'essence Amyrel.</h1>
          <p className="mt-6 text-base text-foreground/80 max-w-md leading-relaxed">Des soins clean, ciblés et élégants formulés à partir de matières premières rares et exclusivement locales.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#collection"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-xs tracking-[0.24em] uppercase hover:bg-primary/90 hover:-translate-y-0.5 transition"
            >
              DÉCOUVRIR NOS SOINS
            </a>
            <Link
              to="/diagnostic"
              className="inline-flex items-center gap-2 border border-primary text-primary px-7 py-3.5 text-xs tracking-[0.24em] uppercase hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition"
            >
              <Sparkles className="h-3.5 w-3.5" /> FAIRE LE DIAGNOSTIC
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ingredients() {
  return (
      <section className="relative py-24 bg-card amyrel-section-glow overflow-hidden">
      <Botanical name="baobab" className="absolute top-10 left-6 w-[180px]" opacity={0.14} rotate={-8} />
      <Botanical name="dates" className="absolute bottom-8 right-6 w-[200px]" opacity={0.14} rotate={10} flip />
      <Reveal>
        <div className="mx-auto max-w-7xl px-6 text-center mb-14">
          <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent">Nos actifs d'exception</h2>
          <p className="mt-4 font-display text-3xl md:text-4xl text-primary max-w-2xl mx-auto leading-snug">
            Des ingrédients d'origine végétale soigneusement sélectionnés pour leurs vertus exceptionnelles.
          </p>
        </div>
      </Reveal>
      <div className="mx-auto max-w-7xl px-2 md:px-6 grid grid-cols-2 md:grid-cols-5 gap-2">
        {products.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Link to="/produits/$slug" params={{ slug: p.slug }} className="relative group aspect-[4/5] overflow-hidden block">
              <img src={p.ingredient} alt={p.ingredientName} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 35%, ${p.accent} 130%)`, mixBlendMode: "multiply", opacity: 0.55 }} />
              <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
                <div className="font-display text-2xl tracking-wide">{p.name.toUpperCase()}</div>
                <div className="text-[11px] mt-1 opacity-90">{p.baseline}</div>
                <div className="text-[10px] tracking-[0.25em] uppercase mt-5 inline-flex items-center gap-1 border-b border-primary-foreground/70 pb-0.5">Découvrir</div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Assurances() {
  const items = [
    { Icon: Leaf, t: "Actifs naturels" },
    { Icon: Sparkles, t: "Sans parabens, sans silicone" },
    { Icon: Heart, t: "Non testé sur les animaux" },
    { Icon: MapPin, t: "Fabriqué en Afrique" },
  ];
  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ Icon, t }) => (
          <div key={t} className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full border border-primary/40 grid place-items-center shrink-0">
              <Icon className="h-4 w-4 text-primary" strokeWidth={1.4} />
            </div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-foreground/80 leading-tight font-medium">{t.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BestSellers() {
  const cats = [
    { label: "Corps", img: karite.url, to: "/produits", search: { cat: "Corps" as const } },
    { label: "Visage", img: serumVisage.url, to: "/produits", search: { cat: "Visage" as const } },
    { label: "Cheveux", img: gammeCheveux.url, to: "/produits", search: { cat: "Cheveux" as const } },
    { label: "Gelées", img: gammeGelee.url, to: "/produits", search: { cat: "Visage" as const } },
  ];
  return (
    <section id="collection" className="relative overflow-hidden w-full">
      <Botanical name="pomegranate" className="absolute -top-6 right-0 w-[220px] z-[1]" opacity={0.1} rotate={14} />
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
        <div className="px-6 md:px-12 py-16">
          <div className="text-[11px] tracking-[0.32em] uppercase text-accent mb-4 font-semibold">NOS BEST SELLERS</div>
          <h2 className="font-display text-3xl md:text-5xl text-primary leading-[1.05]">
            Quatre rituels signés Amyrel.
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-md">
            Visage, corps, cheveux, gelées d'huiles — explorez nos catégories les plus aimées.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {cats.map((c) => (
              <Link
                key={c.label}
                to={c.to}
                search={c.search}
                className="group relative aspect-square overflow-hidden bg-secondary block"
              >
                <img
                  src={c.img}
                  alt={c.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-primary-foreground">
                  <div className="font-display text-xl tracking-wide">{c.label.toUpperCase()}</div>
                  <div className="mt-1 text-[10px] tracking-[0.22em] uppercase inline-flex items-center gap-1 opacity-90">
                    Découvrir <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="relative min-h-[520px] md:min-h-full">
          <img
            src={modelBestseller.url}
            alt="Rituel beauté Amyrel"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/40" />
        </div>
      </div>
    </section>
  );
}

function DiagnosticBanner() {
  return (
    <section className="relative bg-primary text-primary-foreground py-16 overflow-hidden">
      <Botanical name="hibiscus" tint="light" className="absolute -right-10 -top-10 w-[180px] md:w-[300px]" opacity={0.25} rotate={18} />
      <Botanical name="loofah" tint="light" className="absolute -left-10 bottom-0 w-[150px] md:w-[220px]" opacity={0.2} rotate={-12} />
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="text-[11px] tracking-[0.32em] uppercase opacity-80">Diagnostic personnalisé</div>
          <h2 className="font-display text-3xl md:text-4xl mt-3">Quel rituel Amyrel est fait pour vous ?</h2>
          <p className="opacity-80 text-sm mt-3 max-w-xl">
            En 4 questions, découvrez les soins adaptés à votre type de peau, vos préoccupations et votre rituel idéal.
          </p>
        </div>
        <Link to="/diagnostic" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-4 text-xs tracking-[0.24em] uppercase hover:bg-accent/90 hover:-translate-y-0.5 transition">
          <Sparkles className="h-4 w-4" /> Démarrer le diagnostic
        </Link>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-stretch">
      <img src={karite.url} alt="Soin corps Amyrel au karité" className="hidden md:block h-full w-full object-cover md:aspect-auto" loading="lazy" />
      <div className="bg-secondary py-20 px-8 text-center">
        <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent">Pourquoi choisir Amyrel ?</h2>
        <div className="mt-3 text-accent">— ◆ —</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {[
            { v: "95%", t: "des utilisatrices trouvent leur peau intensément nourrie" },
            { v: "92%", t: "des utilisatrices trouvent leur peau plus souple et plus douce" },
            { v: "89%", t: "des utilisatrices trouvent leur teint plus lumineux" },
          ].map((s, i) => (
            <div key={s.v} className={`px-2 ${i !== 0 ? "md:border-l border-primary/15" : ""}`}>
              <div className="font-display text-5xl text-primary">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-3 leading-relaxed">{s.t}</div>
            </div>
          ))}
        </div>
        <div className="text-[10px] text-muted-foreground mt-10">*Étude d'usage réalisée sur 60 volontaires pendant 4 semaines.</div>
      </div>
      <img src={gelsMoussant.url} alt="Nettoyants visage Amyrel à la marula" className="hidden md:block h-full w-full object-cover md:aspect-auto" loading="lazy" />
    </section>
  );
}

function Story() {
  const chapters = [
    {
      eyebrow: "Notre histoire",
      title: "Une cosmétique inspirée des richesses végétales africaines.",
      text: "Amyrel puise dans la richesse des plantes africaines pour créer des soins naturels, sensoriels et efficaces. Chaque formule est le fruit d'une collaboration équitable avec les communautés locales.",
      img: soinsDouchesAll.url,
      side: "right" as const,
    },
    {
      eyebrow: "Nos engagements",
      title: "Des matières premières locales, rares et tracées.",
      text: "Karité, baobab, dattier du désert, hibiscus : nos actifs sont récoltés au Sénégal et transformés au plus près des producteurs, pour une cosmétique sincère et responsable.",
      img: gammeCheveux.url,
      side: "left" as const,
    },
    {
      eyebrow: "Savoir-faire",
      title: "Des formules clean, ciblées et élégantes.",
      text: "Chaque gelée d'huile est formulée avec une exigence d'efficacité prouvée et de plaisir sensoriel — sans paraben, sans silicone, sans compromis.",
      img: gammeGelee.url,
      side: "right" as const,
    },
  ];
  return (
    <section id="story" className="relative py-20 overflow-hidden">
      <Botanical name="coco" className="absolute top-10 right-2 w-[120px] md:w-[180px]" opacity={0.1} rotate={-6} />
      <Botanical name="watermelon" className="absolute bottom-6 left-2 w-[100px] md:w-[160px]" opacity={0.1} rotate={6} />
      <div className="mx-auto max-w-7xl px-6 space-y-20">
        {chapters.map((c, i) => (
          <Reveal key={i}>
            <div
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                c.side === "left" ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="text-[11px] tracking-[0.32em] uppercase text-accent font-semibold">
                  {c.eyebrow.toUpperCase()}
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-primary mt-4 leading-tight">
                  {c.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-6 leading-relaxed">{c.text}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 text-xs tracking-[0.24em] uppercase mt-8 hover:bg-primary/90 transition"
                >
                  EN SAVOIR PLUS <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Ma peau est visiblement plus douce et nourrie. La gelée d'huile au dattier du désert est devenue un indispensable de ma routine beauté.", a: "Aïssatou, 32 ans" },
    { q: "Une texture sensorielle, un parfum subtil et une efficacité réelle. Amyrel a transformé mon rituel du soir.", a: "Fatou, 28 ans" },
    { q: "Enfin une marque africaine premium, clean et élégante. Mes cheveux n'ont jamais été aussi brillants.", a: "Mariam, 36 ans" },
    { q: "Le baume au karité est divin sur ma peau sèche. Je le recommande à toutes mes amies.", a: "Awa, 41 ans" },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 35 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;
    const onSel = () => setIdx(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
    return () => { emblaApi.off("select", onSel); };
  }, [emblaApi]);
  return (
    <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-stretch bg-secondary/60">
      <img src={texL} alt="" className="hidden md:block h-full w-full object-cover md:aspect-auto" loading="lazy" />
      <div className="py-20 px-8 text-center">
        <h2 className="text-[11px] tracking-[0.32em] uppercase text-accent font-semibold">ELLES NOUS FONT CONFIANCE</h2>
        <div className="mt-3 text-accent">— ◆ —</div>
        <div className="overflow-hidden mt-8" ref={emblaRef}>
          <div className="flex">
            {items.map((it, i) => (
              <blockquote key={i} className="flex-[0_0_100%] min-w-0 px-4">
                <p className="font-display text-2xl text-primary leading-snug max-w-xl mx-auto">« {it.q} »</p>
                <footer className="text-xs text-muted-foreground mt-4">— {it.a}</footer>
              </blockquote>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-primary/30 hover:bg-primary/60"}`}
            />
          ))}
        </div>
      </div>
      <img src={texR} alt="" className="hidden md:block h-full w-full object-cover md:aspect-auto" loading="lazy" />
    </section>
  );
}
