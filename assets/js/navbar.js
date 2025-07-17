export function setupNavbarScrollAnimation(
  scrollThreshold = 150,
  navbarSelector = ".navbar",
  logoSelector = ".navbar-logo",
  scrolledNav = "navbar-scrolled",
  scrolledLogo = "navbar-logo-scrolled",
) {
  const navbar = document.querySelector(navbarSelector);
  const logo = document.querySelector(logoSelector);
  if (!navbar && !logo) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add(scrolledNav);
      logo.classList.add(scrolledLogo);
    } else {
      navbar.classList.remove(scrolledNav);
      logo.classList.remove(scrolledLogo);
    }
  });
}

setupNavbarScrollAnimation();
