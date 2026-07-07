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
        slug: "bush-hog-143r",
        brand: "Bush Hog",
        model: "143R",
        price: "R1,599",
        badge: "💰",
        badgeLabel: "💰 Budget",
        description: [
          "The Bush Hog 143R is a dependable entry-level brushcutter designed for homeowners, smallholdings and light farming applications. It offers excellent value for money while delivering the power needed to cut grass, weeds and light brush. Built with durability in mind, it's an ideal choice for occasional to regular use without stretching your budget.",
        ],
        idealFor: ["Homeowners", "Small farms", "Garden maintenance", "Light commercial work"],
        features: ["41.5cc petrol engine", "Easy starting", "Heavy-duty gearbox", "Comfortable handlebar design", "Excellent value"],
      },
      {
        slug: "tanaka-143r-hd",
        brand: "Tanaka",
        model: "143R HD",
        price: "R2,199",
        badge: "⚖️",
        badgeLabel: "⚖️ Mid-Range · Best Seller",
        description: [
          "The Tanaka 143R HD is our most popular brushcutter, trusted by farmers, contractors and professionals for its outstanding reliability and performance. Designed for demanding conditions, it combines excellent cutting power with a durable heavy-duty shaft and gearbox, making it the perfect machine for everyday commercial use.",
          "Whether you're clearing thick grass, weeds or maintaining large properties, the Tanaka 143R HD delivers the performance you can depend on.",
        ],
        idealFor: ["Professional contractors", "Farmers", "Municipal maintenance", "Landscaping businesses"],
        features: ["Commercial-grade 41cc engine", "Heavy-duty square drive shaft", "Professional gearbox", "Comfortable harness", "Built for daily use", "Excellent power-to-weight ratio"],
      },
      {
        slug: "husky-143r-hd-elite",
        brand: "Husky",
        model: "143R HD Elite",
        price: "R2,349",
        badge: "🏆",
        badgeLabel: "🏆 Premium",
        description: [
          "The Husky 143R HD Elite is the premium choice in the 143R range. Designed for professionals who demand exceptional durability, comfort and performance, it delivers reliable power throughout long working days.",
          "With premium components and robust construction, it's built to handle the toughest jobs while providing a comfortable operating experience.",
        ],
        idealFor: ["Professional contractors", "Municipalities", "Commercial landscaping", "Intensive daily use"],
        features: ["Premium commercial engine", "Heavy-duty gearbox", "Professional harness", "Comfortable operation", "Long service life", "Built for demanding applications"],
      },
    ],
  },
  chainsaws: {
    title: "Chainsaws",
    icon: "🪚",
    tagline: "Reliable chainsaws for pruning, felling and firewood prep.",
    photo: "images/hero-chainsaw.jpg",
    photoPosition: "50% 40%",
    items: [
      { slug: "dunsch-du565", brand: "Dunsch", model: "DU565", price: "R1,449", badge: "💰", badgeLabel: "💰 Budget", description: ["54.6cc, 2.3kW two-stroke petrol chainsaw with 50cm cutting length."], idealFor: [], features: [] },
      { slug: "husky-cs65t", brand: "Husky", model: "CS65T (20\")", price: "R4,370", badge: "⚖️", badgeLabel: "⚖️ Mid-Range", description: ["65.1cc, 3.7kW petrol chainsaw with 20\" bar, built for grounds maintenance, felling and forestry work."], idealFor: [], features: [] },
      { slug: "tanaka-cs72", brand: "Tanaka", model: "CS72 (22\")", price: "R5,022", badge: "🏆", badgeLabel: "🏆 Premium", description: ["70.7cc, 3.9kW petrol chainsaw with 22\" bar."], idealFor: [], features: [] },
    ],
  },
  blowers: {
    title: "Blowers",
    icon: "🍃",
    tagline: "Handheld and backpack blowers for clearing leaves and debris.",
    photo: "images/hero-blower.jpg",
    photoPosition: "50% 45%",
    items: [
      { slug: "husky-blo300an", brand: "Husky", model: "BLO300AN Handheld Blower", price: "R1,527", badge: "💰", badgeLabel: "💰 Budget", description: ["26cc, 0.95kW petrol handheld blower."], idealFor: [], features: [] },
      { slug: "husky-blo950", brand: "Husky", model: "BLO950 Backpack Blower", price: "R3,065", badge: "⚖️", badgeLabel: "⚖️ Mid-Range", description: ["75.6cc, 3.2kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo850", brand: "Tanaka", model: "BLO850 Backpack Blower", price: "R5,903", badge: "🏆", badgeLabel: "🏆 Premium", description: ["63.3cc, 2.6kW heavy-duty petrol backpack blower."], idealFor: [], features: [] },
    ],
  },
  hedgetrimmers: {
    title: "Hedge Trimmers",
    icon: "🌳",
    tagline: "Petrol and electric hedge trimmers for a sharp, even finish.",
    photo: "images/hero-hedgetrimmer.jpg",
    photoPosition: "50% 45%",
    items: [
      {
        slug: "stiletto-hedge-trimmer",
        brand: "Stiletto",
        model: "Hedge Trimmer",
        price: "R2,837",
        badge: "💰",
        badgeLabel: "💰 Budget",
        description: [
          "A lightweight and dependable hedge trimmer that offers outstanding value for money. Perfect for homeowners, estates and landscapers who need clean, precise hedge trimming with reliable performance.",
        ],
        idealFor: [],
        features: [],
      },
      {
        slug: "husky-glt600",
        brand: "Husky",
        model: "GLT600",
        price: "R2,952",
        badge: "⚖️",
        badgeLabel: "⚖️ Mid-Range",
        description: [
          "Built for demanding users who require extra cutting performance and comfort. Its well-balanced design makes trimming larger hedges faster, easier and more efficient.",
        ],
        idealFor: [],
        features: [],
      },
      {
        slug: "husky-hedge-trimmer-25cc",
        brand: "Husky",
        model: "Hedge Trimmer (25cc)",
        price: "R3,143",
        badge: "🏆",
        badgeLabel: "🏆 Premium",
        description: [
          "Designed for professionals who expect maximum power, precision and durability. Built to handle long working hours and tough trimming applications while delivering a clean, professional finish every time.",
        ],
        idealFor: [],
        features: [],
      },
    ],
  },
  mowers: {
    title: "Lawn Mowers",
    icon: "🚜",
    tagline: "Push, self-propelled and ride-on mowers for gardens of every size.",
    photo: "images/hero-mowers.jpg",
    photoPosition: "50% 60%",
    items: [
      { slug: "husky-m-husexv200", brand: "Husky", model: "19\" Petrol Walk-Behind Mower (196cc)", price: "R8,357", badge: "💰", badgeLabel: "💰 Budget", description: ["19\" aluminium walk-behind mower with a 196cc, 4kW 4-stroke petrol engine."], idealFor: [], features: [] },
      { slug: "husky-tractor-42-15", brand: "Husky", model: "42\" Ride-On Tractor Mower (15HP)", price: "R60,663", badge: "⚖️", badgeLabel: "⚖️ Mid-Range", description: ["42\" cutting width ride-on tractor mower with a 15HP petrol engine."], idealFor: [], features: [] },
      { slug: "husky-mt152ztr", brand: "Husky", model: "60\" Zero-Turn Mower", price: "R136,563", badge: "🏆", badgeLabel: "🏆 Premium", description: ["60\" cutting width commercial zero-turn mower with a 708cc petrol engine."], idealFor: [], features: [] },
    ],
  },
  earthaugers: {
    title: "Earth Augers",
    icon: "🕳️",
    tagline: "Petrol earth augers for fast, effortless hole digging.",
    photo: "images/hero-earthauger.jpg",
    photoPosition: "50% 35%",
    items: [
      { slug: "husky-aug-ag52-100", brand: "Husky", model: "AG52 Earth Auger (100mm bit)", price: "R2,837", badge: "💰", badgeLabel: "💰 Budget", description: ["51.7cc petrol earth auger with a 100mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-ag52-200", brand: "Tanaka", model: "AG52 Earth Auger (200mm bit)", price: "R3,105", badge: "⚖️", badgeLabel: "⚖️ Mid-Range", description: ["51.7cc petrol earth auger with a 200mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-300", brand: "Tanaka", model: "Earth Auger (300mm bit)", price: "R6,095", badge: "🏆", badgeLabel: "🏆 Premium", description: ["Heavy-duty 51.7cc petrol earth auger with a 300mm bit."], idealFor: [], features: [] },
    ],
  },
  spareparts: {
    title: "Spare Parts & Accessories",
    icon: "⚙️",
    tagline: "Replacement engines, blades, cords, oils and consumables to keep equipment running.",
    photo: "images/hero-spareparts.jpg",
    photoPosition: "50% 55%",
    items: [
      { slug: "spares-trimmer-head", brand: "Husky", model: "Aluminium Trimmer Head", price: "R51", badge: "💰", badgeLabel: "💰 Budget", description: ["21.5mm aluminium trimmer head, low-cut."], idealFor: [], features: [] },
      { slug: "husky-eng-143r11a", brand: "Husky", model: "143R11A Replacement Engine", price: "R1,219", badge: "⚖️", badgeLabel: "⚖️ Mid-Range", description: ["41cc, 1.55kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "kudu-trailing-seat", brand: "Kudu", model: "Econo Trailing Seat", price: "R7,590", badge: "🏆", badgeLabel: "🏆 Premium", description: ["Trailing seat accessory for Kudu and Tuffking industrial mowers, lets the operator sit while mowing."], idealFor: [], features: [] },
    ],
  },
};

const heroEl = document.getElementById("category-hero");
const titleEl = document.getElementById("catalog-title");
const taglineEl = document.getElementById("catalog-tagline");
const iconEl = document.getElementById("category-hero-icon");
const photoEl = document.getElementById("category-hero-photo");
const pageTitleEl = document.getElementById("page-title");

function applyHero(category, titleText, taglineText) {
  titleEl.textContent = titleText;
  titleEl.classList.toggle("is-long", titleText.length > 32);
  taglineEl.textContent = taglineText;
  iconEl.textContent = category.icon;
  if (pageTitleEl) pageTitleEl.textContent = `${titleText} | Veldkap Dienste`;

  if (category.photo) {
    heroEl.classList.add("has-photo");
    heroEl.style.setProperty("--category-photo", `url("${category.photo}")`);
    if (category.photoPosition) heroEl.style.backgroundPosition = category.photoPosition;
    iconEl.hidden = true;
  } else if (category.productImage) {
    heroEl.classList.add("has-product");
    photoEl.src = category.productImage;
    photoEl.alt = titleText;
    photoEl.hidden = false;
    iconEl.hidden = true;
  }
}

const params = new URLSearchParams(window.location.search);
const requestedCategory = params.get("cat");
const categoryKey = catalog[requestedCategory] ? requestedCategory : "brushcutters";
const category = catalog[categoryKey];

const rowsEl = document.getElementById("catalog-rows");
const productNameEl = document.getElementById("product-name");

if (rowsEl) {
  const searchEl = document.getElementById("catalog-search");
  const emptyEl = document.getElementById("catalog-empty");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");
  let activeItems = category.items;

  applyHero(category, category.title, category.tagline);

  sidebarLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.cat === categoryKey);
  });

  function renderRows(items) {
    rowsEl.innerHTML = items
      .map(
        (item) => `
        <tr class="price-row" data-href="product.html?cat=${categoryKey}&item=${item.slug}">
          <td>${item.brand}</td>
          <td>${item.badge ? item.badge + " " : ""}${item.model}</td>
          <td class="price-col">${item.price}</td>
        </tr>`
      )
      .join("");
    emptyEl.hidden = items.length > 0;
    rowsEl.closest(".price-table-wrap").hidden = items.length === 0;
  }

  renderRows(activeItems);

  rowsEl.addEventListener("click", (e) => {
    const row = e.target.closest(".price-row");
    if (row) window.location.href = row.dataset.href;
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
} else if (productNameEl) {
  const requestedItem = params.get("item");
  const item = category.items.find((i) => i.slug === requestedItem) || category.items[0];

  const backLink = document.getElementById("back-link");
  backLink.href = `category.html?cat=${categoryKey}`;
  backLink.textContent = `← Back to ${category.title}`;

  const displayName = `${item.badge ? item.badge + " " : ""}${item.brand} ${item.model}`;
  applyHero(category, displayName, category.tagline);

  productNameEl.textContent = displayName;
  document.getElementById("product-price").textContent = item.price;
  const quoteMessage = encodeURIComponent(`Hi, I'm interested in the ${item.brand} ${item.model} (${item.price}). Is it in stock?`);
  document.getElementById("product-quote-link").href = `https://wa.me/27645289171?text=${quoteMessage}`;

  const badgeLabelEl = document.getElementById("product-badge-label");
  if (item.badgeLabel) {
    badgeLabelEl.textContent = item.badgeLabel;
    badgeLabelEl.hidden = false;
  }

  document.getElementById("product-description").innerHTML = item.description
    .map((p) => `<p class="product-detail-desc">${p}</p>`)
    .join("");

  const idealForWrap = document.getElementById("product-ideal-for-wrap");
  const featuresWrap = document.getElementById("product-features-wrap");

  if (item.idealFor.length) {
    document.getElementById("product-ideal-for").innerHTML = item.idealFor.map((i) => `<li>${i}</li>`).join("");
  } else {
    idealForWrap.hidden = true;
  }

  if (item.features.length) {
    document.getElementById("product-features").innerHTML = item.features.map((f) => `<li>${f}</li>`).join("");
  } else {
    featuresWrap.hidden = true;
  }

  if (!item.idealFor.length && !item.features.length) {
    document.getElementById("product-lists").hidden = true;
  }
}
