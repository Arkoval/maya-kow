import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

export const animationLeft = (left, container) => {
  gsap.from(left, 0.5, {
    x: -50,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: left,
      start: 'top top',
      end: '+=100%',
    },
  });
};

export const animationRight = (right, container) => {
  gsap.from(right, 0.5, {
    x: 50,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: right,
      start: 'top top',
      end: '+=100%',
    },
  });
};

export const animationBot = container => {
  gsap.from(container, 0.5, {
    y: 50,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: container,
      markers: true,
      start: 'top top',
      end: '+=100%',
    },
  });
};

export const animationScroll = element => {
  gsap.to(window, { duration: 2, scrollTo: '#' + element, ease: 'power2' });
};
