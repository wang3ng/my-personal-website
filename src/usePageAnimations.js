import { useEffect } from 'react';
import anime from 'animejs';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Subtle anime.js motions: hero entrance, nav fade-in, scroll reveals.
 * Respects prefers-reduced-motion.
 */
export default function usePageAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      document
        .querySelectorAll('.section .card, .reveal-item')
        .forEach((el) => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      return undefined;
    }

    anime({
      targets: '.navigation-bar',
      opacity: [0, 1],
      translateY: [-12, 0],
      duration: 600,
      easing: 'easeOutCubic',
    });

    anime({
      targets: '.hero h1, .intro-content > *',
      opacity: [0, 1],
      translateY: [18, 0],
      delay: anime.stagger(90, { start: 120 }),
      duration: 700,
      easing: 'easeOutCubic',
    });

    const cards = Array.from(document.querySelectorAll('.section .card'));
    cards.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const card = entry.target;
          observer.unobserve(card);

          anime({
            targets: card,
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 650,
            easing: 'easeOutCubic',
          });

          const items = card.querySelectorAll('.reveal-item');
          if (items.length) {
            items.forEach((item) => {
              item.style.opacity = '0';
              item.style.transform = 'translateY(14px)';
            });
            anime({
              targets: items,
              opacity: [0, 1],
              translateY: [14, 0],
              delay: anime.stagger(80, { start: 120 }),
              duration: 500,
              easing: 'easeOutCubic',
            });
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    cards.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
