export const PRODUCTS = [
  {
    id: "variant-01",
    slug: "raspberry",
    variantNo: "01",
    name: "Multani Mitti + Raspberry",
    tagline: "Brightening & Antioxidant Glow",
    price: 499,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 128,
    skinType: ["Normal", "Dull", "Combination"],
    concern: "Glowing",
    scent: "Subtle Berry & Earth",
    image: "/images/raspberry.jpg",
    badge: "Best Seller",
    description: "Sun-dried Fuller's Earth clay infused with nutrient-rich freeze-dried Raspberry fruit powder. Packed with Vitamin C and bioactive polyphenols to revive tired, dull skin and restore natural luminosity.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Freeze-Dried Organic Raspberry Fruit Powder (Rubus Idaeus)",
      "Kaolin Mineral Blend",
      "Natural Fruit Acids"
    ],
    approvedClaims: [
      "Improves natural skin radiance and clarity",
      "Gently draws out surface impurities and excess oil",
      "High natural Vitamin C content for antioxidant shield",
      "100% pure botanical clay with zero artificial fragrance"
    ],
    ritual: [
      "Step 1: Mix 1 tablespoon of Dacha blend with 2 tablespoons of chilled water or rosewater.",
      "Step 2: Form a smooth, velvety paste and apply evenly across clean face & neck.",
      "Step 3: Relax for 10-12 minutes until partially set. Rinse with tepid water while massaging gently."
    ],
    warning: "For external cosmetic use only. Perform a 24-hour patch test inside the elbow prior to first use. Discontinue if irritation occurs.",
    stock: 45
  },
  {
    id: "variant-02",
    slug: "papaya",
    variantNo: "02",
    name: "Multani Mitti + Papaya",
    tagline: "Gentle Enzymatic Exfoliation",
    price: 499,
    originalPrice: 599,
    rating: 4.8,
    reviewsCount: 94,
    skinType: ["Oily", "Combination", "Dull"],
    concern: "Exfoliation",
    scent: "Fresh Tropical Earth",
    image: "/images/raspberry.jpg", // fallback till unique generate
    badge: "Customer Favorite",
    description: "Enzyme-powered skin refinement. Natural Papain enzymes from sun-ripened papaya dissolve dead skin build-up while Multani Mitti purifies pores for a baby-soft, glass-skin finish.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Freeze-Dried Carica Papaya Fruit Powder",
      "Natural Plant Papain Extract",
      "Bentonite Mineral Earth"
    ],
    approvedClaims: [
      "Dissolves surface dead skin cells without harsh micro-beads",
      "Unclogs congested pores and reduces texture",
      "Refines uneven skin feel and rough patches",
      "Non-drying enzymatic clay formula"
    ],
    ritual: [
      "Step 1: Mix 1 tbsp Dacha Papaya with lukewarm water or green tea brew.",
      "Step 2: Apply a thin layer avoiding delicate eye zone.",
      "Step 3: Leave on for 8-10 minutes. Rinse thoroughly."
    ],
    warning: "Contains active botanical enzymes. Avoid using on active broken skin or severe sunburn.",
    stock: 28
  },
  {
    id: "variant-03",
    slug: "chandan",
    variantNo: "03",
    name: "Multani Mitti + Chandan",
    tagline: "Soothing Cooling & Calming Ritual",
    price: 549,
    originalPrice: 649,
    rating: 4.95,
    reviewsCount: 215,
    skinType: ["Sensitive", "Combination", "Oily", "Normal"],
    concern: "Soothing",
    scent: "Sacred Sandalwood & Earth",
    image: "/images/chandan.jpg",
    badge: "Heritage Blend",
    description: "The classic Indian royal ritual. Pure Mysore Sandalwood (Chandan) powder paired with mineral-dense Multani Mitti cools heated skin, calms redness, and imparts a soothing woody aroma.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Santalum Album (White Sandalwood Wood Powder)",
      "Red Sandalwood Extract",
      "Herbal Mineral Clay"
    ],
    approvedClaims: [
      "Instant cooling relief for sun-exposed and stressed skin",
      "Helps calm visible flush and irritation",
      "Time-honored Indian bridal skincare secret",
      "Deeply aromatic and grounding self-care experience"
    ],
    ritual: [
      "Step 1: Blend 1 tbsp Chandan blend with raw milk or chilled cucumber juice.",
      "Step 2: Spread smoothly over face and collarbones.",
      "Step 3: Rest for 15 minutes. Wash off with cool water."
    ],
    warning: "Patch test recommended. Keep away from eye contact.",
    stock: 60
  },
  {
    id: "variant-04",
    slug: "rose",
    variantNo: "04",
    name: "Multani Mitti + Rose",
    tagline: "Hydrating Petal Radiance",
    price: 499,
    originalPrice: 599,
    rating: 4.88,
    reviewsCount: 162,
    skinType: ["Dry", "Normal", "Sensitive"],
    concern: "Hydration",
    scent: "Damask Rose Petals",
    image: "/images/raspberry.jpg",
    badge: "New Formula",
    description: "Shade-dried Kannauj Rose petal powder milled into fine Multani Mitti clay. Delivers essential hydration and botanical nutrients while absorbing excess sebum without stripping moisture.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Rosa Damascena Flower Powder",
      "Freeze-Dried Rose Petal Extract",
      "French Pink Clay Accent"
    ],
    approvedClaims: [
      "Locks in soft floral moisture while detoxifying",
      "Provides gentle soothing comfort for delicate skin",
      "Leaves skin feeling velvety smooth and supple",
      "100% natural, zero synthetic dyes or fragrances"
    ],
    ritual: [
      "Step 1: Combine 1 tbsp Rose blend with pure Dacha Rosewater or plain yogurt.",
      "Step 2: Smooth over clean skin.",
      "Step 3: Leave for 10-12 minutes until light pink dry. Rinse with gentle circular motions."
    ],
    warning: "For external use only. Discontinue if redness occurs.",
    stock: 35
  },
  {
    id: "variant-05",
    slug: "panch-haldi",
    variantNo: "05",
    name: "Multani Mitti + Panch Haldi",
    tagline: "Clarifying Golden Defense",
    price: 499,
    originalPrice: 599,
    rating: 4.92,
    reviewsCount: 180,
    skinType: ["Oily", "Blemish-Prone", "Combination"],
    concern: "Clarifying",
    scent: "Earthy Warm Turmeric",
    image: "/images/haldi.jpg",
    badge: "Blemish Shield",
    description: "A potent synergy of 5 legendary Indian turmeric varieties (Curcuma Longa, Kasthuri Manjal, Black Turmeric, Mango Ginger, and Amba Haldi). Protects against environmental stress and clarifies spot-prone skin.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Panch Haldi Complex (Wild Turmeric, Kasthuri, Curcuma Longa, Mango Ginger, Amba Haldi)",
      "Herbal Bio-Clays"
    ],
    approvedClaims: [
      "Potent clarifying action against daily skin impurities",
      "Non-staining wild turmeric formula",
      "Promotes a bright, even-toned complexion",
      "High natural curcuminoid antioxidant power"
    ],
    ritual: [
      "Step 1: Mix 1 tbsp Panch Haldi with aloe vera gel or rosewater.",
      "Step 2: Apply evenly, focusing on T-zone and problem spots.",
      "Step 3: Rinse after 10 minutes. Follow with lightweight moisturizer."
    ],
    warning: "May leave a very temporary faint natural golden glow on fair skin which washes away easily.",
    stock: 52
  },
  {
    id: "variant-06",
    slug: "blue-pea",
    variantNo: "06",
    name: "Multani Mitti + Butterfly Blue Pea",
    tagline: "Youthful Vitality & Botanical Shield",
    price: 599,
    originalPrice: 699,
    rating: 4.9,
    reviewsCount: 88,
    skinType: ["All Skin Types", "Aging", "Combination"],
    concern: "Antioxidant",
    scent: "Subtle Floral Tea",
    image: "/images/raspberry.jpg",
    badge: "Superfood Blend",
    description: "Rich in blue anthocyanin antioxidants. Butterfly Pea flower powder combined with Multani Mitti shields against pollution oxidative stress and supports natural skin bounce and firm texture.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Clitoria Ternatea (Butterfly Pea Flower) Powder",
      "White Mineral Clay",
      "Plant Polyphenols"
    ],
    approvedClaims: [
      "Rich anthocyanin antioxidant defense against urban pollution",
      "Supports resilient skin feeling and youthful bounce",
      "Visually stunning natural indigo-tinted clay paste",
      "Dermatologically tested gentle formula"
    ],
    ritual: [
      "Step 1: Mix with cold water or aloe hydrasol.",
      "Step 2: Watch the clay turn a mystical indigo blue! Apply smoothly.",
      "Step 3: Rest 12 minutes before rinsing."
    ],
    warning: "Store in a cool dry place out of direct sunlight.",
    stock: 22
  },
  {
    id: "variant-07",
    slug: "coffee",
    variantNo: "07",
    name: "Multani Mitti + Coffee",
    tagline: "Energizing Detox & Micro-Exfoliation",
    price: 499,
    originalPrice: 599,
    rating: 4.86,
    reviewsCount: 142,
    skinType: ["Oily", "Normal", "Dull"],
    concern: "Detox",
    scent: "Rich Dark Roasted Arabica",
    image: "/images/chandan.jpg",
    badge: "Morning Wake-Up",
    description: "Finely ground shade-grown Arabica coffee combined with absorbent Multani Mitti clay. Stimulates surface micro-circulation, invigorates tired skin, and buff away dullness.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Fine Roasted Coffea Arabica Powder",
      "Natural Caffeine Complex",
      "Mineral Earths"
    ],
    approvedClaims: [
      "Energizes and wakes up dull, morning-fatigued skin",
      "Improves surface micro-texture with ultra-fine grounds",
      "Absorbs heavy excess sebum and deep urban grime",
      "Rich roasted coffee aroma for sensory recharge"
    ],
    ritual: [
      "Step 1: Mix 1 tbsp Coffee Dacha with lukewarm milk or honey water.",
      "Step 2: Apply to face in gentle circular strokes.",
      "Step 3: Leave for 10 minutes then rinse thoroughly."
    ],
    warning: "Do not scrub aggressively; let the clay and coffee work naturally.",
    stock: 40
  },
  {
    id: "variant-08",
    slug: "aloe-vera",
    variantNo: "08",
    name: "Multani Mitti + Aloe Vera",
    tagline: "Deep Moisture & Skin Comfort",
    price: 499,
    originalPrice: 599,
    rating: 4.82,
    reviewsCount: 76,
    skinType: ["Dry", "Sensitive", "Combination"],
    concern: "Hydration",
    scent: "Clean Green Leaf",
    image: "/images/raspberry.jpg",
    badge: "Hydra-Balance",
    description: "Concentrated freeze-dried inner leaf Aloe Vera gel powder blended into Multani Mitti. Provides deep moisture binding so dry or sensitive skin can enjoy clay purifying benefits without tightness.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Freeze-Dried Organic Aloe Barbadensis Leaf Juice Powder",
      "Colloidal Mineral Earth",
      "Polysaccharide Complex"
    ],
    approvedClaims: [
      "Clay purifying without typical tightness or dry discomfort",
      "Provides calming hydration to dry, parched skin",
      "Soothes sun sensitivity and redness",
      "Gentle enough for weekly routine"
    ],
    ritual: [
      "Step 1: Mix 1 tbsp Dacha Aloe with plain water.",
      "Step 2: Apply medium layer across face.",
      "Step 3: Rinse after 10-12 minutes."
    ],
    warning: "Perform patch test before application.",
    stock: 30
  },
  {
    id: "variant-09",
    slug: "lemon",
    variantNo: "09",
    name: "Multani Mitti + Lemon",
    tagline: "Oil Balancing & Crisp Refresh",
    price: 499,
    originalPrice: 599,
    rating: 4.78,
    reviewsCount: 110,
    skinType: ["Oily", "Very Oily", "Congested"],
    concern: "Oil-Control",
    scent: "Zesty Citrus Crisp",
    image: "/images/haldi.jpg",
    badge: "Matte Finish",
    description: "Sun-dried lemon peel powder combined with high-absorption Multani Mitti. Controls shine, cuts excess sebum production, and tightens pores for a crisp matte clarity.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Sun-Dried Citrus Limon Peel Powder",
      "Natural Vitamin C Minerals",
      "Purifying Clay Earth"
    ],
    approvedClaims: [
      "Targeted oil-control for shiny T-zones",
      "Tightens appearance of enlarged pores",
      "Refreshes oily skin with natural citrus zest",
      "Zero synthetic oil absorbers"
    ],
    ritual: [
      "Step 1: Mix with cold water or Dacha mint hydrasol.",
      "Step 2: Apply to oil-prone areas.",
      "Step 3: Leave for 8-10 minutes. Rinse thoroughly."
    ],
    warning: "Avoid direct sunlight immediately after wash off. Patch test recommended.",
    stock: 38
  },
  {
    id: "variant-10",
    slug: "tomato",
    variantNo: "10",
    name: "Multani Mitti + Tomato",
    tagline: "Pore Purifying & Natural Brightening",
    price: 499,
    originalPrice: 599,
    rating: 4.85,
    reviewsCount: 92,
    skinType: ["Combination", "Tanned", "Normal"],
    concern: "Glowing",
    scent: "Fresh Garden Vine",
    image: "/images/raspberry.jpg",
    badge: "Tan Clarifier",
    description: "Natural Lycopene antioxidant booster. Organic tomato powder blended with Multani Mitti purifies pore clogging and lightens environmental sun tan dullness.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Solanum Lycopersicum (Tomato) Fruit Powder",
      "Lycopene Complex",
      "Natural Fruit Acids"
    ],
    approvedClaims: [
      "Visibly reduces look of sun-induced tan & dullness",
      "Purifies pores and tightens skin texture",
      "Lycopene antioxidant protection",
      "Gentle non-comedogenic blend"
    ],
    ritual: [
      "Step 1: Mix 1 tbsp Dacha Tomato with rosewater or cold milk.",
      "Step 2: Smooth over face and neck.",
      "Step 3: Wash after 12 minutes."
    ],
    warning: "For external use only. Discontinue if skin feels overly reactive.",
    stock: 25
  },
  {
    id: "variant-11",
    slug: "avocado",
    slugName: "avocado",
    variantNo: "11",
    name: "Multani Mitti + Avocado",
    tagline: "Nourishing Barrier Repair & Rich Moisture",
    price: 599,
    originalPrice: 699,
    rating: 4.93,
    reviewsCount: 65,
    skinType: ["Dry", "Very Dry", "Mature"],
    concern: "Hydration",
    scent: "Creamy Earth",
    image: "/images/chandan.jpg",
    badge: "Velvet Rich",
    description: "Creamy freeze-dried Hass Avocado powder rich in essential fatty acids and Vitamin E mixed with mineral clay. Deeply nourishes dry, compromised skin barriers while gently detoxing.",
    ingredients: [
      "Pure Indian Fuller's Earth (Multani Mitti)",
      "Freeze-Dried Persea Gratissima (Avocado) Powder",
      "Natural Vitamin E",
      "Soft Kaolin Clay"
    ],
    approvedClaims: [
      "Deep nourishing comfort for dry & mature skin",
      "Rich in essential Omega fatty acids & Vitamin E",
      "Helps repair skin moisture barrier feel",
      "Ultra-soft non-stripping clay texture"
    ],
    ritual: [
      "Step 1: Blend 1 tbsp Avocado Dacha with honey or warm water.",
      "Step 2: Massage onto clean face.",
      "Step 3: Leave on for 15 minutes before rinsing with warm water."
    ],
    warning: "Store sealed in dry place. Patch test prior to use.",
    stock: 19
  }
];

export const JOURNAL_ARTICLES = [
  {
    id: "art-1",
    slug: "ancient-clay-ritual-reimagined",
    title: "The Ancient Multani Mitti Ritual, Reimagined for Modern Skincare",
    category: "Brand Story & Science",
    readTime: "4 min read",
    date: "October 2, 2026",
    author: "Dacha Editorial Team",
    image: "/images/hero.jpg",
    excerpt: "For centuries, Indian households relied on Fuller's Earth for pure skin detox. Here is how Dacha pairs raw volcanic clay with freeze-dried botanical superfoods.",
    content: `
      Multani Mitti (Fuller's Earth) is one of the world's oldest natural beauty ingredients. Naturally rich in magnesium chloride, aluminum silicate, and mineral oxides, it acts as a magnetic sponge for sebum and environmental pollutants.
      
      However, traditional raw Multani Mitti could sometimes be harsh or drying if applied incorrectly.
      
      At **DACHA**, our philosophy—**Unfiltered**—combines 100% natural, ethically sourced Indian clay with freeze-dried botanical extracts like organic raspberry, Mysore sandalwood, and 5-turmeric complexes. Freeze-drying locks in 98% of active nutrients without artificial preservatives.
      
      ### 3 Golden Rules of Dacha Masking:
      1. **Don't let it bone-dry crack:** Rinse your clay mask when it is firm and tacky (around 10-12 minutes), before it pulls moisture out of your skin.
      2. **Mix with intention:** Use rosewater for hydration, raw milk/yogurt for gentle lactic acid smoothing, or plain chilled spring water for deep oil control.
      3. **Always follow with moisture:** Seal in your fresh, detoxed pores with your favorite light moisturizer or facial oil.
    `
  },
  {
    id: "art-2",
    slug: "freeze-dried-botanical-powders",
    title: "Why Freeze-Dried Powders Retain 98% Nutrients vs Liquid Extracts",
    category: "Ingredient Science",
    readTime: "5 min read",
    date: "September 28, 2026",
    author: "Charul K., Product Formulator",
    image: "/images/raspberry.jpg",
    excerpt: "Discover why dry clay masks activation at the moment of use beats preservative-heavy water based skincare every time.",
    content: `
      Liquid face masks require chemical preservatives, emulsifiers, and alcohol to stay shelf-stable when mixed with water. 
      
      By keeping **Dacha** in pure dry powder form, you get 100% active, zero-preservative skincare. The moment you add water or rosewater, you activate fresh botanical compounds instantly!
      
      Freeze-drying preserves heat-sensitive vitamins like Vitamin C in Raspberries and Papain enzymes in Papaya that would otherwise degrade in standard heat drying.
    `
  },
  {
    id: "art-3",
    slug: "patch-testing-and-skin-safety",
    title: "Skin Safety 101: Understanding Non-Medical Skincare Personalization",
    category: "Rituals & Safety",
    readTime: "3 min read",
    date: "September 20, 2026",
    author: "Dacha Skincare Lab",
    image: "/images/haldi.jpg",
    excerpt: "How to safely introduce natural botanical clay masks to your weekly routine.",
    content: `
      Natural ingredients can be potent! We always recommend a 24-hour patch test before trying any new skincare product.
      
      Apply a small dab of mixed Dacha clay to the inside of your wrist or behind your earlobe. If no redness or itchiness occurs after 24 hours, you're ready for a full facial ritual!
    `
  }
];

export const FAQS = [
  {
    q: "How often should I use a Dacha Multani Mitti mask?",
    a: "For oily skin, 2-3 times per week is ideal. For dry or sensitive skin, 1 time per week mixed with rosewater or yogurt delivers optimal glow without over-drying."
  },
  {
    q: "Are Dacha products 100% natural?",
    a: "Yes! All Dacha blends contain pure Indian Fuller's Earth clay and freeze-dried botanical powders. Zero synthetic fragrances, zero parabens, zero artificial colorants."
  },
  {
    q: "How does the 'Find Your Dacha' quiz work?",
    a: "Our recommendation engine takes your skin type, primary skincare concern, scent preference, and routine goal, and matches you deterministically with the ideal Dacha variant and alternatives."
  },
  {
    q: "How long does shipping take in India?",
    a: "We ship all orders via Express Courier within 24 hours. Metro cities receive orders within 2-3 business days. Free shipping applies on orders above ₹799."
  },
  {
    q: "Can I return a product if it doesn't suit me?",
    a: "We offer a 15-day risk-free Dacha satisfaction guarantee. Contact our support team via chat or phone for effortless returns."
  }
];
