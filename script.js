var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

const parallax_el = document.querySelectorAll(".parallax");

window.addEventListener("mousemove", (e) => {
  const xValue = (window.innerWidth / 2 - e.clientX) / 50;
  const yValue = (window.innerHeight / 2 - e.clientY) / 50;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    el.style.transform = `translateX(${-xValue * speedx}px) translateY(${
      -yValue * speedy
    }px)`;
  });
});
