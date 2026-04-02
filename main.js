/* ============================================================
   Maleva Skin Care – main.js
   ============================================================

   HOW TO ADD IMAGES
   -----------------
   Services & Products : set  imageSrc: "images/your-file.jpg"
   Team                : set  imageSrc: "images/team/your-file.jpg"
   Gallery (per branch): set  imageSrc: "images/branch/your-file.jpg"
   Carousel            : set  carouselInclude: true  on any service
                         (uses that service's imageSrc automatically)

   Leave imageSrc: ""  to show the emoji / initial placeholder.
   ============================================================ */


/* ══════════════════════════════════════════════════════════
   DATA — SERVICES
   ══════════════════════════════════════════════════════════ */
const SERVICES = [
  {
    id: "s1",
    name: "HIFU LDM",
    emoji: "✨",
    accent: "gradient-blue",
    description: "Lift, tighten, and contour your face—without surgery. Advanced ultrasound technology for natural-looking results. HIFU (High-Intensity Focused Ultrasound) targets deep skin layers to stimulate collagen production, delivering a non-invasive facelift effect with zero downtime.",
    imageSrc: "images/hifu.jpg",
    imageAlt: "HIFU LDM Treatment",
    carouselInclude: false,
    carouselCaption: "HIFU LDM – Lift & Contour Without Surgery",
  },
  {
    id: "s2",
    name: "Facial Treatment",
    emoji: "🌸",
    accent: "gradient-green",
    description: "Deep cleansing, exfoliation, hydration, and glow. A comprehensive treatment for refreshed, luminous skin. Our facial treatments are customized to your specific skin type and concerns, using premium professional products.",
    imageSrc: "images/facial-treatment.jpg",
    imageAlt: "Facial Treatment",
    carouselInclude: true,
    carouselCaption: "Facial Treatment – Customized Glow",
  },
  {
    id: "s3",
    name: "Coolifting Facial",
    emoji: "❄️",
    accent: "gradient-blue",
    description: "Instant glow using CO₂ technology. Revolutionary treatment for immediate radiance and skin rejuvenation. The CooLifting gun delivers a powerful flow of CO₂ at high pressure combined with a highly concentrated mix of atomized active ingredients.",
    imageSrc: "images/Coolifting.jpg",
    imageAlt: "Coolifting Facial",
    carouselInclude: true,
    carouselCaption: "Coolifting – Instant CO₂ Radiance",
  },
  {
    id: "s4",
    name: "OxyGeneo Facial",
    emoji: "💎",
    accent: "gradient-green",
    description: "Multi-action facial for comprehensive skin renewal. OxyGeneo provides three essential treatments simultaneously: exfoliation, infusion of revitalizing nutrients, and oxygenation. Choose from Whitening, Anti-Aging, Acne Treatment, Balance, and Deep Hydration protocols.",
    imageSrc: "images/Oxygeneo.jpg",
    imageAlt: "OxyGeneo Facial",
    carouselInclude: false,
    carouselCaption: "",
  },
  {
    id: "s5",
    name: "Maleva BB Glow",
    emoji: "🌟",
    accent: "gold",
    description: "Achieve the coveted glass skin effect with this innovative treatment that brightens and reduces discoloration. BB Glow semi-permanent foundation is micro-needled into the skin for a flawless, natural finish that lasts weeks.",
    imageSrc: "images/bb-glow.jpg",
    imageAlt: "BB Glow Treatment",
    carouselInclude: true,
    carouselCaption: "Maleva BB Glow – Glass Skin Effect",
  },
  {
    id: "s6",
    name: "Microneedling with Stem Cells",
    emoji: "🧬",
    accent: "gradient-blue",
    description: "Boost collagen production and accelerate skin repair for youthful, regenerated skin. Microneedling creates controlled micro-channels that allow potent stem cell serums to penetrate deep into the dermis for maximum regenerative benefit.",
    imageSrc: "images/MicroneedlingwithStemCells.jpg",
    imageAlt: "Microneedling with Stem Cells",
    carouselInclude: false,
    carouselCaption: "",
  },
  {
    id: "s7",
    name: "Microneedling with PRP",
    emoji: "💉",
    accent: "gradient-green",
    description: "Harness your own plasma for powerful skin regeneration and natural rejuvenation. Platelet-Rich Plasma is extracted from your own blood and reintroduced via micro-needling, stimulating the body's natural healing response.",
    imageSrc: "images/MicroneedlingwithPRP.jpg",
    imageAlt: "Microneedling with PRP",
    carouselInclude: false,
    carouselCaption: "",
  },
  {
    id: "s8",
    name: "Microneedling with Exosomes",
    emoji: "🔬",
    accent: "gradient-blue",
    description: "Advanced cellular repair and rejuvenation using cutting-edge exosome technology. Exosomes are nano-sized vesicles that act as cellular messengers, delivering growth factors and proteins directly to target cells for accelerated skin renewal.",
    imageSrc: "images/MicroneedlingwithExosomes.jpg",
    imageAlt: "Microneedling with Exosomes",
    carouselInclude: true,
    carouselCaption: "",
  },
  {
    id: "s9",
    name: "Maleva Thermoclear",
    emoji: "⚡",
    accent: "gold",
    description: "Effectively removes skin tags, milia, age spots, and other skin imperfections for flawless skin. Thermoclear uses radiofrequency technology to safely and precisely treat minor skin irregularities with minimal discomfort and no scarring.",
    imageSrc: "images/Thermoclear.jpg",
    imageAlt: "Thermoclear Treatment",
    carouselInclude: true,
    carouselCaption: "Thermoclear – Flawless Skin Perfection",
  },
  {
    id: "s10",
    name: "Rejuran Eye",
    emoji: "👁️",
    accent: "gradient-blue",
    description: "Rejuran Eye is a specialized treatment designed to rejuvenate the delicate under-eye area using polynucleotides that promote natural skin repair. It helps reduce fine lines, wrinkles, and dark circles while improving elasticity and hydration. The result is smoother, brighter, and more youthful-looking eyes.",
    imageSrc: "images/RejuranEye.jpg",
    imageAlt: "Rejuran Eye Treatment",
    carouselInclude: true,
    carouselCaption: "Rejuran Eye – Youthful Eyes",
  },
  {
    id: "s11",
    name: "Rejuran Face",
    emoji: "✦",
    accent: "gradient-green",
    description: "Rejuran Face is a skin-repair treatment that restores and rejuvenates the skin from within using polynucleotides. It boosts collagen production, improves skin texture, and helps reduce acne scars, pores, and signs of aging. This treatment leaves your skin healthier, firmer, and naturally radiant.",
    imageSrc: "images/RejuranFace.jpg",
    imageAlt: "Rejuran Face Treatment",
    carouselInclude: true,
    carouselCaption: "Rejuran Face – Youthful Face",
  },
  {
    id: "s12",
    name: "Juvelook",
    emoji: "💫",
    accent: "gold",
    description: "Juvelook is a hybrid skin booster that delivers both instant hydration and long-term collagen stimulation. Combining hyaluronic acid and PDLLA, it improves skin elasticity, smooths fine lines, and enhances overall firmness. The result is a natural, long-lasting glow with visibly rejuvenated skin.",
    imageSrc: "images/Juvelook.png",
    imageAlt: "Juvelook Treatment",
    carouselInclude: true,
    carouselCaption: "Juvelook – Youthful Glow",
  },
];


/* ══════════════════════════════════════════════════════════
   DATA — PRODUCTS
   ══════════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    id: "p1",
    name: "CC Cream",
    emoji: "🧴",
    accent: "gradient-blue",
    description: "Color-correcting coverage with SPF protection for a flawless, natural finish. This multi-function cream corrects redness, dark spots, and uneven tone while shielding skin from UV damage. Lightweight, breathable formula suitable for daily wear.",
    imageSrc: "images/CC Cream.png",
    imageAlt: "CC Cream",
  },
  {
    id: "p2",
    name: "Vita-White Cream",
    emoji: "✨",
    accent: "gradient-green",
    description: "Intensive brightening cream that evens skin tone and enhances radiance. Formulated with a potent blend of vitamin complexes and brightening actives, it visibly diminishes dark spots and delivers a luminous, even complexion over time.",
    imageSrc: "images/vita-cream.png",
    imageAlt: "Vita-White Cream",
  },
  {
    id: "p3",
    name: "EGF Limpid Foam Cleanser",
    emoji: "🫧",
    accent: "gradient-blue",
    description: "Gentle yet effective cleanser enriched with EGF (Epidermal Growth Factor) for deep cleansing and skin renewal. Creates a luxurious, creamy foam that removes impurities without stripping the skin's natural moisture barrier.",
    imageSrc: "images/limpid.png",
    imageAlt: "EGF Limpid Foam Cleanser",
  },
  {
    id: "p4",
    name: "Vita-White 10 Serum",
    emoji: "💧",
    accent: "gradient-green",
    description: "Concentrated brightening serum for luminous, even-toned skin. Packed with 10 powerful whitening actives that work synergistically to target hyperpigmentation, dark spots, and dullness—revealing your skin's natural radiance.",
    imageSrc: "images/vita-white.png",
    imageAlt: "Vita-White 10 Serum",
  },
  {
    id: "p5",
    name: "EGF Hydra Gentle Skin",
    emoji: "🌿",
    accent: "gradient-blue",
    description: "Hydrating toner that prepares skin for optimal product absorption. EGF-enriched formula soothes, balances, and deeply hydrates, creating the perfect canvas for subsequent skincare steps while supporting cell renewal.",
    imageSrc: "images/egf.png",
    imageAlt: "EGF Hydra Gentle Skin",
  },
  {
    id: "p6",
    name: "EGF Exfoliating Peeling Gel",
    emoji: "🔄",
    accent: "gradient-green",
    description: "Gentle exfoliation for smooth, renewed skin texture. This innovative gel exfoliates through a peeling action that removes dead skin cells, unclogs pores, and reveals brighter, softer skin without harsh abrasives.",
    imageSrc: "images/egf-gel.png",
    imageAlt: "EGF Exfoliating Peeling Gel",
  },
  {
    id: "p7",
    name: "EGF Renewal Complex Cream",
    emoji: "🌙",
    accent: "gold",
    description: "Anti-aging powerhouse that renews and revitalizes skin overnight. Rich in EGF and restorative botanicals, this night cream works while you sleep to repair daily damage, boost collagen, and restore a plump, youthful complexion.",
    imageSrc: "images/egf-cream.png",
    imageAlt: "EGF Renewal Complex Cream",
  },
  {
    id: "p8",
    name: "EGF Revitalize Serum",
    emoji: "💎",
    accent: "gradient-blue",
    description: "Concentrated formula for deep rejuvenation and age-defying results. This premium serum combines EGF with powerful peptides and antioxidants to visibly reduce fine lines, firm skin, and restore a healthy, youthful glow.",
    imageSrc: "images/egf-serum.png",
    imageAlt: "EGF Revitalize Serum",
  },
];


/* ══════════════════════════════════════════════════════════
   DATA — TEAM  (Owner & Co-Owner)
   ══════════════════════════════════════════════════════════ */
const TEAM = [
  {
    id: "team1",
    name: "Evan P. Quilala",               // ← replace with actual name
    role: "Owner | Nurse Esthetician",
    imageSrc: "images/dr1.png",                      // ← e.g. "images/team/owner.jpg"
    imageAlt: "Owner",
    description: "Evan P. Quilala is a California-based esthetician and skincare professional dedicated to delivering personalized, results-driven treatments. As a leader in the aesthetics field, she combines expertise with a passion for enhancing natural beauty. Her approach focuses on helping clients achieve healthy, radiant skin through tailored care.",
  },
  {
    id: "team2",
    name: "Lerma P. Moreinis",            // ← replace with actual name
    role: "Co-Owner | Nurse Esthetician",
    imageSrc: "images/dr2.png",                      // ← e.g. "images/team/co-owner.jpg"
    imageAlt: "Co-Owner",
    description: "Lerma P. Moreinis is a California-based esthetician and co-owner dedicated to delivering high-quality, personalized skincare treatments. With a strong focus on client care and results, she plays a key role in ensuring every service meets the highest standards. Her expertise and commitment help clients achieve healthy, radiant skin.",
  },
];


/* ══════════════════════════════════════════════════════════
   DATA — BRANCHES  (Location Section)
   Each branch has its own gallery of 4 clinic photos.
   ══════════════════════════════════════════════════════════ */
const BRANCHES = [
  {
    id: "artesia",
    name: "Artesia, Los Angeles",
    badge: "Branch 1",
    address: "18832 Norwalk Boulevard\nArtesia, Los Angeles, CA 90701\nUnited States",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8876538821894!2d-118.08575!3d33.86576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd2e0e9c7c7c7c%3A0x1234567890abcdef!2s18832%20Norwalk%20Boulevard%2C%20Artesia%2C%20CA%2090701!5e0!3m2!1sen!2sus!4v1234567890",
    gallery: [
      { label: "Clinic Exterior",  emoji: "🏛️", imageSrc: "images/artesia-exterior.jpg", imageAlt: "Artesia Clinic Exterior"  },
      { label: "Reception Area",   emoji: "🛋️", imageSrc: "images/artesia-reception.jpg", imageAlt: "Artesia Reception Area"   },
      { label: "Treatment Room",   emoji: "💆", imageSrc: "images/artesia-treatment.jpg", imageAlt: "Artesia Treatment Room"   },
      { label: "Relaxation Space", emoji: "🌺", imageSrc: "images/artesia-relaxation.jpg", imageAlt: "Artesia Relaxation Space" },
    ],
  },
  {
    id: "stockton",
    name: "Stockton, California",
    badge: "Branch 2",
    address: "37 W Yokuts Ave Suite B, Room 1\nStockton, CA 95207\nUnited States",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.123456789!2d-121.3153!3d37.9577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80904123456789ab%3A0xabcdef1234567890!2s37%20W%20Yokuts%20Ave%2C%20Stockton%2C%20CA%2095207!5e0!3m2!1sen!2sus!4v1234567890",
    gallery: [
      { label: "Reception Area",   emoji: "🛋️", imageSrc: "images/stockton-reception.jpg", imageAlt: "Stockton Reception Area"   },
      { label: "Treatment Room",   emoji: "💆", imageSrc: "images/stockton-treatment.jpg", imageAlt: "Stockton Treatment Room"   },
    ],
  },
];


/* ══════════════════════════════════════════════════════════
   RENDER — TEAM SECTION
   ══════════════════════════════════════════════════════════ */
function renderTeam() {
  const container = document.getElementById("team-grid");
  if (!container) return;

  container.innerHTML = TEAM.map(member => {
    const photoHTML = member.imageSrc
      ? `<img src="${member.imageSrc}" alt="${member.imageAlt}" class="team-photo">`
      : `<div class="team-photo-placeholder"><span>${member.name.charAt(0)}</span></div>`;

    return `
      <div class="team-card">
        <div class="team-photo-wrap">${photoHTML}</div>
        <div class="team-info">
          <p class="team-role">${member.role}</p>
          <h3 class="team-name gradient-text">${member.name}</h3>
          <p class="team-bio">${member.description}</p>
        </div>
      </div>`;
  }).join("");
}


/* ══════════════════════════════════════════════════════════
   RENDER — BRANCHES (Location Section)
   ══════════════════════════════════════════════════════════ */
function renderBranches() {
  const container = document.getElementById("branches-container");
  if (!container) return;

  const galleryBorderColors = [
    "border-blue-100",
    "border-green-100",
    "border-yellow-100",
    "border-green-100",
  ];

  container.innerHTML = BRANCHES.map(branch => {
    const galleryHTML = branch.gallery.map((g, i) => {
      if (g.imageSrc) {
        return `
          <div class="gallery-cell rounded-2xl overflow-hidden shadow-md border-2 ${galleryBorderColors[i]}">
            <img src="${g.imageSrc}" alt="${g.imageAlt}" class="gallery-img">
            <div class="gallery-label">${g.label}</div>
          </div>`;
      }
      return `
        <div class="gallery-cell gallery-placeholder rounded-2xl shadow-md border-2 ${galleryBorderColors[i]}">
          <span class="gallery-emoji">${g.emoji}</span>
          <p class="gallery-placeholder-label">${g.label}</p>
        </div>`;
    }).join("");

    const addressLines = branch.address.split("\n").join("<br>");

    return `
      <div class="branch-block">
        <div class="branch-header">
          <span class="branch-badge">${branch.badge}</span>
          <h3 class="branch-title gradient-text">${branch.name}</h3>
          <p class="branch-address">${addressLines}</p>
        </div>
        <div class="branch-body">
          <!-- Map -->
          <div class="branch-map rounded-3xl overflow-hidden shadow-xl border-4 border-blue-50">
            <iframe src="${branch.mapSrc}"
              width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy">
            </iframe>
          </div>
          <!-- Gallery -->
          <div class="branch-gallery">
            ${galleryHTML}
          </div>
        </div>
      </div>`;
  }).join("");
}


/* ══════════════════════════════════════════════════════════
   RENDER — SERVICES GRID
   ══════════════════════════════════════════════════════════ */
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = SERVICES.map(s => {
    const titleClass = s.accent === "gold" ? "" : s.accent;
    const titleStyle = s.accent === "gold"
      ? `style="font-weight:600; color:var(--primary-gold);"`
      : `style="font-weight:600;"`;

    const imageHTML = s.imageSrc
      ? `<img src="${s.imageSrc}" alt="${s.imageAlt}" class="card-image">`
      : `<div class="card-placeholder"><span>${s.emoji}</span></div>`;

    return `
      <div class="service-card bg-white rounded-3xl shadow-lg border-2 border-transparent overflow-hidden"
           onclick="openDetailModal('service', '${s.id}')">
        <div class="card-image-wrap">${imageHTML}</div>
        <div class="p-6">
          <h3 class="text-2xl mb-2 ${titleClass}" ${titleStyle}>${s.name}</h3>
          <p class="text-gray-500 text-sm leading-relaxed line-clamp-2">${s.description}</p>
          <p class="text-xs mt-3 font-medium" style="color:var(--primary-blue);">Tap to learn more →</p>
        </div>
      </div>`;
  }).join("");
}


/* ══════════════════════════════════════════════════════════
   RENDER — PRODUCTS GRID
   ══════════════════════════════════════════════════════════ */
function renderProducts() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(p => {
    const titleClass = p.accent === "gold" ? "" : p.accent;
    const titleStyle = p.accent === "gold"
      ? `style="font-weight:600; color:var(--primary-gold);"`
      : `style="font-weight:600;"`;

    const imageHTML = p.imageSrc
      ? `<img src="${p.imageSrc}" alt="${p.imageAlt}" class="card-image">`
      : `<div class="card-placeholder"><span>${p.emoji}</span></div>`;

    return `
      <div class="product-card bg-white rounded-3xl shadow-lg border-2 border-transparent overflow-hidden"
           onclick="openDetailModal('product', '${p.id}')">
        <div class="card-image-wrap square">${imageHTML}</div>
        <div class="p-5">
          <h3 class="text-lg mb-1 ${titleClass}" ${titleStyle}>${p.name}</h3>
          <p class="text-gray-500 text-xs leading-relaxed line-clamp-2">${p.description}</p>
          <p class="text-xs mt-2 font-medium" style="color:var(--primary-green);">Tap for details →</p>
        </div>
      </div>`;
  }).join("");
}


/* ══════════════════════════════════════════════════════════
   CAROUSEL
   ══════════════════════════════════════════════════════════ */
let carouselIndex = 0;
let carouselTimer = null;
let carouselSlides = [];

function buildCarousel() {
  carouselSlides = SERVICES.filter(s => s.carouselInclude);
  const track = document.getElementById("carousel-track");
  const dots   = document.getElementById("carousel-dots");
  if (!track || !dots) return;

  track.innerHTML = carouselSlides.map(s => {
    if (s.imageSrc) {
      return `
        <div class="carousel-slide">
          <img src="${s.imageSrc}" alt="${s.imageAlt}">
          <div class="carousel-caption">${s.carouselCaption}</div>
        </div>`;
    }
    return `
      <div class="carousel-slide">
        <div class="carousel-slide-placeholder">
          <span>${s.emoji}</span>
          <p>${s.carouselCaption || s.name}</p>
        </div>
      </div>`;
  }).join("");

  dots.innerHTML = carouselSlides.map((_, i) =>
    `<button class="carousel-dot ${i === 0 ? "active" : ""}"
             onclick="goToSlide(${i})" aria-label="Slide ${i + 1}"></button>`
  ).join("");

  carouselIndex = 0;
  updateCarousel(false);
  startCarouselTimer();
}

function updateCarousel(animate = true) {
  const track = document.getElementById("carousel-track");
  if (!track) return;
  if (!animate) track.style.transition = "none";
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  if (!animate) requestAnimationFrame(() => { track.style.transition = ""; });
  document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === carouselIndex);
  });
}

function goToSlide(index) {
  carouselIndex = (index + carouselSlides.length) % carouselSlides.length;
  updateCarousel();
  resetCarouselTimer();
}

function prevSlide() { goToSlide(carouselIndex - 1); }
function nextSlide() { goToSlide(carouselIndex + 1); }

function startCarouselTimer() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => goToSlide(carouselIndex + 1), 4500);
}

function resetCarouselTimer() {
  clearInterval(carouselTimer);
  startCarouselTimer();
}


/* ══════════════════════════════════════════════════════════
   DETAIL MODAL  (Services & Products)
   ══════════════════════════════════════════════════════════ */
function openDetailModal(type, id) {
  const item = type === "service"
    ? SERVICES.find(s => s.id === id)
    : PRODUCTS.find(p => p.id === id);
  if (!item) return;

  const modal     = document.getElementById("detailModal");
  const imageWrap = document.getElementById("detail-modal-image-wrap");
  const title     = document.getElementById("detail-modal-title");
  const body      = document.getElementById("detail-modal-body");

  imageWrap.innerHTML = item.imageSrc
    ? `<img src="${item.imageSrc}" alt="${item.imageAlt}" class="detail-modal-image">`
    : `<div class="detail-modal-image-placeholder"><span>${item.emoji}</span></div>`;

  if (item.accent === "gold") {
    title.className = "";
    title.style.color = "var(--primary-gold)";
  } else {
    title.className = item.accent;
    title.style.color = "";
  }
  title.textContent = item.name;
  body.textContent  = item.description;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeDetailModal() {
  document.getElementById("detailModal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ══════════════════════════════════════════════════════════
   WELCOME MODAL
   ══════════════════════════════════════════════════════════ */
function bookNow() {
  window.open("https://www.vagaro.com/malevaskincareandspa/services", "_blank");
}

/* ══════════════════════════════════════════════════════════
   WELCOME MODAL
   ══════════════════════════════════════════════════════════ */
function closeModal() {
  document.getElementById("welcomeModal").style.display = "none";
  document.body.style.overflow = "";
}


/* ══════════════════════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════════════════════ */
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

window.addEventListener("scroll", () => {
  document.getElementById("navbar")
    ?.classList.toggle("scrolled", window.scrollY > 50);
});


/* ══════════════════════════════════════════════════════════
   CONTACT FORM  — saves submissions to localStorage
   so inquiry.html can display them in the table.
   ══════════════════════════════════════════════════════════ */
const INQUIRY_KEY = "maleva_inquiries";

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // Collect field values by their order in the form
  // Fields: Inquiry Type, Preferred Branch, Full Name, Email, Contact Number
  const selects = form.querySelectorAll("select");
  const inputs  = form.querySelectorAll("input");

  const entry = {
    type:   selects[0]?.value || "",    // Book Appointment | inquiry
    branch: selects[1]?.value || "",    // artesia | stockton
    name:   inputs[0]?.value.trim() || "",
    email:  inputs[1]?.value.trim() || "",
    phone:  inputs[2]?.value.trim() || "",
    date:   new Date().toISOString(),
  };

  // Save to localStorage
  try {
    const existing = JSON.parse(localStorage.getItem(INQUIRY_KEY)) || [];
    existing.push(entry);
    localStorage.setItem(INQUIRY_KEY, JSON.stringify(existing));
  } catch (e) {
    console.warn("Could not save inquiry:", e);
  }

  // Success feedback
  const btn = form.querySelector("button[type='submit']");
  const original = btn.textContent;
  btn.textContent = "✓ Inquiry Submitted!";
  btn.style.background = "linear-gradient(135deg, var(--primary-green), var(--light-green))";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    btn.disabled = false;
    form.reset();
  }, 2800);
}


/* ══════════════════════════════════════════════════════════
   CLOSE MODALS — keyboard & backdrop click
   ══════════════════════════════════════════════════════════ */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeDetailModal(); closeModal(); }
});

document.addEventListener("click", (e) => {
  const dm = document.getElementById("detailModal");
  if (dm?.classList.contains("open") && e.target === dm) closeDetailModal();
  const wm = document.getElementById("welcomeModal");
  if (wm && e.target === wm) closeModal();
});


/* ══════════════════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  renderTeam();
  renderServices();
  renderProducts();
  renderBranches();
  buildCarousel();
});
