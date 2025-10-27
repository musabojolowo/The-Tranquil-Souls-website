function toggleSidebar() {
      let sidebar = document.getElementById("mySidebar");
      let content = document.getElementById("mainContent");

      if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        content.style.marginLeft = "0";
      } else {
        sidebar.style.width = "250px";
        content.style.marginLeft = "250px";
      }}
      // Simple example: show an alert
    alert("Welcome to THE TRANQUIL SOULS!");
    console.log("Page Loaded Successfully");
    document.getElementById("contactForm").addEventListener("submit", function (e)
    {
    e.preventDefault();// present page reload
    });
    