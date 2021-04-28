let arrsquad = [
  { name : 'LeBronJames' },
  { name : 'MichaelJrodan' },
  { name : 'ShaquilleOneal' },
  { name : 'KobeBryant' },
  { name : 'MylesTurner' }
];

const genNum = (min, max) => Math.floor(Math.random()*(max - min +1)+ min);

for(let player of arrsquad){
  player.code = genPlayers();
  player.media = genNum(0, 50);
  player.percentuale = genNum(0, 100);
}

console.log(arrsquad);

function genPlayers(){
  let code = '';

  let alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

  while(code.length < 3){
    code += alfabeto[genNum(0, alfabeto.length -1)];
  }
  
  code += genNum(100, 999);

  return code;
}