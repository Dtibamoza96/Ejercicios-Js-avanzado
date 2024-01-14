function sumUntil(maxValue) {
  let sumatorio = 0;
  for (let i=1; i<=maxValue; i++){
    sumatorio += i;
  }
  return sumatorio;
}

console.log(sumUntil(5));