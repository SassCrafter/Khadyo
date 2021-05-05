import { gsap } from "gsap";

export const floatTopBot = (el, duration = 3, posY = 100, repeat = -1) => {
  return gsap.to(el, {
    duration: duration,
    y: `+= ${posY}`,
    ease: "power1.out",
    repeat,
    yoyo: true,
  });
};

export const fadeIn = (el, duration = 1, posY = 100) => {
  gsap.from(el, {
    duration,
    opacity: 0,
    y: `+= ${posY}`,
    ease: "power3.out",
  });
};
