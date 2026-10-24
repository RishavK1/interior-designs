"use client";

import { useEffect } from "react";

export default function PageOpening() {
  useEffect(() => {
    const page = document.querySelector(".site-shell");
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    page.classList.add("page-opening");
    const timeout = window.setTimeout(() => page.classList.remove("page-opening"), 1500);

    return () => {
      window.clearTimeout(timeout);
      page.classList.remove("page-opening");
    };
  }, []);

  return null;
}
