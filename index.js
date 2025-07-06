const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specials = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let characters = [...alphabet, ...numbers, ...specials];
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");
let inputLength = document.getElementById("userInputLength").value;
let alphabetEl = document.getElementById("alphabet");
let numbersEl = document.getElementById("numbers");
let specialEl = document.getElementById("special");

function getRandomChar() {
  let randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}
function getRandomPassword() {
  let randomPassword = "";
  for (let i = 0; i < Number(inputLength); i++) {
    randomPassword += getRandomChar();
  }
  return randomPassword;
}

function noalphabet() {
  if (alphabetEl.checked === false) {
    characters = characters.filter((char) => !alphabet.includes(char));
  }
}

function noNumbers() {
  if (numbersEl.checked === false) {
    characters = characters.filter((char) => !numbers.includes(char));
  }
}
function noSpecial() {
  if (specialEl.checked === false) {
    characters = characters.filter((char) => !specials.includes(char));
  }
}

function errorCheckbox() {
  if (
    alphabetEl.checked === false &&
    numbersEl.checked === false &&
    specialEl.checked === false
  ) {
    alert("Select one or more checkbox");
  }
}

function errorLength() {
  if (!Number(inputLength)) {
    alert("Enter valid length!");
  }
}

function generatePass() {
  noalphabet();
  noNumbers();
  noSpecial();
  errorCheckbox();
  errorLength();
  password1El.textContent = getRandomPassword();
  password2El.textContent = getRandomPassword();
}

function copy1() {
  let text1 = password1El.textContent;
  navigator.clipboard.writeText(text1);
}
function copy2() {
  let text2 = password2El.textContent;
  navigator.clipboard.writeText(text2);
}
