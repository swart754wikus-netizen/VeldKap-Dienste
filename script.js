const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const catalog = {
  brushcutters: {
    title: "Brush Cutters",
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
    items: [],
  },
  chainsaws: {
    title: "Chainsaws",
    items: [],
  },
  blowers: {
    title: "Blowers",
    items: [],
  },
  hedgetrimmers: {
    title: "Hedge Trimmers",
    items: [],
  },
  mowers: {
    title: "Lawn Mowers",
    items: [],
  },
  earthaugers: {
    title: "Earth Augers",
    items: [],
  },
  spareparts: {
    title: "Spare Parts & Accessories",
    items: [],
  },
};

const rowsEl = document.getElementById("catalog-rows");

if (rowsEl) {
  const titleEl = document.getElementById("catalog-title");
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
