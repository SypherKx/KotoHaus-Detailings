import kotohausLogo from "@/assets/kotohaus-logo.webp";

export const Footer = () => (
  <footer className="border-t border-white/8 bg-background">
    <div className="container mx-auto max-w-7xl px-6 py-14 md:py-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <img src={kotohausLogo} alt="Kotohaus Detailing" className="h-9 w-auto max-w-[130px] object-contain mix-blend-screen" />
          <p className="max-w-[26ch] text-xs leading-relaxed text-muted-foreground">
            Atelier-grade ceramic coating, paint correction and interior
            restoration — Dehradun, India.
          </p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">Contact</p>
          <a href="tel:+917417461255" className="text-xs text-muted-foreground transition-colors hover:text-primary">
            +91 74174 61255
          </a>
          <a href="mailto:hello@kotohaus.com" className="text-xs text-muted-foreground transition-colors hover:text-primary">
            hello@kotohaus.com
          </a>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Main road, GMS Rd, Keshav Vihar,<br />
            Shakti Enclave, Kanwali,<br />
            Dehradun, Uttarakhand 248001
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary">Navigate</p>
          {[
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#cta" },
            { label: "Location", href: "#location" },
          ].map((l) => (
            <a key={l.label} href={l.href} className="text-xs text-muted-foreground transition-colors hover:text-primary cursor-pointer">
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/6 pt-8 text-[9px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Kotohaus Detailing · Atelier of Gloss</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);
