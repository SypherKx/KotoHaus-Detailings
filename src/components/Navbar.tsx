import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import kotohausLogo from "@/assets/kotohaus-logo.png";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#cta" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking.current = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo",
        scrolled
          ? "bg-gradient-to-b from-black/90 via-black/50 to-transparent py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="group flex items-center">
          <img 
            src={kotohausLogo} 
            alt="Kotohaus Detailing Logo" 
            className="h-[70px] md:h-[84px] w-auto mix-blend-screen transition-all duration-300 hover:opacity-80" 
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="group relative text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 ease-out-expo group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          className="hidden items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold md:inline-flex"
        >
          Book Now
          <span className="h-1 w-1 rounded-full bg-current" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-out-expo",
          open ? "max-h-96 border-t border-border/60" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-4 px-6 py-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
