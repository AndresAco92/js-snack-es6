const arrNum = [1,2,3,4,5,6,7,8,9];
const arrAlfa = ["A","B","C","D","E","F","G"];
const rdmNUm = (min,max) => Math.floor(Math.random()*(max - min +1)+ min);

while(arrNum.length < arrAlfa.length){
  let arrAggiuntivo = rdmNUm(0, 9);
  arrNum.push(arrAggiuntivo);
}

while(arrNum.length > arrAlfa.length){
  let arrAggiuntivo2 = rdmNUm(0, 9);
  arrAlfa.push(arrAggiuntivo2);
}


console.log(arrNum);
console.log(arrAlfa);