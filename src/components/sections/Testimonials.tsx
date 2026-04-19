import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QUOTES = [
  {
    q: "They returned my Carrera GT looking better than the day it left Stuttgart. Obsessive is an understatement.",
    a: "M. Reinhardt",
    role: "Collector · CA",
  },
  {
    q: "The only studio I trust with the F40. Their light tunnel inspection process is genuinely concours-grade.",
    a: "J. Tanaka",
    role: "Concours Judge",
  },
  {
    q: "Eight months in. Still beading like the day it cured. Worth every hour and every dollar.",
    a: "S. Albright",
    role: "Owner · Aston Martin DBX",
  },
];

export const Testimonials = () => {
  const root = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".test-block > *",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  // Crossfade animation when index changes
  const quoteRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!quoteRef.current) return;
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: "expo.out" }
    );
  }, [i]);

  return (
    <section ref={root} className="relative bg-background py-32 md:py-44">
      <div className="container mx-auto max-w-4xl px-6 text-center">
        <div className="test-block">
          <span className="eyebrow">— Owners</span>
          <div ref={quoteRef} className="mt-10">
            <p className="font-display text-2xl font-medium leading-tight text-foreground md:text-4xl">
              <span className="text-primary">“</span>
              {QUOTES[i].q}
              <span className="text-primary">”</span>
            </p>
            <div className="mt-8 label-mono text-foreground/80">
              {QUOTES[i].a}
            </div>
            <div className="label-mono text-muted-foreground">
              {QUOTES[i].role}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-2">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Quote ${idx + 1}`}
              className={`h-px transition-all duration-500 ${
                idx === i ? "w-12 bg-primary" : "w-6 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
