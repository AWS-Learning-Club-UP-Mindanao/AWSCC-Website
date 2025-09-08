import initiateNavBar from "../navbar.js";
import addImageFallback from "./fallbackOfficers.js";
import {
  renderLeads,
  renderDepartmentHeads,
  renderCommitteeHeads,
} from "./renderOfficers.js";

const leadsContainer = document.getElementById("leads-cards");
const deptHeadsContainer = document.getElementById("deptHeads-cards");
const committeeHeadsContainer = document.getElementById("committeeHeads-cards");

async function init() {
  initiateNavBar();
  await renderLeads(leadsContainer);
  await renderDepartmentHeads(deptHeadsContainer);
  await renderCommitteeHeads(committeeHeadsContainer);
  addImageFallback();
}

init();
console.log("Leads container innerHTML:", leadsContainer.innerHTML);
