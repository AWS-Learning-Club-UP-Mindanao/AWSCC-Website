// Function to create upcoming event card
const createUpcomingEventCard = (event) => {
  const card = document.createElement("div");
  card.className = "upcoming-event-card";

  const hasImage = event.posterImage && event.posterImage.trim() !== "";

  // Image container (black fallback if missing)
  let imageSection = "";
  if (!hasImage) {
    imageSection = `
      <div class="event-poster-fallback">
        <h3 class="fallback-title">${event.title}</h3>
      </div>
    `;
  } else {
    imageSection = `
      <img src="${event.posterImage}" alt="${event.title}" class="event-poster"
        onerror="this.style.display='none'; this.insertAdjacentHTML('beforebegin', '<div class=&quot;event-poster-fallback&quot;><h3 class=&quot;fallback-title&quot;>${event.title}</h3></div>');">
    `;
  }

  card.innerHTML = `
    ${imageSection}
    <div class="event-card-content">
      <h3 class="event-title">${event.title}</h3>
      <p class="event-description">${event.description}</p>
      <p class="event-tags">${event.tags
        .map((tag) => `<span class="event-tag">#${tag}</span>`)
        .join(" ")}</p>
    </div>
  `;

  return card;
};

// Function to create held event card
const createHeldEventCard = (event) => {
  const card = document.createElement("div");
  card.className = "held-event-card";

  card.innerHTML = `
    <div class="held-event-left">
      <div class="held-event">
        <h3 class="event-title">${event.title}</h3>
        <p class="event-description">${event.description}</p>
        <p class="event-tags">${event.tags
          .map((tag) => `<span class="event-tag">#${tag}</span>`)
          .join(" ")}</p>
      </div>
    </div>
    <div class="held-event-right">
      <img src="${event.posterImage}" alt="${
        event.title
      }" class="held-event-poster">
    </div>
  `;

  return card;
};

// Function to render upcoming events
export const renderUpcomingEvents = (container) => {
  if (!container) {
    console.error("Upcoming events container not found");
    return;
  }

  // Fetch upcoming events data
  fetch("../assets/js/events/json/upcomingEvents.json")
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = "";

      // Create scroll container
      const scrollContainer = document.createElement("div");
      scrollContainer.className = "upcoming-events-scroll";

      // Create navigation arrows
      const leftArrow = document.createElement("button");
      leftArrow.className = "scroll-arrow left-arrow";
      leftArrow.innerHTML = "‹";

      const rightArrow = document.createElement("button");
      rightArrow.className = "scroll-arrow right-arrow";
      rightArrow.innerHTML = "›";

      // Create cards container
      const cardsContainer = document.createElement("div");
      cardsContainer.className = "upcoming-events-cards";

      // Add event cards
      data.upcomingEvents.forEach((event) => {
        const card = createUpcomingEventCard(event);
        cardsContainer.appendChild(card);
      });

      // Add scroll functionality
      leftArrow.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: -370, behavior: "smooth" });
      });

      rightArrow.addEventListener("click", () => {
        cardsContainer.scrollBy({ left: 370, behavior: "smooth" });
      });

      scrollContainer.appendChild(cardsContainer);
      container.appendChild(leftArrow);
      container.appendChild(scrollContainer);
      container.appendChild(rightArrow);
    })
    .catch((err) => {
      console.error("Failed to load upcoming events data", err);
      container.innerHTML =
        '<p style="color: white; text-align: center;">Failed to load upcoming events</p>';
    });
};

// Function to render held events
export const renderHeldEvents = (container) => {
  if (!container) {
    console.error("Held events container not found");
    return;
  }

  // Fetch held events data
  fetch("../assets/js/events/json/heldEvents.json")
    .then((res) => res.json())
    .then((data) => {
      container.innerHTML = "";

      // Create vertical list container
      const listContainer = document.createElement("div");
      listContainer.className = "held-events-list";

      // Add event cards
      data.heldEvents.forEach((event) => {
        const card = createHeldEventCard(event);
        listContainer.appendChild(card);
      });

      container.appendChild(listContainer);
    })
    .catch((err) => {
      console.error("Failed to load held events data", err);
      container.innerHTML =
        '<p style="color: white; text-align: center;">Failed to load held events</p>';
    });
};
