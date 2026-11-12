

const productsData = [
  {
    "id": 101,
    "title": "Wireless Noise-Canceling Headphones",
    "category": "Electronics",
    "price": 199.99,
    "rating": 4.8,
    "stock": 25,
    "description": "Experience crystal-clear sound and industry-leading noise cancellation with up to 30 hours of battery life and plush ergonomic ear cushions.",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 102,
    "title": "Minimalist Mechanical Keyboard",
    "category": "Electronics",
    "price": 89.99,
    "rating": 4.6,
    "stock": 40,
    "description": "Compact 75% layout mechanical keyboard featuring hot-swappable switches, customizable RGB backlighting, and durable PBT keycaps.",
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 104,
    "title": "Smart Fitness Watch",
    "category": "Wearables",
    "price": 149.99,
    "rating": 4.5,
    "stock": 30,
    "description": "Track your daily workouts, heart rate, blood oxygen levels, and sleep patterns with a vivid AMOLED display and 7-day battery life.",
    "image": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 105,
    "title": "Classic Leather Backpack",
    "category": "Accessories",
    "price": 119.99,
    "rating": 4.9,
    "stock": 20,
    "description": "Handcrafted from genuine full-grain leather, featuring a padded compartment for up to 15-inch laptops and multiple secure pockets.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 106,
    "title": "Portable Bluetooth Speaker",
    "category": "Electronics",
    "price": 79.99,
    "rating": 4.6,
    "stock": 50,
    "description": "Deliver powerful 360-degree sound with deep bass and IP67 waterproof protection, perfect for outdoor adventures and pool parties.",
    "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 107,
    "title": "Stainless Steel Espresso Machine",
    "category": "Home & Kitchen",
    "price": 399.99,
    "rating": 4.8,
    "stock": 10,
    "description": "Brew barista-quality espresso at home with a 15-bar professional pressure pump, integrated conical burr grinder, and steam wand.",
    "image": "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 108,
    "title": "Ultra-Wide Gaming Monitor",
    "category": "Electronics",
    "price": 499.99,
    "rating": 4.7,
    "stock": 12,
    "description": "Immerse yourself in stunning visuals with a 34-inch curved display, 144Hz refresh rate, 1ms response time, and HDR support.",
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 109,
    "title": "Minimalist Ceramic Desk Lamp",
    "category": "Home & Kitchen",
    "price": 45.99,
    "rating": 4.4,
    "stock": 35,
    "description": "Add a warm, cozy ambiance to your workspace with adjustable brightness levels and a sleek modern ceramic base design.",
    "image": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 110,
    "title": "Professional Chef Knife Set",
    "category": "Home & Kitchen",
    "price": 129.99,
    "rating": 4.9,
    "stock": 25,
    "description": "High-carbon stainless steel blades engineered for precision cutting, featuring ergonomic wooden handles and a matching solid block.",
    "image": "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 111,
    "title": "Precision Wireless Gaming Mouse",
    "category": "Electronics",
    "price": 69.99,
    "rating": 4.7,
    "stock": 45,
    "description": "Ultra-lightweight ergonomic gaming mouse with 26,000 DPI optical sensor, low latency wireless connection, and customizable side buttons.",
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 112,
    "title": "Electric Pour-Over Coffee Kettle",
    "category": "Home & Kitchen",
    "price": 84.99,
    "rating": 4.8,
    "stock": 22,
    "description": "Gooseneck precision spout kettle with exact variable temperature control, quick heating, and a built-in brew stopwatch.",
    "image": "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 113,
    "title": "Noise-Isolating Studio Monitors",
    "category": "Electronics",
    "price": 299.99,
    "rating": 4.9,
    "stock": 18,
    "description": "Active 2-way nearfield studio monitors providing flat frequency response, deep bass resolution, and crystal-clear acoustic clarity.",
    "image": "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 114,
    "title": "Adjustable Standing Desk Converter",
    "category": "Furniture",
    "price": 179.99,
    "rating": 4.6,
    "stock": 14,
    "description": "Pneumatic height-adjustable dual-tier desk riser designed for seamless transition between sitting and standing during long work hours.",
    "image": "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 115,
    "title": "Polarized Acetate Sunglasses",
    "category": "Accessories",
    "price": 95.00,
    "rating": 4.5,
    "stock": 30,
    "description": "Classic timeless frame design crafted from premium hand-polished acetate with Category 3 UV400 anti-glare polarized lenses.",
    "image": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 116,
    "title": "Compact 4K Action Camera",
    "category": "Electronics",
    "price": 229.99,
    "rating": 4.7,
    "stock": 28,
    "description": "Waterproof up to 10 meters with 4K/60fps video recording, electronic image stabilization, and dual color display touchscreens.",
    "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 117,
    "title": "Anodized Aluminum Desk Organizer",
    "category": "Accessories",
    "price": 34.99,
    "rating": 4.4,
    "stock": 60,
    "description": "Modular desk accessory tray crafted from CNC machined aluminum to keep stationery, cables, and small devices neatly organized.",
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 118,
    "title": "Smart RGB Ambient Light Bar",
    "category": "Electronics",
    "price": 64.99,
    "rating": 4.6,
    "stock": 35,
    "description": "Dual light bars with app-controlled screen audio sync, dynamic lighting effects, and smart voice assistant compatibility.",
    "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 119,
    "title": "Thermal Insulated Travel Mug",
    "category": "Home & Kitchen",
    "price": 27.99,
    "rating": 4.8,
    "stock": 55,
    "description": "Double-wall vacuum insulated stainless steel tumbler keeping beverages hot for 6 hours or cold for up to 12 hours with a leak-proof lid.",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 120,
    "title": "Fast Wireless Charging Stand",
    "category": "Electronics",
    "price": 39.99,
    "rating": 4.5,
    "stock": 40,
    "description": "Qi-certified 15W dual-coil fast wireless charging station for smartphone and earbuds with intelligent temperature control.",
    "image": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 121,
    "title": "True Wireless Earbuds Pro",
    "category": "Electronics",
    "price": 129.99,
    "rating": 4.7,
    "stock": 45,
    "description": "Active noise-canceling earbuds with spatial audio, sweat-resistant IPX5 rating, and a compact wireless charging case.",
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 122,
    "title": "USB-C Multi-Port Hub Adapter",
    "category": "Electronics",
    "price": 49.99,
    "rating": 4.5,
    "stock": 65,
    "description": "7-in-1 aluminum adapter featuring 4K HDMI output, 100W Power Delivery pass-through, SD card slots, and high-speed USB 3.0 ports.",
    "image": "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 123,
    "title": "4K Ultra HD Streaming Webcam",
    "category": "Electronics",
    "price": 139.99,
    "rating": 4.6,
    "stock": 22,
    "description": "Auto-framing 4K webcam with dual noise-reducing microphones, HDR light correction, and an integrated magnetic privacy shutter.",
    "image": "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 124,
    "title": "Portable 1TB NVMe SSD",
    "category": "Electronics",
    "price": 109.99,
    "rating": 4.9,
    "stock": 38,
    "description": "Pocket-sized solid-state drive delivering blazing 1050MB/s read speeds with shock-resistant ruggedized aluminum housing.",
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 125,
    "title": "Smart Wi-Fi Mesh Router System",
    "category": "Electronics",
    "price": 249.99,
    "rating": 4.7,
    "stock": 15,
    "description": "Whole-home Wi-Fi 6 coverage up to 4,500 sq. ft. with seamless roaming, parental controls, and support for over 100 connected devices.",
    "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 126,
    "title": "Condenser USB Podcast Microphone",
    "category": "Electronics",
    "price": 99.99,
    "rating": 4.8,
    "stock": 29,
    "description": "Broadcast-quality cardioid condenser microphone with zero-latency headphone monitoring, gain control dial, and weighted desktop stand.",
    "image": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 127,
    "title": "Mini Smart Home Hub Speaker",
    "category": "Electronics",
    "price": 49.99,
    "rating": 4.4,
    "stock": 50,
    "description": "Compact voice-controlled smart speaker with rich room-filling sound and built-in smart home automation capabilities.",
    "image": "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 128,
    "title": "Cast Iron Dutch Oven 6-Quart",
    "category": "Home & Kitchen",
    "price": 89.99,
    "rating": 4.9,
    "stock": 19,
    "description": "Heavy-duty enameled cast iron pot offering superior heat retention and even distribution for slow-cooking, braising, and baking.",
    "image": "https://images.unsplash.com/photo-1584990347449-fd98bc063110?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 129,
    "title": "Digital Air Fryer 5.8-Quart",
    "category": "Home & Kitchen",
    "price": 119.99,
    "rating": 4.7,
    "stock": 32,
    "description": "Oil-free rapid air circulation fryer with 11 one-touch presets, non-stick dishwasher-safe basket, and digital touchscreen.",
    "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 130,
    "title": "Ultrasonic Aromatherapy Diffuser",
    "category": "Home & Kitchen",
    "price": 34.99,
    "rating": 4.5,
    "stock": 48,
    "description": "Whisper-quiet essential oil diffuser with wood-grain finish, 7 soothing LED mood lights, and waterless auto shut-off safety.",
    "image": "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 131,
    "title": "High-Speed Countertop Blender",
    "category": "Home & Kitchen",
    "price": 159.99,
    "rating": 4.6,
    "stock": 21,
    "description": "1400-watt motor with hardened stainless steel blades capable of crushing ice, nuts, and frozen fruits into silky smoothies.",
    "image": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 132,
    "title": "Organic Bamboo Cutting Board Set",
    "category": "Home & Kitchen",
    "price": 32.99,
    "rating": 4.7,
    "stock": 44,
    "description": "Set of 3 antimicrobial, knife-friendly bamboo chopping boards featuring deep juice grooves and built-in side handles.",
    "image": "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 133,
    "title": "Smart Wi-Fi Robot Vacuum",
    "category": "Home & Kitchen",
    "price": 279.99,
    "rating": 4.6,
    "stock": 14,
    "description": "LiDAR navigation robotic vacuum with 3000Pa strong suction, automatic self-charging, and customizable no-go zones via mobile app.",
    "image": "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 134,
    "title": "HEPA True Air Purifier",
    "category": "Home & Kitchen",
    "price": 139.99,
    "rating": 4.8,
    "stock": 27,
    "description": "3-stage H13 True HEPA filtration system capturing 99.97% of airborne allergens, dust, smoke, and pet dander with ultra-quiet sleep mode.",
    "image": "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 135,
    "title": "Ceramic Matcha Tea Ceremony Set",
    "category": "Home & Kitchen",
    "price": 42.99,
    "rating": 4.9,
    "stock": 30,
    "description": "Handcrafted stoneware matcha bowl with pouring spout, traditional bamboo whisk (chasen), scoop, and ceramic whisk holder.",
    "image": "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 136,
    "title": "Chronograph Minimalist Wristwatch",
    "category": "Wearables",
    "price": 165.00,
    "rating": 4.7,
    "stock": 24,
    "description": "Japanese quartz movement watch housed in a brushed stainless steel case with scratch-resistant sapphire crystal and Italian leather strap.",
    "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 137,
    "title": "Smart Health Tracking Ring",
    "category": "Wearables",
    "price": 249.99,
    "rating": 4.6,
    "stock": 18,
    "description": "Ultra-lightweight titanium smart ring monitoring heart rate variability, skin temperature, readiness score, and sleep stages 24/7.",
    "image": "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 138,
    "title": "Rugged GPS Multisport Watch",
    "category": "Wearables",
    "price": 299.99,
    "rating": 4.8,
    "stock": 16,
    "description": "Built to military standards with dual-frequency GPS, topographic maps, barometric altimeter, and 20-day battery endurance.",
    "image": "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 139,
    "title": "Slim Activity Tracker Band",
    "category": "Wearables",
    "price": 59.99,
    "rating": 4.4,
    "stock": 55,
    "description": "Featherlight waterproof fitness band with step counter, 24/7 heart rate monitoring, smartphone notifications, and 14-day battery.",
    "image": "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 140,
    "title": "Bone Conduction Sport Headphones",
    "category": "Wearables",
    "price": 119.99,
    "rating": 4.6,
    "stock": 33,
    "description": "Open-ear titanium frame headphones delivering audio through cheekbones while keeping you aware of traffic and surroundings.",
    "image": "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 141,
    "title": "Smart Audio Polarized Glasses",
    "category": "Wearables",
    "price": 179.99,
    "rating": 4.3,
    "stock": 20,
    "description": "Stylish sunglasses with discreet open-ear directional speakers, touch temple controls, and integrated microphone for hands-free calls.",
    "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 142,
    "title": "Hybrid Mechanical Smartwatch",
    "category": "Wearables",
    "price": 189.99,
    "rating": 4.5,
    "stock": 22,
    "description": "Combines classic analog watch hands with a hidden E-Ink display for discreet notifications, step goals, and 30-day battery life.",
    "image": "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 143,
    "title": "Kids GPS Safety Smartwatch",
    "category": "Wearables",
    "price": 89.99,
    "rating": 4.5,
    "stock": 36,
    "description": "Durable kid-friendly smartwatch featuring real-time GPS location tracking, SOS emergency button, two-way calling, and step games.",
    "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 144,
    "title": "RFID Blocking Leather Bifold Wallet",
    "category": "Accessories",
    "price": 44.99,
    "rating": 4.8,
    "stock": 52,
    "description": "Slim top-grain vegetable-tanned leather wallet with built-in RFID shielding, quick-access card slot, and full bill compartment.",
    "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 145,
    "title": "Wool Felt Laptop Sleeve 14-Inch",
    "category": "Accessories",
    "price": 29.99,
    "rating": 4.6,
    "stock": 47,
    "description": "Soft natural merino wool felt protective sleeve with genuine leather trim and an exterior pocket for charger and notebook.",
    "image": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 146,
    "title": "Water-Resistant Tech Organizer Pouch",
    "category": "Accessories",
    "price": 36.99,
    "rating": 4.7,
    "stock": 41,
    "description": "Clamshell travel organizer with elastic cable loops, zippered mesh pockets, and weather-sealed YKK zippers for chargers and dongles.",
    "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 147,
    "title": "Canvas & Leather Weekender Duffel",
    "category": "Accessories",
    "price": 135.00,
    "rating": 4.8,
    "stock": 17,
    "description": "Heavyweight waxed cotton canvas overnight travel bag reinforced with full-grain leather handles, brass hardware, and shoe compartment.",
    "image": "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 148,
    "title": "Braided Nylon USB-C Fast Cable 2-Pack",
    "category": "Accessories",
    "price": 19.99,
    "rating": 4.7,
    "stock": 80,
    "description": "6-foot reinforced Kevlar-core braided charging cables rated for 100W Power Delivery and 30,000+ bend lifespan.",
    "image": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 149,
    "title": "Ergonomic Aluminum Laptop Stand",
    "category": "Accessories",
    "price": 45.99,
    "rating": 4.8,
    "stock": 39,
    "description": "Elevates laptops to eye level for improved posture, featuring ventilated cooling design and non-slip silicone protective pads.",
    "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 150,
    "title": "Compact Windproof Travel Umbrella",
    "category": "Accessories",
    "price": 28.99,
    "rating": 4.5,
    "stock": 58,
    "description": "Auto-open and close compact umbrella built with 10 reinforced fiberglass ribs and Teflon-coated water-repellent canopy.",
    "image": "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 151,
    "title": "Anti-Theft Crossbody Sling Bag",
    "category": "Accessories",
    "price": 54.99,
    "rating": 4.6,
    "stock": 34,
    "description": "Everyday minimalist sling pack featuring slash-resistant fabric, lockable zippers, hidden back passport pocket, and magnetic buckle.",
    "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 152,
    "title": "Ergonomic Mesh Office Chair",
    "category": "Furniture",
    "price": 289.99,
    "rating": 4.7,
    "stock": 16,
    "description": "Breathable high-back mesh task chair with dynamic lumbar support, 3D adjustable armrests, and synchro-tilt recline lock.",
    "image": "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 153,
    "title": "Mid-Century Walnut Coffee Table",
    "category": "Furniture",
    "price": 249.99,
    "rating": 4.8,
    "stock": 11,
    "description": "Solid American walnut veneer coffee table featuring tapered wooden legs, beveled edges, and a spacious lower storage shelf.",
    "image": "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 154,
    "title": "Scandinavian Boucle Accent Chair",
    "category": "Furniture",
    "price": 329.99,
    "rating": 4.6,
    "stock": 9,
    "description": "Cozy textured ivory boucle lounge armchair supported by a sturdy solid oak frame for living rooms or reading corners.",
    "image": "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 155,
    "title": "5-Tier Industrial Ladder Bookshelf",
    "category": "Furniture",
    "price": 139.99,
    "rating": 4.5,
    "stock": 20,
    "description": "Space-saving wall-leaning bookcase combining matte black powder-coated steel framing with rustic oak wood shelves.",
    "image": "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 156,
    "title": "Minimalist Solid Oak Nightstand",
    "category": "Furniture",
    "price": 149.99,
    "rating": 4.7,
    "stock": 18,
    "description": "Bedside table crafted from sustainably sourced solid oak featuring a soft-close drawer and open cubby for books.",
    "image": "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 157,
    "title": "Velvet Storage Ottoman Bench",
    "category": "Furniture",
    "price": 119.99,
    "rating": 4.6,
    "stock": 23,
    "description": "Tufted emerald velvet entryway or end-of-bed bench with hydraulic safety hinges revealing generous hidden blanket storage.",
    "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 158,
    "title": "Round Marble Top Bistro Side Table",
    "category": "Furniture",
    "price": 129.99,
    "rating": 4.5,
    "stock": 15,
    "description": "Genuine white Carrara marble tabletop paired with a sleek brushed brass pedestal base for modern living spaces.",
    "image": "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 159,
    "title": "Modular Floating Wall Shelf Trio",
    "category": "Furniture",
    "price": 59.99,
    "rating": 4.4,
    "stock": 42,
    "description": "Set of 3 concealed-bracket solid ash wood wall shelves ideal for displaying plants, framed art, and collectibles.",
    "image": "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 160,
    "title": "Modern Tripod Floor Lamp",
    "category": "Furniture",
    "price": 109.99,
    "rating": 4.7,
    "stock": 21,
    "description": "Mid-century standing lamp featuring solid walnut tripod legs, a linen drum shade, and a convenient foot-pedal switch.",
    "image": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&auto=format&fit=crop&q=60"
  },
  {
    "id": 161,
    "title": "Dual Monitor Clamp Desk Riser",
    "category": "Furniture",
    "price": 89.99,
    "rating": 4.8,
    "stock": 27,
    "description": "Full-motion gas-spring dual monitor arm mount supporting up to two 32-inch screens with integrated cable management channels.",
    "image": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=60"
  }
];

function getData() {
  return productsData;
}

export default getData;

