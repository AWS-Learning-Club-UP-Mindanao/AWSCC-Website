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
  const gradientText = "gradient-text";
  const scrolled = "scrolled";
  const isStatic = "static";

  const navbar = document.querySelector(navbarSelector);
  const navbarBG = document.querySelector(navbarBGSelector);
  const logo = document.querySelector(logoSelector);
  const text1 = document.querySelector(text1Selector);
  const text2 = document.querySelector(text2Selector);

  if (!navbar || !logo || !text1 || !text2) return;

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

setupNavbarScrollAnimation({ isLanding: true });
