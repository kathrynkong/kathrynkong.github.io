// Small, restrained homepage interactions: the header Contact menu, the
// Research/Making/Teaching pathway tabs, and a scroll-reveal fade-in
// for major sections.
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    initContactMenu();
    initPathway();
    initScrollReveal();
  });

  // --- Contact menu ------------------------------------------------------
  function initContactMenu() {
    var btn = document.querySelector(".contact-toggle");
    var menu = document.querySelector(".contact-menu");
    if (!btn || !menu) return;

    function close() {
      menu.hidden = true;
      btn.setAttribute("aria-expanded", "false");
    }

    function open() {
      menu.hidden = false;
      btn.setAttribute("aria-expanded", "true");
    }

    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      if (menu.hidden) {
        open();
      } else {
        close();
      }
    });

    document.addEventListener("click", function (event) {
      if (!menu.hidden && !menu.contains(event.target) && event.target !== btn) {
        close();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        close();
        btn.focus();
      }
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
