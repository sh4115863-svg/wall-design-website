document.addEventListener("DOMContentLoaded", function () {
    // חילוץ שם הדף מה-URL המלא (למשל Living_room.html)
    const currentPage = window.location.pathname.split("/").pop();
  
    document.querySelectorAll('.nav-item').forEach(link => {
      // חילוץ שם הדף מתוך ה-href של הקישור (למשל Living_room.html מתוך ./index.html/Living_room.html)
      const linkHref = link.getAttribute('href');
      const linkPage = linkHref.split("/").pop();
  
      // השוואה בין שם הדף הנוכחי לשם שבקישור
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  });
  

  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
  }