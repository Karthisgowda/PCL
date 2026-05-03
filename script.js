const slides = Array.from(document.querySelectorAll(".slide"));
const current = document.querySelector("#current");
const total = document.querySelector("#total");
const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let index = 0;
total.textContent = slides.length;

function showSlide(nextIndex) {
  index = Math.max(0, Math.min(slides.length - 1, nextIndex));
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });
  current.textContent = index + 1;
  progress.style.width = `${((index + 1) / slides.length) * 100}%`;
  prev.disabled = index === 0;
  next.disabled = index === slides.length - 1;
  document.title = `${slides[index].dataset.title} · AI Solar Presentation`;
}

prev.addEventListener("click", () => showSlide(index - 1));
next.addEventListener("click", () => showSlide(index + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    showSlide(index + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    showSlide(index - 1);
  }
  if (event.key === "Home") {
    showSlide(0);
  }
  if (event.key === "End") {
    showSlide(slides.length - 1);
  }
});

showSlide(0);
