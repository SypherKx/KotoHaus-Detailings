import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: "01",
    title: "Inspection",
    desc: "Paint thickness mapped, defects catalogued under spectrum lighting.",
  },
  {
    n: "02",
    title: "Decontamination",
    desc: "Iron, tar, organic fallout chemically and mechanically lifted.",
  },
  {
    n: "03",
    title: "Correction",
    desc: "Multi-stage cut and polish. Up to 95% defect removal.",
  },
  {
    n: "04",
    title: "Coating",
    desc: "Bonded ceramic layered, IR-cured, hand-leveled.",
  },
  {
    n: "05",
    title: "Delivery",
    desc: "Climate-stable cure, photographed, returned to you.",
  },
];

export const Process = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Draw the vertical line
      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-list",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      // Each step
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
        gsap.fromTo(
          el.querySelector(".process-dot"),
          { scale: 0 },
          {
            scale: 1,
            duration: 0.8,
            ease: "back.out(2)",
            scrollTrigger: { trigger: el, start: "top 80%" },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={root}
      className="relative overflow-hidden bg-surface py-32 md:py-44"
    >
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="eyebrow">— The Method</span>
          <h2 className="display-lg mt-4 text-foreground">
            Five stages.
            <br />
            <span className="text-muted-foreground">Zero compromise.</span>
          </h2>
        </div>

        <div className="process-list relative mx-auto max-w-3xl pl-12 md:pl-20">
          {/* Vertical line */}
          <span className="process-line absolute left-4 top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-8" />

          {STEPS.map((s) => (
            <div key={s.n} className="process-step relative pb-16 last:pb-0">
              <span className="process-dot absolute -left-[calc(2rem+1px)] top-1 h-3 w-3 rounded-full bg-primary shadow-gold md:-left-[calc(2.5rem+1px)]" />
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-medium tracking-[0.3em] text-primary">
                  {s.n}
                </span>
                <h3 className="display-lg text-2xl text-foreground md:text-3xl">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 max-w-md text-base text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
