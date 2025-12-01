document.getElementById("year").textContent = new Date().getFullYear();

const btn = document.getElementById("backToTop");

function toggleBackToTop() {
  if (!btn) return;
  if (window.scrollY > 400) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
}

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();
