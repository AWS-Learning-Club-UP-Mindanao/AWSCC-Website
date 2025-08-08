export const renderLeads = (leadsContainer) => {
  fetch("../assets/js/officers/officerInfo/leadsInfo.json")
    .then((res) => res.json())
    .then((data) => {
      fetch("../assets/components/officerCards.html")
        .then((res) => res.text())
        .then((html) => {
          leadsContainer.innerHTML = "";

          data.Leads.forEach((lead) => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html.trim(); // Create DOM from HTML string
            const card = tempDiv.firstElementChild;

            card.querySelector(".officer-name").textContent = lead.Name;
            card.querySelector(".officer-position").textContent = lead.Position;
            card.querySelector(".officer-desc").textContent = lead.Description;
            card.querySelector(".headShot").src = `../assets/img/officerImages/${lead.Image || "headShot.png"}`;

            leadsContainer.appendChild(card);
          })
        })
    })
    .catch((err) => {
      console.error("Failed to load officer info or template", err)
    })
}

export const renderDepartmentHeads = (headsContainer) => {
  fetch("../assets/js/officers/officerInfo/deptHeadsInfo.json")
    .then((res) => res.json())
    .then((data) => {
      fetch("../assets/components/officerCards.html")
        .then((res) => res.text())
        .then((html) => {
          headsContainer.innerHTML = "";

          data.departmentHeads.forEach((departmentHeads) => {
            const div = document.createElement("div");
            div.innerHTML = html.trim();
            const card = div.firstElementChild;

            card.querySelector(".officer-name").textContent = departmentHeads.Name;
            card.querySelector(".officer-position").textContent = departmentHeads.Position;
            card.querySelector(".officer-desc").textContent = departmentHeads.Description;
            card.querySelector(".headShot").src = `../assets/img/officerImages/${departmentHeads.Image || "headShot.png"}`;

            headsContainer.appendChild(card);
          })
        })
    })
    .catch((err) => {
      console.error("Failed to load officer info or template", err)
    })
}

export const renderCommitteeHeads = (committeeContainer) => {
  fetch("../assets/js/officers/officerInfo/committeeHeadsInfo.json")
    .then((res) => res.json())
    .then((data) => {
      fetch("../assets/components/officerCards.html")
        .then((res) => res.text())
        .then((html) => {
          committeeContainer.innerHTML = "";

          data.committeeHeads.forEach((committeeHeads) => {
            const div = document.createElement("div");
            div.innerHTML = html.trim();
            const card = div.firstElementChild;

            card.querySelector(".officer-name").textContent = committeeHeads.Name;
            card.querySelector(".officer-position").textContent = committeeHeads.Position;
            card.querySelector(".officer-desc").textContent = committeeHeads.Description;
            card.querySelector(".headShot").src = `../assets/img/officerImages/${committeeHeads.Image || "headShot.png"}`;

            committeeContainer.appendChild(card);
          })
        })
    })
    .catch((err) => {
      console.error("Failed to load officer info or template", err)
    })
}
