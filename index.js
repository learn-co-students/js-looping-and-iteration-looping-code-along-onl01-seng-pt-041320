// Code your solutions in this file

const names = ['Lisa', 'Kaitlin', 'Jan'],
    array = [ ]
    x = 'surprise';

function writeCards(names, x) {
    for (let i = 0; i < names.length; i++) {
       array.push(`Thank you, ${names[i]}, for the wonderful ${x} gift!`);
    }
    return array;
}

writeCards(names, x);

// function countDown() {
//    let i = 11
//    while (i > 0) {
//        console.log(`${i}`);
//        i--
//     }
//   }
function countDown (i) {
    while (i >= 0){
        console.log(i);
        i--;
    }
}
