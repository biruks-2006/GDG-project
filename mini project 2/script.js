const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");
startBtn.addEventListener("click", startTest);
function startTest() {
  let score = 0;
  let dream = prompt("Do you dream while sleeping? (yes/no)");
  dream = dream.toLowerCase();
  if (dream === "yes") {
    score++;
  }
  let favoriteColor = prompt("What is your favorite color?");
  if (favoriteColor !== "") {
    score++;
  }
  let emotion = prompt("Do you sometimes feel sad or happy? (yes/no)");
  emotion = emotion.toLowerCase();

  if (emotion === "yes") {
    score++;
  }
  let puzzle = prompt("How many months have 28 days?");
  puzzle = Number(puzzle);
  if (puzzle === 12) {
    score++;
  }
  if (score >= 3) {
    result.innerText = "You are definitely human! 🧑✨";
  } else if (score >= 1) {
    result.innerText = "Half human, half robot! 🤖⚡";
  } else {
    result.innerText = "Robot detected! 🤖🚨";
  }
}
