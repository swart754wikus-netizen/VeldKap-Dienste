const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const catalog = {
  brushcutters: {
    title: "Brush Cutters",
    icon: "✂️",
    tagline: "Petrol brush cutters for clearing overgrowth and tough vegetation.",
    items: [
      { brand: "Bush Hog", model: "143R 41.5cc", price: "R1,599" },
      { brand: "Stiletto", model: "PRO143R 41cc", price: "R1,999" },
      { brand: "Stiletto", model: "143R HD Turbo 41.5cc", price: "R1,999" },
      { brand: "Tanaka", model: "143R HD 41cc", price: "R2,199" },
      { brand: "Tanaka", model: "143R HD Turbo 41.5cc", price: "R2,199" },
      { brand: "Husky", model: "143R HD Turbo 41.5cc", price: "R2,199" },
      { brand: "Husky", model: "143R HD Elite 41cc", price: "R2,349" },
    ],
  },
  trimmers: {
    title: "Trimmers",
    icon: "🌾",
    tagline: "Line trimmers for clean, precise edges around beds and paths.",
    items: [],
  },
  chainsaws: {
    title: "Chainsaws",
    icon: "🪚",
    tagline: "Reliable chainsaws for pruning, felling and firewood prep.",
    items: [],
  },
  blowers: {
    title: "Blowers",
    icon: "🍃",
    tagline: "Handheld and backpack blowers for clearing leaves and debris.",
    items: [],
  },
  hedgetrimmers: {
    title: "Hedge Trimmers",
    icon: "🌳",
    tagline: "Petrol and electric hedge trimmers for a sharp, even finish.",
    items: [],
  },
  mowers: {
    title: "Lawn Mowers",
    icon: "🚜",
    tagline: "Push, self-propelled and ride-on mowers for gardens of every size.",
    items: [],
  },
  earthaugers: {
    title: "Earth Augers",
    icon: "🕳️",
    tagline: "Petrol earth augers for fast, effortless hole digging.",
    items: [],
  },
  spareparts: {
    title: "Spare Parts & Accessories",
    icon: "⚙️",
    tagline: "Blades, cords, filters and consumables to keep equipment running.",
    items: [],
  },
};

const rowsEl = document.getElementById("catalog-rows");

if (rowsEl) {
  const titleEl = document.getElementById("catalog-title");
  const taglineEl = document.getElementById("catalog-tagline");
  const iconEl = document.getElementById("category-hero-icon");
  const pageTitleEl = document.getElementById("page-title");
  const searchEl = document.getElementById("catalog-search");
  const emptyEl = document.getElementById("catalog-empty");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  const params = new URLSearchParams(window.location.search);
  const requestedCategory = params.get("cat");
  const categoryKey = catalog[requestedCategory] ? requestedCategory : "brushcutters";
  const category = catalog[categoryKey];
  let activeItems = category.items;

  titleEl.textContent = category.title;
  taglineEl.textContent = category.tagline;
  iconEl.textContent = category.icon;
  if (pageTitleEl) pageTitleEl.textContent = `${category.title} | Veldkap Dienste`;

  sidebarLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.cat === categoryKey);
  });

  function renderRows(items) {
    rowsEl.innerHTML = items
      .map(
        (item) =>
          `<tr><td>${item.brand}</td><td>${item.model}</td><td class="price-col">${item.price}</td></tr>`
      )
      .join("");
    emptyEl.hidden = items.length > 0;
    rowsEl.closest(".price-table-wrap").hidden = items.length === 0;
  }

  renderRows(activeItems);

  searchEl.addEventListener("input", () => {
    const q = searchEl.value.trim().toLowerCase();
    const filtered = q
      ? activeItems.filter(
          (item) =>
            item.brand.toLowerCase().includes(q) ||
            item.model.toLowerCase().includes(q)
        )
      : activeItems;
    renderRows(filtered);
  });
}
