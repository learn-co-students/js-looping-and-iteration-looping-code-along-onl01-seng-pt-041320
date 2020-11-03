// Code your solutions in this file

// writeCards(["Ada", "Brendan", "Ali"], "birthday");

const names = ["Ada", "Brendan", "Ali"];
const events = "birthday";
let newArray = [];

function writeCards(array, event) {
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
   
    return newArray;
  }

  function countDown(number) {
        let i = 0; 
        while (i <= number) {
        console.log(number--);
        }

  }
