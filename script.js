document.addEventListener("DOMContentLoaded", () => {
    // Loader hide after load
    window.addEventListener("load", () => {
      document.getElementById("loader").style.display = "none";
    });
  
    // AOS Init
    AOS.init({ duration: 1200 });
  
    // Typed effect
    if (document.getElementById("typed-text")) {
      new Typed("#typed-text", {
        strings: ["Digital Marketer.", "SEO Specialist.", "Business Growth Expert."],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
      });
    }
  
    // Particles init
    if (document.getElementById("particles-js")) {
      particlesJS("particles-js", {
        particles: {
          number: { value: 100 },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 3 },
          move: { enable: true, speed: 1 }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" }
          }
        }
      });
    }
  
    // Mobile menu toggle
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    if (btn && menu) {
      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  
    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
      });
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
  
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }
  });
    