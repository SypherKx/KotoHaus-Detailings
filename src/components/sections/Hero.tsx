import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroCar from "@/assets/hero-car-final.png";
import bgWaves from "@/assets/bg-waves.png";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      /* ── Orchestrated entrance sequence ── */

      // 1. Eyebrow fades up
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.0 },
        0
      );

      // 2. Title cinematic tracking + fade
      tl.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 60, letterSpacing: "0.35em" },
        {
          opacity: 1,
          y: 0,
          letterSpacing: "-0.03em",
          duration: 1.6,
          stagger: 0.12,
        },
        0.3
      );

      // 3. Subtitle elegant fade
      tl.fromTo(
        ".hero-sub",
        { opacity: 0, y: 30, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
        0.7
      );

      // 4. CTA button rises
      tl.fromTo(
        ".hero-cta",
        { opacity: 0, y: 24, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.0 },
        0.9
      );

      // 5. Car slides up smoothly
      tl.fromTo(
        ".hero-car",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "power3.out" },
        0.5
      );

      // 6. Bottom meta info
      tl.fromTo(
        ".hero-meta",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
        1.1
      );

      // 7. Ambient glow pulse
      tl.fromTo(
        ".hero-glow",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2.0, ease: "power2.out" },
        0.4
      );

      /* ── Scroll-driven parallax ── */

      gsap.to(".hero-car", {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".hero-content", {
        y: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "55% top",
          scrub: 1,
        },
      });

      gsap.to(".hero-streak", {
        xPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".hero-glow", {
        yPercent: -30,
        scale: 1.3,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* ── Background Wave Image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgWaves}
          alt="Abstract dark waves"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* ── Atmospheric layers ── */}
      <div className="hero-streak absolute inset-0 bg-gradient-radial-gold opacity-40" />
      <div className="absolute inset-0 bg-gradient-fade-bottom" />

      {/* Ambient glow behind car */}
      <div
        className="hero-glow pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(40 20% 94% / 0.08), transparent 65%)",
        }}
      />

      {/* Subtle cinematic light streaks */}
      <div className="pointer-events-none absolute left-0 top-[30%] h-px w-[55%] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-60" />
      <div className="pointer-events-none absolute right-0 top-[65%] h-px w-[35%] bg-gradient-to-l from-transparent via-primary/20 to-transparent opacity-60" />

      {/* ═══════ Main Layout ═══════ */}
      <div className="relative z-10 flex h-full w-full flex-col">

        {/* ── Text Block ── */}
        <div className="hero-content flex flex-col items-center justify-center px-6 pt-28 pb-4 text-center">
          <h1 className="hero-title text-[2.5rem] md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
            <span className="hero-title-line block">Where Every Detail</span>
            <span className="hero-title-line block text-gradient-gold">
              Truly Matters
            </span>
          </h1>

          <p className="hero-sub mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Precision detailing and ceramic protection —
            restoring showroom perfection.
          </p>

          <a
            href="#cta"
            className="hero-cta group relative mt-5 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-gold"
          >
            <span>Make Appointment</span>
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* ── Car Block (fills remaining height) ── */}
        <div className="hero-car flex-1 flex items-end justify-center pb-10 md:pb-20 pointer-events-none">
          <img
            src={heroCar}
            alt="Mansory Mercedes-Maybach — Kotohaus Detailing"
            className="w-[80%] md:w-[70%] max-w-[1100px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* ── Bottom meta strip ── */}
      <div className="absolute inset-x-0 bottom-8 z-20 flex items-end justify-between px-6 md:px-12">
        <div className="hero-meta label-mono text-left">
          <div className="text-foreground/50">Scroll</div>
          <div className="mt-1 text-primary animate-bounce text-sm">↓</div>
        </div>
        <div className="hero-meta label-mono hidden text-right md:block">
          <div className="text-foreground/50">N°001 / Atelier</div>
          <div className="mt-1 text-primary">Dehradun, Uttarakhand</div>
        </div>
      </div>
    </section>
  );
};
