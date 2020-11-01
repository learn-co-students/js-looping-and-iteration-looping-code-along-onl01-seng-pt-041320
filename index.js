// //Code your solutions in this file

// for loop
function writeCards(name, message) {
    const messages = []
    for (let i = 0; i < name.length; i ++) {
        messages.push(`Thank you, ${name[i]}, for the wonderful ${message} gift!`);
    }
    return messages;
}

// While loop
let i = 0;
function countDown(counter) {
    while(counter >= i) {
        console.log(counter--);
    }
}