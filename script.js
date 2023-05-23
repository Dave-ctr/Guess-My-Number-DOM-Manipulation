'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 
'🍾 Correct secretNumber!';

document.querySelector('.secretnumber').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretnumber;
let score = 20;
document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 
        '⛔ No Number!';
     } else if (guess === secretnumber) {
        document.querySelector('.message').textContent =
        '🍾 Correct Number!';
     } else if (guess > secretnumber) {
        document.querySelector('.message').textContent =
        '📈 Too High!';
        for (score)?????; 
        document.querySelector('.score').textContent = score;
     } else if (guess < secretnumber) {
        document.querySelector('.message').textContent =
        '📉 Too Low!';
        score--; 
        document.querySelector('.score').textContent = score;
     }
});
