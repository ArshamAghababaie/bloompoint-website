"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const observe = (root: Node) => {
      if (root instanceof Element) {
        root.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));
      }
    };

    document.querySelectorAll(".reveal:not(.visible)").forEach((el) => io.observe(el));

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.classList.contains("reveal") && !node.classList.contains("visible")) {
              io.observe(node);
            }
            observe(node);
          }
        });
      });
    });

    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
