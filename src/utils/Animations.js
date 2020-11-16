import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
}

export const animationLeft = (left, start) => {
  gsap.from(left, {
    x: -50,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: start,
      start: 'top top',
      end: '+=100%',
    },
  });
};

export const animationRight = (right, start) => {
  gsap.from(right, {
    x: 50,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: start,
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
      start: 'top top',
      end: '+=100%',
    },
  });
};

export const animationScroll = element => {
  gsap.to(window, { duration: 2, scrollTo: '#' + element, ease: 'power2' });
};

export const animationCarousel = (element, direction) => {
  gsap.from(element, {
    duration: 1,
    x: direction == 'left' ? 50 : -50,
    autoAlpha: 0,
    ease: 'power1',
  });
};

export const animationNumbers = (
  element,
  start,
  end,
  increment,
  duration,
  plus,
) => {
  if (start === end) return;
  const range = end - start;
  let current = start;
  // const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(function () {
    current += increment;
    element.innerHTML = current + plus;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
};
