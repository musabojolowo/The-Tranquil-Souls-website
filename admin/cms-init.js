window.addEventListener("load", function() {
  if (window.CMS) {
    console.log("✅ Netlify CMS loaded successfully");
    window.CMS.init();
  } else if (window.NetlifyCmsApp) {
    console.log("✅ Netlify CMS App loaded successfully");
    window.NetlifyCmsApp.init();
  } else {
    console.error("❌ Netlify CMS failed to load. Retrying...");

    // Try again after a short delay
    setTimeout(() => {
      if (window.CMS) {
        window.CMS.init();
      } else if (window.NetlifyCmsApp) {
        window.NetlifyCmsApp.init();
      } else {
        console.error("⚠️ Still couldn't find Netlify CMS.");
      }
    }, 2000);
  }
});
