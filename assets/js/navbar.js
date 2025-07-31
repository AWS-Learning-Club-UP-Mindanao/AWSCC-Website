// Main Navbar Function
// For static navbars just use "initiateNavBar();"
export default function initiateNavBar({ isStatic = true } = {}) {
  const container = document.getElementById("navbar-component");

  fetch("/assets/components/navbar.html")
    .then((res) => res.text())
    .then((html) => {
      container.innerHTML = html;

      // Dropdown toggle logic
      const dropdown = document.querySelectorAll(".navbar-dropdown-button");
      const navbar = document.querySelector(".navbar");

      if (dropdown && navbar) {
        dropdown.forEach((button) => {
          button.addEventListener("click", () => {
            navbar.classList.toggle("dropdown");
            navbar.parentElement.classList.toggle("dropdown");
            document.body.classList.toggle("dropdown");
          });
        });
      }

      if (!isStatic) setupNavbarScrollAnimation();
      else addStaticNavClass();
    })
    .catch((err) => console.error("Failed to load navbar:", err));
}

// Elements
const navbarBG = document.querySelector(".navbar-wrapper");
const logo = document.querySelector(".navbar-logo");
const texts = document.querySelector(".navbar-logo-text-wrapper");
const text1 = document.querySelector(".navbar-logo-text.top");
const text2 = document.querySelector(".navbar-logo-text.bottom");
const navbar = document.querySelector(".navbar");

// Classes
const blurredNav = "navbar-blurred";
const gradientText = "gradient-text";
const scrolled = "scrolled";

if (!navbar || !logo || !text1 || !text2 || !navbarBG) return;

// Static Navbar Function
function addStaticNavClass() {
  text1.classList.remove(gradientText);

  navbar.classList.add(scrolled);
  logo.classList.add(scrolled);
  texts.classList.add(scrolled);
  text1.classList.add(scrolled);
  text2.classList.add(scrolled);
  navbarBG.classList.add(blurredNav);
}

// Animated Navbar Function
function setupNavbarScrollAnimation({ scrollThreshold = 0 } = {}) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add(scrolled);
      logo.classList.add(scrolled);
      texts.classList.add(scrolled);
      text1.classList.add(scrolled);
      text2.classList.add(scrolled);
      navbarBG.classList.add(blurredNav);
      text1.classList.remove(gradientText);
    } else {
      navbar.classList.remove(scrolled);
      logo.classList.remove(scrolled);
      texts.classList.remove(scrolled);
      text1.classList.remove(scrolled);
      text2.classList.remove(scrolled);
      navbarBG.classList.remove(blurredNav);
      text1.classList.add(gradientText);
    }
  });
}
