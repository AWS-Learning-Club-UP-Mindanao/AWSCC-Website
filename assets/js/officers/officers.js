import { initiateStaticNavBar } from "../navbar-static.js";
import { renderLeads, renderDepartmentHeads } from "./renderOfficers.js";

const container = document.getElementById("navbar-component-static");
const leadsContainer = document.getElementById("leads-cards")
const headsContainer = document.getElementById("deptHeads-cards")

initiateStaticNavBar(container);
renderLeads(leadsContainer);
renderDepartmentHeads(headsContainer);





