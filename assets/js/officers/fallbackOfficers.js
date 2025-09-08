export default function addImageFallback() {
  const officerCards = document.querySelectorAll(".officer-card");
  console.log("Found officer cards:", officerCards.length);

  officerCards.forEach((card) => {
    const img = card.querySelector(".headShot");
    if (!img) return;

    console.log(img.src);

    img.onload = () => {
      card.classList.add("loaded");
    };

    img.onerror = () => {
      console.log(`Failed to load ${img.src}`);
    };

    if (img.complete && img.naturalWidth !== 0) {
      card.classList.add("loaded");
    }
  });
}
