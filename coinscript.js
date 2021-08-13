let heads = 0;
let tails = 0;
let flip = document.querySelector(".flip");
let flipButton = document.getElementById("flip");
let resetButton = document.querySelector("#reset");

// console.log(heads, tails, flip, flipButton, resetButton);

flipButton.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  console.log(i);
  flip.style.animation = "none";
  if (i) {
    setTimeout(function () {
      flip.style.animation = "flip-heads 3s backwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      flip.style.animation = "flip-tails 3s forwards";
    }, 600);
    tails++;
  }
  setTimeout(updateStats, 3000);
  disableButton();
});

function updateStats() {
  document.querySelector("#heads").textContent = `heads: ${heads}`;
  document.querySelector("#tails").textContent = `tails :${tails}`;
}

function disableButton() {
  flipButton.disabled = true;
  setTimeout(function () {
    flipButton.disabled = false;
  }, 3000);
}

resetButton.addEventListener("click", () => {
  flip.style.animation = "rotateX(0)";
  heads = 0;
  tails = 0;
  updateStats();
});
