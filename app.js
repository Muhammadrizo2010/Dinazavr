const dinazavr = document.querySelector(".dinazavr");
const cactus = document.querySelector(".cactus");
const score = document.querySelector(".score");

dinazavr.onclick = () => {
  jump();
};

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode == 32) {
    jump();
  }
});

window.addEventListener("click", () => {
  jump();
});

function jump() {
  dinazavr.classList.add("animation");

  setTimeout(() => {
    dinazavr.classList.remove("animation");
  }, 500);
}

function checkCrash() {
  let count = 0;
  setInterval(() => {
    count++;
    score.innerHTML = count;
  }, 1000);
  setInterval(() => {
    let kaktusningChapdanMasofasi = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

    let dinazavrningBalandligi = parseInt(
      window.getComputedStyle(dinazavr).getPropertyValue("bottom")
    );

    if (
      kaktusningChapdanMasofasi < 115 &&
      kaktusningChapdanMasofasi > 0 &&
      dinazavrningBalandligi < 50
    ) {
      alert("Game Over! Try again");
      count = 0;
    }
  }, 10);
}

checkCrash();
