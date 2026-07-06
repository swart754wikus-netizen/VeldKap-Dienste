const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const catalog = {
  brushcutters: {
    title: "Brush Cutters",
    icon: "✂️",
    tagline: "Petrol brush cutters for clearing overgrowth and tough vegetation.",
    photo: "images/hero-brushcutter.jpg",
    items: [
      {
        name: "Bush Hog 143R",
        price: "R1,599",
        description: [
          "The Bush Hog 143R is a dependable entry-level brushcutter designed for homeowners, smallholdings and light farming applications. It offers excellent value for money while delivering the power needed to cut grass, weeds and light brush. Built with durability in mind, it's an ideal choice for occasional to regular use without stretching your budget.",
        ],
        idealFor: ["Homeowners", "Small farms", "Garden maintenance", "Light commercial work"],
        features: ["41.5cc petrol engine", "Easy starting", "Heavy-duty gearbox", "Comfortable handlebar design", "Excellent value"],
      },
      {
        name: "Stiletto PRO143R",
        badge: "⭐",
        price: "R1,999",
        description: [
          "The Stiletto PRO143R is a powerful, heavy-duty brushcutter built for users who need reliable performance every day. Offering more durability and power than entry-level models, it's perfect for farms, landscapers and contractors looking for outstanding value.",
        ],
        idealFor: ["Farms", "Landscapers", "Contractors", "Large properties"],
        features: ["Powerful 41cc engine", "Heavy-duty shaft", "Commercial gearbox", "Comfortable harness", "Built for regular use"],
      },
      {
        name: "Tanaka 143R HD",
        badge: "🔥",
        badgeLabel: "⭐ Our Best Seller",
        price: "R2,199",
        description: [
          "The Tanaka 143R HD is our most popular brushcutter, trusted by farmers, contractors and professionals for its outstanding reliability and performance. Designed for demanding conditions, it combines excellent cutting power with a durable heavy-duty shaft and gearbox, making it the perfect machine for everyday commercial use.",
          "Whether you're clearing thick grass, weeds or maintaining large properties, the Tanaka 143R HD delivers the performance you can depend on.",
        ],
        idealFor: ["Professional contractors", "Farmers", "Municipal maintenance", "Landscaping businesses"],
        features: ["Commercial-grade 41cc engine", "Heavy-duty square drive shaft", "Professional gearbox", "Comfortable harness", "Built for daily use", "Excellent power-to-weight ratio"],
      },
      {
        name: "Tanaka 143R HD Turbo",
        badge: "👑",
        price: "R2,199",
        description: [
          "The Tanaka 143R HD Turbo is engineered for users who require maximum cutting performance in demanding environments. Featuring a high-performance engine and extra heavy-duty construction, it's ideal for clearing thick grass, dense weeds and challenging terrain with ease.",
          "Designed for professionals who rely on their equipment every day.",
        ],
        idealFor: ["Commercial contractors", "Farmers", "Heavy vegetation", "Daily professional use"],
        features: ["High-performance engine", "Heavy-duty drive shaft", "Professional gearbox", "Superior cutting power", "Built for tough conditions"],
      },
      {
        name: "Husky 143R HD Elite",
        badge: "🏆",
        price: "R2,349",
        description: [
          "The Husky 143R HD Elite is the premium choice in the 143R range. Designed for professionals who demand exceptional durability, comfort and performance, it delivers reliable power throughout long working days.",
          "With premium components and robust construction, it's built to handle the toughest jobs while providing a comfortable operating experience.",
        ],
        idealFor: ["Professional contractors", "Municipalities", "Commercial landscaping", "Intensive daily use"],
        features: ["Premium commercial engine", "Heavy-duty gearbox", "Professional harness", "Comfortable operation", "Long service life", "Built for demanding applications"],
      },
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
  const heroEl = document.getElementById("category-hero");
  const titleEl = document.getElementById("catalog-title");
  const taglineEl = document.getElementById("catalog-tagline");
  const iconEl = document.getElementById("category-hero-icon");
  const photoEl = document.getElementById("category-hero-photo");
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

  if (category.photo) {
    heroEl.classList.add("has-photo");
    heroEl.style.setProperty("--category-photo", `url("${category.photo}")`);
    iconEl.hidden = true;
  } else if (category.productImage) {
    heroEl.classList.add("has-product");
    photoEl.src = category.productImage;
    photoEl.alt = category.title;
    photoEl.hidden = false;
    iconEl.hidden = true;
  }

  sidebarLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.cat === categoryKey);
  });

  function renderRows(items) {
    rowsEl.innerHTML = items
      .map(
        (item) => `
        <article class="product-detail-card">
          <div class="product-detail-header">
            <h3>${item.badge ? item.badge + " " : ""}${item.name}</h3>
            <span class="product-detail-price">${item.price}</span>
          </div>
          ${item.badgeLabel ? `<span class="product-detail-badge">${item.badgeLabel}</span>` : ""}
          ${item.description.map((p) => `<p class="product-detail-desc">${p}</p>`).join("")}
          <div class="product-detail-lists">
            <div>
              <h4>Ideal for</h4>
              <ul>${item.idealFor.map((i) => `<li>${i}</li>`).join("")}</ul>
            </div>
            <div>
              <h4>Key Features</h4>
              <ul>${item.features.map((f) => `<li>${f}</li>`).join("")}</ul>
            </div>
          </div>
        </article>`
      )
      .join("");
    emptyEl.hidden = items.length > 0;
    rowsEl.hidden = items.length === 0;
  }

  renderRows(activeItems);

  searchEl.addEventListener("input", () => {
    const q = searchEl.value.trim().toLowerCase();
    const filtered = q
      ? activeItems.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            item.description.some((p) => p.toLowerCase().includes(q))
        )
      : activeItems;
    renderRows(filtered);
  });
}
