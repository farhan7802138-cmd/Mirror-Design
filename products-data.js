/* ============================================================
   RAHMAN — Aluminium & Glass Works
   Product Catalog Database
   ============================================================ */

const productsData = [
  // ==================== NEW MIRROR DESIGNS (1-13) ====================
  {
    id: 1,
    slug: "wavy-royal-blue-velvet-floor-mirror",
    title: "Wavy Royal Blue Velvet Floor Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.29.16 PM (1).jpeg",
    description: "A stunning full-length floor mirror featuring an organic wavy silhouette wrapped in premium velvet fabric. Handcrafted with precision, this designer mirror features soft cushioning and a choice of vibrant royal blue, deep purple, or classic black velvet finishes. It comes with a matching round velvet dressing stool/ottoman to elevate the luxury feel of your bedroom, closet, or showroom space.",
    specs: {
      "Dimensions": "6.0 ft x 3.0 ft (72 in x 36 in)",
      "Frame Material": "Cushioned MDF Board wrapped in Premium Velvet Fabric",
      "Backlight Options": "Custom LED Backlighting available (Warm White, Cool White, or RGB Pink/Blue)",
      "Customization": "Fully customizable in size, velvet fabric color, and backlight selection",
      "Included Accessories": "Matching velvet upholstered dressing stool/ottoman",
      "Installation": "Floor-leaning configuration with safety wall-mounting anchors"
    },
    images: [
      { src: "images 2/WhatsApp Image 2026-06-23 at 7.29.16 PM (1).jpeg", alt: "Wavy Royal Blue Velvet Floor Mirror (Blue Edition)" },
      { src: "Images 3/WhatsApp Image 2026-06-23 at 7.29.16 PM (2).jpeg", alt: "Wavy Purple Velvet Floor Mirror (Purple Edition)" },
      { src: "Images 3/WhatsApp Image 2026-06-23 at 7.29.17 PM (2).jpeg", alt: "Wavy Black Velvet Floor Mirror (Black Edition)" }
    ]
  },
  {
    id: 2,
    slug: "octagonal-dual-tone-led-smart-mirror",
    title: "Octagonal Dual-Tone LED Smart Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/mirror 2.jpeg",
    images: [
      { src: "images 2/mirror 2.jpeg", alt: "Octagonal Dual-Tone LED Smart Mirror Main View" },
      { src: "images 4/WhatsApp Image 2026-06-23 at 7.31.01 PM (3).jpeg", alt: "Octagonal Dual-Tone LED Smart Mirror Detail View" },
      { src: "images 4/WhatsApp Image 2026-06-23 at 7.31.02 PM.jpeg", alt: "Octagonal Dual-Tone LED Smart Mirror Alternate View" }
    ],
    description: "An elegant octagonal bathroom smart vanity mirror with dual-tone lighting configuration. It features a bright, frosted inner octagonal band for warm white direct task lighting and a secondary ambient green glow backlighting system that creates an amazing floating visual effect. Perfect for modern luxury restrooms and vanity zones.",
    specs: {
      "Dimensions": "32 in x 32 in (Custom sizes available)",
      "Glass Type": "5mm HD Copper-Free Eco-Friendly Silver Mirror",
      "Lighting System": "Dual-Tone LED (Warm White 3000K Inner + Ambient Green Neon Outer)",
      "Smart Features": "Touch Sensor Switch, Auto-Defogging heating pad, Brightness Memory",
      "Customization": "Custom LED colors (Pink, Cyan, Gold) and dimensions can be configured",
      "Waterproofing": "IP65 Rated waterproof LED driver and electrical components"
    }
  },
  {
    id: 3,
    slug: "wavy-backlit-showroom-trio",
    title: "Wavy Backlit Velvet Floor Mirrors (Showroom Trio)",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM (1).jpeg",
    images: [
      { src: "images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM (1).jpeg", alt: "Wavy Backlit Velvet Floor Mirrors (Showroom Trio) Main View" },
      { src: "images 5/WhatsApp Image 2026-06-23 at 7.29.17 PM.jpeg", alt: "Wavy Backlit Velvet Floor Mirror Detail View" },
      { src: "images 5/WhatsApp Image 2026-06-23 at 7.29.18 PM.jpeg", alt: "Wavy Backlit Velvet Floor Mirror Backlight View" }
    ],
    description: "A showcase of three custom-fabricated wavy floor-length mirrors, designed to demonstrate the versatility of our velvet-cushioned borders and backlighting options. The trio highlights a beige velvet frame with warm yellow backlight, a grey velvet frame with cool white backlight, and a premium black-gold marble pattern finish. Ideal for fashion boutiques, studios, and high-end residential interiors.",
    specs: {
      "Dimensions": "6.5 ft x 3.5 ft per mirror (78 in x 42 in)",
      "Frame Material": "High-density cushioned wooden core upholstered in premium textured velvet",
      "Lighting System": "Diffused rear LED strip lighting (3000K Warm Yellow & 6000K Cool White)",
      "Customization": "Available individually or as a set; custom upholstery fabric & size are supported",
      "Installation": "Self-leaning with safety brackets; includes heavy duty base support"
    }
  },
  {
    id: 4,
    slug: "arched-backlit-vanity-mirrors-with-cabinets",
    title: "Arched Backlit Vanity Mirrors with Cabinets",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM.jpeg",
    images: [
      { src: "images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM.jpeg", alt: "Arched Backlit Vanity Mirrors with Cabinets Main View" },
      { src: "images 6/WhatsApp Image 2026-06-23 at 7.31.01 PM.jpeg", alt: "Arched Backlit Vanity Mirror Cabinet Storage View" },
      { src: "images 6/WhatsApp Image 2026-06-23 at 7.31.01 PM (1).jpeg", alt: "Arched Backlit Vanity Mirror Backlight Accent View" },
      { src: "images 6/WhatsApp Image 2026-06-23 at 7.31.03 PM (3).jpeg", alt: "Arched Backlit Vanity Mirror Dressing Room Setup" },
      { src: "images 6/WhatsApp Image 2026-06-23 at 7.31.04 PM.jpeg", alt: "Arched Backlit Vanity Mirror Castor Wheels Details" }
    ],
    description: "Highly functional and premium mobile dressing mirrors designed for bridal suites, salons, and modern bedrooms. Each mirror is designed with a sleek arched profile, integrated warm task LED border lighting, and a built-in solid wood cabinet base with drawers for cosmetics storage. Fitted with premium quality industrial casters, the entire vanity station can be moved around with minimal effort.",
    specs: {
      "Dimensions": "6.0 ft Height x 2.5 ft Width (72 in x 30 in)",
      "Storage Base": "Integrated wooden storage cabinet with drawers & copper handles",
      "Lighting": "Dimmable high-lumen warm yellow LED inner borders (Touch-activated)",
      "Mobility": "360-degree rotating locking wheels for easy placement and safety",
      "Frame Material": "Solid oak base + powder-coated internal steel frame structure"
    }
  },
  {
    id: 5,
    slug: "organic-velvet-pebble-wall-mirror",
    title: "Organic Velvet Pebble Wall Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.30.58 PM (1).jpeg",
    description: "An organic pebble-shaped accent wall mirror featuring a plush cushioned frame upholstered in a light cream velvet fabric. This designer wall piece combines soft Japandi and organic modernism aesthetics, offering a visual break from rigid rectangular designs. Perfect for entryways, living rooms, and cozy reading corners.",
    specs: {
      "Dimensions": "36 in Height x 24 in Width (Custom sizes available)",
      "Frame Material": "Light Cream Premium Velvet Fabric over comfortable foam cushioning",
      "Glass Type": "5mm high-reflectivity clear mirror glass with polished edges",
      "Installation": "Heavy-duty dual-direction wall hangers (can be hung vertically or offset)",
      "Customizability": "Available in Pink, Beige, Grey, Emerald, and Gold velvet shades"
    }
  },
  {
    id: 6,
    slug: "custom-wavy-led-floor-mirrors-pentad",
    title: "Custom Wavy LED Floor Mirrors (Pentad Showcase)",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.30.58 PM.jpeg",
    description: "Our complete collection featuring five wavy silhouette mirrors in unique velvet upholstery shades: soft beige, warm pink, deep grey, tan brown, and baby blue. Outfitted with high-density LED backing strips, these mirrors project a dramatic halo of warm, welcoming light onto the surrounding wall surface, serving as both a functional dressing mirror and a stunning piece of modern ambient lighting.",
    specs: {
      "Dimensions": "6.0 ft Height x 2.8 ft Width (72 in x 33 in)",
      "Frame Material": "Cushioned wooden frames upholstered in selection of rich velvet fabric",
      "Lighting System": "Rear diffused LED light strip (3000K warm yellow, plug-and-play configuration)",
      "Customizability": "Choose your custom velvet shade, dimensions, and touch sensor controls",
      "Installation": "Heavy-duty wall anchors included for leaning or mounting options"
    }
  },
  {
    id: 7,
    slug: "spiral-frosted-led-smart-mirror",
    title: "Spiral Frosted LED Smart Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM (2).jpeg",
    description: "A luxury round bathroom vanity smart mirror featuring a gorgeous spiral frosted sandblasted pattern. The cool white LED lights shine through the frosted design, providing clean and evenly distributed lighting across the face without harsh shadows. Built with touch-sensor technology, it is an ideal centerpiece for premium washrooms and master bathrooms.",
    specs: {
      "Dimensions": "30 in / 36 in Diameter options (Custom sizes available)",
      "Glass Type": "5mm HD Copper-Free eco silver glass (anti-corrosion)",
      "Lighting System": "Cool White LED (6000K) shining through precision-etched spiral frosting",
      "Smart Controls": "Integrated glass touch sensor button (tap to toggle, hold to dim)",
      "Additional Specs": "Defogger heating pad with auto shut-off, IP44 rated splashproof housing"
    }
  },
  {
    id: 8,
    slug: "greek-key-backlit-smart-mirror",
    title: "Greek Key Backlit Smart Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM (3).jpeg",
    description: "A bold, cultural architectural design. This round smart mirror features a frosted Greek Key (Meander) border pattern that glows warm yellow. In addition to the front-facing border light, it is configured with rear-emitting purple ambient backlighting that creates an artistic, dramatic wall accent. A perfect blend of history, tech, and modern design.",
    specs: {
      "Dimensions": "30 in / 36 in / 42 in Diameter",
      "Design Detail": "Acid-etched frosted Greek Key classic meander border",
      "Lighting": "Dual Light System (Warm White 3000K border + Purple Rear Ambient backlighting)",
      "Smart Features": "Touch sensor, electronic defogger, dimmable control",
      "Glass Type": "Premium distortion-free crystal silver glass"
    }
  },
  {
    id: 9,
    slug: "rgb-neon-arched-floor-mirrors",
    title: "RGB Neon Arched Floor Mirrors",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM.jpeg",
    description: "Striking minimalist arched floor-leaning mirrors featuring colorful outer neon LED borders. Available in vibrant pink, cyan-blue, and gold neon variants, these mirrors offer an energetic, retro-modern look. Built on a clean metal structural backing, they are perfect for trendy bedrooms, boutique styling rooms, game rooms, or creative studios.",
    specs: {
      "Dimensions": "6.0 ft Height x 2.5 ft Width (72 in x 30 in)",
      "Frame Material": "Powder-Coated matte black metal backing frame",
      "Lighting System": "Flexible high-efficiency Neon LED flex tubes (Pink, Cyan, Yellow options)",
      "Customization": "Color configurations, sizes, and backing frame finish",
      "Installation": "Stable floor-leaning build with anti-slip bottom pads & wall ties"
    }
  },
  {
    id: 10,
    slug: "oval-sunburst-backlit-smart-mirror",
    title: "Oval Sunburst Backlit Smart Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.31.02 PM.jpeg",
    description: "An elegant oval vanity wall mirror featuring a custom-engraved frosted sunburst/flame border design. When the backlight is turned on, the warm LED rays illuminate the precision-etched flame patterns, creating a mesmerizing sunburst crown around the mirror's border. Designed for premium powder rooms and modern washroom basins.",
    specs: {
      "Dimensions": "36 in Height x 20 in Width (Custom sizes available)",
      "Engraving": "Sandblasted frosted flame/sunburst pattern along the oval border",
      "Lighting": "Warm White LED (3000K) backlighting (touch sensor dimmable)",
      "Smart Tech": "Integrated touch button with memory function, defogger pad",
      "Hardware": "Back-attached aluminium safety frame for secure wall installation"
    }
  },
  {
    id: 11,
    slug: "ornate-floral-neon-wavy-floor-mirror-magenta",
    title: "Ornate Floral Neon Wavy Floor Mirror (Magenta Edition)",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.31.03 PM (3).jpeg",
    description: "A premium, artistic wavy floor mirror that combines classical floral design elements with modern lighting technology. Features highly detailed sandblasted leaf scroll engravings along the wavy border, which catch and diffuse the built-in magenta-pink neon LED system. Creates an eye-catching, luxurious statement piece in any room.",
    specs: {
      "Dimensions": "6.0 ft Height x 3.0 ft Width (72 in x 36 in)",
      "Engraving Style": "Ornate sandblasted classical floral & leaf scrolls",
      "Lighting Color": "Vibrant Neon Magenta-Pink LED system",
      "Structure": "Rear-mounted support box concealing all electrical wiring and driver",
      "Customization": "Available with custom engraving designs and alternative neon shades"
    }
  },
  {
    id: 12,
    slug: "braided-rope-led-round-mirror",
    title: "Braided Rope LED Round Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.31.03 PM.jpeg",
    description: "A luxurious round mirror designed primarily for bathroom vanity setups. It features a unique, frosted braided rope design border. When backlit with the built-in warm yellow LEDs, the braided patterns project a textured, elegant glow. Looks highly premium when mounted as a dual-mirror configuration over double washbasins.",
    specs: {
      "Dimensions": "30 in / 36 in Diameter options",
      "Frosted Design": "Precision-etched braided rope outer border",
      "Lighting System": "Warm Yellow LED (2700K-3000K) backlighting (Touch control)",
      "Smart Tech": "Integrated touch switch, anti-fog heater element, IP44 protection",
      "Glass Quality": "High-fidelity copper-free silver glass"
    }
  },
  {
    id: 13,
    slug: "ornate-floral-neon-wavy-floor-mirror-cyan",
    title: "Ornate Floral Neon Wavy Floor Mirror (Cyan Edition)",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images 2/WhatsApp Image 2026-06-23 at 7.31.04 PM.jpeg",
    description: "The cyan-blue sister of our magenta edition, this full-length wavy floor mirror features classical leaf scroll and feather designs sandblasted into the glass surface. The engravings are illuminated from within using a premium cyan-blue neon LED system, producing a gorgeous, futuristic neon halo. A majestic addition to master bedrooms and modern showrooms.",
    specs: {
      "Dimensions": "6.0 ft Height x 3.0 ft Width (72 in x 36 in)",
      "Engraving Detail": "Sandblasted classical leaf motifs and scroll designs",
      "Lighting Color": "Vibrant Neon Cyan-Blue LED illumination",
      "Frame Style": "Minimalist frameless wavy glass profile with back-mount support box",
      "Upholstery/Base": "Anti-scratch rubber pads on bottom for floor leaning configuration"
    }
  },

  // ==================== ORIGINAL MIRRORS (14-33) ====================
  {
    id: 14,
    slug: "organic-wavy-backlit-mirror",
    title: "Organic Wavy Backlit Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/wavy-led-mirror.png",
    description: "Modern asymmetrical accent mirror featuring a flowing organic wavy silhouette and a warm, glowing ambient LED backlit border. This fluid shape adds an artistic, sculptural element to any wall, making it a favorite for modern entryway consoles and statement walls.",
    specs: {
      "Dimensions": "36 in x 28 in (Customizable)",
      "Lighting": "Warm White (3000K) LED strip backlighting",
      "Glass Type": "5mm HD silver mirror with polished margins",
      "Mounting": "Heavy duty wall anchors for vertical hanging"
    }
  },
  {
    id: 15,
    slug: "arched-metal-frame-floor-mirror",
    title: "Arched Metal Frame Floor Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/arched-floor-mirror.png",
    description: "Elegant arched floor-length mirror styled with a thin matte black aluminium frame. Built with structural integrity and clean minimalism, it leans beautifully against bedroom walls and adds depth and brightness to modern dressing spaces.",
    specs: {
      "Dimensions": "6.5 ft x 2.8 ft (78 in x 33 in)",
      "Frame Material": "Powder-coated anodized aluminium alloy frame (Matte Black)",
      "Glass Type": "5mm high-definition copper-free mirror with shatter-proof film",
      "Installation": "Floor leaning or wall-hanging brackets included"
    }
  },
  {
    id: 16,
    slug: "pebble-backlit-accent-mirror",
    title: "Pebble Backlit Accent Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/pebble-backlit-mirror.png",
    description: "Soft asymmetrical pebble-shaped wall mirror with warm glowing ambient LED backlighting. Drawing inspiration from nature, this frameless design is perfect as a floating feature piece for modern living rooms, dining rooms, and entryways.",
    specs: {
      "Dimensions": "36 in x 24 in (Customizable)",
      "Lighting": "Warm White LED backing strip",
      "Glass Type": "High-fidelity copper-free eco mirror glass",
      "Mounting": "Dual-direction hanging hooks pre-installed"
    }
  },
  {
    id: 17,
    slug: "vines-decorated-round-mirror",
    title: "Vines Decorated Round Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/vines-round-mirror.png",
    description: "Charming circular wall mirror decorated with delicate hanging green ivy vines and integrated soft micro fairy lights. Creates a relaxing biophilic and fairy-tale atmosphere, making it a beautiful decoration piece for vanity spaces and vanity zones.",
    specs: {
      "Dimensions": "30 in / 36 in Diameter options",
      "Decoration": "Premium artificial green ivy vines wrapping the border",
      "Lighting": "Micro LED copper wire fairy lights (Battery/USB operated)",
      "Installation": "Simple wall peg mount"
    }
  },
  {
    id: 18,
    slug: "capsule-led-bathroom-mirror",
    title: "Capsule LED Bathroom Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/capsule-led-mirror.png",
    description: "Modern pill-shaped capsule mirror with a sleek frosted glass border and touch-sensor outer LED light. Combining space-saving vertical design with modern smart features, this capsule mirror brings a clean, contemporary aesthetic to restroom basins.",
    specs: {
      "Dimensions": "36 in Height x 18 in Width",
      "Glass Type": "Copper-free high-durability vanity glass",
      "Lighting System": "Touch sensor dimmable border LED (Warm/Cool toggle)",
      "Smart Tech": "Anti-fog heating pad built-in, IP44 rating"
    }
  },
  {
    id: 19,
    slug: "smart-backlit-bathroom-vanity-mirror",
    title: "Smart Backlit Bathroom Vanity Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/bathroom-mirrors.png",
    description: "Double washbasin backlit LED bathroom mirror with built-in defogger heating pads and touch control buttons. Specially crafted for wide master bathroom counters, this mirror ensures steam-free clarity and excellent illumination.",
    specs: {
      "Dimensions": "60 in Width x 36 in Height (Customizable)",
      "Lighting": "Rear backlit high-output LEDs (3 colors adjustable)",
      "Smart Tech": "Auto-defogger, digital clock, Bluetooth speakers (optional)",
      "Glass Quality": "Anti-shatter eco-friendly silver mirror"
    }
  },
  {
    id: 20,
    slug: "gilded-baroque-mansion-mirror",
    title: "Gilded Baroque Mansion Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/decorative-mirrors.png",
    description: "Grand fireplace-mount baroque style living room mirror, featuring highly detailed hand-carved gold leaf finish framing. This majestic piece serves as a traditional fireplace mantel center-piece, adding royal charm and elegance.",
    specs: {
      "Dimensions": "4.5 ft Height x 3.5 ft Width",
      "Frame Material": "Hand-carved premium resin & wood finished with gold leaf gilding",
      "Glass Type": "4mm beveled premium mirror glass",
      "Mounting": "Heavy duty bracket mount (Professional installation recommended)"
    }
  },
  {
    id: 21,
    slug: "minimalist-anodized-hexagon-mirror",
    title: "Minimalist Anodized Hexagon Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/hexagon-mirror.png",
    description: "Contemporary brass-finished hexagonal wall mirror, perfect as a geometric feature piece for hallways, bathrooms, or creative wall clusters. Features an ultra-thin anodized aluminium bezel.",
    specs: {
      "Dimensions": "28 in x 32 in (Customizable)",
      "Frame Material": "Anodized Aluminium Alloy (Brass / Gold Finish)",
      "Glass Type": "5mm HD silver mirror with safety backing",
      "Installation": "Pre-installed keyhole brackets"
    }
  },
  {
    id: 22,
    slug: "round-anodized-bronze-trim-mirror",
    title: "Round Anodized Bronze Trim Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80",
    description: "Floating circular wall mirror styled with an ultra-thin modern anodized bronze metal trim profile. This classic round design acts as a simple yet premium decorative item for modern residential lobbies and living rooms.",
    specs: {
      "Dimensions": "32 in / 36 in / 40 in Diameter options",
      "Frame Material": "Anodized bronze aluminum trim bezel",
      "Glass Type": "HD copper-free mirror glass",
      "Mounting": "Wall cleat bracket system (hangs flush)"
    }
  },
  {
    id: 23,
    slug: "rectangular-frameless-beveled-mirror",
    title: "Rectangular Frameless Beveled Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80",
    description: "Frameless rectangular wall vanity mirror featuring clean polished 1-inch beveled edges to refract ambient light. This classic choice provides a sleek, clean surface that integrates beautifully into bathroom settings.",
    specs: {
      "Dimensions": "36 in x 24 in / 48 in x 36 in options",
      "Borders": "1-inch precision angle beveled edge polish",
      "Glass Type": "5mm high-clarity silver mirror glass",
      "Mounting": "Includes safety wall-mount brackets"
    }
  },
  {
    id: 24,
    slug: "arched-entryway-console-mirror",
    title: "Arched Entryway Console Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&q=80",
    description: "Floor-leaning arched vanity mirror designed to maximize light reflection in luxury dining and lobby spaces. Placed above or next to entryway consoles, this mirror visually expands rooms and distributes light.",
    specs: {
      "Dimensions": "6.0 ft Height x 3.0 ft Width",
      "Frame Type": "Minimalist thin iron metal backing frame",
      "Glass Type": "5mm high-reflectivity clear mirror",
      "Installation": "Wall anchor system for safety leaning configuration"
    }
  },
  {
    id: 25,
    slug: "hollywood-bulb-dressing-mirror",
    title: "Hollywood Bulb Dressing Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/hollywood-bulb-mirror.png",
    description: "Professional studio makeup vanity mirror surrounded by high-lumen dimmable LED light globes. Used by professional makeup artists, it provides optimal daylight-balanced illumination for flawless application.",
    specs: {
      "Dimensions": "32 in x 24 in (Landscape / Portrait adjustable)",
      "Bulbs": "12-15 high-quality dimmable LED globes (Warm/Neutral/Cool white modes)",
      "Frame Material": "Gloss white coated aluminum alloy frame & stand base",
      "Smart Tech": "Integrated smart touch dimming, USB charging port on side"
    }
  },
  {
    id: 26,
    slug: "antique-bronze-engraved-mirror",
    title: "Antique Bronze Engraved Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80",
    description: "Ornate vintage style wall mirror featuring hand-detailed bronze frame motifs and distressed antique finishes. It creates a classic, vintage-luxury feel, ideal for halls, dining areas, and master bedrooms.",
    specs: {
      "Dimensions": "40 in x 28 in",
      "Frame Material": "Carved polymer composite with distressed bronze and gold patina coating",
      "Glass Type": "5mm vintage beveled glass mirror",
      "Mounting": "Heavy duty D-ring wall mounting brackets pre-installed"
    }
  },
  {
    id: 27,
    slug: "sunburst-metal-accent-mirror",
    title: "Sunburst Metal Accent Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
    description: "Striking sunburst design featuring copper rays extending from a central circular focal mirror. This modern art piece serves as a bold geometric accent wall decor, blending rustic colors with contemporary geometry.",
    specs: {
      "Dimensions": "36 in total diameter (12 in center mirror)",
      "Frame Material": "Handcrafted iron copper-finished accent rays",
      "Glass Type": "Flat circular silver mirror",
      "Mounting": "Single anchor loop mounting back"
    }
  },
  {
    id: 28,
    slug: "hanging-leather-strap-oval-mirror",
    title: "Hanging Leather Strap Oval Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80",
    description: "Elegant oval wall mirror suspended from a premium cognac leather strap with a matching solid oak wall peg. Perfect for minimalist and Scandinavian home decor schemes in entryways or master bedrooms.",
    specs: {
      "Dimensions": "30 in Height x 18 in Width",
      "Hanging Strap": "Adjustable premium top-grain cognac leather strap",
      "Wall Peg": "Included solid oak wall mount peg and wall anchor screws",
      "Frame Finish": "Ultra-thin matte black metal wrap border"
    }
  },
  {
    id: 29,
    slug: "organic-wavy-accent-mirror",
    title: "Organic Wavy Accent Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/wavy-led-mirror.png",
    description: "A variation of our wavy mirrors featuring a slightly more elongated asymmetrical curve profile. Highly recommended for vertical placement next to dressing wardrobes or consoles to bring dynamic geometry into rooms.",
    specs: {
      "Dimensions": "42 in Height x 24 in Width (Custom sizes available)",
      "Lighting": "Rear-mounted warm white LED strip (Optional)",
      "Glass Type": "5mm premium clarity silver mirror",
      "Installation": "Dual hang brackets on rear panel"
    }
  },
  {
    id: 30,
    slug: "sunburst-decorative-mirror",
    title: "Sunburst Decorative Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80",
    description: "Stunning metal sunburst frame design surrounding a central convex/flat mirror, making a bold feature wall piece. The radiant pattern catches shifting light, creating beautiful shadows and depth in living areas.",
    specs: {
      "Dimensions": "32 in total diameter",
      "Frame Material": "Welded wire steel rays with a premium metallic gold paint coating",
      "Mirror Glass": "Flat circular vanity mirror center piece",
      "Mounting": "Integrated metal keyhole hanger on rear side"
    }
  },
  {
    id: 31,
    slug: "multi-panel-mirror-set",
    title: "Multi-Panel Mirror Set",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/multipanel-mirror.png",
    description: "Custom grid mirrors composed of multiple matching frame segments to give depth to lobby walls. This architectural installation behaves like a window, significantly opening up small hallways and lobbies.",
    specs: {
      "Dimensions": "4ft x 4ft grid structure (Custom grid sizes available)",
      "Frame Material": "Powder-coated aluminum division grids (Black / Gold options)",
      "Installation": "Structural safety wall mount backing board",
      "Customization": "Grid layout (3x3, 4x3, or custom dimensions)"
    }
  },
  {
    id: 32,
    slug: "beveled-edge-mirror",
    title: "Beveled Edge Mirror",
    category: "mirrors",
    categoryLabel: "Premium Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/beveled-mirror.png",
    description: "Premium mirror glass styled with angled borders to refract ambient lighting like fine crystal prisms. Suitable as a vanity wall ornament or bathroom mirror, giving a clean frameless elegance.",
    specs: {
      "Dimensions": "36 in x 30 in (Customizable)",
      "Bevel Polish": "0.75-inch slant bevel polished edge margins",
      "Glass Type": "5mm high-grade silver mirror glass",
      "Installation": "Pre-installed heavy duty mounting brackets"
    }
  },
  {
    id: 33,
    slug: "smart-touch-sensor-mirror",
    title: "Smart Touch-Sensor Mirror",
    category: "mirrors",
    categoryLabel: "Smart Mirrors",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/smart-touch-mirror.png",
    description: "Hi-tech smart mirror equipped with glass touch controls, temperature display, and dimmable lighting. Modern styling makes this smart mirror a perfect high-end upgrade for luxurious master washrooms.",
    specs: {
      "Dimensions": "30 in x 30 in (Square / Round options)",
      "Lighting System": "3-color LED strip (Warm White, Cool White, Daylight)",
      "Smart Tech": "Integrated touch controls, LED temperature display, digital clock, defogger",
      "Glass Quality": "HD silver mirror glass with explosion-proof coating"
    }
  },

  // ==================== GLASS WORK (34-38) ====================
  {
    id: 34,
    slug: "glass-shower-partition",
    title: "Glass Shower Partition",
    category: "glass",
    categoryLabel: "Glass Work",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&q=80",
    description: "Heavy tempered glass partition with custom stainless steel hinges and leakproof clear gaskets. Creates a frameless walk-in shower experience, maintaining visual open space while preventing water splash.",
    specs: {
      "Glass Thickness": "8mm / 10mm / 12mm Tempered Safety Glass",
      "Hardware Material": "Premium grade 304 Stainless Steel (Chrome / Matte Black finish)",
      "Gaskets": "Clear water-resistant seals along glass margins",
      "Installation": "Professional floor and wall channel bracket configuration"
    }
  },
  {
    id: 35,
    slug: "office-glass-partition",
    title: "Office Glass Partition",
    category: "glass",
    categoryLabel: "Glass Work",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    description: "Soundproof frameless glass room dividers configured with modern dark grey structural hardware. Perfect for creating private executive offices and meeting rooms in open-plan corporate floors while letting natural light pass through.",
    specs: {
      "Glass Type": "Laminated Sound-Insulated Tempered Glass",
      "Frame Channels": "Anodized heavy-gauge aluminum profiles (Matte Grey / Black)",
      "Configuration": "Modular swing door or sliding door panel options",
      "Frosted Film": "Custom frosting strips, logo etching, or venetian pattern printing available"
    }
  },
  {
    id: 36,
    slug: "tempered-glass-table-top",
    title: "Tempered Glass Table Top",
    category: "glass",
    categoryLabel: "Glass Work",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "images/glass-table-top.png",
    description: "Ultra-tough clear or tinted glass table toppers, custom shaped and sized to protect fine wood furniture or serve as standalone floating glass tabletops for conference and dining spaces.",
    specs: {
      "Glass Thickness": "6mm / 8mm / 12mm Tempered Glass",
      "Edge Profile": "Polished flat, pencil edge, or beveled margins",
      "Color Options": "Ultra-clear, standard green-tint, bronze-tint, or black smoked glass",
      "Customization": "Round, oval, square, or irregular custom shapes according to template"
    }
  },
  {
    id: 37,
    slug: "glass-kitchen-backsplash",
    title: "Glass Kitchen Backsplash",
    category: "glass",
    categoryLabel: "Glass Work",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=600&q=80",
    description: "Heat-resistant colored lacquer glass panels for kitchen walls, offering an easy-to-clean modern finish that completely eliminates grout joints. Resistant to grease stains and hot oils.",
    specs: {
      "Glass Type": "6mm Toughened Lacquered Glass (Back-painted)",
      "Heat Tolerance": "Up to 220°C (safe for gas hob stove backing)",
      "Color Range": "Any solid color coat (Custom RAL coding matching kitchen cabinet palettes)",
      "Installation": "Seamless glue mounting onto straight drywall surfaces"
    }
  },
  {
    id: 38,
    slug: "glass-staircase-railing",
    title: "Glass Staircase Railing",
    category: "glass",
    categoryLabel: "Glass Work",
    categoryLink: "mirrors-glass",
    categoryTitle: "Mirrors & Glass",
    mainImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80",
    description: "Premium heavy tempered glass panels serving as safety bannisters for modern staircases and balustrades. Installed using heavy duty floor spigots, handrails, or frameless glass anchor standoffs.",
    specs: {
      "Glass Type": "12mm Tempered Safety Glass (Laminated available for high-altitude balconies)",
      "Fixture Style": "Stainless steel floor spigots, side brackets, or aluminium dry-glaze channels",
      "Handrail": "Stainless steel, solid wood, or fully frameless handrail profiles",
      "Safety": "Compliant with international architectural load and impact standards"
    }
  },

  // ==================== ALUMINIUM WORK (39-46) ====================
  {
    id: 39,
    slug: "aluminium-sliding-window",
    title: "Aluminium Sliding Window",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
    description: "Double-glazed soundproof sliding windows featuring high-grade steel-blue frames and rubber weather sealing. Ideal for modern urban homes, providing acoustic blocking and thermal insulation.",
    specs: {
      "Profile Thickness": "1.2mm / 1.6mm heavy-gauge structural aluminium",
      "Glazing Option": "Double glazing (5mm Clear + 9A air spacer + 5mm Tinted)",
      "Color Coating": "Powder-coated charcoal grey, bronze, black, or anodized silver",
      "Locking Mechanism": "Heavy-duty flush-mount latch locks"
    }
  },
  {
    id: 40,
    slug: "aluminium-sliding-door",
    title: "Aluminium Sliding Door",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "images/aluminium-doors.png",
    description: "Heavy-duty sliding patio doors with thermal insulation profiles and heavy smooth-glide rollers. Designed to support wide panorama views and withstand high wind pressures on balconies and terraces.",
    specs: {
      "Track Configuration": "Double track or Triple track (includes integrated screen doors)",
      "Rollers": "Double tandem copper wheels for silent, effortless sliding",
      "Glazing": "8mm single tempered or 12mm double insulated glass panels",
      "Weatherproofing": "High-density mohair pile weather strips + weather-resistant rubber gasket wrap"
    }
  },
  {
    id: 41,
    slug: "aluminium-casement-window",
    title: "Aluminium Casement Window",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    description: "Traditional swing-out casement window frames built with premium locks and durable weather stripping. Hinges on the side allow the window panel to open fully, maximizing interior ventilation.",
    specs: {
      "Opening Style": "Outward swing (Left / Right hinged, Top-hung awning option)",
      "Hardware": "Heavy-duty friction hinges, multi-point lock lever handles",
      "Profile Gauge": "1.4mm architectural grade aluminum extrusion",
      "Safety Screen": "Detachable mesh screens can be configured on the interior frame"
    }
  },
  {
    id: 42,
    slug: "aluminium-main-door",
    title: "Aluminium Main Door",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "images/aluminium-doors.png",
    description: "Premium secure entry door framed in heavy-gauge powder coated aluminium panels with custom glass details. Resistance to moisture swelling and rust makes it a highly durable alternative to solid wood entry gates.",
    specs: {
      "Design": "Heavy-gauge flush metal panel with vertical decorative frosted glass slits",
      "Hinges": "High load-bearing stainless steel butt hinges (3x per door panel)",
      "Locks": "High-security multi-point deadbolt system with smart handle integration",
      "Color Finish": "Realistic wood-grain heat transfer sublimation or powder-coating"
    }
  },
  {
    id: 43,
    slug: "aluminium-railing-grills",
    title: "Aluminium Railing & Grills",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    description: "Modern lightweight, rust-free aluminium balustrades and security grill structures for steps, porches, and terraces. Offers high weather resilience and clean visual lines without the maintenance of iron.",
    specs: {
      "Post Spacing": "4ft maximum spacing with heavy anchors",
      "Infill": "Vertical aluminum pickets, horizontal wires, or tempered glass panels",
      "Finish": "High-durability outdoor polyester powder coat (Black / Bronze)",
      "Height": "Standard 3ft or 3.5ft balcony height (Customizable)"
    }
  },
  {
    id: 44,
    slug: "aluminium-shopfront",
    title: "Aluminium Shopfront",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "images/shopfront-shutters.png",
    description: "Commercial grade aluminium framing featuring safety glass window panels designed for shop and office entrance facades. Offers high glass visibility and robust structural durability.",
    specs: {
      "Frames": "4in x 1.75in heavy-duty commercial mullion frames",
      "Glass Type": "12mm clear tempered glass or double-laminated security glass",
      "Doors": "Single or double commercial swing doors with overhead hydraulic closers",
      "Locking": "Hook bolt locks with internal cylinder thumbturns"
    }
  },
  {
    id: 45,
    slug: "aluminium-partition-wall",
    title: "Aluminium Partition Wall",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "images/glass-partitions.png",
    description: "Industrial and commercial divider walls constructed with sturdy powder-coated aluminium profiles. Widely used to divide spaces in bank offices, clinical corridors, and industrial workshops.",
    specs: {
      "Structure": "Sturdy partition channels with quick-assemble frame anchors",
      "Infill Panel": "Half glass (5mm) and half laminated MDF solid board (9mm)",
      "Finish": "Standard silver anodized or powder coated white/grey",
      "Customization": "Easily relocatable and expandable design"
    }
  },
  {
    id: 46,
    slug: "aluminium-cabinet-frame",
    title: "Aluminium Cabinet Frame",
    category: "aluminium",
    categoryLabel: "Aluminium Work",
    categoryLink: "aluminium-work",
    categoryTitle: "Aluminium Work",
    mainImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    description: "Sleek, rust-proof modern kitchen and storage cabinet framing for clean, modern home design lines. Termite-proof, moisture-proof, and fully fire-resistant cabinet building system.",
    specs: {
      "Material": "Thin lightweight structural kitchen cabinet profiles",
      "Shutters": "Compatible with colored glass shutters, MDF panels, or ACP boards",
      "Hardware": "Soft-close hydraulic hinges, magnetic catches",
      "Hygiene": "Easy to clean, non-porous frame surfaces"
    }
  }
];
