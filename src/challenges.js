// Desafio 1
const brazilHexa = true;
const italyPenta = false;
const argentinaBi = true;

function compareTrue(bol1, bol2) {  
  if (bol1 === false && bol2 === true) {
    return false;
  } else if (bol1 === true && bol2 === false) {
    return false;
  } else if (bol1 === false && bol2 === false) {
    return false;
  } else if (bol1 === true && bol2 === true) {
    return true;
  }
}
// compareTrue(argentinaBi, brazilHexa);


// Desafio 2
function calcArea(base, height) {
  const result = (base * height) / 2;
  console.log(result);
  return result;
}
// calcArea(10, 50);
// calcArea(5, 2);
// calcArea(51, 1);
// Desafio 3
function splitSentence(text) {
  const frase = text;
  const arrayFrase = frase.split(' ')
  return arrayFrase;
}
console.log(splitSentence('Go Tryber'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));
// Desafio 4
function concatName(array) {
  const textArray = array;
  const textConc = `${textArray[(textArray.length - 1)]}, ${textArray[0]}`
  console.log(textConc);
  return textConc;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
concatName(['foguete', 'não', 'tem', 'ré']);
concatName(['captain', 'my', 'captain']);


// Desafio 5
function footballPoints(wins, ties) {
  const numberOfWins = wins * 3;
  const numberOfTies = ties * 1;
  const total = numberOfWins + numberOfTies;
  console.log(total);
  return total;
}
footballPoints(14, 8);
footballPoints(1, 2);
footballPoints(0, 0);

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
