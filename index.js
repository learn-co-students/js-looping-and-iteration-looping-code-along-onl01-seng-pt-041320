// Code your solutions in this file
const names = ['Vedran', 'Ogi', 'Jelena'];
const holiday = 'praznik';

function writeCards(names, holiday) {
    const messages = [];
    for(let i=0; i<names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
    }
return messages;
};


//Countdown

function countDown (i) {
    while (i >= 0){
        console.log(i);
        i--;
    }
}