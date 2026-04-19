import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Mounts Lenis smooth scroll once and ties it into GSAP's ticker so
 * ScrollTrigger animations stay perfectly in sync. Renders nothing.
 */
export const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tickerCb = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  return null;
};
