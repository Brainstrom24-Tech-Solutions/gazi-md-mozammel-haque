import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis;
    let focusedTarget;

    function clearTemporaryFocus() {
      focusedTarget?.removeAttribute("tabindex");
      focusedTarget = undefined;
    }

    function updateMotionPreference() {
      lenis?.destroy();
      lenis = undefined;
      if (!motionPreference.matches) {
        lenis = new Lenis({ autoRaf: true, duration: 1.05, smoothWheel: true, syncTouch: false, anchors: false });
      }
    }

    function navigateToSection(event) {
      if (!lenis || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href^="#"]') : null;
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      let target;
      try { target = document.getElementById(decodeURIComponent(hash.slice(1))); } catch { return; }
      if (!target) return;

      event.preventDefault();
      // Read the responsive header clearance on each click, including after the mobile menu closes.
      const clearance = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const destination = Math.max(0, target.getBoundingClientRect().top + window.scrollY - clearance);
      if (window.location.hash !== hash) window.history.pushState(window.history.state, "", hash);
      lenis.scrollTo(destination, {
        onComplete: () => {
          clearTemporaryFocus();
          if (!target.hasAttribute("tabindex")) {
            target.setAttribute("tabindex", "-1");
            focusedTarget = target;
          }
          target.focus({ preventScroll: true });
        },
      });
    }

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);
    document.addEventListener("click", navigateToSection);
    return () => {
      document.removeEventListener("click", navigateToSection);
      motionPreference.removeEventListener("change", updateMotionPreference);
      clearTemporaryFocus();
      lenis?.destroy();
    };
  }, []);

  return <Component {...pageProps} />;
}
