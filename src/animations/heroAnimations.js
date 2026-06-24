import gsap from "gsap";

/**
 * Hero entrance: staggers the headline, copy, and CTA upward into place,
 * then lets the floating decorative SVGs drift independently.
 *
 * @param {HTMLElement} container - the hero section root
 */
export const animateHeroEntrance = (container) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(container.querySelector(".hero-eyebrow"), { opacity: 0, y: 20, duration: 0.6 })
    .from(container.querySelector(".hero-heading"), { opacity: 0, y: 30, duration: 0.7 }, "-=0.35")
    .from(container.querySelector(".hero-copy"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.4")
    .from(container.querySelector(".hero-actions"), { opacity: 0, y: 20, duration: 0.6 }, "-=0.35")
    .from(
      container.querySelector(".hero-image"),
      { opacity: 0, x: 60, duration: 0.9, ease: "power2.out" },
      "-=0.9"
    );

  return tl;
};

/**
 * Subtle press-down micro-interaction for any clickable element.
 * Call once per element on mount; GSAP handles its own cleanup via context.
 *
 * @param {HTMLElement} el
 */
export const attachButtonPress = (el) => {
  const handleDown = () => gsap.to(el, { scale: 0.96, duration: 0.15, ease: "power2.out" });
  const handleUp = () => gsap.to(el, { scale: 1, duration: 0.25, ease: "back.out(2)" });

  el.addEventListener("pointerdown", handleDown);
  el.addEventListener("pointerup", handleUp);
  el.addEventListener("pointerleave", handleUp);

  return () => {
    el.removeEventListener("pointerdown", handleDown);
    el.removeEventListener("pointerup", handleUp);
    el.removeEventListener("pointerleave", handleUp);
  };
};

/**
 * Staggered reveal for a list of card elements — used as a GSAP alternative
 * to AOS when a section needs finer timeline control (e.g. Hero stat cards).
 *
 * @param {HTMLElement[]|NodeList} cards
 */
export const staggerCardsIn = (cards) =>
  gsap.from(cards, {
    opacity: 0,
    y: 40,
    duration: 0.6,
    stagger: 0.12,
    ease: "power3.out",
  });
