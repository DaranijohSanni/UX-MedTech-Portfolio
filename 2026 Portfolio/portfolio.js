(function () {
  function stripBranding() {
    document
      .querySelectorAll(
        'a.w-webflow-badge, [class*="w-webflow-badge"], a[href*="webflow.com/?utm"], a[href*="webflow.com?utm_campaign"]'
      )
      .forEach(function (el) {
        try {
          el.remove();
        } catch (e) {}
      });
  }

  stripBranding();
  [100, 500, 1500, 3000].forEach(function (ms) {
    setTimeout(stripBranding, ms);
  });
})();
