// Keeps the footer year current.
document.getElementById("year").textContent = new Date().getFullYear();

// Black / white theme toggle. The saved choice is applied early by a small
// inline script in each page's <head>, so there is no flash on load.
(function () {
  var buttons = document.querySelectorAll("[data-theme-btn]");

  function setTheme(theme, save) {
    document.documentElement.setAttribute("data-theme", theme);
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.themeBtn === theme));
    });
    if (save) {
      try { localStorage.setItem("theme", theme); } catch (e) {}
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setTheme(b.dataset.themeBtn, true); });
  });

  setTheme(document.documentElement.getAttribute("data-theme") || "black", false);
})();
