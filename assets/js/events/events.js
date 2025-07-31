import initiateNavBar from "../navbar.js";
import { renderUpcomingEvents, renderHeldEvents } from "./renderEvents.js";

const upcomingEventsContainer = document.getElementById("upcoming-events-list");
const heldEventsContainer = document.getElementById("held-events-list");

initiateNavBar();

// Render events when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderUpcomingEvents(upcomingEventsContainer);
  renderHeldEvents(heldEventsContainer);
});

