(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  /* —— Lightbox —— */
  function initLightbox() {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;

    var dialogImg = lightbox.querySelector("[data-lightbox-img]");
    var closeBtn = lightbox.querySelector("[data-lightbox-close]");
    var lastFocus = null;

    function openLightbox(src, alt) {
      lastFocus = document.activeElement;
      dialogImg.src = src;
      dialogImg.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
      closeBtn.focus();
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("lightbox-open");
      dialogImg.removeAttribute("src");
      if (lastFocus && typeof lastFocus.focus === "function") {
        lastFocus.focus();
      }
    }

    document.querySelectorAll("[data-lightbox-open]").forEach(function (el) {
      // Native <button> already fires click on Enter/Space — do not bind keydown too
      el.addEventListener("click", function () {
        openLightbox(el.getAttribute("data-lightbox-open"), el.getAttribute("data-lightbox-alt"));
      });
    });

    closeBtn.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });

    // Focus trap while open
    lightbox.addEventListener("keydown", function (e) {
      if (e.key !== "Tab" || !lightbox.classList.contains("is-open")) return;
      var focusable = lightbox.querySelectorAll("button, [href], [tabindex]:not([tabindex='-1'])");
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  /* —— In-page anchors; honor prefers-reduced-motion —— */
  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (!id || id === "#") return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({
          behavior: prefersReducedMotion() ? "auto" : "smooth",
          block: "start",
        });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      });
    });
  }

  ready(function () {
    initLightbox();
    initAnchors();
  });
})();
