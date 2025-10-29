(function() {
  function initCMS() {
    if (window.NetlifyCmsApp) {
      console.log("✅ Netlify CMS loaded successfully");
      window.NetlifyCmsApp.init();
    } else {
      console.error("❌ Netlify CMS failed to load.");
    }
  }

  if (document.readyState === "complete") {
    initCMS();
  } else {
    window.addEventListener("load", initCMS);
  }
})();
