// Light/dark toggle. Starts from the visitor's system setting; remembers a manual choice.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector(".toggle");
  if (!btn) return;
  var label = btn.querySelector(".label");
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function isDark() {
    var t = root.dataset.theme;
    return t ? t === "dark" : media.matches;
  }

  function paint() {
    var dark = isDark();
    btn.setAttribute("aria-pressed", dark ? "true" : "false");
    btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    label.textContent = dark ? "light" : "dark";
  }

  btn.addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });

  media.addEventListener("change", paint);
  paint();
})();
