// Variable declaration
const age = document.getElementById("age");
const submit = document.getElementById("Submit");
const welcome = document.getElementById("welcome");
const message = document.getElementById("message");
const agePart = document.getElementById("age-part");
const game = document.getElementById("game");
const level = document.getElementById("level");
const descImage = document.getElementById("desc-image");
const riddle = document.getElementById("riddle");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

// Start game when age is submitted
submit.onclick = function ageChecker() {
    const ageValue = age.value;
    if (ageValue < 8 || ageValue > 100) {
        message.innerText = "Nah I can't let you play this game... Trust me it's for your own mental health";
        return;
    } else if (ageValue < 0) {
        message.innerText = "Why are you that dumb? Don't you know that age should always be positive? That's the kind of thing that happens when they throw away the baby and raise the placenta.";
        return;
    } else {
        message.innerText = "Alright, let's start the game as you're old enough";
        agePart.style.display = "none";
        welcome.style.display = "none";
        game.style.display = "block";
        levelOne();
    }
}

// Lose function
function lose() {
    game.style.display = "none";
    message.innerText = "You lose! You ain't really smart! Siiickkk!!!";
    return;
}

// Level one
function levelOne() {
    level.innerText = "Level One";
    riddle.innerText = "I’m tall when I’m young, and I’m short when I’m old. What am I?";
    option4.innerText = "A candle";
    option2.innerText = "A tree";
    option3.innerText = "A pencil";
    option1.innerText = "A shadow";

    option4.onclick = () => { winLevelOne(); };
    option2.onclick = lose;
    option3.onclick = lose;
    option1.onclick = lose;
}

function winLevelOne() {
    message.innerText = "Hummm... Beginner's luck, huh!?";
    levelTwo();
}

// Level two
function levelTwo() {
    level.innerText = "Level Two";
    riddle.innerText = "What has many keys but can’t open a single door?";
    option1.innerText = "A piano";
    option2.innerText = "A map";
    option3.innerText = "A keyboard";
    option4.innerText = "A car";

    option1.onclick = () => { winLevelTwo(); };
    option2.onclick = lose;
    option3.onclick = lose;
    option4.onclick = lose;
}

function winLevelTwo() {
    message.innerText = "Well done! Let's move to the next level.";
    levelThree();
}

// Level three
function levelThree() {
    level.innerText = "Level Three";
    riddle.innerText = "What can you catch but not throw?";
    option1.innerText = "A cold";
    option2.innerText = "A dream";
    option3.innerText = "A smile";
    option4.innerText = "A promise";

    option3.onclick = () => { winLevelThree(); };
    option1.onclick = lose;
    option2.onclick = lose;
    option4.onclick = lose;
}

function winLevelThree() {
    message.innerText = "Good job! You're on fire!";
    levelFour();
}

// Level four
function levelFour() {
    level.innerText = "Level Four";
    riddle.innerText = "What comes once in a minute, twice in a moment, but never in a thousand years?";
    option2.innerText = "A letter";
    option1.innerText = "A second";
    option3.innerText = "A blink";
    option4.innerText = "A breath";

    option2.onclick = () => { winLevelFour(); };
    option1.onclick = lose;
    option3.onclick = lose;
    option4.onclick = lose;
}

function winLevelFour() {
    message.innerText = "You're doing great! Keep it up!";
    levelFive();
}

// Level five
function levelFive() {
    level.innerText = "Level Five";
    riddle.innerText = "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?";
    option1.innerText = "A map";
    option2.innerText = "A desert";
    option3.innerText = "A dream";
    option4.innerText = "A book";

    option1.onclick = () => { winLevelFive(); };
    option2.onclick = lose;
    option3.onclick = lose;
    option4.onclick = lose;
}

function winLevelFive() {
    message.innerText = "Impressive! Moving on!";
    levelSix();
}

// Level six
function levelSix() {
    level.innerText = "Level Six";
    riddle.innerText = "I have keys but no locks. I have space but no room. You can enter, but you can’t go outside. What am I?";
    option1.innerText = "A computer";
    option2.innerText = "A keyboard";
    option3.innerText = "A phone";
    option4.innerText = "A house";

    option1.onclick = () => { winLevelSix(); };
    option2.onclick = lose;
    option3.onclick = lose;
    option4.onclick = lose;
}

function winLevelSix() {
    message.innerText = "Incredible! Last one!";
    levelSeven();
}

// Level seven
function levelSeven() {
    level.innerText = "Level Seven";
    riddle.innerText = "What can travel around the world while staying in a corner?";
    option1.innerText = "A stamp";
    option2.innerText = "A letter";
    option3.innerText = "A shadow";
    option4.innerText = "A photograph";

    option3.onclick = () => { winLevelSeven(); };
    option2.onclick = lose;
    option1.onclick = lose;
    option4.onclick = lose;
}

const winLevelSeven = () => {
    message.innerText = "Congratulations! You've completed all levels!";
    game.style.display = "none";
}


// debut du jeu
levelOne();
//May be later...
// //Part two: the guessing game...
// const guess = document.getElementById("guess");

// function guessNumber() {
//     let options = document.getElementById("options");
//     options.style.display = "none";
//     let title = document.getElementById("part");
//     title.innerText = "Part Two: The guessing game";
//     let level = document.getElementById("level");
//     level.innerText = "";
//     let riddle = document.getElementById("riddle");
//     riddle.innerText = "I'm thinking of a number between 1 and 100. Can you guess it?";

//     let inputNumber = document.createElement('input');
//     inputNumber.type = 'number';
//     inputNumber.id = 'myNumberInput';  
//     inputNumber.name = 'number';       
// let guessedContainer = document.getElementById("guessed-container");
//     guessedContainer.appendChild(inputNumber);
// let attempts = 0;
//     let random = Math.floor(Math.random() * 100) + 1;
//     //let submit2 = getElementById("Submit2");
//     let submit2 = document.createElement("button");
//     submit2.id = "Submit2";
//     submit2.innerText = "Submit";
//     document.getElementById("guessed-container").appendChild(submit2);
//     let running = true


//     let guessed = inputNumber.value;
//     guessed = parseInt(guessed);
    
//     while(running){
//         if(guessed < random){
//             window.alert("Too low, try again");
//             attempts++;
//         }else if(guessed > random){
//             window.alert("Too high, try again");
//             attempts++;
//         }else if(guessed == random){
//             window.alert("You win!, the number was ${random}. You did it after ${attempts} attempts");
//             running = false;
//         }
// }
// }

// guess.onclick = () => { guessNumber(); };



// function for the tricky button...
const admin = document.getElementById("admin-button");

admin.addEventListener('click',function(){
    alert('😒 You should start minding your own business...');
})