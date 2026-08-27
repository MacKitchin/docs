let paginationFrame = 0;

function titleFromAria(link) {
  const aria = link.getAttribute("aria-label") || "";
  return aria.replace(/^(Previous|Next):\s*/i, "").trim();
}

function setLabel(link, text) {
  const label = link.querySelector("[data-component-part='pagination-label']");
  if (label && label.textContent.trim() !== text) {
    label.textContent = text;
  }
}

function ensurePreviousTitle(prev) {
  const existing = prev.querySelector(
    "[data-component-part='pagination-title'], [data-pagination-title]",
  );
  if (existing) {
    if (!existing.textContent.trim()) {
      const title = titleFromAria(prev);
      if (title) existing.textContent = title;
    }
    return;
  }

  const title = titleFromAria(prev);
  if (!title) return;

  const span = document.createElement("span");
  span.setAttribute("data-pagination-title", "");
  span.textContent = title;
  prev.appendChild(span);
}

function enhancePagination() {
  const nav = document.getElementById("pagination");
  if (!nav) return;

  const prev = nav.querySelector("a[rel='prev'], .pagination-prev");
  const next = nav.querySelector("a[rel='next'], .pagination-next");

  if (prev) {
    setLabel(prev, "Previous page");
    ensurePreviousTitle(prev);
  }
  if (next) {
    setLabel(next, "Next page");
  }
}

function schedulePaginationEnhance() {
  if (paginationFrame) cancelAnimationFrame(paginationFrame);
  paginationFrame = requestAnimationFrame(() => {
    paginationFrame = 0;
    enhancePagination();
  });
}

schedulePaginationEnhance();
window.addEventListener("popstate", schedulePaginationEnhance);

const paginationObserver = new MutationObserver(schedulePaginationEnhance);
paginationObserver.observe(document.documentElement, {
  subtree: true,
  childList: true,
});
