const container = document.querySelector(".container");
const big = document.querySelector(".big");
const p = document.querySelectorAll(".p");

container.addEventListener("click", function (e) {
  // check yang di klik adalah p
  if (e.target.className == "p") {
    big.src = e.target.src;
    big.classList.add("fade");
    setTimeout(function () {
      big.classList.remove("fade");
    }, 500);

    p.forEach(function (p) {
      //   if (p.classList.contains("active")) {
      //     p.classList.remove("active");
      //   }
      p.className = "p";
    });

    e.target.classList.add("active");
  }
});
