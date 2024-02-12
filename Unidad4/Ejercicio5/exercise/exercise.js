const isLogged = true;

function promise(isLogged) {
    return new Promise((resolve, reject) => {
    if (isLogged == true){
        resolve(Math.random());
    } else {
        reject("Necesitas loggearte");
    }
    })
} 

function promise_dos(number) {
    return new Promise ((resolve,reject) => {
        if (number > 0.5) { 
            resolve({name: "John", age: 24});
        }else {
            reject("error")
        }
    })
}

promise(isLogged).then ((numeroRandom)=>{console.log(numeroRandom); return promise_dos(numeroRandom)}).then ((objUsuario)=>{console.log(objUsuario)}).catch ((error)=>{console.log(error)})