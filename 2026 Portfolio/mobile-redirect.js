/**
 * On phones, send visitors to the responsive portfolio (not legacy mobile.html).
 * Case studies use the same HTML with mobile.css. Append ?desktop=1 to skip.
 */
(function () {
  try {
    if (new URLSearchParams(window.location.search).get("desktop") === "1") {
      return;
    }

    var path = window.location.pathname.toLowerCase();
    var file = path.split("/").pop() || "index.html";
    if (!file || file.indexOf(".") === -1) {
      file = "index.html";
    }

    /* Legacy mobile.html on live hosts — always use portfolio instead */
    if (file === "mobile.html") {
      window.location.replace("portfolio.html" + window.location.hash);
      return;
    }

    var ua = navigator.userAgent || "";
    var narrow =
      window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
    var mobileUA =
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(
        ua
      );
    var isMobile = narrow || mobileUA;

    if (!isMobile) {
      return;
    }

    /* Homepage → portfolio hub (responsive) */
    if (file === "index.html") {
      window.location.replace("portfolio.html" + window.location.hash);
    }
  } catch (e) {
    /* no-op */
  }
})();
