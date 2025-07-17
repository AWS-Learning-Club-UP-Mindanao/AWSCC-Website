export function setupNavbarScrollAnimation({
  isLanding = false,
  scrollThreshold = 150,
}) {
  const navbarSelector = ".navbar";
  const navbarBGSelector = ".navbar-wrapper";
  const logoSelector = ".navbar-logo";
  const text1Selector = ".navbar-logo-text.top";
  const text2Selector = ".navbar-logo-text.bottom";

  const blurredNav = "navbar-blurred";

  const scrolledNav = "navbar-scrolled";
  const scrolledLogo = "navbar-logo-scrolled";
  const scrolledText = "navbar-logo-text-scrolled";

  const staticNav = "navbar-static";
  const staticLogo = "navbar-logo-static";
  const staticText = "navbar-logo-text-static";

  const navbar = document.querySelector(navbarSelector);
  const navbarBG = document.querySelector(navbarBGSelector);
  const logo = document.querySelector(logoSelector);
  const text1 = document.querySelector(text1Selector);
  const text2 = document.querySelector(text2Selector);

  if (!navbar || !logo || !text1 || !text2) return;

  if (!isLanding) {
    navbar.classList.add(staticNav);
    logo.classList.add(staticLogo);
    text1.classList.add(staticText);
    text2.classList.add(staticText);
    navbarBG.classList.add(blurredNav);
    return;
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add(scrolledNav);
      logo.classList.add(scrolledLogo);
      text1.classList.add(scrolledText);
      text2.classList.add(scrolledText);
      navbarBG.classList.add(blurredNav);
    } else {
      navbar.classList.remove(scrolledNav);
      logo.classList.remove(scrolledLogo);
      text1.classList.remove(scrolledText);
      text2.classList.remove(scrolledText);
      navbarBG.classList.remove(blurredNav);
    }
  });
}

setupNavbarScrollAnimation({ isLanding: true });
