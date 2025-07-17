export function setupNavbarScrollAnimation(
  scrollThreshold = 150,
  navbarSelector = ".navbar",
  logoSelector = ".navbar-logo",
  textSelector = ".navbar-logo-text-container",
  scrolledNav = "navbar-scrolled",
  scrolledLogo = "navbar-logo-scrolled",
  scrolledText = "navbar-logo-text-scrolled",
) {
  const navbar = document.querySelector(navbarSelector);
  const logo = document.querySelector(logoSelector);
  const text1 = document.querySelector(textSelector).children[0];
  const text2 = document.querySelector(textSelector).children[1];
  if (!navbar || !logo || !text1 || !text2) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add(scrolledNav);
      logo.classList.add(scrolledLogo);
      text1.classList.add(scrolledText);
      text2.classList.add(scrolledText);
    } else {
      navbar.classList.remove(scrolledNav);
      logo.classList.remove(scrolledLogo);
      text1.classList.remove(scrolledText);
      text2.classList.remove(scrolledText);
    }
  });
}

setupNavbarScrollAnimation();
