import initiateNavBar from "./navbar.js";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  initiateNavBar({ isStatic: false });
});
