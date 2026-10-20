
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const backTop = document.getElementById("backTop");
const serviceSearch = document.getElementById("serviceSearch");
const serviceCards = document.querySelectorAll(".service-card");
const noResults = document.getElementById("noResults");

// Menu navigasi pada layar HP
menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu" : "Buka menu"
  );

  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

// Tutup menu setelah memilih tautan
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka menu");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// Pencarian layanan rumah sakit
serviceSearch.addEventListener("input", () => {
  const keyword = serviceSearch.value
    .trim()
    .toLowerCase();

  let visibleCount = 0;

  serviceCards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    const matches = text.includes(keyword);

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount > 0;
});

// Tahun otomatis pada footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Tombol kembali ke atas
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 350);
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
