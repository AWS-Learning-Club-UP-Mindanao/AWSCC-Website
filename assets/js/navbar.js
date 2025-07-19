const container = document.getElementById("navbar-component");

// Fetch and insert navbar
fetch("/assets/components/navbar.html")
  .then((res) => res.text())
  .then((html) => {
    container.innerHTML = html;

    setupNavbarScrollAnimation({ isLanding: true });
  })
  .catch((err) => console.error("Failed to load navbar:", err));

// Scroll animation
function setupNavbarScrollAnimation({
  isLanding = false,
  scrollThreshold = 150,
}) {
  const navbar = document.querySelector(".navbar");
  const navbarBG = document.querySelector(".navbar-wrapper");
  const logo = document.querySelector(".navbar-logo");
  const text1 = document.querySelector(".navbar-logo-text.top");
  const text2 = document.querySelector(".navbar-logo-text.bottom");

  const blurredNav = "navbar-blurred";
  const gradientText = "gradient-text";
  const scrolled = "scrolled";
  const isStatic = "static";

  if (!navbar || !logo || !text1 || !text2 || !navbarBG) return;

  if (!isLanding) {
    navbar.classList.add(isStatic);
    logo.classList.add(isStatic);
    text1.classList.add(isStatic);
    text2.classList.add(isStatic);
    navbarBG.classList.add(blurredNav);
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add(scrolled);
      logo.classList.add(scrolled);
      text1.classList.add(scrolled);
      text2.classList.add(scrolled);
      navbarBG.classList.add(blurredNav);
      text1.classList.remove(gradientText);
    } else {
      navbar.classList.remove(scrolled);
      logo.classList.remove(scrolled);
      text1.classList.remove(scrolled);
      text2.classList.remove(scrolled);
      navbarBG.classList.remove(blurredNav);
      text1.classList.add(gradientText);
    }
  });
}
