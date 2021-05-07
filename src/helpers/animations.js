import { gsap } from "gsap";

export const floatTopBot = (el, duration = 3, posY = 50, repeat = -1) => {
  return gsap.to(el, {
    duration: duration,
    y: `+= ${posY}`,
    ease: "power1.out",
    repeat,
    yoyo: true,
  });
};

export const floatLeftRight = (el, duration = 3, posX = 50, repeat = -1) => {
  return gsap.to(el, {
    duration: duration,
    x: `+= ${posX}`,
    ease: "power1.out",
    repeat,
    yoyo: true,
  });
};

export const translateXY = (el, duration, x, y) => {
  gsap.to(el, {
    duration,
    x: `+= ${x}`,
    y: `+= ${y}`,
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
