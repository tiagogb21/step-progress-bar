const progress = document.querySelector("#progress");

const prev = document.querySelector("#progress");

const prev = document.querySelector("#next");

const circles = document.querySelectorAll(".circles");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive += 1;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
};

prev.addEventListener("click", () => {
  currentActive -= 1;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});
