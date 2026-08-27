function isDesktopHeader() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function currentThemePreference() {
  const keys = [
    "mintlify-theme-preference",
    "theme-preference",
    "theme",
    "appearance",
  ];
  for (const key of keys) {
    const value = window.localStorage.getItem(key);
    if (value === "system" || value === "light" || value === "dark") return value;
  }
  const pressed = document.querySelector(
    "#sidebar [data-theme-preference-value][aria-pressed='true']",
  );
  if (pressed) return pressed.getAttribute("data-theme-preference-value");
  return "system";
}

function markHeaderTheme(value) {
  document.querySelectorAll("#banner [data-theme-choice]").forEach((button) => {
    const active = button.getAttribute("data-theme-choice") === value;
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function applyThemeFallback(value) {
  const root = document.documentElement;
  if (value === "dark") {
    root.classList.add("dark");
  } else if (value === "light") {
    root.classList.remove("dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.toggle("dark", prefersDark);
  }
}

function setThemePreference(value) {
  const original = document.querySelector(
    `#sidebar [data-theme-preference-value="${value}"]`,
  );
  if (original) {
    original.click();
  } else {
    applyThemeFallback(value);
  }
  markHeaderTheme(value);
}

const WHITE_WORDMARK = "/images/informa-connect-logo.png";
const NAVY_WORDMARK = "/images/informa-connect-logo-light.png";
const SEARCH_INDEX_URL = "/search-data.js";
let searchIndexPromise;
let lastSearchTrigger;

function loadSearchIndex() {
  if (window.COMPANY_BRAIN_SEARCH_INDEX) {
    return Promise.resolve(window.COMPANY_BRAIN_SEARCH_INDEX);
  }
  if (searchIndexPromise) return searchIndexPromise;

  searchIndexPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SEARCH_INDEX_URL;
    script.async = true;
    script.onload = () => {
      if (window.COMPANY_BRAIN_SEARCH_INDEX) {
        resolve(window.COMPANY_BRAIN_SEARCH_INDEX);
      } else {
        reject(new Error("Search index loaded without data"));
      }
    };
    script.onerror = () => reject(new Error("Search index could not be loaded"));
    document.head.appendChild(script);
  });
  return searchIndexPromise;
}

function normaliseSearchText(value) {
  return String(value || "")
    .toLocaleLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function scoreSearchResult(record, terms) {
  const fields = {
    title: normaliseSearchText(`${record.title} ${record.sidebarTitle}`),
    description: normaliseSearchText(record.description),
    headings: normaliseSearchText((record.headings || []).join(" ")),
    path: normaliseSearchText(record.path),
    body: normaliseSearchText(record.body),
  };
  if (!terms.every((term) => Object.values(fields).some((text) => text.includes(term)))) {
    return 0;
  }

  let score = terms.reduce((total, term) => {
    if (fields.title === term) total += 60;
    if (fields.title.startsWith(term)) total += 35;
    if (fields.title.includes(term)) total += 24;
    if (fields.description.includes(term)) total += 10;
    if (fields.headings.includes(term)) total += 8;
    if (fields.path.includes(term)) total += 5;
    if (fields.body.includes(term)) total += 2;
    return total;
  }, 0);

  const phrase = terms.join(" ");
  if (terms.length > 1) {
    if (fields.title.includes(phrase)) score += 45;
    if (fields.description.includes(phrase)) score += 22;
    if (fields.headings.includes(phrase)) score += 16;
    if (fields.body.includes(phrase)) score += 8;
  }

  const discoveryBoosts = {
    "/welcome/find-an-answer": 12,
    "/welcome/find-an-owner": 50,
    "/people/who-owns-what": 48,
    "/people/directory": 45,
    "/reference/glossary": 10,
  };
  score += discoveryBoosts[record.path] || 0;
  if (record.path === "/reference/change-log") score -= 30;
  return score;
}

function escapeSearchHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function closeCompanyBrainSearch() {
  const dialog = document.querySelector("[data-company-brain-search]");
  if (!dialog) return;
  dialog.remove();
  document.documentElement.classList.remove("company-brain-search-open");
  lastSearchTrigger?.focus();
}

function renderSearchResults(dialog, index, query) {
  const status = dialog.querySelector("[data-search-status]");
  const results = dialog.querySelector("[data-search-results]");
  const terms = normaliseSearchText(query).split(" ").filter(Boolean);

  if (!terms.length) {
    status.textContent = "Search page titles, headings, and content.";
    results.innerHTML = "";
    return;
  }

  const ranked = index
    .map((record) => ({ record, score: scoreSearchResult(record, terms) }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score || a.record.title.localeCompare(b.record.title))
    .slice(0, 10);

  status.textContent = ranked.length
    ? `${ranked.length} best ${ranked.length === 1 ? "match" : "matches"}`
    : `No matches for “${query.trim()}”`;
  results.innerHTML = ranked
    .map(({ record }) => `
      <li>
        <a href="${escapeSearchHtml(record.path)}">
          <strong>${escapeSearchHtml(record.title)}</strong>
          <span>${escapeSearchHtml(record.description)}</span>
          <small>${escapeSearchHtml(record.path)}</small>
        </a>
      </li>
    `)
    .join("");
}

async function openCompanyBrainSearch(trigger) {
  const existing = document.querySelector("[data-company-brain-search]");
  if (existing) {
    existing.querySelector("input")?.focus();
    return;
  }

  lastSearchTrigger = trigger || document.activeElement;
  const dialog = document.createElement("div");
  dialog.setAttribute("data-company-brain-search", "true");
  dialog.innerHTML = `
    <div data-search-backdrop></div>
    <section role="dialog" aria-modal="true" aria-labelledby="company-brain-search-title">
      <header>
        <div>
          <span id="company-brain-search-title">Search Company Brain</span>
          <small>Internal knowledge base</small>
        </div>
        <button type="button" data-search-close aria-label="Close search">Esc</button>
      </header>
      <label>
        <span class="sr-only">Search Company Brain</span>
        <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M15.25 15.25 11.285 11.285M7.75 12.75a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
        <input type="search" autocomplete="off" placeholder="Try billing, cancellation, or a person's name" />
      </label>
      <p data-search-status role="status" aria-live="polite">Loading the search index…</p>
      <ol data-search-results></ol>
    </section>
  `;
  document.body.appendChild(dialog);
  document.documentElement.classList.add("company-brain-search-open");

  const input = dialog.querySelector("input");
  dialog.querySelector("[data-search-close]").addEventListener("click", closeCompanyBrainSearch);
  dialog.querySelector("[data-search-backdrop]").addEventListener("click", closeCompanyBrainSearch);
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCompanyBrainSearch();
    if (event.key === "Tab") {
      const focusable = [...dialog.querySelectorAll("button, input, a[href]")];
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  });
  input.focus();

  try {
    const index = await loadSearchIndex();
    renderSearchResults(dialog, index, input.value);
    input.addEventListener("input", () => renderSearchResults(dialog, index, input.value));
  } catch (error) {
    dialog.querySelector("[data-search-status]").textContent =
      "Search is temporarily unavailable. Use the navigation or Find an answer.";
  }
}

function useWhiteWordmark(root) {
  root.querySelectorAll("img").forEach((img) => {
    img.setAttribute("src", WHITE_WORDMARK);
    img.removeAttribute("srcset");
  });
}

function syncMobileNavWordmark() {
  if (window.matchMedia("(min-width: 1024px)").matches) return;
  const dark = document.documentElement.classList.contains("dark");
  const src = dark ? WHITE_WORDMARK : NAVY_WORDMARK;
  document.querySelectorAll("a.select-none img.nav-logo").forEach((img) => {
    if (img.closest("#banner")) return;
    img.setAttribute("src", src);
    img.removeAttribute("srcset");
  });
}

function placeHeaderLogo() {
  const banner = document.querySelector("#banner");
  const logoLink = document.querySelector("#sidebar a.select-none");
  if (!banner || !logoLink) return;

  const existingLogo = banner.querySelector("a[data-header-logo]");
  if (existingLogo) {
    existingLogo.setAttribute("href", "/");
    useWhiteWordmark(existingLogo);
    return;
  }

  const clone = logoLink.cloneNode(true);
  clone.setAttribute("data-header-logo", "true");
  clone.setAttribute("href", "/");
  clone.setAttribute("aria-label", "Connect Company Brain home");
  useWhiteWordmark(clone);
  banner.insertBefore(clone, banner.firstChild);
}

function placeHeaderTools() {
  const banner = document.querySelector("#banner");
  if (!banner) return;
  if (banner.querySelector("[data-header-tools]")) return;

  const tools = document.createElement("div");
  tools.setAttribute("data-header-tools", "true");
  tools.innerHTML = `
    <button type="button" data-header-search aria-label="Open search">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path d="M15.25 15.25L11.285 11.285" stroke-linecap="round"/>
        <path d="M7.75 12.75C10.5114 12.75 12.75 10.5114 12.75 7.75C12.75 4.98858 10.5114 2.75 7.75 2.75C4.98858 2.75 2.75 4.98858 2.75 7.75C2.75 10.5114 4.98858 12.75 7.75 12.75Z"/>
      </svg>
      <span>Search</span>
      <kbd>⌘K</kbd>
    </button>
    <div data-header-theme role="group" aria-label="Theme preference">
      <button type="button" data-theme-choice="system" aria-label="Switch to system theme" aria-pressed="false" title="System">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M4.5 15.5L9 14.5L13.5 15.5"/>
          <path d="M9 11.75V14.5"/>
          <path d="M14.25 2.75H3.75C2.645 2.75 1.75 3.645 1.75 4.75V9.75C1.75 10.855 2.645 11.75 3.75 11.75H14.25C15.355 11.75 16.25 10.855 16.25 9.75V4.75C16.25 3.645 15.355 2.75 14.25 2.75Z"/>
        </svg>
      </button>
      <button type="button" data-theme-choice="light" aria-label="Switch to light theme" aria-pressed="false" title="Light">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M9 1.25V2.25"/><path d="M14.48 3.52L13.773 4.227"/><path d="M16.75 9H15.75"/>
          <path d="M14.48 14.48L13.773 13.773"/><path d="M9 16.75V15.75"/><path d="M3.52 14.48L4.227 13.773"/>
          <path d="M1.25 9H2.25"/><path d="M3.52 3.52L4.227 4.227"/>
          <path d="M9 13.25C11.347 13.25 13.25 11.347 13.25 9C13.25 6.653 11.347 4.75 9 4.75C6.653 4.75 4.75 6.653 4.75 9C4.75 11.347 6.653 13.25 9 13.25Z"/>
        </svg>
      </button>
      <button type="button" data-theme-choice="dark" aria-label="Switch to dark theme" aria-pressed="false" title="Dark">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path d="M13 11.75C9.548 11.75 6.75 8.952 6.75 5.5C6.75 4.148 7.183 2.901 7.912 1.878C4.548 2.506 2 5.453 2 9C2 13.004 5.246 16.25 9.25 16.25C12.622 16.25 15.448 13.944 16.259 10.826C15.309 11.409 14.196 11.75 13 11.75Z"/>
        </svg>
      </button>
    </div>
  `;

  tools.querySelector("[data-header-search]").addEventListener("click", (event) => {
    openCompanyBrainSearch(event.currentTarget);
  });

  tools.querySelectorAll("[data-theme-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      setThemePreference(button.getAttribute("data-theme-choice"));
    });
  });

  banner.appendChild(tools);
  markHeaderTheme(currentThemePreference());
}

function placeHeaderChrome() {
  placeHeaderLogo();
  placeHeaderTools();
  syncMobileNavWordmark();
}

placeHeaderChrome();
window.addEventListener("resize", placeHeaderChrome);
document.addEventListener("DOMContentLoaded", placeHeaderChrome);
window.addEventListener("load", placeHeaderChrome);
document.addEventListener(
  "click",
  (event) => {
    const nativeSearch = event.target.closest?.(
      "#search-bar-entry, #search-bar-entry-mobile",
    );
    if (!nativeSearch) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openCompanyBrainSearch(nativeSearch);
  },
  true,
);
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openCompanyBrainSearch(document.querySelector("[data-header-search]"));
  }
});

const headerChromeObserver = new MutationObserver(() => {
  placeHeaderChrome();
  if (document.querySelector("[data-header-theme]")) {
    markHeaderTheme(currentThemePreference());
  }
});
headerChromeObserver.observe(document.documentElement, {
  childList: true,
  subtree: true,
});
