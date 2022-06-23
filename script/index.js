const progress = document.querySelector("#progress");

const prev = document.querySelector("#prev");

const next = document.querySelector("#next");

const circles = document.querySelectorAll(".circle");

let currentActive = 1;

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  const progressWidth =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  progress.style.width = progressWidth;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

prev.addEventListener("click", () => {
  currentActive -= 1;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

next.addEventListener("click", () => {
  currentActive += 1;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
