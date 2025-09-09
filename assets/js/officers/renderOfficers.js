export async function renderLeads(leadsContainer) {
  try {
    const res = await fetch("../assets/js/officers/officerInfo/leadsInfo.json");
    const data = await res.json();

    const htmlRes = await fetch("../assets/components/officerCards.html");
    const html = await htmlRes.text();

    leadsContainer.innerHTML = "";

    data.Leads.forEach((lead) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html.trim();
      const card = tempDiv.firstElementChild;

      // Populate front side
      card.querySelector(".officer-name").textContent = lead.Name;
      card.querySelector(".officer-position").textContent = lead.Position;
      card.querySelector(".officer-desc").textContent = lead.Description;
      card.querySelector(".headShot").src = lead.Image;
      card.querySelector(".headShot").alt = `${lead.Name} - ${lead.Position}`;

      // Populate back side
      card.querySelector(".loading-name").textContent = lead.Name;
      card.querySelector(".loading-position").textContent = lead.Position;

      leadsContainer.appendChild(card);
    });

    return true;
  } catch (err) {
    console.error("Failed to load officer info or template", err);
    return false;
  }
}

export async function renderDepartmentHeads(headsContainer) {
  try {
    const res = await fetch(
      "../assets/js/officers/officerInfo/deptHeadsInfo.json",
    );
    const data = await res.json();

    const htmlRes = await fetch("../assets/components/officerCards.html");
    const html = await htmlRes.text();

    headsContainer.innerHTML = "";

    data.departmentHeads.forEach((departmentHeads) => {
      const div = document.createElement("div");
      div.innerHTML = html.trim();
      const card = div.firstElementChild;

      // Populate front side
      card.querySelector(".officer-name").textContent = departmentHeads.Name;
      card.querySelector(".officer-position").textContent =
        departmentHeads.Position;
      card.querySelector(".officer-desc").textContent =
        departmentHeads.Description;
      card.querySelector(".headShot").src = departmentHeads.Image;
      card.querySelector(
        ".headShot",
      ).alt = `${departmentHeads.Name} - ${departmentHeads.Position}`;

      // Populate back side (loading state)
      card.querySelector(".loading-name").textContent = departmentHeads.Name;
      card.querySelector(".loading-position").textContent =
        departmentHeads.Position;

      headsContainer.appendChild(card);
    });
    return true;
  } catch (err) {
    console.error("Failed to load officer info or template", err);
    return false;
  }
}

export async function renderCommitteeHeads(committeeContainer) {
  try {
    const res = await fetch(
      "../assets/js/officers/officerInfo/committeeHeadsInfo.json",
    );
    const data = await res.json();

    const htmlRes = await fetch("../assets/components/officerCards.html");
    const html = await htmlRes.text();

    committeeContainer.innerHTML = "";

    data.committeeHeads.forEach((committeeHeads) => {
      const div = document.createElement("div");
      div.innerHTML = html.trim();
      const card = div.firstElementChild;

      // Populate front side
      card.querySelector(".officer-name").textContent = committeeHeads.Name;
      card.querySelector(".officer-position").textContent =
        committeeHeads.Position;
      card.querySelector(".officer-desc").textContent =
        committeeHeads.Description;
      card.querySelector(".headShot").src = committeeHeads.Image;
      card.querySelector(
        ".headShot",
      ).alt = `${committeeHeads.Name} - ${committeeHeads.Position}`;

      // Populate back side (loading state)
      card.querySelector(".loading-name").textContent = committeeHeads.Name;
      card.querySelector(".loading-position").textContent =
        committeeHeads.Position;

      committeeContainer.appendChild(card);
    });
    return true;
  } catch (err) {
    console.error("Failed to load officer info or template", err);
    return false;
  }
}
