const names = []

function writeCards(names, x) {
  const arr = []
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful ${x} gift!`);
  }
  return arr
}


function countDown(num) {
  while (num >= 0) {
    console.log(num);
    --num;
  }
}