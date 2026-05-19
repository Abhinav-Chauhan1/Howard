import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function revealText(
  elements: HTMLElement | HTMLElement[] | NodeListOf<Element>,
  options: { delay?: number; stagger?: number } = {}
) {
  const { delay = 0, stagger = 0.1 } = options;
  return gsap.fromTo(
    elements,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      delay,
      stagger,
    }
  );
}

export function revealImage(element: HTMLElement, options: { delay?: number } = {}) {
  const { delay = 0 } = options;
  return gsap.fromTo(
    element,
    { scale: 0.92, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
      delay,
    }
  );
}

export function scrollRevealText(
  trigger: HTMLElement,
  targets: HTMLElement | HTMLElement[] | string,
  options: { stagger?: number; start?: string } = {}
) {
  const { stagger = 0.12, start = "top 80%" } = options;
  return gsap.fromTo(
    targets,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power2.out",
      stagger,
      scrollTrigger: {
        trigger,
        start,
        once: true,
      },
    }
  );
}

export function scrollRevealImage(
  trigger: HTMLElement,
  target: HTMLElement | string,
  options: { start?: string } = {}
) {
  const { start = "top 80%" } = options;
  return gsap.fromTo(
    target,
    { scale: 0.92, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger,
        start,
        once: true,
      },
    }
  );
}

export function countUp(
  element: HTMLElement,
  target: number,
  options: { duration?: number; prefix?: string; suffix?: string } = {}
) {
  const { duration = 2, suffix = "" } = options;
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: target,
    duration,
    ease: "power1.out",
    onUpdate() {
      element.textContent = Math.round(obj.val) + suffix;
    },
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      once: true,
    },
  });
}

export function kenBurns(element: HTMLElement) {
  return gsap.fromTo(
    element,
    { scale: 1.08 },
    { scale: 1, duration: 6, ease: "power1.out" }
  );
}
