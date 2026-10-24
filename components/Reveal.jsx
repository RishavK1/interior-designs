"use client";

import { useEffect, useRef } from "react";

// Inspired by 21st.dev's Reveal pattern: fade, lift and unblur on viewport entry.
export default function Reveal({ children, className = "", delay = 0, variant = "rise", as: Tag = "div" }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!element || prefersReducedMotion || !("IntersectionObserver" in window)) return;

    element.classList.add("reveal-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("reveal-visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={elementRef}
      className={`reveal reveal-${variant} ${className}`.trim()}
      data-aos={variant}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
