// Code your solutions in this file
function writeCards(recipients, message) {
    const messages = []
    for (let i = 0; i < recipients.length; i++) {
        messages.push(`Thank you, ${recipients[i]}, for the wonderful ${message} gift!`) ;
    }

    return messages;
}

function countDown(start) {
    while (start >= 0)  {
        console.log(start--);
    }
}