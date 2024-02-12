const number = 15;

let promiseNumber = new Promise((resolve, reject) => {
    if (number > 10){
        resolve("mayor que 10");
    } else {
        reject("menor que 10");
    }
})


promiseNumber.then((respuesta)=> (console.log(respuesta)))
promiseNumber.catch((error)=>(console.log(error)))