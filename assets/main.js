const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const topButton = document.getElementById("backToTop");
const menuToggle = document.getElementById("menuToggle");
const globalNav = document.getElementById("globalNav");

const toggleTopButton = () => {
  if (!topButton) return;
  if (window.scrollY > 300) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
};

window.addEventListener("scroll", toggleTopButton, { passive: true });
toggleTopButton();

if (topButton) {
  topButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (menuToggle && globalNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = globalNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  globalNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      globalNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
