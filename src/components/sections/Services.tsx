import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ceramicImg from "@/assets/ceramic-detail.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    n: "01",
    title: "Ceramic Coating",
    desc: "Nine-year hydrophobic shield. Liquid glass over corrected paint.",
    image: ceramicImg,
  },
  {
    n: "02",
    title: "Paint Correction",
    desc: "Multi-stage cut & polish. Swirls erased, depth restored.",
    image: gallery5,
  },
  {
    n: "03",
    title: "Interior Atelier",
    desc: "Hand-cleaned leather, wool, alcantara. Olfactory neutral.",
    image: gallery1,
  },
  {
    n: "04",
    title: "Wheels & Calipers",
    desc: "Faces, barrels, calipers — coated for permanent gloss.",
    image: gallery2,
  },
];

export const Services = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".service-row").forEach((row) => {
        gsap.fromTo(
          row.querySelectorAll(".reveal-mask > *"),
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: "expo.out",
            stagger: 0.05,
            scrollTrigger: { trigger: row, start: "top 85%" },
          }
        );
        gsap.fromTo(
          row.querySelector(".service-line"),
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: { trigger: row, start: "top 85%" },
          }
        );
      });

      gsap.fromTo(
        ".services-eyebrow",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 80%" },
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={root}
      className="relative overflow-hidden bg-background py-32 md:py-44"
    >
      <div className="container mx-auto px-6">
        <div className="services-eyebrow mb-20 flex items-end justify-between">
          <div>
            <span className="eyebrow">— Disciplines</span>
            <h2 className="display-lg mt-4 max-w-3xl text-foreground">
              Four crafts.
              <br />
              <span className="text-muted-foreground">One obsession.</span>
            </h2>
          </div>
          <span className="label-mono hidden md:block">04 / Services</span>
        </div>

        <div className="space-y-0">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="service-row group relative grid grid-cols-12 items-center gap-6 py-10 md:py-14"
            >
              {/* Animated gold line */}
              <span className="service-line absolute inset-x-0 top-0 h-px origin-left bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />

              <div className="col-span-2 md:col-span-1">
                <div className="reveal-mask overflow-hidden">
                  <span className="block text-sm font-medium text-primary">
                    {s.n}
                  </span>
                </div>
              </div>

              <div className="col-span-10 md:col-span-5">
                <div className="reveal-mask overflow-hidden">
                  <h3 className="display-lg text-3xl text-foreground transition-colors duration-500 md:text-5xl group-hover:text-primary">
                    {s.title}
                  </h3>
                </div>
              </div>

              <div className="col-span-12 md:col-span-4">
                <div className="reveal-mask overflow-hidden">
                  <p className="text-base text-muted-foreground md:text-lg">
                    {s.desc}
                  </p>
                </div>
              </div>

              <div className="col-span-12 mt-4 hidden md:col-span-2 md:mt-0 md:block">
                <div className="reveal-mask overflow-hidden text-right">
                  <a
                    href="#cta"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-primary"
                  >
                    Inquire <span aria-hidden>→</span>
                  </a>
                </div>
              </div>

              {/* Hover image preview — floats in from right */}
              <div
                aria-hidden
                className="pointer-events-none absolute right-[12%] top-1/2 z-20 h-56 w-80 -translate-y-1/2 overflow-hidden rounded-sm opacity-0 shadow-gold-soft transition-all duration-700 ease-out-expo group-hover:opacity-100 group-hover:translate-x-[-30px] hidden lg:block"
              >
                <img
                  src={s.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Gloss sweep on hover */}
                <span className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-light-streak" />
              </div>
            </article>
          ))}
          <span className="block h-px w-full bg-border" />
        </div>
      </div>
    </section>
  );
};
