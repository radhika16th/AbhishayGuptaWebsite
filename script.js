/* =========================
   GLOBAL REFERENCES
========================= */

const preloader = document.getElementById("preloader");
const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

/* =========================
   PRELOADER + START ANIMATIONS
========================= */

window.addEventListener("load", () => {
  // Hide preloader after logo animation
  setTimeout(() => {
    if (preloader) {
      preloader.classList.add("hide");
    }

    // Start animations AFTER preloader
    startTypewriter();
    startFadeIns();

  }, 2200); // 🔁 adjust if needed
});

/* =========================
   TYPEWRITER (RESTARTS EVERY LOAD)
========================= */

function startTypewriter() {
  const heading = document.getElementById("typewriter");
  if (!heading) return;

  const text = heading.textContent.trim();
  heading.textContent = "";

  [...text].forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${index * 0.055}s`;
    heading.appendChild(span);
  });
}

/* =========================
   FADE-IN ON SCROLL
========================= */

function startFadeIns() {
  const faders = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  faders.forEach(el => observer.observe(el));
}

/* =========================
   MOBILE MENU
========================= */

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      document.body.classList.remove("menu-open");
    });
  });
}

/* =========================
   NAVBAR SCROLL EFFECT
========================= */

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
