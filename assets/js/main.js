(function () {
  var toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  var root = document.documentElement;

  function syncToggle() {
    var isDark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-checked', String(isDark));
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
  }

  syncToggle();

  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
    syncToggle();
  });
})();

(function () {
  if (!navigator.clipboard) return;
  document.querySelectorAll('.page-body pre').forEach(function (pre) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', 'Copy prompt');
    btn.textContent = 'Copy';
    pre.appendChild(btn);
    btn.addEventListener('click', function () {
      var code = pre.querySelector('code');
      var text = (code ? code.textContent : pre.textContent).trim();
      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = 'Copied!';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
      }).catch(function () {
        btn.textContent = 'Failed';
        setTimeout(function () { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
})();
