// Magnetic/flowing text: letters near the cursor drift away with a
// spring-like ease, creating a fluid ripple. Applied to elements with
// class "flow-text". Skips entirely under prefers-reduced-motion, and
// keeps the underlying text content intact for accessibility/copying.
(function () {
  "use strict";

  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var RADIUS = 90; // px — how close the cursor needs to be to affect a letter
  var STRENGTH = 14; // px — max displacement when the cursor is right on a letter
  var EASE = 0.15; // spring-return speed per frame

  function wrapChars(el) {
    var text = el.textContent;
    el.textContent = "";
    var chars = [];
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === " ") {
        el.appendChild(document.createTextNode(" "));
        continue;
      }
      var span = document.createElement("span");
      span.className = "flow-char";
      span.textContent = ch;
      el.appendChild(span);
      chars.push({ el: span, restX: 0, restY: 0, x: 0, y: 0, tx: 0, ty: 0 });
    }
    return chars;
  }

  function measureRest(chars) {
    chars.forEach(function (c) {
      c.el.style.transform = "";
    });
    chars.forEach(function (c) {
      var rect = c.el.getBoundingClientRect();
      c.restX = rect.left + rect.width / 2;
      c.restY = rect.top + rect.height / 2;
    });
  }

  function initFlow(el) {
    var chars = wrapChars(el);
    if (!chars.length) return;

    var mouseX = null;
    var mouseY = null;

    measureRest(chars);
    window.addEventListener("resize", function () {
      measureRest(chars);
    });

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function tick() {
      if (mouseX !== null) {
        chars.forEach(function (c) {
          var dx = c.restX - mouseX;
          var dy = c.restY - mouseY;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < RADIUS) {
            var pct = (RADIUS - dist) / RADIUS;
            c.tx = (dx / (dist || 1)) * STRENGTH * pct;
            c.ty = (dy / (dist || 1)) * STRENGTH * pct;
          } else {
            c.tx = 0;
            c.ty = 0;
          }
          c.x += (c.tx - c.x) * EASE;
          c.y += (c.ty - c.y) * EASE;
          c.el.style.transform =
            "translate(" + c.x.toFixed(2) + "px," + c.y.toFixed(2) + "px)";
        });
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (reduceMotion) return;
    var targets = document.querySelectorAll(".flow-text");
    targets.forEach(initFlow);
  });
})();
