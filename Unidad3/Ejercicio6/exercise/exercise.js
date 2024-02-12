function sum(...numbers) {
    return numbers.reduce((accumulator,current)=> accumulator + current, 0);
}

console.log(sum(1, 2, 3, 4, 5));