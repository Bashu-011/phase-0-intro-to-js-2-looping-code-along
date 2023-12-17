function writeCards(array2, event){
    let array1 = [];
    for (let i = 0; i < array2.length; i++){
        let string = `Thank you, ${array2[i]}, for the wonderful ${event} gift!`;
        array1.push(string);
        }
    return (array1);
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(x){
    while (x >= 0){
        console.log(x);
        x--
    }
}

