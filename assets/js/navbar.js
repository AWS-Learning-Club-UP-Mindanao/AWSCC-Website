export function setupNavbarScrollAnimation(
  navbarSelector = ".navbar",
  scrollThreshold = 150,
  activeClass = "navbar-scrolled",
) {
  const navbar = document.querySelector(navbarSelector);
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add(activeClass);
    } else {
      navbar.classList.remove(activeClass);
    }
  });
}

setupNavbarScrollAnimation();
