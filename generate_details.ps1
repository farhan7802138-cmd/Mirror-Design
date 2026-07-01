# ============================================================
# RAHMAN — Aluminium & Glass Works
# PowerShell Page Generator for Product Details
# ============================================================

$detailsDir = Join-Path $PSScriptRoot "details"
if (-not (Test-Path $detailsDir)) {
    New-Item -ItemType Directory -Path $detailsDir -Force | Out-Null
}

# Define the 46 products
$products = @(
    # ==================== NEW MIRROR DESIGNS (1-13) ====================
    [PSCustomObject]@{
        Id = 1
        Slug = "wavy-royal-blue-velvet-floor-mirror"
        Title = "Wavy Royal Blue Velvet Floor Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.29.16 PM (1).jpeg"
        Description = "A stunning full-length floor mirror featuring an organic wavy silhouette wrapped in premium velvet fabric. Handcrafted with precision, this designer mirror features soft cushioning and a choice of vibrant royal blue, deep purple, or classic black velvet finishes. It comes with a matching round velvet dressing stool/ottoman to elevate the luxury feel of your bedroom, closet, or showroom space."
        Specs = [ordered]@{
            "Dimensions" = "6.0 ft x 3.0 ft (72 in x 36 in)"
            "Frame Material" = "Cushioned MDF Board wrapped in Premium Velvet Fabric"
            "Backlight Options" = "Custom LED Backlighting available (Warm White, Cool White, or RGB Pink/Blue)"
            "Customization" = "Fully customizable in size, velvet fabric color, and backlight selection"
            "Included Accessories" = "Matching velvet upholstered dressing stool/ottoman"
            "Installation" = "Floor-leaning configuration with safety wall-mounting anchor anchors"
        }
        Images = @(
            @{ src = "../images 2/WhatsApp Image 2026-06-23 at 7.29.16 PM (1).jpeg"; alt = "Wavy Royal Blue Velvet Floor Mirror (Blue Edition)" }
            @{ src = "../Images 3/WhatsApp Image 2026-06-23 at 7.29.16 PM (2).jpeg"; alt = "Wavy Purple Velvet Floor Mirror (Purple Edition)" }
            @{ src = "../Images 3/WhatsApp Image 2026-06-23 at 7.29.17 PM (2).jpeg"; alt = "Wavy Black Velvet Floor Mirror (Black Edition)" }
        )
    },
    [PSCustomObject]@{
        Id = 2
        Slug = "octagonal-dual-tone-led-smart-mirror"
        Title = "Octagonal Dual-Tone LED Smart Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/mirror 2.jpeg"
        Images = @(
            @{ src = "../images 2/mirror 2.jpeg"; alt = "Octagonal Dual-Tone LED Smart Mirror Main View" }
            @{ src = "../images 4/WhatsApp Image 2026-06-23 at 7.31.01 PM (3).jpeg"; alt = "Octagonal Dual-Tone LED Smart Mirror Detail View" }
            @{ src = "../images 4/WhatsApp Image 2026-06-23 at 7.31.02 PM.jpeg"; alt = "Octagonal Dual-Tone LED Smart Mirror Alternate View" }
        )
        Description = "An elegant octagonal bathroom smart vanity mirror with dual-tone lighting configuration. It features a bright, frosted inner octagonal band for warm white direct task lighting and a secondary ambient green glow backlighting system that creates an amazing floating visual effect. Perfect for modern luxury restrooms and luxury washing zones."
        Specs = [ordered]@{
            "Dimensions" = "32 in x 32 in (Custom sizes available)"
            "Glass Type" = "5mm HD Copper-Free Eco-Friendly Silver Mirror"
            "Lighting System" = "Dual-Tone LED (Warm White 3000K Inner + Ambient Green Neon Outer)"
            "Smart Features" = "Touch Sensor Switch, Auto-Defogging heating pad, Brightness Memory"
            "Customization" = "Custom LED colors (Pink, Cyan, Gold) and dimensions can be configured"
            "Waterproofing" = "IP65 Rated waterproof LED driver and electrical components"
        }
    },
    [PSCustomObject]@{
        Id = 3
        Slug = "wavy-backlit-showroom-trio"
        Title = "Wavy Backlit Velvet Floor Mirrors (Showroom Trio)"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM (1).jpeg"
        Images = @(
            @{ src = "../images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM (1).jpeg"; alt = "Wavy Backlit Velvet Floor Mirrors Showroom Trio" }
            @{ src = "../images 5/WhatsApp Image 2026-06-23 at 7.29.17 PM.jpeg"; alt = "Wavy Backlit Velvet Floor Mirror Detail View" }
            @{ src = "../images 5/WhatsApp Image 2026-06-23 at 7.29.18 PM.jpeg"; alt = "Wavy Backlit Velvet Floor Mirror Backlight View" }
        )
        Description = "A showcase of three custom-fabricated wavy floor-length mirrors, designed to demonstrate the versatility of our velvet-cushioned borders and backlighting options. The trio highlights a beige velvet frame with warm yellow backlight, a grey velvet frame with cool white backlight, and a premium black-gold marble pattern finish. Ideal for fashion boutiques, studios, and high-end residential interiors."
        Specs = [ordered]@{
            "Dimensions" = "6.5 ft x 3.5 ft per mirror (78 in x 42 in)"
            "Frame Material" = "High-density cushioned wooden core upholstered in premium textured velvet"
            "Lighting System" = "Diffused rear LED strip lighting (3000K Warm Yellow & 6000K Cool White)"
            "Customization" = "Available individually or as a set; custom upholstery fabric & size are supported"
            "Installation" = "Self-leaning with safety brackets; includes heavy duty base support"
        }
    },
    [PSCustomObject]@{
        Id = 4
        Slug = "arched-backlit-vanity-mirrors-with-cabinets"
        Title = "Arched Backlit Vanity Mirrors with Cabinets"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM.jpeg"
        Images = @(
            @{ src = "../images 2/WhatsApp Image 2026-06-23 at 7.30.55 PM.jpeg"; alt = "Arched Backlit Vanity Mirrors with Cabinets Main View" }
            @{ src = "../images 6/WhatsApp Image 2026-06-23 at 7.31.01 PM.jpeg"; alt = "Arched Backlit Vanity Mirror Cabinet Storage View" }
            @{ src = "../images 6/WhatsApp Image 2026-06-23 at 7.31.01 PM (1).jpeg"; alt = "Arched Backlit Vanity Mirror Backlight Accent View" }
            @{ src = "../images 6/WhatsApp Image 2026-06-23 at 7.31.03 PM (3).jpeg"; alt = "Arched Backlit Vanity Mirror Dressing Room Setup" }
            @{ src = "../images 6/WhatsApp Image 2026-06-23 at 7.31.04 PM.jpeg"; alt = "Arched Backlit Vanity Mirror Castor Wheels Details" }
        )
        Description = "Highly functional and premium mobile dressing mirrors designed for bridal suites, salons, and modern bedrooms. Each mirror is designed with a sleek arched profile, integrated warm task LED border lighting, and a built-in solid wood cabinet base with drawers for cosmetics storage. Fitted with premium quality industrial casters, the entire vanity station can be moved around with minimal effort."
        Specs = [ordered]@{
            "Dimensions" = "6.0 ft Height x 2.5 ft Width (72 in x 30 in)"
            "Storage Base" = "Integrated wooden storage cabinet with drawers & copper handles"
            "Lighting" = "Dimmable high-lumen warm yellow LED inner borders (Touch-activated)"
            "Mobility" = "360-degree rotating locking wheels for easy placement and safety"
            "Frame Material" = "Solid oak base + powder-coated internal steel frame structure"
        }
    },
    [PSCustomObject]@{
        Id = 5
        Slug = "organic-velvet-pebble-wall-mirror"
        Title = "Organic Velvet Pebble Wall Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.30.58 PM (1).jpeg"
        Description = "An organic pebble-shaped accent wall mirror featuring a plush cushioned frame upholstered in a light cream velvet fabric. This designer wall piece combines soft Japandi and organic modernism aesthetics, offering a visual break from rigid rectangular designs. Perfect for entryways, living rooms, and cozy reading corners."
        Specs = [ordered]@{
            "Dimensions" = "36 in Height x 24 in Width (Custom sizes available)"
            "Frame Material" = "Light Cream Premium Velvet Fabric over comfortable foam cushioning"
            "Glass Type" = "5mm high-reflectivity clear mirror glass with polished edges"
            "Installation" = "Heavy-duty dual-direction wall hangers (can be hung vertically or offset)"
            "Customizability" = "Available in Pink, Beige, Grey, Emerald, and Gold velvet shades"
        }
    },
    [PSCustomObject]@{
        Id = 6
        Slug = "custom-wavy-led-floor-mirrors-pentad"
        Title = "Custom Wavy LED Floor Mirrors (Pentad Showcase)"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.30.58 PM.jpeg"
        Description = "Our complete designer collection featuring five wavy silhouette mirrors in unique velvet upholstery shades: soft beige, warm pink, deep grey, tan brown, and baby blue. Outfitted with high-density LED backing strips, these mirrors project a dramatic halo of warm, welcoming light onto the surrounding wall surface, serving as both a functional dressing mirror and a stunning piece of modern ambient lighting."
        Specs = [ordered]@{
            "Dimensions" = "6.0 ft Height x 2.8 ft Width (72 in x 33 in)"
            "Frame Material" = "Cushioned wooden frames upholstered in selection of rich velvet fabric"
            "Lighting System" = "Rear diffused LED light strip (3000K warm yellow, plug-and-play configuration)"
            "Customizability" = "Choose your custom velvet shade, dimensions, and touch sensor controls"
            "Installation" = "Heavy-duty wall anchors included for leaning or mounting options"
        }
    },
    [PSCustomObject]@{
        Id = 7
        Slug = "spiral-frosted-led-smart-mirror"
        Title = "Spiral Frosted LED Smart Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM (2).jpeg"
        Description = "A luxury round bathroom vanity smart mirror featuring a gorgeous spiral frosted sandblasted pattern. The cool white LED lights shine through the frosted design, providing clean and evenly distributed lighting across the face without harsh shadows. Built with touch-sensor technology, it is an ideal centerpiece for premium washrooms and master bathrooms."
        Specs = [ordered]@{
            "Dimensions" = "30 in / 36 in Diameter options (Custom sizes available)"
            "Glass Type" = "5mm HD Copper-Free eco silver glass (anti-corrosion)"
            "Lighting System" = "Cool White LED (6000K) shining through precision-etched spiral frosting"
            "Smart Controls" = "Integrated glass touch sensor button (tap to toggle, hold to dim)"
            "Additional Specs" = "Defogger heating pad with auto shut-off, IP44 rated splashproof housing"
        }
    },
    [PSCustomObject]@{
        Id = 8
        Slug = "greek-key-backlit-smart-mirror"
        Title = "Greek Key Backlit Smart Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM (3).jpeg"
        Description = "A bold, cultural architectural design. This round smart mirror features a frosted Greek Key (Meander) border pattern that glows warm yellow. In addition to the front-facing border light, it is configured with rear-emitting purple ambient backlighting that creates an artistic, dramatic wall accent. A perfect blend of history, tech, and modern design."
        Specs = [ordered]@{
            "Dimensions" = "30 in / 36 in / 42 in Diameter"
            "Design Detail" = "Acid-etched frosted Greek Key classic meander border"
            "Lighting" = "Dual Light System (Warm White 3000K border + Purple Rear Ambient backlighting)"
            "Smart Features" = "Touch sensor, electronic defogger, dimmable control"
            "Glass Type" = "Premium distortion-free crystal silver glass"
        }
    },
    [PSCustomObject]@{
        Id = 9
        Slug = "rgb-neon-arched-floor-mirrors"
        Title = "RGB Neon Arched Floor Mirrors"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.31.01 PM.jpeg"
        Description = "Striking minimalist arched floor-leaning mirrors featuring colorful outer neon LED borders. Available in vibrant pink, cyan-blue, and gold neon variants, these mirrors offer an energetic, retro-modern look. Built on a clean metal structural backing, they are perfect for trendy bedrooms, boutique styling rooms, game rooms, or creative studios."
        Specs = [ordered]@{
            "Dimensions" = "6.0 ft Height x 2.5 ft Width (72 in x 30 in)"
            "Frame Material" = "Powder-Coated matte black metal backing frame"
            "Lighting System" = "Flexible high-efficiency Neon LED flex tubes (Pink, Cyan, Yellow options)"
            "Customization" = "Color configurations, sizes, and backing frame finish"
            "Installation" = "Stable floor-leaning build with anti-slip bottom pads & wall ties"
        }
    },
    [PSCustomObject]@{
        Id = 10
        Slug = "oval-sunburst-backlit-smart-mirror"
        Title = "Oval Sunburst Backlit Smart Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.31.02 PM.jpeg"
        Description = "An elegant oval vanity wall mirror featuring a custom-engraved frosted sunburst/flame border design. When the backlight is turned on, the warm LED rays illuminate the precision-etched flame patterns, creating a mesmerizing sunburst crown around the mirror's border. Designed for premium powder rooms and modern washroom basins."
        Specs = [ordered]@{
            "Dimensions" = "36 in Height x 20 in Width (Custom sizes available)"
            "Engraving" = "Sandblasted frosted flame/sunburst pattern along the oval border"
            "Lighting" = "Warm White LED (3000K) backlighting (touch sensor dimmable)"
            "Smart Tech" = "Integrated touch button with memory function, defogger pad"
            "Hardware" = "Back-attached aluminium safety frame for secure wall installation"
        }
    },
    [PSCustomObject]@{
        Id = 11
        Slug = "ornate-floral-neon-wavy-floor-mirror-magenta"
        Title = "Ornate Floral Neon Wavy Floor Mirror (Magenta Edition)"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.31.03 PM (3).jpeg"
        Description = "A premium, artistic wavy floor mirror that combines classical floral design elements with modern lighting technology. Features highly detailed sandblasted leaf scroll engravings along the wavy border, which catch and diffuse the built-in magenta-pink neon LED illumination. Creates an eye-catching, luxurious statement piece in any room."
        Specs = [ordered]@{
            "Dimensions" = "6.0 ft Height x 3.0 ft Width (72 in x 36 in)"
            "Engraving Style" = "Ornate sandblasted classical floral & leaf scrolls"
            "Lighting Color" = "Vibrant Neon Magenta-Pink LED system"
            "Structure" = "Rear-mounted support box concealing all electrical wiring and driver"
            "Customization" = "Available with custom engraving designs and alternative neon shades"
        }
    },
    [PSCustomObject]@{
        Id = 12
        Slug = "braided-rope-led-round-mirror"
        Title = "Braided Rope LED Round Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.31.03 PM.jpeg"
        Description = "A luxurious round mirror designed primarily for bathroom vanity setups. It features a unique, frosted braided rope design border. When backlit with the built-in warm yellow LEDs, the braided patterns project a textured, elegant glow. Looks highly premium when mounted as a dual-mirror configuration over double washbasins."
        Specs = [ordered]@{
            "Dimensions" = "30 in / 36 in Diameter options"
            "Frosted Design" = "Precision-etched braided rope outer border"
            "Lighting System" = "Warm Yellow LED (2700K-3000K) backlighting (Touch control)"
            "Smart Tech" = "Integrated touch switch, anti-fog heater element, IP44 protection"
            "Glass Quality" = "High-fidelity copper-free silver glass"
        }
    },
    [PSCustomObject]@{
        Id = 13
        Slug = "ornate-floral-neon-wavy-floor-mirror-cyan"
        Title = "Ornate Floral Neon Wavy Floor Mirror (Cyan Edition)"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images 2/WhatsApp Image 2026-06-23 at 7.31.04 PM.jpeg"
        Description = "The cyan-blue sister of our magenta edition, this full-length wavy floor mirror features classical leaf scroll and feather designs sandblasted into the glass surface. The engravings are illuminated from within using a premium cyan-blue neon LED system, producing a gorgeous, futuristic neon halo. A majestic addition to master bedrooms and modern showrooms."
        Specs = [ordered]@{
            "Dimensions" = "6.0 ft Height x 3.0 ft Width (72 in x 36 in)"
            "Engraving Detail" = "Sandblasted classical leaf motifs and scroll designs"
            "Lighting Color" = "Vibrant Neon Cyan-Blue LED illumination"
            "Frame Style" = "Minimalist frameless wavy glass profile with back-mount support box"
            "Upholstery/Base" = "Anti-scratch rubber pads on bottom for floor leaning configuration"
        }
    },

    # ==================== ORIGINAL MIRRORS (14-33) ====================
    [PSCustomObject]@{
        Id = 14
        Slug = "organic-wavy-backlit-mirror"
        Title = "Organic Wavy Backlit Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/wavy-led-mirror.png"
        Description = "Modern asymmetrical accent mirror featuring a flowing organic wavy silhouette and a warm, glowing ambient LED backlit border. This fluid shape adds an artistic, sculptural element to any wall, making it a favorite for modern entryway consoles and statement walls."
        Specs = [ordered]@{
            "Dimensions" = "36 in x 28 in (Customizable)"
            "Lighting" = "Warm White (3000K) LED strip backlighting"
            "Glass Type" = "5mm HD silver mirror with polished margins"
            "Mounting" = "Heavy duty wall anchors for vertical hanging"
        }
    },
    [PSCustomObject]@{
        Id = 15
        Slug = "arched-metal-frame-floor-mirror"
        Title = "Arched Metal Frame Floor Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/arched-floor-mirror.png"
        Description = "Elegant arched floor-length mirror styled with a thin matte black aluminium frame. Built with structural integrity and clean minimalism, it leans beautifully against bedroom walls and adds depth and brightness to modern dressing spaces."
        Specs = [ordered]@{
            "Dimensions" = "6.5 ft x 2.8 ft (78 in x 33 in)"
            "Frame Material" = "Powder-coated anodized aluminium alloy frame (Matte Black)"
            "Glass Type" = "5mm high-definition copper-free mirror with shatter-proof film"
            "Installation" = "Floor leaning or wall-hanging brackets included"
        }
    },
    [PSCustomObject]@{
        Id = 16
        Slug = "pebble-backlit-accent-mirror"
        Title = "Pebble Backlit Accent Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/pebble-backlit-mirror.png"
        Description = "Soft asymmetrical pebble-shaped wall mirror with warm glowing ambient LED backlighting. Drawing inspiration from nature, this frameless design is perfect as a floating feature piece for modern living rooms, dining rooms, and entryways."
        Specs = [ordered]@{
            "Dimensions" = "36 in x 24 in (Customizable)"
            "Lighting" = "Warm White LED backing strip"
            "Glass Type" = "High-fidelity copper-free eco mirror glass"
            "Mounting" = "Dual-direction hanging hooks pre-installed"
        }
    },
    [PSCustomObject]@{
        Id = 17
        Slug = "vines-decorated-round-mirror"
        Title = "Vines Decorated Round Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/vines-round-mirror.png"
        Description = "Charming circular wall mirror decorated with delicate hanging green ivy vines and integrated soft micro fairy lights. Creates a relaxing biophilic and fairy-tale atmosphere, making it a beautiful decoration piece for vanity spaces and vanity zones."
        Specs = [ordered]@{
            "Dimensions" = "30 in / 36 in Diameter options"
            "Decoration" = "Premium artificial green ivy vines wrapping the border"
            "Lighting" = "Micro LED copper wire fairy lights (Battery/USB operated)"
            "Installation" = "Simple wall peg mount"
        }
    },
    [PSCustomObject]@{
        Id = 18
        Slug = "capsule-led-bathroom-mirror"
        Title = "Capsule LED Bathroom Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/capsule-led-mirror.png"
        Description = "Modern pill-shaped capsule mirror with a sleek frosted glass border and touch-sensor outer LED light. Combining space-saving vertical design with modern smart features, this capsule mirror brings a clean, contemporary aesthetic to restroom basins."
        Specs = [ordered]@{
            "Dimensions" = "36 in Height x 18 in Width"
            "Glass Type" = "Copper-free high-durability vanity glass"
            "Lighting System" = "Touch sensor dimmable border LED (Warm/Cool toggle)"
            "Smart Tech" = "Anti-fog heating pad built-in, IP44 rating"
        }
    },
    [PSCustomObject]@{
        Id = 19
        Slug = "smart-backlit-bathroom-vanity-mirror"
        Title = "Smart Backlit Bathroom Vanity Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/bathroom-mirrors.png"
        Description = "Double washbasin backlit LED bathroom mirror with built-in defogger heating pads and touch control buttons. Specially crafted for wide master bathroom counters, this mirror ensures steam-free clarity and excellent illumination."
        Specs = [ordered]@{
            "Dimensions" = "60 in Width x 36 in Height (Customizable)"
            "Lighting" = "Rear backlit high-output LEDs (3 colors adjustable)"
            "Smart Tech" = "Auto-defogger, digital clock, Bluetooth speakers (optional)"
            "Glass Quality" = "Anti-shatter eco-friendly silver mirror"
        }
    },
    [PSCustomObject]@{
        Id = 20
        Slug = "gilded-baroque-mansion-mirror"
        Title = "Gilded Baroque Mansion Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/decorative-mirrors.png"
        Description = "Grand fireplace-mount baroque style living room mirror, featuring highly detailed hand-carved gold leaf finish framing. This majestic piece serves as a traditional fireplace mantel center-piece, adding royal charm and elegance."
        Specs = [ordered]@{
            "Dimensions" = "4.5 ft Height x 3.5 ft Width"
            "Frame Material" = "Hand-carved premium resin & wood finished with gold leaf gilding"
            "Glass Type" = "4mm beveled premium mirror glass"
            "Mounting" = "Heavy duty bracket mount (Professional installation recommended)"
        }
    },
    [PSCustomObject]@{
        Id = 21
        Slug = "minimalist-anodized-hexagon-mirror"
        Title = "Minimalist Anodized Hexagon Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/hexagon-mirror.png"
        Description = "Contemporary brass-finished hexagonal wall mirror, perfect as a geometric feature piece for hallways, bathrooms, or creative wall clusters. Features an ultra-thin anodized aluminium bezel."
        Specs = [ordered]@{
            "Dimensions" = "28 in x 32 in (Customizable)"
            "Frame Material" = "Anodized Aluminium Alloy (Brass / Gold Finish)"
            "Glass Type" = "5mm HD silver mirror with safety backing"
            "Installation" = "Pre-installed keyhole brackets"
        }
    },
    [PSCustomObject]@{
        Id = 22
        Slug = "round-anodized-bronze-trim-mirror"
        Title = "Round Anodized Bronze Trim Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=600&q=80"
        Description = "Floating circular wall mirror styled with an ultra-thin modern anodized bronze metal trim profile. This classic round design acts as a simple yet premium decorative item for modern residential lobbies and living rooms."
        Specs = [ordered]@{
            "Dimensions" = "32 in / 36 in / 40 in Diameter options"
            "Frame Material" = "Anodized bronze aluminum trim bezel"
            "Glass Type" = "HD copper-free mirror glass"
            "Mounting" = "Wall cleat bracket system (hangs flush)"
        }
    },
    [PSCustomObject]@{
        Id = 23
        Slug = "rectangular-frameless-beveled-mirror"
        Title = "Rectangular Frameless Beveled Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80"
        Description = "Frameless rectangular wall vanity mirror featuring clean polished 1-inch beveled edges to refract ambient light. This classic choice provides a sleek, clean surface that integrates beautifully into bathroom settings."
        Specs = [ordered]@{
            "Dimensions" = "36 in x 24 in / 48 in x 36 in options"
            "Borders" = "1-inch precision angle beveled edge polish"
            "Glass Type" = "5mm high-clarity silver mirror glass"
            "Mounting" = "Includes safety wall-mount brackets"
        }
    },
    [PSCustomObject]@{
        Id = 24
        Slug = "arched-entryway-console-mirror"
        Title = "Arched Entryway Console Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=600&q=80"
        Description = "Floor-leaning arched vanity mirror designed to maximize light reflection in luxury dining and lobby spaces. Placed above or next to entryway consoles, this mirror visually expands rooms and distributes light."
        Specs = [ordered]@{
            "Dimensions" = "6.0 ft Height x 3.0 ft Width"
            "Frame Type" = "Minimalist thin iron metal backing frame"
            "Glass Type" = "5mm high-reflectivity clear mirror"
            "Installation" = "Wall anchor system for safety leaning configuration"
        }
    },
    [PSCustomObject]@{
        Id = 25
        Slug = "hollywood-bulb-dressing-mirror"
        Title = "Hollywood Bulb Dressing Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/hollywood-bulb-mirror.png"
        Description = "Professional studio makeup vanity mirror surrounded by high-lumen dimmable LED light globes. Used by professional makeup artists, it provides optimal daylight-balanced illumination for flawless application."
        Specs = [ordered]@{
            "Dimensions" = "32 in x 24 in (Landscape / Portrait adjustable)"
            "Bulbs" = "12-15 high-quality dimmable LED globes (Warm/Neutral/Cool white modes)"
            "Frame Material" = "Gloss white coated aluminum alloy frame & stand base"
            "Smart Tech" = "Integrated smart touch dimming, USB charging port on side"
        }
    },
    [PSCustomObject]@{
        Id = 26
        Slug = "antique-bronze-engraved-mirror"
        Title = "Antique Bronze Engraved Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=600&q=80"
        Description = "Ornate vintage style wall mirror featuring hand-detailed bronze frame motifs and distressed antique finishes. It creates a classic, vintage-luxury feel, ideal for halls, dining areas, and master bedrooms."
        Specs = [ordered]@{
            "Dimensions" = "40 in x 28 in"
            "Frame Material" = "Carved polymer composite with distressed bronze and gold patina coating"
            "Glass Type" = "5mm vintage beveled glass mirror"
            "Mounting" = "Heavy duty D-ring wall mounting brackets pre-installed"
        }
    },
    [PSCustomObject]@{
        Id = 27
        Slug = "sunburst-metal-accent-mirror"
        Title = "Sunburst Metal Accent Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"
        Description = "Striking sunburst design featuring copper rays extending from a central circular focal mirror. This modern art piece serves as a bold geometric accent wall decor, blending rustic colors with contemporary geometry."
        Specs = [ordered]@{
            "Dimensions" = "36 in total diameter (12 in center mirror)"
            "Frame Material" = "Handcrafted iron copper-finished accent rays"
            "Glass Type" = "Flat circular silver mirror"
            "Mounting" = "Single anchor loop mounting back"
        }
    },
    [PSCustomObject]@{
        Id = 28
        Slug = "hanging-leather-strap-oval-mirror"
        Title = "Hanging Leather Strap Oval Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=80"
        Description = "Elegant oval wall mirror suspended from a premium cognac leather strap with a matching solid oak wall peg. Perfect for minimalist and Scandinavian home decor schemes in entryways or master bedrooms."
        Specs = [ordered]@{
            "Dimensions" = "30 in Height x 18 in Width"
            "Hanging Strap" = "Adjustable premium top-grain cognac leather strap"
            "Wall Peg" = "Included solid oak wall mount peg and wall anchor screws"
            "Frame Finish" = "Ultra-thin matte black metal wrap border"
        }
    },
    [PSCustomObject]@{
        Id = 29
        Slug = "organic-wavy-accent-mirror"
        Title = "Organic Wavy Accent Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/wavy-led-mirror.png"
        Description = "A variation of our wavy mirrors featuring a slightly more elongated asymmetrical curve profile. Highly recommended for vertical placement next to dressing wardrobes or consoles to bring dynamic geometry into rooms."
        Specs = [ordered]@{
            "Dimensions" = "42 in Height x 24 in Width (Custom sizes available)"
            "Lighting" = "Rear-mounted warm white LED strip (Optional)"
            "Glass Type" = "5mm premium clarity silver mirror"
            "Installation" = "Dual hang brackets on rear panel"
        }
    },
    [PSCustomObject]@{
        Id = 30
        Slug = "sunburst-decorative-mirror"
        Title = "Sunburst Decorative Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"
        Description = "Stunning metal sunburst frame design surrounding a central convex/flat mirror, making a bold feature wall piece. The radiant pattern catches shifting light, creating beautiful shadows and depth in living areas."
        Specs = [ordered]@{
            "Dimensions" = "32 in total diameter"
            "Frame Material" = "Welded wire steel rays with a premium metallic gold paint coating"
            "Mirror Glass" = "Flat circular vanity mirror center piece"
            "Mounting" = "Integrated metal keyhole hanger on rear side"
        }
    },
    [PSCustomObject]@{
        Id = 31
        Slug = "multi-panel-mirror-set"
        Title = "Multi-Panel Mirror Set"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/multipanel-mirror.png"
        Description = "Custom grid mirrors composed of multiple matching frame segments to give depth to lobby walls. This architectural installation behaves like a window, significantly opening up small hallways and lobbies."
        Specs = [ordered]@{
            "Dimensions" = "4ft x 4ft grid structure (Custom grid sizes available)"
            "Frame Material" = "Powder-coated aluminum division grids (Black / Gold options)"
            "Installation" = "Structural safety wall mount backing board"
            "Customization" = "Grid layout (3x3, 4x3, or custom dimensions)"
        }
    },
    [PSCustomObject]@{
        Id = 32
        Slug = "beveled-edge-mirror"
        Title = "Beveled Edge Mirror"
        Category = "mirrors"
        CategoryLabel = "Premium Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/beveled-mirror.png"
        Description = "Premium mirror glass styled with angled borders to refract ambient lighting like fine crystal prisms. Suitable as a vanity wall ornament or bathroom mirror, giving a clean frameless elegance."
        Specs = [ordered]@{
            "Dimensions" = "36 in x 30 in (Customizable)"
            "Bevel Polish" = "0.75-inch slant bevel polished edge margins"
            "Glass Type" = "5mm high-grade silver mirror glass"
            "Installation" = "Pre-installed heavy duty mounting brackets"
        }
    },
    [PSCustomObject]@{
        Id = 33
        Slug = "smart-touch-sensor-mirror"
        Title = "Smart Touch-Sensor Mirror"
        Category = "mirrors"
        CategoryLabel = "Smart Mirrors"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/smart-touch-mirror.png"
        Description = "Hi-tech smart mirror equipped with glass touch controls, temperature display, and dimmable lighting. Modern styling makes this smart mirror a perfect high-end upgrade for luxurious master washrooms."
        Specs = [ordered]@{
            "Dimensions" = "30 in x 30 in (Square / Round options)"
            "Lighting System" = "3-color LED strip (Warm White, Cool White, Daylight)"
            "Smart Tech" = "Integrated touch controls, LED temperature display, digital clock, defogger"
            "Glass Quality" = "HD silver mirror glass with explosion-proof coating"
        }
    },

    # ==================== GLASS WORK (34-38) ====================
    [PSCustomObject]@{
        Id = 34
        Slug = "glass-shower-partition"
        Title = "Glass Shower Partition"
        Category = "glass"
        CategoryLabel = "Glass Work"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=600&q=80"
        Description = "Heavy tempered glass partition with custom stainless steel hinges and leakproof clear gaskets. Creates a frameless walk-in shower experience, maintaining visual open space while preventing water splash."
        Specs = [ordered]@{
            "Glass Thickness" = "8mm / 10mm / 12mm Tempered Safety Glass"
            "Hardware Material" = "Premium grade 304 Stainless Steel (Chrome / Matte Black finish)"
            "Gaskets" = "Clear water-resistant seals along glass margins"
            "Installation" = "Professional floor and wall channel bracket configuration"
        }
    },
    [PSCustomObject]@{
        Id = 35
        Slug = "office-glass-partition"
        Title = "Office Glass Partition"
        Category = "glass"
        CategoryLabel = "Glass Work"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80"
        Description = "Soundproof frameless glass room dividers configured with modern dark grey structural hardware. Perfect for creating private executive offices and meeting rooms in open-plan corporate floors while letting natural light pass through."
        Specs = [ordered]@{
            "Glass Type" = "Laminated Sound-Insulated Tempered Glass"
            "Frame Channels" = "Anodized heavy-gauge aluminum profiles (Matte Grey / Black)"
            "Configuration" = "Modular swing door or sliding door panel options"
            "Frosted Film" = "Custom frosting strips, logo etching, or venetian pattern printing available"
        }
    },
    [PSCustomObject]@{
        Id = 36
        Slug = "tempered-glass-table-top"
        Title = "Tempered Glass Table Top"
        Category = "glass"
        CategoryLabel = "Glass Work"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "../images/glass-table-top.png"
        Description = "Ultra-tough clear or tinted glass table toppers, custom shaped and sized to protect fine wood furniture or serve as standalone floating glass tabletops for conference and dining spaces."
        Specs = [ordered]@{
            "Glass Thickness" = "6mm / 8mm / 12mm Tempered Glass"
            "Edge Profile" = "Polished flat, pencil edge, or beveled margins"
            "Color Options" = "Ultra-clear, standard green-tint, bronze-tint, or black smoked glass"
            "Customization" = "Round, oval, square, or irregular custom shapes according to template"
        }
    },
    [PSCustomObject]@{
        Id = 37
        Slug = "glass-kitchen-backsplash"
        Title = "Glass Kitchen Backsplash"
        Category = "glass"
        CategoryLabel = "Glass Work"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=600&q=80"
        Description = "Heat-resistant colored lacquer glass panels for kitchen walls, offering an easy-to-clean modern finish that completely eliminates grout joints. Resistant to grease stains and hot oils."
        Specs = [ordered]@{
            "Glass Type" = "6mm Toughened Lacquered Glass (Back-painted)"
            "Heat Tolerance" = "Up to 220°C (safe for gas hob stove backing)"
            "Color Range" = "Any solid color coat (Custom RAL coding matching kitchen cabinet palettes)"
            "Installation" = "Seamless glue mounting onto straight drywall surfaces"
        }
    },
    [PSCustomObject]@{
        Id = 38
        Slug = "glass-staircase-railing"
        Title = "Glass Staircase Railing"
        Category = "glass"
        CategoryLabel = "Glass Work"
        CategoryLink = "mirrors-glass"
        CategoryTitle = "Mirrors & Glass"
        MainImage = "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
        Description = "Premium heavy tempered glass panels serving as safety bannisters for modern staircases and balustrades. Installed using heavy duty floor spigots, handrails, or frameless glass anchor standoffs."
        Specs = [ordered]@{
            "Glass Type" = "12mm Tempered Safety Glass (Laminated available for high-altitude balconies)"
            "Fixture Style" = "Stainless steel floor spigots, side brackets, or aluminium dry-glaze channels"
            "Handrail" = "Stainless steel, solid wood, or fully frameless handrail profiles"
            "Safety" = "Compliant with international architectural load and impact standards"
        }
    },

    # ==================== ALUMINIUM WORK (39-46) ====================
    [PSCustomObject]@{
        Id = 39
        Slug = "aluminium-sliding-window"
        Title = "Aluminium Sliding Window"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
        Description = "Double-glazed soundproof sliding windows featuring high-grade steel-blue frames and rubber weather sealing. Ideal for modern urban homes, providing acoustic blocking and thermal insulation."
        Specs = [ordered]@{
            "Profile Thickness" = "1.2mm / 1.6mm heavy-gauge structural aluminium"
            "Glazing Option" = "Double glazing (5mm Clear + 9A air spacer + 5mm Tinted)"
            "Color Coating" = "Powder-coated charcoal grey, bronze, black, or anodized silver"
            "Locking Mechanism" = "Heavy-duty flush-mount latch locks"
        }
    },
    [PSCustomObject]@{
        Id = 40
        Slug = "aluminium-sliding-door"
        Title = "Aluminium Sliding Door"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "../images/aluminium-doors.png"
        Description = "Heavy-duty sliding patio doors with thermal insulation profiles and heavy smooth-glide rollers. Designed to support wide panorama views and withstand high wind pressures on balconies and terraces."
        Specs = [ordered]@{
            "Track Configuration" = "Double track or Triple track (includes integrated screen doors)"
            "Rollers" = "Double tandem copper wheels for silent, effortless sliding"
            "Glazing" = "8mm single tempered or 12mm double insulated glass panels"
            "Weatherproofing" = "High-density mohair pile weather strips + weather-resistant rubber gasket wrap"
        }
    },
    [PSCustomObject]@{
        Id = 41
        Slug = "aluminium-casement-window"
        Title = "Aluminium Casement Window"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
        Description = "Traditional swing-out casement window frames built with premium locks and durable weather stripping. Hinges on the side allow the window panel to open fully, maximizing interior ventilation."
        Specs = [ordered]@{
            "Opening Style" = "Outward swing (Left / Right hinged, Top-hung awning option)"
            "Hardware" = "Heavy-duty friction hinges, multi-point lock lever handles"
            "Profile Gauge" = "1.4mm architectural grade aluminum extrusion"
            "Safety Screen" = "Detachable mesh screens can be configured on the interior frame"
        }
    },
    [PSCustomObject]@{
        Id = 42
        Slug = "aluminium-main-door"
        Title = "Aluminium Main Door"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "../images/aluminium-doors.png"
        Description = "Premium secure entry door framed in heavy-gauge powder coated aluminium panels with custom glass details. Resistance to moisture swelling and rust makes it a highly durable alternative to solid wood entry gates."
        Specs = [ordered]@{
            "Design" = "Heavy-gauge flush metal panel with vertical decorative frosted glass slits"
            "Hinges" = "High load-bearing stainless steel butt hinges (3x per door panel)"
            "Locks" = "High-security multi-point deadbolt system with smart handle integration"
            "Color Finish" = "Realistic wood-grain heat transfer sublimation or powder-coating"
        }
    },
    [PSCustomObject]@{
        Id = 43
        Slug = "aluminium-railing-grills"
        Title = "Aluminium Railing & Grills"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
        Description = "Modern lightweight, rust-free aluminium balustrades and security grill structures for steps, porches, and terraces. Offers high weather resilience and clean visual lines without the maintenance of iron."
        Specs = [ordered]@{
            "Post Spacing" = "4ft maximum spacing with heavy anchors"
            "Infill" = "Vertical aluminum pickets, horizontal wires, or tempered glass panels"
            "Finish" = "High-durability outdoor polyester powder coat (Black / Bronze)"
            "Height" = "Standard 3ft or 3.5ft balcony height (Customizable)"
        }
    },
    [PSCustomObject]@{
        Id = 44
        Slug = "aluminium-shopfront"
        Title = "Aluminium Shopfront"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "../images/shopfront-shutters.png"
        Description = "Commercial grade aluminium framing featuring safety glass window panels designed for shop and office entrance facades. Offers high glass visibility and robust structural durability."
        Specs = [ordered]@{
            "Frames" = "4in x 1.75in heavy-duty commercial mullion frames"
            "Glass Type" = "12mm clear tempered glass or double-laminated security glass"
            "Doors" = "Single or double commercial swing doors with overhead hydraulic closers"
            "Locking" = "Hook bolt locks with internal cylinder thumbturns"
        }
    },
    [PSCustomObject]@{
        Id = 45
        Slug = "aluminium-partition-wall"
        Title = "Aluminium Partition Wall"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "../images/glass-partitions.png"
        Description = "Industrial and commercial divider walls constructed with sturdy powder-coated aluminium profiles. Widely used to divide spaces in bank offices, clinical corridors, and industrial workshops."
        Specs = [ordered]@{
            "Structure" = "Sturdy partition channels with quick-assemble frame anchors"
            "Infill Panel" = "Half glass (5mm) and half laminated MDF solid board (9mm)"
            "Finish" = "Standard silver anodized or powder coated white/grey"
            "Customization" = "Easily relocatable and expandable design"
        }
    },
    [PSCustomObject]@{
        Id = 46
        Slug = "aluminium-cabinet-frame"
        Title = "Aluminium Cabinet Frame"
        Category = "aluminium"
        CategoryLabel = "Aluminium Work"
        CategoryLink = "aluminium-work"
        CategoryTitle = "Aluminium Work"
        MainImage = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80"
        Description = "Sleek, rust-proof modern kitchen and storage cabinet framing for clean, modern home design lines. Termite-proof, moisture-proof, and fully fire-resistant cabinet building system."
        Specs = [ordered]@{
            "Material" = "Thin lightweight structural kitchen cabinet profiles"
            "Shutters" = "Compatible with colored glass shutters, MDF panels, or ACP boards"
            "Hardware" = "Soft-close hydraulic hinges, magnetic catches"
            "Hygiene" = "Easy to clean, non-porous frame surfaces"
        }
    }
)

Write-Host "Starting page generation for $($products.Count) products..."

# Build HTML files
foreach ($prod in $products) {
    $slug = $prod.Slug
    $title = $prod.Title
    $category = $prod.Category
    $catLabel = $prod.CategoryLabel
    $catLink = $prod.CategoryLink
    $catTitle = $prod.CategoryTitle
    $mainImg = $prod.MainImage
    $desc = $prod.Description
    $id = $prod.Id
    $seoKeyword = if ($category -eq 'mirrors') { 'Mirror Design Sialkot' } else { 'Aluminium Glass Sialkot' }
    $aluminiumActive = if ($category -eq 'aluminium') { 'active' } else { '' }
    $mirrorsActive = if ($category -ne 'aluminium') { 'active' } else { '' }

    # Create specs table rows
    $specsRows = ""
    foreach ($key in $prod.Specs.Keys) {
        $value = $prod.Specs[$key]
        $specsRows += @"
              <tr>
                <td class="specs-label">$key</td>
                <td class="specs-value">$value</td>
              </tr>
"@
    }

    # Generate gallery HTML
    $galleryHTML = ""
    if ($null -ne $prod.Images -and $prod.Images.Count -gt 1) {
        $thumbsHTML = ""
        $index = 0
        foreach ($img in $prod.Images) {
            $activeClass = if ($index -eq 0) { "active" } else { "" }
            $imgSrc = $img.src
            $imgAlt = $img.alt
            $thumbsHTML += @"
          <div class="gallery-thumbnail $activeClass" data-large="$imgSrc" data-alt="$imgAlt">
            <img src="$imgSrc" alt="$imgAlt" loading="lazy">
          </div>
"@
            $index++
        }
        
        $galleryHTML = @"
        <div class="product-gallery-container">
          <div class="product-main-image-wrapper">
            <img src="$mainImg" alt="$title" id="product-main-image">
          </div>
          <div class="gallery-thumbnails">
            $thumbsHTML
          </div>
        </div>
"@
    } else {
        $galleryHTML = @"
        <div class="product-gallery-container">
          <div class="product-main-image-wrapper">
            <img src="$mainImg" alt="$title" id="product-main-image">
          </div>
        </div>
"@
    }

    # Related items (4 items of the same category)
    $related = $products | Where-Object { $_.Id -ne $id -and $_.Category -eq $category } | Select-Object -First 4
    $relatedHTML = ""
    foreach ($rel in $related) {
        $relTitle = $rel.Title
        $relImg = $rel.MainImage
        $relSlug = $rel.Slug
        $relDesc = $rel.Description.Substring(0, [Math]::Min(90, $rel.Description.Length)) + "..."
        
        $relatedHTML += @"
        <div class="product-card fade-in" data-category="$($rel.Category)">
          <div class="product-card-image">
            <img src="$relImg" alt="$relTitle" loading="lazy">
          </div>
          <div class="product-card-body">
            <h3>$relTitle</h3>
            <p class="product-description">$relDesc</p>
            <a href="$relSlug.html" class="btn btn-secondary product-enquire-btn">View Detail</a>
          </div>
        </div>
"@
    }

    # WhatsApp message formatting
    $waSpecsText = ""
    foreach ($key in $prod.Specs.Keys) {
        $value = $prod.Specs[$key]
        $waSpecsText += "`n- *$($key):* $value"
    }

    # Perform custom URI escape for message
    $rawMsg = "Hello Rahman Aluminium & Glass,`n`nI am interested in your product:`n*$title*`n`nSpecifications:$waSpecsText`n`nPlease provide pricing and delivery timeline."
    $waMessage = [uri]::EscapeDataString($rawMsg)
    $waLink = "https://wa.me/923021054485?text=$waMessage"

    # Assemble full page HTML
    $htmlContent = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$title | $seoKeyword | Rahman</title>
  <meta name="description" content="$title - Premium quality $seoKeyword. $($desc.Substring(0, [Math]::Min(120, $desc.Length)))">
  <meta name="author" content="Rahman Aluminium & Glass Works">
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="../details.css">
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>◆</text></svg>">
</head>
<body class="theme-light">

  <!-- ==================== 1. TOP ANNOUNCEMENT BAR ==================== -->
  <div class="announcement-bar">
    <div class="announcement-slider">
      <div class="announcement-track">
        <span class="announcement-item">Free Estimates on All Orders | Quality Aluminium & Glass Work</span>
        <span class="announcement-item">🔥 Trusted Aluminium & Glass Specialists in Pakistan 🔥</span>
        <span class="announcement-item">Free Estimates on All Orders | Quality Aluminium & Glass Work</span>
        <span class="announcement-item">🔥 Trusted Aluminium & Glass Specialists in Pakistan 🔥</span>
      </div>
    </div>
  </div>

  <!-- ==================== 2. CONTACT STRIP ==================== -->
  <div class="contact-strip">
    <div class="container contact-strip-inner">
      <div class="contact-strip-left">
        <a href="mailto:rahmanaluminiumworker@gmail.com" class="contact-strip-link">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          rahmanaluminiumworker@gmail.com
        </a>
      </div>
      <div class="contact-strip-right">
        <a href="tel:+923021054485" class="contact-strip-link">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          +92 302 1054485
        </a>
      </div>
    </div>
  </div>

  <!-- ==================== 3. MAIN HEADER ==================== -->
  <header class="site-header" id="site-header">
    <div class="container header-inner">
      <a href="../index.html#home" class="logo" id="logo"><span>Rahman</span></a>
      <nav class="main-nav" id="main-nav">
        <a href="../index.html#home">Home</a>
        <a href="../index.html#aluminium-work" class="$aluminiumActive">Aluminium Work</a>
        <a href="../index.html#mirrors-glass" class="$mirrorsActive">Mirrors & Glass</a>
        <a href="../index.html#our-best-work">Gallery</a>
        <a href="../index.html#contact">Contact</a>
      </nav>
      <div class="header-actions">
        <a href="https://wa.me/923021054485" target="_blank" rel="noopener" class="header-whatsapp" id="header-whatsapp-link" aria-label="Chat on WhatsApp">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
        <a href="../index.html#contact" class="btn btn-primary header-quote-btn" id="header-quote-btn">Get Quote</a>
        <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>

  <!-- ==================== 4. BREADCRUMBS ==================== -->
  <section class="breadcrumbs">
    <div class="container">
      <div class="breadcrumb-nav">
        <div class="breadcrumb-list">
          <span class="breadcrumb-item"><a href="../index.html">Home</a></span>
          <span class="breadcrumb-separator">◆</span>
          <span class="breadcrumb-item"><a href="../index.html#our-best-work">Portfolio</a></span>
          <span class="breadcrumb-separator">◆</span>
          <span class="breadcrumb-item"><a href="../index.html#$catLink">$catTitle</a></span>
          <span class="breadcrumb-separator">◆</span>
          <span class="breadcrumb-item active">$title</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ==================== 5. PRODUCT DETAILS ==================== -->
  <section class="product-detail-section">
    <div class="container">
      <div class="product-detail-grid">
        
        <!-- Left: Image Gallery -->
        $galleryHTML

        <!-- Right: Product Info & CTA -->
        <div class="product-info-container">
          <span class="product-tag">$catLabel</span>
          <h1 class="product-detail-title">$title</h1>
          
          <p class="product-detail-desc">$desc</p>
          
          <!-- Specs Table -->
          <div class="specs-card">
            <h3 class="specs-title">Technical Specifications</h3>
            <table class="specs-table">
              $specsRows
            </table>
          </div>

          <!-- Feature Icons -->
          <div class="features-card">
            <div class="features-list">
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <span>100% Quality Guaranteed</span>
              </div>
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Fast & Secure Delivery</span>
              </div>
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Custom Dimensions Option</span>
              </div>
              <div class="features-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>$seoKeyword</span>
              </div>
            </div>
          </div>

          <!-- CTA Box -->
          <div class="cta-card">
            <h4 class="cta-header">Interested in this design?</h4>
            <p>Get a direct, free price estimate for this product by messaging our craftsmen on WhatsApp. We offer custom dimensions and installation services.</p>
            <div class="cta-buttons">
              <a href="$waLink" target="_blank" rel="noopener" class="btn-whatsapp-large">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enquire via WhatsApp
              </a>
              <a href="../index.html#our-best-work" class="back-to-portfolio-link">← Back to Portfolio</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

  <!-- ==================== 6. RELATED PRODUCTS ==================== -->
  <section class="related-products-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Similar Designs</span>
        <h2 class="section-title">Related Products</h2>
      </div>
      <div class="related-products-grid">
        $relatedHTML
      </div>
    </div>
  </section>

  <!-- ==================== 7. FOOTER ==================== -->
  <footer class="site-footer" id="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <a href="../index.html#home" class="logo"><span>Rahman</span></a>
          <p>Premium architectural aluminium fabrication and high-grade glass & custom mirror designing across Pakistan.</p>
        </div>
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="../index.html#home">Home</a></li>
            <li><a href="../index.html#aluminium-work">Aluminium Work</a></li>
            <li><a href="../index.html#mirrors-glass">Mirrors & Glass</a></li>
            <li><a href="../index.html#our-best-work">Gallery</a></li>
            <li><a href="../index.html#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Get In Touch</h4>
          <ul>
            <li><a href="tel:+923021054485" class="footer-contact-link">+92 302 1054485</a></li>
            <li><a href="mailto:rahmanaluminiumworker@gmail.com" class="footer-contact-link">rahmanaluminiumworker@gmail.com</a></li>
            <li><span style="color: var(--color-text-secondary); font-size: 0.875rem;">Mon – Sat: 9am – 7pm</span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Rahman. All Rights Reserved.</p>
        <p>Precision in Aluminium & Glass</p>
      </div>
    </div>
  </footer>

  <!-- ==================== 8. FLOATING ACTION BUTTONS ==================== -->
  <div class="floating-contact-buttons">
    <a href="tel:+923021054485" class="float-btn phone-float" aria-label="Call Us">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
    <a href="https://wa.me/923021054485?text=$waMessage" target="_blank" rel="noopener" class="float-btn whatsapp-float" aria-label="Chat on WhatsApp">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  </div>

  <script src="../details.js"></script>
</body>
</html>
"@

    # Save to file
    $filePath = Join-Path $detailsDir "$slug.html"
    [System.IO.File]::WriteAllText($filePath, $htmlContent, [System.Text.Encoding]::UTF8)
    Write-Host "Generated: details/$slug.html"
}

Write-Host "All product detail pages compiled successfully!"
