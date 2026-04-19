import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ctaBg from "@/assets/cta-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".cta-bg", {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
      gsap.fromTo(
        ".cta-content > *",
        { opacity: 0, y: 40 },
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

  return (
    <section
      id="cta"
      ref={root}
      className="relative overflow-hidden bg-background py-32 md:py-44"
    >
      {/* Animated liquid-gold bg */}
      <div className="cta-bg absolute inset-0 opacity-40 will-change-transform">
        <img
          src={ctaBg}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-50" />

      <div className="cta-content container relative mx-auto max-w-3xl px-6 text-center">
        <span className="eyebrow">— Reserve Your Slot</span>
        <h2 className="display-xl mt-6 text-foreground">
          Your car
          <br />
          <span className="text-gradient-gold">deserves this.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-base text-muted-foreground md:text-lg">
          Limited availability. We accept twelve cars per month to maintain
          atelier-grade attention. Inquire to claim your slot.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <a
            href="#"
            className="glow-pulse group relative inline-flex items-center gap-3 rounded-full bg-primary px-10 py-4 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500 hover:bg-primary-glow"
          >
            <span className="relative z-10">Book Consultation</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#"
            className="text-sm uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Or call · (310) 555-0144
          </a>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 border-t border-border pt-10 text-left">
          <div>
            <div className="label-mono text-primary">Atelier</div>
            <div className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Main road, GMS Rd, Keshav Vihar,
              <br />
              Shakti Enclave, Kanwali, 
              <br />
              Dehradun, Uttarakhand 248001
            </div>
          </div>
          <div>
            <div className="label-mono text-primary">Hours</div>
            <div className="mt-2 text-sm text-foreground/80 leading-relaxed">
              Mon — Sat: 10:00 AM — 8:00 PM
              <br />
              Sunday: Closed
            </div>
          </div>
          <div>
            <div className="label-mono text-primary">Contact</div>
            <div className="mt-2 text-sm text-foreground/80 leading-relaxed">
              hello@kotohaus.com
              <br />
              (310) 555-0144
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
