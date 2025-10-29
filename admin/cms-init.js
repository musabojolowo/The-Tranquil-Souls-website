window.addEventListener("load", function () {
  if (window.CMS) {
    console.log("✅ Netlify CMS loaded successfully");
    window.CMS.init();
  } else {
    console.error("❌ Netlify CMS failed to load.");
  }
});
