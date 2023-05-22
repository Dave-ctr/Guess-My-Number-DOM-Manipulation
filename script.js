'use strict';

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 
'🍾 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

const number = Math.random();

const x = function() {
    console.log(23);
}

document.querySelector('.check').addEventListener
('click', function() {
    const guess = document.querySelector('guess').value
    console.log(guess, typeof '.guess');
});

document.querySelector('.message').textContent = 
'🍾 Correct Number!';

if (!'guess') {
    document.querySelector('.message').textContent = 
'😠 No Number!';
 }
});