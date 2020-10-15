// Code your solutions in this file
function writeCards(names, event){
    let messages = []
    for(let i = 0; i < names.length; i++){
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return messages
}

function countDown(num){
    let x = 0;
    while(x < num + 1){
        console.log(x++);
    }

}
