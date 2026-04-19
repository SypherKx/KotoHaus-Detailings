export const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex-row">
      <div>© {new Date().getFullYear()} Kotohaus Detailing · Atelier of Gloss</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary transition-colors">Instagram</a>
        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);
