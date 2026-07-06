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
        description: [
          "The Bush Hog 143R is a dependable entry-level brushcutter designed for homeowners, smallholdings and light farming applications. It offers excellent value for money while delivering the power needed to cut grass, weeds and light brush. Built with durability in mind, it's an ideal choice for occasional to regular use without stretching your budget.",
        ],
        idealFor: ["Homeowners", "Small farms", "Garden maintenance", "Light commercial work"],
        features: ["41.5cc petrol engine", "Easy starting", "Heavy-duty gearbox", "Comfortable handlebar design", "Excellent value"],
      },
      {
        slug: "stiletto-pro143r",
        brand: "Stiletto",
        model: "PRO143R",
        badge: "⭐",
        description: [
          "The Stiletto PRO143R is a powerful, heavy-duty brushcutter built for users who need reliable performance every day. Offering more durability and power than entry-level models, it's perfect for farms, landscapers and contractors looking for outstanding value.",
        ],
        idealFor: ["Farms", "Landscapers", "Contractors", "Large properties"],
        features: ["Powerful 41cc engine", "Heavy-duty shaft", "Commercial gearbox", "Comfortable harness", "Built for regular use"],
      },
      {
        slug: "tanaka-143r-hd",
        brand: "Tanaka",
        model: "143R HD",
        badge: "🔥",
        badgeLabel: "⭐ Our Best Seller",
        description: [
          "The Tanaka 143R HD is our most popular brushcutter, trusted by farmers, contractors and professionals for its outstanding reliability and performance. Designed for demanding conditions, it combines excellent cutting power with a durable heavy-duty shaft and gearbox, making it the perfect machine for everyday commercial use.",
          "Whether you're clearing thick grass, weeds or maintaining large properties, the Tanaka 143R HD delivers the performance you can depend on.",
        ],
        idealFor: ["Professional contractors", "Farmers", "Municipal maintenance", "Landscaping businesses"],
        features: ["Commercial-grade 41cc engine", "Heavy-duty square drive shaft", "Professional gearbox", "Comfortable harness", "Built for daily use", "Excellent power-to-weight ratio"],
      },
      {
        slug: "tanaka-143r-hd-turbo",
        brand: "Tanaka",
        model: "143R HD Turbo",
        badge: "👑",
        description: [
          "The Tanaka 143R HD Turbo is engineered for users who require maximum cutting performance in demanding environments. Featuring a high-performance engine and extra heavy-duty construction, it's ideal for clearing thick grass, dense weeds and challenging terrain with ease.",
          "Designed for professionals who rely on their equipment every day.",
        ],
        idealFor: ["Commercial contractors", "Farmers", "Heavy vegetation", "Daily professional use"],
        features: ["High-performance engine", "Heavy-duty drive shaft", "Professional gearbox", "Superior cutting power", "Built for tough conditions"],
      },
      {
        slug: "husky-143r-hd-elite",
        brand: "Husky",
        model: "143R HD Elite",
        badge: "🏆",
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
    items: [
      { slug: "stiletto-tm-1000", brand: "Stiletto", model: "TM-1000 Electric Trimmer", description: ["1000W electric trimmer for clean, lightweight edge trimming."], idealFor: [], features: [] },
      { slug: "husky-pro30a", brand: "Husky", model: "PRO30A Bent Shaft Trimmer", description: ["26cc, 0.9kW petrol bent shaft trimmer."], idealFor: [], features: [] },
      { slug: "tanaka-pro30a", brand: "Tanaka", model: "PRO30A Bent Shaft Trimmer", description: ["26cc, 0.9kW petrol bent shaft trimmer."], idealFor: [], features: [] },
      { slug: "dunsch-le20056", brand: "Dunsch", model: "LEA LE20056 Telescopic Trimmer", description: ["550W electric telescopic trimmer with 30cm cutting width, corded."], idealFor: [], features: [] },
    ],
  },
  chainsaws: {
    title: "Chainsaws",
    icon: "🪚",
    tagline: "Reliable chainsaws for pruning, felling and firewood prep.",
    items: [
      { slug: "husky-cs52", brand: "Husky", model: "CS52 (18\")", description: ["49.3cc, 2.2kW petrol chainsaw with 18\" bar."], idealFor: [], features: [] },
      { slug: "husky-cs65t", brand: "Husky", model: "CS65T (20\")", description: ["65.1cc, 3.7kW petrol chainsaw with 20\" bar, built for grounds maintenance, felling and forestry work."], idealFor: [], features: [] },
      { slug: "tanaka-cs72", brand: "Tanaka", model: "CS72 (22\")", description: ["70.7cc, 3.9kW petrol chainsaw with 22\" bar."], idealFor: [], features: [] },
      { slug: "dunsch-du565", brand: "Dunsch", model: "DU565", description: ["54.6cc, 2.3kW two-stroke petrol chainsaw with 50cm cutting length."], idealFor: [], features: [] },
    ],
  },
  blowers: {
    title: "Blowers",
    icon: "🍃",
    tagline: "Handheld and backpack blowers for clearing leaves and debris.",
    items: [
      { slug: "husky-blo300an", brand: "Husky", model: "BLO300AN Handheld Blower", description: ["26cc, 0.95kW petrol handheld blower."], idealFor: [], features: [] },
      { slug: "husky-blo650a", brand: "Husky", model: "BLO650A Backpack Blower", description: ["63.3cc, 2.6kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "husky-bl9000", brand: "Husky", model: "BL9000 Backpack Blower", description: ["79.2cc, 2.7kW heavy-duty petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo550", brand: "Tanaka", model: "BLO550 Backpack Blower", description: ["51.7cc, 1.75kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "husky-26-40-mist", brand: "Husky", model: "26/40 Mist Blower", description: ["42.7cc, 2.13kW petrol mist blower for spraying and pest control."], idealFor: [], features: [] },
    ],
  },
  hedgetrimmers: {
    title: "Hedge Trimmers",
    icon: "🌳",
    tagline: "Petrol and electric hedge trimmers for a sharp, even finish.",
    items: [
      {
        slug: "stiletto-hedge-trimmer",
        brand: "Stiletto",
        model: "Hedge Trimmer",
        badge: "⭐",
        badgeLabel: "⭐ Best Value",
        description: [
          "A lightweight and dependable hedge trimmer that offers outstanding value for money. Perfect for homeowners, estates and landscapers who need clean, precise hedge trimming with reliable performance.",
        ],
        idealFor: [],
        features: [],
      },
      {
        slug: "husky-ht600t",
        brand: "Husky",
        model: "HT600T",
        badge: "🔥",
        badgeLabel: "🔥 Most Popular",
        description: [
          "Our most popular hedge trimmer, combining power, durability and easy handling. Ideal for regular garden maintenance, farms and professional landscaping where reliable performance matters.",
        ],
        idealFor: [],
        features: [],
      },
      {
        slug: "husky-glt600",
        brand: "Husky",
        model: "GLT600",
        badge: "👑",
        badgeLabel: "👑 Premium",
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
        badge: "🏆",
        badgeLabel: "🏆 Top of the Range",
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
    items: [
      { slug: "husky-m-husexv200", brand: "Husky", model: "19\" Petrol Walk-Behind Mower (196cc)", description: ["19\" aluminium walk-behind mower with a 196cc, 4kW 4-stroke petrol engine."], idealFor: [], features: [] },
      { slug: "husky-tractor-42-15", brand: "Husky", model: "42\" Ride-On Tractor Mower (15HP)", description: ["42\" cutting width ride-on tractor mower with a 15HP petrol engine."], idealFor: [], features: [] },
      { slug: "husky-ztr14546", brand: "Husky", model: "42\" Zero-Turn Mower", description: ["42\" cutting width zero-turn ride-on mower with a 546cc petrol engine."], idealFor: [], features: [] },
      { slug: "kudu-t850-ex420", brand: "Kudu", model: "850mm Self-Propelled Industrial Mower (Stiletto EX420)", description: ["850mm self-propelled industrial flail mower with a 420cc, 9kW Stiletto engine, 2-speed gearbox and solid rubber tyres."], idealFor: [], features: [] },
      { slug: "estatemaster-600-honda", brand: "Estatemaster", model: "600mm Three Wheeler (Honda GXV160)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 163cc, 3.2kW Honda 4-stroke engine."], idealFor: [], features: [] },
      { slug: "stiletto-reel-17", brand: "Stiletto", model: "17\" Cylinder Mower", description: ["17\" cylinder/reel mower with a 196cc petrol engine, for a fine, striped lawn finish."], idealFor: [], features: [] },
    ],
  },
  earthaugers: {
    title: "Earth Augers",
    icon: "🕳️",
    tagline: "Petrol earth augers for fast, effortless hole digging.",
    items: [
      { slug: "husky-aug-ag52-100", brand: "Husky", model: "AG52 Earth Auger (100mm bit)", description: ["51.7cc petrol earth auger with a 100mm bit."], idealFor: [], features: [] },
      { slug: "husky-aug-ag52-300", brand: "Husky", model: "AG52 Earth Auger (300mm bit)", description: ["51.7cc petrol earth auger with a 300mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-ag52-200", brand: "Tanaka", model: "AG52 Earth Auger (200mm bit)", description: ["51.7cc petrol earth auger with a 200mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-250", brand: "Tanaka", model: "Earth Auger (250mm bit)", description: ["51.7cc petrol earth auger with a 250mm bit."], idealFor: [], features: [] },
    ],
  },
  spareparts: {
    title: "Spare Parts & Accessories",
    icon: "⚙️",
    tagline: "Replacement engines, blades, cords, oils and consumables to keep equipment running.",
    items: [
      { slug: "husky-eng-143r11a", brand: "Husky", model: "143R11A Replacement Engine", description: ["41cc, 1.55kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "spares-trimmer-head", brand: "Husky", model: "Aluminium Trimmer Head", description: ["21.5mm aluminium trimmer head, low-cut."], idealFor: [], features: [] },
      { slug: "spares-trimmer-line", brand: "Husky", model: "Nylon Trimmer Line", description: ["Orange nylon trimmer line, available in 2.0mm, 2.4mm, 2.7mm and 3.5mm, sold loose, in 2kg/10kg rolls or pre-cut lengths."], idealFor: [], features: [] },
      { slug: "spares-2stroke-oil", brand: "Husky", model: "2-Stroke Engine Oil", description: ["2-stroke petrol engine oil, available from 200ml up to 20L."], idealFor: [], features: [] },
      { slug: "spares-chainsaw-oil", brand: "Husky", model: "Chainsaw Bar & Chain Oil", description: ["Virgin cutterbar oil for chainsaws, available in 1L, 5L and 20L."], idealFor: [], features: [] },
      { slug: "tanaka-drill-bits", brand: "Tanaka", model: "Earth Auger Drill Bits", description: ["Replacement earth auger drill bits, available in 100mm, 150mm, 200mm, 250mm and 300mm."], idealFor: [], features: [] },
      { slug: "kudu-trailing-seat", brand: "Kudu", model: "Econo Trailing Seat", description: ["Trailing seat accessory for Kudu and Tuffking industrial mowers, lets the operator sit while mowing."], idealFor: [], features: [] },
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
          <td class="price-col">Get Quote →</td>
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
  const quoteMessage = encodeURIComponent(`Hi, I'd like a quote for the ${item.brand} ${item.model}.`);
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
