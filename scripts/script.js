"use strict";

let grantHealth = 10;
let userHealth = 40;
let userWins=0;
let play;
let userName;

play = prompt("Would you like to play? Enter 'yes' or 'no'");

if (play === 'yes') {
    userName = prompt("What is your character's name?");
    console.log(userName);
}

while (play === 'yes') {
    userHealth -= Math.floor(Math.random()*2+1);
    console.log(`${userName} has ${userHealth} health left.`);
    // console.log(`grant has ${3 - userWins} lives left`);
    grantHealth -= Math.floor(Math.random()*2+1);
    console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);

    if (grantHealth <= 0) {
        userWins++;
        grantHealth = 10;
    }
    if (userHealth <= 0) {
        console.log(`${userName}  has died, please play again!`);
        play = false;
    }
    if (userWins >=3) {
        console.log(`Grant the Mighty Chicken has been defeated!`);
        play = false;
    }

}