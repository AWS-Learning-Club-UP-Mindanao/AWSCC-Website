import { initiateStaticNavBar } from "./navbar-static.js";

const container = document.getElementById("navbar-component");

// Fetch and insert navbar
fetch("../assets/components/navbar.html")
  .then((res) => res.text())
  .then((html) => {
    container.innerHTML = html;


    initiateStaticNavBar();

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
  .catch((err) => console.error("Failed to load navbar:", err));
