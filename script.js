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
      { slug: "husky-f5-280", brand: "Husky", model: "F5 280", description: ["38.9cc, 1.90kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-143r-11a-hd-turbo", brand: "Husky", model: "143R-11A HD Turbo", description: ["41.5cc, 1.70kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-541rs-hd", brand: "Husky", model: "541RS HD", description: ["41cc, 1.6kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-541rs-hd-turbo", brand: "Husky", model: "541RS HD Turbo", description: ["41.5cc, 1.70kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-553rs", brand: "Husky", model: "553RS", description: ["50.6cc, 2.3kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-tj53", brand: "Husky", model: "TJ53", description: ["54cc, 2.3kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-157r-11a-hd", brand: "Husky", model: "157R-11A HD", description: ["56.5cc, 2.5kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-pro52-es", brand: "Husky", model: "PRO52-ES", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter with electric start."], idealFor: [], features: [] },
      { slug: "husky-ex50", brand: "Husky", model: "EX50", description: ["47.9cc, 1.47kW four-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-gx50-hd", brand: "Husky", model: "GX50 HD", description: ["47.9cc, 1.47kW four-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "husky-cer420", brand: "Husky", model: "CER420", description: ["41.5cc, 1.6kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-pro143r11-a", brand: "Stiletto", model: "PRO143R11-A", description: ["41cc, 1.55kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-143r-11a-hd-turbo", brand: "Stiletto", model: "143R-11A HD Turbo", description: ["41.5cc, 1.70kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-541rs-hd", brand: "Stiletto", model: "541RS HD", description: ["41cc, 1.6kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-541rs-hd-turbo", brand: "Stiletto", model: "541RS HD Turbo", description: ["41.5cc, 1.70kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-pro55", brand: "Stiletto", model: "PRO55", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-153r-hd", brand: "Stiletto", model: "153R HD", description: ["50.2cc, 1.9kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-pro55a-hd", brand: "Stiletto", model: "PRO55A HD", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-tj53", brand: "Stiletto", model: "TJ53", description: ["54cc, 1.4kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-157r-11a-hd", brand: "Stiletto", model: "157R-11A HD", description: ["56.5cc, 2.5kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "stiletto-pro52cs", brand: "Stiletto", model: "PRO52CS Clearing Saw", description: ["51.7cc, 2.5kW petrol clearing saw for heavy vegetation."], idealFor: [], features: [] },
      { slug: "tanaka-pro55a-hd", brand: "Tanaka", model: "PRO55A HD", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "tanaka-pro52", brand: "Tanaka", model: "PRO52", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "tanaka-pro52-e", brand: "Tanaka", model: "PRO52-E", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter with electric start."], idealFor: [], features: [] },
      { slug: "tanaka-tj53", brand: "Tanaka", model: "TJ53", description: ["54cc, 2.3kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "tanaka-157r-11a-hd", brand: "Tanaka", model: "157R-11A HD", description: ["56.5cc, 2.5kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "tanaka-pro52cs", brand: "Tanaka", model: "PRO52CS Clearing Saw", description: ["51.7cc, 1.8kW petrol clearing saw for heavy vegetation."], idealFor: [], features: [] },
      { slug: "tanaka-pro-63-cs", brand: "Tanaka", model: "PRO-63-CS Clearing Saw", description: ["63cc, 2.6kW petrol clearing saw for heavy vegetation."], idealFor: [], features: [] },
      { slug: "tanaka-ex50", brand: "Tanaka", model: "EX50", description: ["47.9cc, 1.47kW four-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "tanaka-gx50-hd", brand: "Tanaka", model: "GX50 HD", description: ["47.9cc, 1.47kW four-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "bush-hog-tl43-ld", brand: "Bush Hog", model: "TL43 Bull Handle", description: ["42.7cc, 1.25kW two-stroke petrol brush cutter with bull handle."], idealFor: [], features: [] },
      { slug: "bush-hog-143r11-ld", brand: "Bush Hog", model: "143R11 Bull Handle", description: ["41.5cc, 1.47kW two-stroke petrol brush cutter with bull handle, light-duty shaft."], idealFor: [], features: [] },
      { slug: "bush-hog-tl52-ld", brand: "Bush Hog", model: "TL52 Bull Handle", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter with bull handle, light-duty shaft."], idealFor: [], features: [] },
      { slug: "bush-hog-pro55n", brand: "Bush Hog", model: "PRO55N", description: ["51.7cc, 1.75kW two-stroke petrol brush cutter."], idealFor: [], features: [] },
      { slug: "dunsch-du520", brand: "Dunsch", model: "DU520", description: ["52cc, 1.65kW two-stroke petrol brush cutter with 255mm cutting diameter."], idealFor: [], features: [] },
    ],
  },
  trimmers: {
    title: "Trimmers",
    icon: "🌾",
    tagline: "Line trimmers for clean, precise edges around beds and paths.",
    items: [
      { slug: "stiletto-tm-1000", brand: "Stiletto", model: "TM-1000 Electric Trimmer", description: ["1000W electric trimmer for clean, lightweight edge trimming."], idealFor: [], features: [] },
      { slug: "stiletto-pro30a", brand: "Stiletto", model: "PRO30A Bent Shaft Trimmer", description: ["26cc, 0.9kW petrol bent shaft trimmer."], idealFor: [], features: [] },
      { slug: "tanaka-pro30a", brand: "Tanaka", model: "PRO30A Bent Shaft Trimmer", description: ["26cc, 0.9kW petrol bent shaft trimmer."], idealFor: [], features: [] },
      { slug: "husky-pro30a", brand: "Husky", model: "PRO30A Bent Shaft Trimmer", description: ["26cc, 0.9kW petrol bent shaft trimmer."], idealFor: [], features: [] },
      { slug: "dunsch-le20056", brand: "Dunsch", model: "LEA LE20056 Telescopic Trimmer", description: ["550W electric telescopic trimmer with 30cm cutting width, corded."], idealFor: [], features: [] },
    ],
  },
  chainsaws: {
    title: "Chainsaws",
    icon: "🪚",
    tagline: "Reliable chainsaws for pruning, felling and firewood prep.",
    items: [
      { slug: "husky-cs52", brand: "Husky", model: "CS52 (18\")", description: ["49.3cc, 2.2kW petrol chainsaw with 18\" bar."], idealFor: [], features: [] },
      { slug: "husky-cs61", brand: "Husky", model: "CS61", description: ["61.5cc, 2.9kW petrol chainsaw."], idealFor: [], features: [] },
      { slug: "husky-cs65t", brand: "Husky", model: "CS65T (20\")", description: ["65.1cc, 3.7kW petrol chainsaw with 20\" bar, built for grounds maintenance, felling and forestry work."], idealFor: [], features: [] },
      { slug: "husky-cs72", brand: "Husky", model: "CS72", description: ["70.7cc, 3.9kW heavy-duty petrol chainsaw."], idealFor: [], features: [] },
      { slug: "stiletto-pro5500", brand: "Stiletto", model: "PRO5500 (20\")", description: ["52cc, 2.0kW petrol chainsaw with 20\" bar."], idealFor: [], features: [] },
      { slug: "tanaka-pro5500a", brand: "Tanaka", model: "PRO-5500A", description: ["52cc, 2.0kW petrol chainsaw."], idealFor: [], features: [] },
      { slug: "tanaka-cs52", brand: "Tanaka", model: "CS52 (18\")", description: ["49.3cc, 2.2kW petrol chainsaw with 18\" bar."], idealFor: [], features: [] },
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
      { slug: "husky-blo300v", brand: "Husky", model: "BLO300V Handheld Blower (Vacuum Bag)", description: ["26cc, 0.95kW petrol handheld blower with vacuum bag."], idealFor: [], features: [] },
      { slug: "husky-blo650a", brand: "Husky", model: "BLO650A Backpack Blower", description: ["63.3cc, 2.6kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "husky-blo950", brand: "Husky", model: "BLO950 Backpack Blower", description: ["75.6cc, 3.2kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "husky-bl9000", brand: "Husky", model: "BL9000 Backpack Blower", description: ["79.2cc, 2.7kW heavy-duty petrol backpack blower."], idealFor: [], features: [] },
      { slug: "husky-26-40-mist", brand: "Husky", model: "26/40 Mist Blower", description: ["42.7cc, 2.13kW petrol mist blower for spraying and pest control."], idealFor: [], features: [] },
      { slug: "stiletto-blo300a", brand: "Stiletto", model: "BLO300A Handheld Blower", description: ["26cc, 0.95kW petrol handheld blower."], idealFor: [], features: [] },
      { slug: "stiletto-blo300an", brand: "Stiletto", model: "BLO300AN Handheld Blower", description: ["26cc, 0.95kW petrol handheld blower."], idealFor: [], features: [] },
      { slug: "stiletto-blo300vn", brand: "Stiletto", model: "BLO300VN Handheld Vacuum Blower", description: ["26cc, 0.95kW petrol handheld vacuum blower."], idealFor: [], features: [] },
      { slug: "stiletto-blo430", brand: "Stiletto", model: "BLO430 Backpack Blower", description: ["42.7cc, 1.25kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "stiletto-blo650a", brand: "Stiletto", model: "BLO650A Backpack Blower", description: ["63.3cc, 2.6kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "stiletto-blo650", brand: "Stiletto", model: "BLO650 Backpack Blower", description: ["63.3cc, 2.7kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "stiletto-blo950", brand: "Stiletto", model: "BLO950 Backpack Blower", description: ["75.6cc, 3.2kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "stiletto-bl9000", brand: "Stiletto", model: "BL9000 Backpack Blower", description: ["79.2cc, 2.7kW heavy-duty petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo300a", brand: "Tanaka", model: "BLO300A Handheld Blower", description: ["25.4cc, 0.95kW petrol handheld blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo300an", brand: "Tanaka", model: "BLO300AN Handheld Blower", description: ["26cc, 0.95kW petrol handheld blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo300v", brand: "Tanaka", model: "BLO300V Handheld Blower (Vacuum Bag)", description: ["26cc, 0.95kW petrol handheld blower with vacuum bag."], idealFor: [], features: [] },
      { slug: "tanaka-blo430", brand: "Tanaka", model: "BLO430 Backpack Blower", description: ["42.7cc, 1.25kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo550", brand: "Tanaka", model: "BLO550 Backpack Blower", description: ["51.7cc, 1.75kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo650a", brand: "Tanaka", model: "BLO650A Backpack Blower", description: ["63.3cc, 2.6kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo850", brand: "Tanaka", model: "BLO850 Backpack Blower", description: ["63.3cc, 2.6kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-blo950", brand: "Tanaka", model: "BLO950 Backpack Blower", description: ["75.6cc, 3.2kW petrol backpack blower."], idealFor: [], features: [] },
      { slug: "tanaka-bl9000", brand: "Tanaka", model: "BL9000 Backpack Blower", description: ["79.2cc, 2.7kW heavy-duty petrol backpack blower."], idealFor: [], features: [] },
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
      { slug: "husky-m-cha", brand: "Husky", model: "19\" Walk-Behind Mower Chassis", description: ["Aluminium chassis for 19\" walk-behind mowers, engine/motor sold separately."], idealFor: [], features: [] },
      { slug: "husky-m-elec3kw", brand: "Husky", model: "19\" Electric Walk-Behind Mower (3000W)", description: ["19\" aluminium walk-behind mower with a 3000W electric motor."], idealFor: [], features: [] },
      { slug: "husky-m-husexv200", brand: "Husky", model: "19\" Petrol Walk-Behind Mower (196cc)", description: ["19\" aluminium walk-behind mower with a 196cc, 4kW 4-stroke petrol engine."], idealFor: [], features: [] },
      { slug: "husky-m-hongcv200", brand: "Husky", model: "19\" Petrol Walk-Behind Mower (Honda GCV200)", description: ["19\" aluminium walk-behind mower with a 196cc, 4.2kW Honda 4-stroke petrol engine."], idealFor: [], features: [] },
      { slug: "husky-tractor-42-15", brand: "Husky", model: "42\" Ride-On Tractor Mower (15HP)", description: ["42\" cutting width ride-on tractor mower with a 15HP petrol engine."], idealFor: [], features: [] },
      { slug: "husky-bag-42", brand: "Husky", model: "Grass Catcher Box (42\")", description: ["Grass catcher box accessory for 42\" tractor mowers."], idealFor: [], features: [] },
      { slug: "husky-mt107-mulch-kit", brand: "Husky", model: "42\" Mulch Kit", description: ["Mulching kit accessory for 42\" tractor mowers."], idealFor: [], features: [] },
      { slug: "husky-mt098", brand: "Husky", model: "38\" Ride-On Tractor Mower", description: ["38\" cutting width ride-on tractor mower with a 432cc petrol engine."], idealFor: [], features: [] },
      { slug: "husky-ztr14546", brand: "Husky", model: "42\" Zero-Turn Mower", description: ["42\" cutting width zero-turn ride-on mower with a 546cc petrol engine."], idealFor: [], features: [] },
      { slug: "husky-ztr-box", brand: "Husky", model: "Grass Catcher Box (Zero-Turn)", description: ["Grass catcher box accessory for zero-turn mowers."], idealFor: [], features: [] },
      { slug: "husky-mt152ztr", brand: "Husky", model: "60\" Zero-Turn Mower", description: ["60\" cutting width commercial zero-turn mower with a 708cc petrol engine."], idealFor: [], features: [] },
      { slug: "stiletto-steel-cha460", brand: "Stiletto", model: "18\" Steel Mower Chassis", description: ["460mm steel walk-behind mower chassis, engine/motor sold separately."], idealFor: [], features: [] },
      { slug: "stiletto-steel-elec2-2kw", brand: "Stiletto", model: "18\" Electric Walk-Behind Mower (2.2kW)", description: ["18\" steel walk-behind mower with a 2200W electric motor."], idealFor: [], features: [] },
      { slug: "stiletto-steel-elec2-6kw", brand: "Stiletto", model: "18\" Electric Walk-Behind Mower (2.6kW)", description: ["18\" steel walk-behind mower with a 2600W electric motor."], idealFor: [], features: [] },
      { slug: "stiletto-steel-elec3kw", brand: "Stiletto", model: "18\" Electric Walk-Behind Mower (3kW)", description: ["18\" steel walk-behind mower with a 3000W electric motor."], idealFor: [], features: [] },
      { slug: "stiletto-steel-sti196v", brand: "Stiletto", model: "18\" Petrol Walk-Behind Mower (196cc)", description: ["18\" steel walk-behind mower with a 196cc, 4kW 4-stroke petrol engine."], idealFor: [], features: [] },
      { slug: "stiletto-steel-hongcv200", brand: "Stiletto", model: "18\" Petrol Walk-Behind Mower (Honda GCV200)", description: ["18\" steel walk-behind mower with a 196cc, 4.2kW Honda petrol engine."], idealFor: [], features: [] },
      { slug: "stiletto-mt098", brand: "Stiletto", model: "38\" Ride-On Tractor Mower", description: ["38\" cutting width ride-on tractor mower with a 432cc petrol engine."], idealFor: [], features: [] },
      { slug: "stiletto-42-15", brand: "Stiletto", model: "42\" Ride-On Tractor Mower (15HP)", description: ["42\" cutting width ride-on tractor mower with a 15HP petrol engine."], idealFor: [], features: [] },
      { slug: "stiletto-bag-42", brand: "Stiletto", model: "Grass Catcher Box (42\")", description: ["Grass catcher box accessory for 42\" tractor mowers."], idealFor: [], features: [] },
      { slug: "stiletto-ztr14546", brand: "Stiletto", model: "42\" Zero-Turn Mower", description: ["42\" cutting width zero-turn ride-on mower with a 546cc petrol engine."], idealFor: [], features: [] },
      { slug: "stiletto-ztr-box", brand: "Stiletto", model: "Grass Catcher Box (Zero-Turn)", description: ["Grass catcher box accessory for zero-turn mowers."], idealFor: [], features: [] },
      { slug: "stiletto-mt152ztr", brand: "Stiletto", model: "60\" Zero-Turn Mower", description: ["60\" cutting width commercial zero-turn mower with a 708cc petrol engine."], idealFor: [], features: [] },
      { slug: "stiletto-reel-17", brand: "Stiletto", model: "17\" Cylinder Mower", description: ["17\" cylinder/reel mower with a 196cc petrol engine, for a fine, striped lawn finish."], idealFor: [], features: [] },
      { slug: "stiletto-reel-20", brand: "Stiletto", model: "20\" Cylinder Mower", description: ["20\" cylinder/reel mower with a 196cc petrol engine, for a fine, striped lawn finish."], idealFor: [], features: [] },
      { slug: "tanaka-mt098", brand: "Tanaka", model: "38\" Ride-On Tractor Mower", description: ["38\" cutting width ride-on tractor mower with a 432cc petrol engine."], idealFor: [], features: [] },
      { slug: "tanaka-107-16", brand: "Tanaka", model: "42\" Ride-On Tractor Mower (15HP)", description: ["42\" cutting width ride-on tractor mower with a 15HP petrol engine."], idealFor: [], features: [] },
      { slug: "tanaka-bag-42", brand: "Tanaka", model: "Grass Catcher Box (42\")", description: ["Grass catcher box accessory for 42\" tractor mowers."], idealFor: [], features: [] },
      { slug: "tanaka-ztr14546", brand: "Tanaka", model: "42\" Zero-Turn Mower", description: ["42\" cutting width zero-turn ride-on mower with a 546cc petrol engine."], idealFor: [], features: [] },
      { slug: "tanaka-ztr-box", brand: "Tanaka", model: "Grass Catcher Box (Zero-Turn)", description: ["Grass catcher box accessory for zero-turn mowers."], idealFor: [], features: [] },
      { slug: "estatemaster-600-stiexv196-mag", brand: "Estatemaster", model: "600mm Three Wheeler (Stiletto EXV196, Mag Wheels)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 196cc, 4kW Stiletto 4-stroke engine and mag wheels."], idealFor: [], features: [] },
      { slug: "estatemaster-600-stiexv196", brand: "Estatemaster", model: "600mm Three Wheeler (Stiletto EXV196)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 196cc, 4kW Stiletto 4-stroke engine."], idealFor: [], features: [] },
      { slug: "estatemaster-600-lifan-mag", brand: "Estatemaster", model: "600mm Three Wheeler (Lifan 252cc, Mag Wheels)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 252cc, 4.6kW Lifan 4-stroke engine and mag wheels."], idealFor: [], features: [] },
      { slug: "estatemaster-600-lifan", brand: "Estatemaster", model: "600mm Three Wheeler (Lifan 252cc)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 252cc, 4.6kW Lifan 4-stroke engine."], idealFor: [], features: [] },
      { slug: "estatemaster-600-loncin-mag", brand: "Estatemaster", model: "600mm Three Wheeler (Loncin 224cc, Mag Wheels)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 224cc, 4.5kW Loncin 4-stroke engine and mag wheels."], idealFor: [], features: [] },
      { slug: "estatemaster-600-loncin", brand: "Estatemaster", model: "600mm Three Wheeler (Loncin 224cc)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 224cc, 4.5kW Loncin 4-stroke engine."], idealFor: [], features: [] },
      { slug: "estatemaster-600-honda-mag", brand: "Estatemaster", model: "600mm Three Wheeler (Honda GXV160, Mag Wheels)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 163cc, 3.2kW Honda 4-stroke engine and mag wheels."], idealFor: [], features: [] },
      { slug: "estatemaster-600-honda", brand: "Estatemaster", model: "600mm Three Wheeler (Honda GXV160)", description: ["Heavy-duty 600mm three-wheeler industrial mower with a 163cc, 3.2kW Honda 4-stroke engine."], idealFor: [], features: [] },
      { slug: "kudu-t850-ex420", brand: "Kudu", model: "850mm Self-Propelled Industrial Mower (Stiletto EX420)", description: ["850mm self-propelled industrial flail mower with a 420cc, 9kW Stiletto engine, 2-speed gearbox and solid rubber tyres."], idealFor: [], features: [] },
      { slug: "kudu-t850-hon", brand: "Kudu", model: "850mm Self-Propelled Industrial Mower (Honda GX390)", description: ["850mm self-propelled industrial flail mower with a 389cc, 8.2kW Honda GX390 engine, 2-speed gearbox and solid rubber tyres."], idealFor: [], features: [] },
      { slug: "turbomow-19-chassis", brand: "Turbomow", model: "19\" Aluminium Mower Chassis", description: ["19\" aluminium turbo vac mower chassis, engine/motor sold separately."], idealFor: [], features: [] },
      { slug: "turbomow-19-elec2-2kw", brand: "Turbomow", model: "19\" Electric Aluminium Mower (2.2kW)", description: ["19\" aluminium turbo vac mower with a 2.2kW Stiletto electric motor."], idealFor: [], features: [] },
      { slug: "turbomow-19-elec2-6kw", brand: "Turbomow", model: "19\" Electric Aluminium Mower (2.6kW)", description: ["19\" aluminium turbo vac mower with a 2.6kW Stiletto electric motor."], idealFor: [], features: [] },
      { slug: "turbomow-19-elec3kw", brand: "Turbomow", model: "19\" Electric Aluminium Mower (3kW)", description: ["19\" aluminium turbo vac mower with a 3kW Stiletto electric motor."], idealFor: [], features: [] },
      { slug: "turbomow-19-stiexv196", brand: "Turbomow", model: "19\" Petrol Aluminium Mower (Stiletto EXV196)", description: ["19\" aluminium turbo vac mower with a 196cc, 4kW Stiletto 4-stroke engine."], idealFor: [], features: [] },
      { slug: "turbomow-19-hongcv200", brand: "Turbomow", model: "19\" Petrol Aluminium Mower (Honda GCV200)", description: ["19\" aluminium turbo vac mower with a 196cc, 4.2kW Honda 4-stroke engine."], idealFor: [], features: [] },
      { slug: "turbomow-19-hon-gxv160", brand: "Turbomow", model: "19\" Petrol Aluminium Mower (Honda GXV160)", description: ["19\" aluminium turbo vac mower with a 163cc, 3.2kW Honda 4-stroke engine."], idealFor: [], features: [] },
      { slug: "turbomow-22-stiexv196", brand: "Turbomow", model: "22\" Petrol Aluminium Mower (Stiletto EXV196)", description: ["22\" aluminium turbo vac mower with a 196cc, 4kW Stiletto 4-stroke engine."], idealFor: [], features: [] },
      { slug: "turbomow-22-hon", brand: "Turbomow", model: "22\" Petrol Aluminium Mower (Honda GXV160)", description: ["22\" aluminium turbo vac mower with a 163cc, 3.2kW Honda 4-stroke engine."], idealFor: [], features: [] },
      { slug: "tuffking-750-kb480", brand: "Tuffking", model: "750mm Self-Propelled Industrial Mower (Lifan KB480)", description: ["750mm self-propelled industrial mower with a 479cc, 11.5kW Lifan engine and bar blade."], idealFor: [], features: [] },
      { slug: "tuffking-750-ex420", brand: "Tuffking", model: "750mm Self-Propelled Industrial Mower (Stiletto EX420)", description: ["750mm self-propelled industrial mower with a 420cc, 9kW Stiletto engine and bar blade."], idealFor: [], features: [] },
      { slug: "tuffking-750-hon", brand: "Tuffking", model: "750mm Self-Propelled Industrial Mower (Honda GX390)", description: ["750mm self-propelled industrial mower with a 389cc, 8.2kW Honda engine and bar blade."], idealFor: [], features: [] },
      { slug: "grazer-850-detroit", brand: "Grazer", model: "850mm Self-Propelled Industrial Mower (Detroit DV452E)", description: ["850mm self-propelled industrial mower with a 452cc, 9.2kW Detroit engine."], idealFor: [], features: [] },
    ],
  },
  earthaugers: {
    title: "Earth Augers",
    icon: "🕳️",
    tagline: "Petrol earth augers for fast, effortless hole digging.",
    items: [
      { slug: "husky-aug-ag52-100", brand: "Husky", model: "AG52 Earth Auger (100mm bit)", description: ["51.7cc petrol earth auger with a 100mm bit."], idealFor: [], features: [] },
      { slug: "husky-aug-ag52-150", brand: "Husky", model: "AG52 Earth Auger (150mm bit)", description: ["51.7cc petrol earth auger with a 150mm bit."], idealFor: [], features: [] },
      { slug: "husky-aug-ag52-200", brand: "Husky", model: "AG52 Earth Auger (200mm bit)", description: ["51.7cc petrol earth auger with a 200mm bit."], idealFor: [], features: [] },
      { slug: "husky-aug-ag52-250", brand: "Husky", model: "AG52 Earth Auger (250mm bit)", description: ["51.7cc petrol earth auger with a 250mm bit."], idealFor: [], features: [] },
      { slug: "husky-aug-ag52-300", brand: "Husky", model: "AG52 Earth Auger (300mm bit)", description: ["51.7cc petrol earth auger with a 300mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-ag52-100", brand: "Tanaka", model: "AG52 Earth Auger (100mm bit)", description: ["51.7cc petrol earth auger with a 100mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-ag52-150", brand: "Tanaka", model: "AG52 Earth Auger (150mm bit)", description: ["51.7cc petrol earth auger with a 150mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-ag52-200", brand: "Tanaka", model: "AG52 Earth Auger (200mm bit)", description: ["51.7cc petrol earth auger with a 200mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-ag52-250", brand: "Tanaka", model: "AG52 Earth Auger (250mm bit)", description: ["51.7cc petrol earth auger with a 250mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-ag52-300", brand: "Tanaka", model: "AG52 Earth Auger (300mm bit)", description: ["51.7cc petrol earth auger with a 300mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-100", brand: "Tanaka", model: "Earth Auger (100mm bit)", description: ["51.7cc petrol earth auger with a 100mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-150", brand: "Tanaka", model: "Earth Auger (150mm bit)", description: ["51.7cc petrol earth auger with a 150mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-200", brand: "Tanaka", model: "Earth Auger (200mm bit)", description: ["51.7cc petrol earth auger with a 200mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-250", brand: "Tanaka", model: "Earth Auger (250mm bit)", description: ["51.7cc petrol earth auger with a 250mm bit."], idealFor: [], features: [] },
      { slug: "tanaka-aug-300", brand: "Tanaka", model: "Earth Auger (300mm bit)", description: ["51.7cc petrol earth auger with a 300mm bit."], idealFor: [], features: [] },
    ],
  },
  spareparts: {
    title: "Spare Parts & Accessories",
    icon: "⚙️",
    tagline: "Replacement engines, blades, cords, oils and consumables to keep equipment running.",
    items: [
      { slug: "husky-eng-pro33a", brand: "Husky", model: "PRO33A Replacement Engine", description: ["32.7cc, 0.9kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-tl43", brand: "Husky", model: "TL43 Replacement Engine", description: ["43cc, 1.25kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-tl52", brand: "Husky", model: "TL52 Replacement Engine", description: ["52cc, 1.45kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-143r11a", brand: "Husky", model: "143R11A Replacement Engine", description: ["41cc, 1.55kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-cer420", brand: "Husky", model: "CER420 Replacement Engine", description: ["41.5cc, 1.6kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-153r", brand: "Husky", model: "153R Replacement Engine", description: ["50.2cc, 1.9kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-pro55a", brand: "Husky", model: "PRO55A Replacement Engine", description: ["51.7cc, 1.75kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-bc52hd", brand: "Husky", model: "BC52HD Replacement Engine", description: ["51.7cc, 1.8kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-143r11a-turbo", brand: "Husky", model: "143R11A Turbo Replacement Engine", description: ["41.5cc, 1.70kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-541rs-turbo", brand: "Husky", model: "541RS Turbo Replacement Engine", description: ["41.5cc, 1.75kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-157r-11a", brand: "Husky", model: "157R-11A Replacement Engine", description: ["56.5cc, 2.5kW replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-ex50", brand: "Husky", model: "EX50 Replacement Engine", description: ["47.9cc, 1.47kW four-stroke replacement engine for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "husky-eng-pro52-es", brand: "Husky", model: "PRO52-ES Replacement Engine", description: ["51.7cc, 1.75kW replacement engine with electric start for Husky brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-tl33", brand: "Stiletto", model: "TL33 Replacement Engine", description: ["32.7cc, 0.9kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-tl43", brand: "Stiletto", model: "TL43 Replacement Engine", description: ["43cc, 1.25kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-tl52", brand: "Stiletto", model: "TL52 Replacement Engine", description: ["52cc, 1.45kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-pro143r11", brand: "Stiletto", model: "PRO143R11 Replacement Engine (Red)", description: ["41cc, 1.55kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-143r11a", brand: "Stiletto", model: "143R11A Replacement Engine", description: ["41cc, 1.55kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-143r11a-turbo", brand: "Stiletto", model: "143R11A Turbo Replacement Engine", description: ["41.5cc, 1.70kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-541rs-turbo", brand: "Stiletto", model: "541RS Turbo Replacement Engine", description: ["41.5cc, 1.75kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-153r", brand: "Stiletto", model: "153R Replacement Engine", description: ["50.2cc, 1.9kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-pro55", brand: "Stiletto", model: "PRO55 Replacement Engine", description: ["51.7cc, 1.8kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-pro55a", brand: "Stiletto", model: "PRO55A Replacement Engine", description: ["51.7cc, 1.75kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-tj53", brand: "Stiletto", model: "TJ53 Replacement Engine", description: ["54cc, 1.4kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "stiletto-eng-157r-11a", brand: "Stiletto", model: "157R-11A Replacement Engine", description: ["56.5cc, 2.5kW replacement engine for Stiletto brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-pro33a", brand: "Tanaka", model: "PRO33A Replacement Engine", description: ["32.7cc, 0.9kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-tl43", brand: "Tanaka", model: "TL43 Replacement Engine", description: ["43cc, 1.25kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-tl52", brand: "Tanaka", model: "TL52 Replacement Engine", description: ["52cc, 1.45kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-143r-11", brand: "Tanaka", model: "143R-11 Replacement Engine", description: ["41.5cc, 1.55kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-ae500", brand: "Tanaka", model: "AE500 Replacement Engine", description: ["50.2cc, 1.9kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-pro55a", brand: "Tanaka", model: "PRO55A Replacement Engine", description: ["51.7cc, 1.75kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-143r11a-turbo", brand: "Tanaka", model: "143R11A Turbo Replacement Engine", description: ["41.5cc, 1.70kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-541rs-turbo", brand: "Tanaka", model: "541RS Turbo Replacement Engine", description: ["41.5cc, 1.75kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-157r-11a", brand: "Tanaka", model: "157R-11A Replacement Engine", description: ["56.5cc, 2.5kW replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-pro52-es", brand: "Tanaka", model: "PRO52-ES Replacement Engine", description: ["51.7cc, 1.75kW replacement engine with electric start for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "tanaka-eng-ex50", brand: "Tanaka", model: "EX50 Replacement Engine", description: ["47.9cc, 1.47kW four-stroke replacement engine for Tanaka brush cutters."], idealFor: [], features: [] },
      { slug: "bush-hog-eng-tl43", brand: "Bush Hog", model: "TL43 Replacement Engine", description: ["42.7cc, 1.25kW replacement engine for Bush Hog brush cutters."], idealFor: [], features: [] },
      { slug: "bush-hog-eng-tl52", brand: "Bush Hog", model: "TL52 Replacement Engine", description: ["51.7cc, 1.75kW replacement engine for Bush Hog brush cutters."], idealFor: [], features: [] },
      { slug: "bush-hog-eng-143r11", brand: "Bush Hog", model: "143R11 Replacement Engine", description: ["41.5cc, 1.47kW replacement engine for Bush Hog brush cutters."], idealFor: [], features: [] },
      { slug: "honda-hgx50tsdx", brand: "Honda", model: "HGX50TSDX Replacement Engine", description: ["47.9cc, 1.47kW four-stroke replacement engine for brush cutters."], idealFor: [], features: [] },
      { slug: "honda-hgcv200hn2g7", brand: "Honda", model: "HGCV200HN2G7 Replacement Engine", description: ["201cc, 4.2kW replacement engine, 22mm shaft."], idealFor: [], features: [] },
      { slug: "honda-hgxv160vert", brand: "Honda", model: "HGXV160VERT Replacement Engine", description: ["163cc, 3.2kW replacement engine, 22.2mm vertical shaft."], idealFor: [], features: [] },
      { slug: "honda-hgp160hqx1", brand: "Honda", model: "HGP160HQX1 Replacement Engine", description: ["163cc, 3.6kW replacement engine, 3/4\" keyed shaft."], idealFor: [], features: [] },
      { slug: "honda-hgx160qxhorz", brand: "Honda", model: "HGX160QXHORZ Replacement Engine", description: ["163cc, 3.6kW replacement engine, 3/4\" keyed horizontal shaft."], idealFor: [], features: [] },
      { slug: "honda-hgx270qxhorz", brand: "Honda", model: "HGX270QXHORZ Replacement Engine", description: ["270cc, 6.3kW replacement engine, 1\" keyed shaft."], idealFor: [], features: [] },
      { slug: "honda-hgx390qxhorz", brand: "Honda", model: "HGX390QXHORZ Replacement Engine", description: ["389cc, 8.2kW replacement engine, 1\" keyed shaft."], idealFor: [], features: [] },
      { slug: "spares-trimmer-head", brand: "Husky", model: "Aluminium Trimmer Head", description: ["21.5mm aluminium trimmer head, low-cut."], idealFor: [], features: [] },
      { slug: "spares-trimmer-line", brand: "Husky", model: "Nylon Trimmer Line", description: ["Orange nylon trimmer line, available in 2.0mm, 2.4mm, 2.7mm and 3.5mm, sold loose, in 2kg/10kg rolls or pre-cut lengths."], idealFor: [], features: [] },
      { slug: "spares-grease", brand: "Husky", model: "Grease", description: ["120g grease tube for brush cutter and trimmer gearboxes."], idealFor: [], features: [] },
      { slug: "spares-2stroke-oil", brand: "Husky", model: "2-Stroke Engine Oil", description: ["2-stroke petrol engine oil, available from 200ml up to 20L."], idealFor: [], features: [] },
      { slug: "spares-chainsaw-oil", brand: "Husky", model: "Chainsaw Bar & Chain Oil", description: ["Virgin cutterbar oil for chainsaws, available in 1L, 5L and 20L."], idealFor: [], features: [] },
      { slug: "spares-sae40-oil", brand: "Husky", model: "SAE40 4-Stroke Engine Oil", description: ["SAE40 oil for 4-stroke petrol engines, available in 500ml and 5L."], idealFor: [], features: [] },
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
