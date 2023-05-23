"use strict";

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 
'🍾 Correct secretsecretNumber!';

document.querySelector('.secretsecretNumber').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.secretNumber').textContent = secretsecretNumber;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ Put It In!!");

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage("🍾 You Win!!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#3cff00";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the player's guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("☠️ You Lose!!");
      document.querySelector(".score").textContent = 0;
    }
  }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start Guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });

  /* // When the player's guess is too high
       } else if (guess > secretsecretNumber) {
         if (score > 1) {
           document.querySelector('.message').textContent = '📈 Too High!';
           score--;
           document.querySelector('.score').textContent = score;
     
           // When the player loses
         } else {
           document.querySelector('.message').textContent = '☠️ You Lose!!';
           document.querySelector('.score').textContent = 0;
         }
     
         // When the player's guess is too low
       } else if (guess < secretsecretNumber) {
         if (score > 1) {
           document.querySelector('.message').textContent = '📉 Too Low!';
           score--;
           document.querySelector('.score').textContent = score;
     
           // When the player loses
         } else {
           document.querySelector('.message').textContent = '☠️ You Lose!!';
           document.querySelector('.score').textContent = 0;
         }
       }
     }); */
});
