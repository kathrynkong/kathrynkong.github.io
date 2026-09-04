// A small walking cat companion — a lightweight, dependency-free
// interaction demo living at the bottom of every page. Respects
// prefers-reduced-motion and can be toggled off (choice is remembered
// per-visitor via localStorage).
(function () {
  "use strict";

  var STORAGE_KEY = "desktop-cat-hidden";
  var CAT_WIDTH = 40;
  var WALK_SPEED = 1.1; // px per animation frame, roughly
  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function getStoredHidden() {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function setStoredHidden(hidden) {
    try {
      window.localStorage.setItem(STORAGE_KEY, hidden ? "1" : "0");
    } catch (e) {
      // localStorage unavailable (private browsing, etc.) — just skip persisting.
    }
  }

  function buildCat() {
    var cat = document.createElement("div");
    cat.className = "desktop-cat";
    cat.setAttribute("aria-hidden", "true");
    var sprite = document.createElement("span");
    sprite.className = "desktop-cat-sprite";
    sprite.textContent = "🐈";
    cat.appendChild(sprite);
    document.body.appendChild(cat);
    return cat;
  }

  function buildToggle(applyHidden) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "cat-toggle";
    var hidden = getStoredHidden();

    function render() {
      btn.textContent = hidden ? "🐾 Show cat" : "🐾 Hide cat";
      btn.setAttribute("aria-pressed", String(hidden));
      applyHidden(hidden);
    }

    btn.addEventListener("click", function () {
      hidden = !hidden;
      setStoredHidden(hidden);
      render();
    });

    render();
    document.body.appendChild(btn);
  }

  function startWalking(cat) {
    var pos = Math.random() * Math.max(window.innerWidth - CAT_WIDTH, 0);
    var target = pos;
    var facing = 1;

    function pickNewTarget() {
      target = Math.random() * Math.max(window.innerWidth - CAT_WIDTH, 0);
      facing = target >= pos ? 1 : -1;
    }
    pickNewTarget();

    function tick() {
      var dx = target - pos;
      if (Math.abs(dx) < WALK_SPEED) {
        cat.classList.remove("walking");
        window.setTimeout(function () {
          pickNewTarget();
          window.requestAnimationFrame(tick);
        }, 1500 + Math.random() * 3000);
        return;
      }
      cat.classList.add("walking");
      pos += Math.sign(dx) * WALK_SPEED;
      cat.style.transform =
        "translateX(" + pos + "px) scaleX(" + facing + ")";
      window.requestAnimationFrame(tick);
    }
    window.requestAnimationFrame(tick);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var cat = buildCat();

    buildToggle(function (hidden) {
      cat.style.display = hidden ? "none" : "";
    });

    if (reduceMotion) {
      cat.classList.add("sitting");
      cat.style.transform = "translateX(1rem)";
    } else {
      startWalking(cat);
    }
  });
})();
