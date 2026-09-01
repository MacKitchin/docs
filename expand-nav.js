let navTagFrame = 0;

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
    const blocks = [...nav.querySelectorAll(":scope > div")].filter((element) =>
      element.querySelector(".sidebar-group-header"),
    );

    blocks.forEach((element, index) => {
      const key = NAV_SECTIONS[index];
      if (key) element.setAttribute("data-nav-section", key);
    });
  });
}

function scheduleNavTagging() {
  if (navTagFrame) cancelAnimationFrame(navTagFrame);
  navTagFrame = requestAnimationFrame(() => {
    navTagFrame = 0;
    tagNavSections();
  });
}

scheduleNavTagging();
window.addEventListener("popstate", scheduleNavTagging);

const navObserver = new MutationObserver(scheduleNavTagging);
navObserver.observe(document.documentElement, {
  subtree: true,
  childList: true,
});
