(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('belter-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function paint(btn) {
    btn.textContent = isDark() ? '☀' : '☾';
    btn.setAttribute('aria-label', isDark() ? 'Passer en thème clair' : 'Passer en thème sombre');
  }
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeBtn');
    if (!btn) return;
    paint(btn);
    btn.addEventListener('click', function () {
      var next = isDark() ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('belter-theme', next); } catch (e) {}
      paint(btn);
    });
  });
})();
