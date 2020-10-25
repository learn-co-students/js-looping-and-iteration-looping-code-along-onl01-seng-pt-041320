// Code your solutions in this file
function writeCards(names, occasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);

    }
   
    return messages;
  }

function countDown(number) {

  let countdown = number;
  
    while (countdown >= 0) {
        console.log(countdown--);
    }
}