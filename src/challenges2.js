// Desafio 11
function generatePhoneNumber(array) {
  const arrayString = array.toString();
  const numbers = arrayString.replaceAll(',', '');
  const DDD = numbers.slice(0, 2);
  const firstNumbers = numbers.slice(2, 7);
  const finalNumbers = numbers.slice(7, 11);
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let count = 0;
  for (let i = 0; i < array.length; i += 1) {
    let number = array[i];
    for (let index = 0; index < array.length; index += 1) {
      array[index] === number ? count += 1 : count;
      if (number < 0 || number > 9 || count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    count = 0;
  }
  return `(${DDD}) ${firstNumbers}-${finalNumbers}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const isBiggerThan = lineA < (lineB + lineC)
  && lineA > (Math.abs((lineB - lineC) * 1));
  const isTriangle = isBiggerThan && true;
  return isTriangle;
}

triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(string) {
  let reg = /\d+/g;
  let sum = 0;
  const numbers = string.match(reg);
  for (let i = 0; i < numbers.length; i += 1) {
    sum += Number(numbers[i]);
  }
  const result = sum === 1 ? `${sum} copo de água` : `${sum} copos de água`;
  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
