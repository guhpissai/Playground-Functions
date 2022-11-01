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
function highestCount(array) {
  let soma = 0;
  let higherNumber = Math.max.apply(null,array);
  for (index = 0; index < array.length; index += 1) {
    if (array[index] === higherNumber) {
      soma += 1;
    }
  }
  console.log(soma);
  return soma;
}
 highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';
  if (mouse - cat2 === 2 && mouse - cat1 === 3) {
    result = 'cat2';
  } else if (mouse - cat1 === 6 && mouse - cat2 === 12) {
    result = 'cat1';
  } else if (cat1 && cat2 === mouse ) {
    result = 'os gatos trombam e o rato foge';
  }
  console.log(result);
  return result;
}
catAndMouse(10, 7, 8);

// Desafio 8
function fizzBuzz(array) {
  let textArray = [];
  for (index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      textArray.push("fizzBuzz");
    } else if (array[index] % 5 == 0) {
      textArray.push("buzz");
      console.log("buzz");
    } else if ((array[index] % 3 == 0)) {
      textArray.push("fizz")
    } else {
      textArray.push("bug!");
    }
  }
  console.log(textArray)
  return textArray;
}
fizzBuzz([7, 9]);

// Desafio 9
function encode(string) {
  let decodificate = [];
  for (let index = 0; index < string.length; index += 1) {
      if (string[index] === "a") {
      decodificate.push("1");
    } else {
      decodificate.push(string[index]);
    }
  }
console.log(decodificate.join(' '));
}
encode("amar como a beleza");

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
