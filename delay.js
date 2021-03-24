async function delay(time) {
    const start = Date.now();
    const end = time * 1000;
    while (true) {
        if((Date.now() - start) > end)
        break;
    }
}



//example 


delay(2).then(() => {
     //your code
});
