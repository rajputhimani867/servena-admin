  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = location.pathname.split("/").pop();
    const links = document.querySelectorAll(".admin-sidebar a");

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });


// ---------------------sidebar---------------
