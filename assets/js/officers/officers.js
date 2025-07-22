import { initiateStaticNavBar } from "../navbar-static.js";
import { renderLeads, renderDepartmentHeads, renderCommitteeHeads } from "./renderOfficers.js";

const container = document.getElementById("navbar-component-static");

const leadsContainer = document.getElementById("leads-cards")
const deptHeadsContainer = document.getElementById("deptHeads-cards")
const committeeHeadsContainer = document.getElementById("committeeHeads-cards")

initiateStaticNavBar(container);
renderLeads(leadsContainer);
renderDepartmentHeads(deptHeadsContainer);
renderCommitteeHeads(committeeHeadsContainer);





