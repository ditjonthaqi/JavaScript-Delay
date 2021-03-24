async function delay(time) {
    const start = Date.now();
    const end = time * 1000;
    while (true) {
        if((Date.now() - start) > end)
        break;
    }
}



//example 1
delay(2).then(() => {
     //your code
});

//example 2
(async function () {
    await delay(3);
    console.log("done");
} )();



