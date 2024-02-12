function printAsyncName (callback, name) {
    setInterval(() => { callback()}, 1000);
    setInterval(() => {console.log(name)}, 2000);
}

function printHello () {
    console.log("Hello");
}

printAsyncName(printHello,"pepe");