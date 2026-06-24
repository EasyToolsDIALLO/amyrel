import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ShoppingBag, Sparkles, BookOpen, User } from "lucide-react";

const navItems = [
  { to: "/" as const, label: "Accueil", Icon: Home },
  { to: "/produits" as const, label: "Boutique", Icon: ShoppingBag },
  { to: "/diagnostic" as const, label: "Diagnostic", Icon: Sparkles },
  { to: "/blog" as const, label: "Journal", Icon: BookOpen },
];

export function MobileNav() {
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-t border-border/60">
      <div className="flex items-stretch h-16">
        {navItems.map(({ to, label, Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex-1 flex flex-col items-center justify-center gap-1 relative transition-colors ${
                active ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? "stroke-[2]" : "stroke-[1.5]"}`} />
              <span className="text-[9px] tracking-[0.15em] uppercase font-medium">{label}</span>
              {active && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full" />}
            </Link>
          );
        })}
        <button className="flex-1 flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
          <User className="h-5 w-5 stroke-[1.5]" />
          <span className="text-[9px] tracking-[0.15em] uppercase font-medium">Compte</span>
        </button>
      </div>
    </nav>
  );
}
