

function repeatHello (callback) {
    let setInterval_id= setInterval(() => {callback()},1000);
    setTimeout(() => {clearInterval(setInterval_id)}, 5000);
}

repeatHello(()=>console.log("Hello"));