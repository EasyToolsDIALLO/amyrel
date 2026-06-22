import { Truck, ShieldCheck, RotateCcw, Headphones, Instagram, Facebook, Music2, Linkedin } from "lucide-react";
import logoAmyrel from "@/assets/logo-amyrel-transparent.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-border/60">
        {[
          { Icon: Truck, t: "Livraison offerte", s: "dès 60€ d'achat" },
          { Icon: ShieldCheck, t: "Paiement sécurisé", s: "CB, Paypal, Apple Pay" },
          { Icon: RotateCcw, t: "Retours faciles", s: "sous 14 jours" },
          { Icon: Headphones, t: "Service client", s: "à votre écoute" },
        ].map(({ Icon, t, s }) => (
          <div key={t} className="flex items-center gap-4">
            <Icon className="h-7 w-7 text-primary/80" strokeWidth={1.4} />
            <div>
              <div className="text-xs tracking-[0.2em] uppercase text-foreground">{t}</div>
              <div className="text-xs text-muted-foreground mt-1">{s}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <img src={logoAmyrel.url} alt="Amyrel Cosmétique" className="h-14 w-auto" />
          <p className="mt-6 text-sm text-muted-foreground max-w-xs">
            Les trésors végétaux africains au service de votre peau.
          </p>
          <div className="flex gap-4 mt-6 text-foreground/70">
            <Instagram className="h-4 w-4" /><Facebook className="h-4 w-4" /><Music2 className="h-4 w-4" /><Linkedin className="h-4 w-4" />
          </div>
        </div>
        <FooterCol title="Shop" items={["Tous les produits", "Gelées d'huile", "Coffrets & routines", "Nouveautés"]} />
        <FooterCol title="À propos" items={["Notre histoire", "Nos ingrédients", "Nos engagements", "Journal"]} />
        <FooterCol title="Aide" items={["FAQ", "Livraison & retours", "Conditions générales", "Nous contacter"]} />
        <div>
          <div className="text-xs tracking-[0.2em] uppercase text-foreground mb-4">Newsletter</div>
          <p className="text-sm text-muted-foreground mb-4">Recevez nos conseils beauté et nos offres exclusives.</p>
          <form className="flex border border-border rounded-full overflow-hidden bg-card">
            <input type="email" placeholder="Votre adresse e-mail" className="flex-1 px-4 py-2 bg-transparent text-sm outline-none" />
            <button className="bg-primary text-primary-foreground px-4 text-sm">→</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-wrap justify-between text-xs text-muted-foreground">
          <span>© 2026 Amyrel Cosmétique — Tous droits réservés</span>
          <div className="flex gap-6"><span>Mentions légales</span><span>Politique de confidentialité</span></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="text-xs tracking-[0.2em] uppercase text-foreground mb-4">{title}</div>
      <ul className="space-y-3 text-sm text-muted-foreground">
        {items.map((i) => <li key={i}><a className="hover:text-primary" href="#">{i}</a></li>)}
      </ul>
    </div>
  );
}