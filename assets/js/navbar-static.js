export const initiateStaticNavBar = (container) => {
  // Fetch and insert navbar
  fetch("../assets/components/navbar.html")
    .then((res) => res.text())
    .then((html) => {
      container.innerHTML = html;

      addStaticNavClass();

      const dropdown = document.querySelectorAll(".navbar-dropdown-button");
      const navbar = document.querySelector(".navbar");

      // Dropdown toggle logic
      if (dropdown && navbar) {
        dropdown.forEach((button) => {
          button.addEventListener("click", () => {
            navbar.classList.toggle("dropdown");
            navbar.parentElement.classList.toggle("dropdown");
            document.body.classList.toggle("dropdown");
          });
        });
      }
    })
}

const addStaticNavClass = () => {
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
