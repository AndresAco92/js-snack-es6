const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

const min = 3;
const max = 11;
let arrEmpty = arrayIn(alfabeto, min, max);

console.log(arrEmpty);

function arrayIn(arrlong,a,b){
  let arr = [];

  for(let i = a - 1; i < b - 1; i++){
    arr.push(arrlong[i]);
  }
   return arr;
}