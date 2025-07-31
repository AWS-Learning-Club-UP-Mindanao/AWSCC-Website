import { initiateNavBar } from "../navbar.js";
import {
  renderLeads,
  renderDepartmentHeads,
  renderCommitteeHeads,
} from "./renderOfficers.js";

const leadsContainer = document.getElementById("leads-cards");
const deptHeadsContainer = document.getElementById("deptHeads-cards");
const committeeHeadsContainer = document.getElementById("committeeHeads-cards");

initiateNavBar();
renderLeads(leadsContainer);
renderDepartmentHeads(deptHeadsContainer);
renderCommitteeHeads(committeeHeadsContainer);
