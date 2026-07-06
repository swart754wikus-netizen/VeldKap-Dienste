document.getElementById("year").textContent = new Date().getFullYear();

const catalog = {
  mowers: {
    title: "Lawn Mowers",
    items: [],
  },
  brushcutters: {
    title: "Brush Cutters & Trimmers",
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
  chainsaws: {
    title: "Chainsaws",
    items: [],
  },
  gardentools: {
    title: "Garden Tools",
    items: [],
  },
  spareparts: {
    title: "Spare Parts & Accessories",
    items: [],
  },
  repairs: {
    title: "Repairs & Servicing",
    items: [],
  },
};

const modal = document.getElementById("catalog-modal");
const titleEl = document.getElementById("catalog-title");
const searchEl = document.getElementById("catalog-search");
const rowsEl = document.getElementById("catalog-rows");
const emptyEl = document.getElementById("catalog-empty");

let activeItems = [];
let lastFocused = null;

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

function openCatalog(categoryKey) {
  const category = catalog[categoryKey];
  if (!category) return;
  activeItems = category.items;
  titleEl.textContent = category.title;
  searchEl.value = "";
  renderRows(activeItems);
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  searchEl.focus();
}

function closeCatalog() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll(".product-card[data-category]").forEach((card) => {
  card.addEventListener("click", () => openCatalog(card.dataset.category));
});

modal.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", closeCatalog);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.hidden) closeCatalog();
});

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
