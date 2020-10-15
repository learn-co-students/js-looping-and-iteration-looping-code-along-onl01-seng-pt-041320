// Code your solutions in this file
function wrapGift(gift) {
    for (let age = 30; age < 40; age++) {
        console.log(`I'm ${age} years old. Happy birthday to me!`);
    }
    return gifts
}

function writeCards(arr, event) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = (`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
    return res;
}

function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i)
        i--;
    }
}