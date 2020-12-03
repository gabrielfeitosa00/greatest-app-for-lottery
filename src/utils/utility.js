export const genereteNumber = (num, compareArr, maxNumber) => {
  let array = [];
  // gera n numeros aleatórios entre 1 e maxNumber

  for (let i = 0; array.length < num; i++) {
    let rand = Math.floor(Math.random() * maxNumber) + 1;

    if (array.indexOf(rand) === -1 && compareArr.indexOf(rand) === -1) {
      array.push(rand);
    }
  }

//   array = array.map((item) => (item = String(item)));

  // array.push(bet.join(''))

  return array;
};
