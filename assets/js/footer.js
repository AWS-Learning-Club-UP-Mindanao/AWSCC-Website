const footerContainer = document.querySelector("footer");

if (footerContainer) {
  fetch("/assets/components/footer.html")
    .then((res) => res.text())
    .then((html) => {
      footerContainer.innerHTML = html;
    })
    .catch((err) => console.error("Failed to load footer:", err));
}
