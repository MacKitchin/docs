let expandingNav = false;
let expandNavFrame = 0;

function panelFor(button) {
  const id = button.getAttribute("aria-controls");
  return id ? document.getElementById(id) : null;
}

function groupNavigatesOnClick(button) {
  const id = button.closest("li")?.id || "";
  return id.startsWith("/");
}

function revealGroup(button) {
  if (button.getAttribute("aria-expanded") === "true") {
    const panel = panelFor(button);
    if (panel && (panel.hidden || panel.getAttribute("aria-hidden") === "true")) {
      panel.hidden = false;
      panel.removeAttribute("hidden");
      panel.setAttribute("aria-hidden", "false");
    }
    return;
  }

  if (groupNavigatesOnClick(button)) {
    button.setAttribute("aria-expanded", "true");
    const panel = panelFor(button);
    if (panel) {
      panel.hidden = false;
      panel.removeAttribute("hidden");
      panel.setAttribute("aria-hidden", "false");
    }
    return;
  }

  button.click();
}

const NAV_SECTIONS = [
  "welcome",
  "company",
  "people",
  "events",
  "exhibitor",
  "hosted-buyer",
  "systems",
  "ai",
  "projects",
  "reference",
];

function tagNavSections() {
  document.querySelectorAll("#navigation-items").forEach((nav) => {
    const blocks = [...nav.querySelectorAll(":scope > div")].filter((el) =>
      el.querySelector(".sidebar-group-header"),
    );
    blocks.forEach((el, i) => {
      const key = NAV_SECTIONS[i];
      if (key) el.setAttribute("data-nav-section", key);
    });
  });
}

function expandSidebarGroups() {
  // Keep the dense, always-open navigation as a desktop convention. On small
  // screens it turns the menu into a several-screen wall of links and hides
  // the current task, so let Mintlify's native disclosure controls work.
  if (!window.matchMedia("(min-width: 1024px)").matches) return;
  if (expandingNav) return;
  const closed = document.querySelectorAll(
    "#navigation-items button[aria-expanded='false']",
  );
  if (!closed.length) return;

  expandingNav = true;
  closed.forEach(revealGroup);
  expandingNav = false;
}

function collapseSidebarGroupsOnMobile() {
  if (window.matchMedia("(min-width: 1024px)").matches) return;
  if (expandingNav) return;
  const open = document.querySelectorAll(
    "#navigation-items button[aria-expanded='true']",
  );
  if (!open.length) return;

  expandingNav = true;
  open.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    const panel = panelFor(button);
    if (panel) {
      panel.hidden = true;
      panel.setAttribute("hidden", "");
      panel.setAttribute("aria-hidden", "true");
    }
  });
  expandingNav = false;
}

function keepSidebarExpanded() {
  if (expandingNav) return;
  if (expandNavFrame) cancelAnimationFrame(expandNavFrame);
  expandNavFrame = requestAnimationFrame(() => {
    expandNavFrame = 0;
    tagNavSections();
    if (window.matchMedia("(min-width: 1024px)").matches) {
      expandSidebarGroups();
    } else {
      collapseSidebarGroupsOnMobile();
    }
  });
}

keepSidebarExpanded();
window.addEventListener("popstate", keepSidebarExpanded);
window.addEventListener("resize", keepSidebarExpanded);

const observer = new MutationObserver(keepSidebarExpanded);
observer.observe(document.documentElement, {
  subtree: true,
  childList: true,
  attributes: true,
  attributeFilter: ["aria-expanded"],
});
