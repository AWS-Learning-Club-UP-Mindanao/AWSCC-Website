export const initiateStaticNavBar = () => {
  const navbarBG = document.querySelector(".navbar-wrapper");
  const logo = document.querySelector(".navbar-logo");
  const text1 = document.querySelector(".navbar-logo-text.top");
  const text2 = document.querySelector(".navbar-logo-text.bottom");
  const navbar = document.querySelector(".navbar");

  const blurredNav = "navbar-blurred";
  const scrolled = "scrolled";

  if (!navbar || !logo || !text1 || !text2 || !navbarBG) return;

  text1.classList.remove("gradient-text");

  navbar.classList.add(scrolled);
  logo.classList.add(scrolled);
  text1.classList.add(scrolled);
  text2.classList.add(scrolled);
  navbarBG.classList.add(blurredNav);
}
