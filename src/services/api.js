

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
  }
]

function getData() {
     
  return productsData;
  
}

export default getData;