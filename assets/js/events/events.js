import { initiateStaticNavBar } from "../navbar-static.js";
import { renderUpcomingEvents, renderHeldEvents } from "./renderEvents.js";

const container = document.getElementById("navbar-component-static");

const upcomingEventsContainer = document.getElementById("upcoming-events-list");
const heldEventsContainer = document.getElementById("held-events-list");

initiateStaticNavBar(container);

// Render events when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderUpcomingEvents(upcomingEventsContainer);
  renderHeldEvents(heldEventsContainer);
});