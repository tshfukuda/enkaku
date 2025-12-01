document.getElementById("year").textContent = new Date().getFullYear();

const sideBtn = document.getElementById("backToTopSide");

function toggleSideBtn() {
  if (!sideBtn) return;
  if (window.scrollY > 300) sideBtn.classList.add("show");
  else sideBtn.classList.remove("show");
}

window.addEventListener("scroll", toggleSideBtn, { passive: true });
toggleSideBtn();
