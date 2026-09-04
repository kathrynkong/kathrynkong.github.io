// Small, restrained homepage interactions: a header easter egg, the
// Research/Making/Teaching pathway tabs, and a scroll-reveal fade-in
// for major sections. (Hero keywords are plain links to the Portfolio
// page's anchors — no JS needed for those.)
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    initPawEasterEgg();
    initPathway();
    initScrollReveal();
  });

  // --- Paw easter egg --------------------------------------------------
  function initPawEasterEgg() {
    var btn = document.querySelector(".paw-easter-egg");
    var msg = document.querySelector(".paw-easter-egg-message");
    if (!btn || !msg) return;

    var timer = null;
    btn.addEventListener("click", function () {
      msg.textContent =
        "🐾 Site supervised by two highly opinionated research assistants.";
      msg.classList.add("visible");
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        msg.classList.remove("visible");
      }, 2000);
    });
  }

  // --- Research / Making / Teaching pathway ------------------------------
  function initPathway() {
    var nodes = document.querySelectorAll(".pathway-node");
    if (!nodes.length) return;
    var panels = document.querySelectorAll(".pathway-panel");

    nodes.forEach(function (node) {
      node.addEventListener("click", function () {
        var key = node.getAttribute("data-pathway");

        nodes.forEach(function (n) {
          var active = n === node;
          n.classList.toggle("active", active);
          n.setAttribute("aria-selected", String(active));
        });

        panels.forEach(function (panel) {
          var match = panel.getAttribute("data-pathway-panel") === key;
          panel.hidden = !match;
          panel.classList.toggle("active", match);
        });
      });
    });
  }

  // --- Scroll reveal -------------------------------------------------------
  function initScrollReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (!targets.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      targets.forEach(function (el) {
        el.classList.add("in-view");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
