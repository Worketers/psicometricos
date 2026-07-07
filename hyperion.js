const Hyperion = (() => {

  /* =========================
     CONFIG
  ========================= */
  const config = {
    duration: 800,
    pulseInterval: 4000
  };

  /* =========================
     FORMAT MONEY
  ========================= */
  function formatMoney(val) {
    return '$' + Number(val || 0)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  /* =========================
     ANIMATE VALUE
  ========================= */
  function animate(el, start, end, isMoney = false, duration = config.duration) {
    if (!el) return;

    let startTime = null;

    function frame(t) {
      if (!startTime) startTime = t;
      const progress = Math.min((t - startTime) / duration, 1);

      const value = start + (end - start) * progress;

      el.innerText = isMoney
        ? formatMoney(value)
        : Math.floor(value);

      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  /* =========================
     GLOW ENGINE
  ========================= */
  function glow(el, value, thresholds = {}) {
    if (!el) return;

    const {
      warning = 0,
      danger = 0
    } = thresholds;

    el.classList.remove('glow-green','glow-red','glow-yellow');

    if (value > warning) {
      el.classList.add('glow-green');
    } else if (value < danger) {
      el.classList.add('glow-red');
    } else {
      el.classList.add('glow-yellow');
    }
  }

  /* =========================
     KPI (ONE LINE POWER)
  ========================= */
  function kpi(id, value, options = {}) {
    const el = document.getElementById(id);
    if (!el) return;

    const {
      money = false,
      start = 0,
      thresholds = {}
    } = options;

    animate(el, start, value, money);
    glow(el, value, thresholds);
  }

  /* =========================
     LIVE PULSE (DASHBOARD MODE)
  ========================= */
  function pulse(selector = '.card-value') {
    setInterval(() => {
      document.querySelectorAll(selector).forEach(el => {
        el.style.transition = 'opacity .3s ease';
        el.style.opacity = 0.6;

        setTimeout(() => {
          el.style.opacity = 1;
        }, 300);
      });
    }, config.pulseInterval);
  }

  /* =========================
     SMART TABLE HOVER
  ========================= */
  function smartHover(tableSelector) {
    const rows = document.querySelectorAll(`${tableSelector} tbody tr`);

    rows.forEach(row => {

      row.style.transition = 'all .2s ease';

      row.addEventListener('mouseenter', () => {
        row.style.transform = 'scale(1.01)';
        row.style.boxShadow = '0 0 12px rgba(255,212,0,.15)';
        row.style.zIndex = 2;
      });

      row.addEventListener('mouseleave', () => {
        row.style.transform = '';
        row.style.boxShadow = '';
        row.style.zIndex = '';
      });
    });
  }

  /* =========================
     AUTO INIT (OPTIONAL)
  ========================= */
  function init(options = {}) {

    if (options.pulse) {
      pulse(options.selector || '.card-value');
    }

    if (options.table) {
      smartHover(options.table);
    }
  }

  /* =========================
     EXPORT
  ========================= */
  return {
    kpi,
    glow,
    animate,
    pulse,
    smartHover,
    formatMoney,
    init
  };

})();

/* ============================================================
   QUICK START (AUTO MODE OPCIONAL)
   Puedes borrar esto si no lo quieres automático
============================================================ */

window.addEventListener('load', () => {

  // Activa dashboard vivo
  Hyperion.init({
    pulse: true,
    table: '#projectsTable'
  });

});
