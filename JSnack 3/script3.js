$(function(){
 console.log('ciao');

  const arrLettere = ['a','b','c','d','e','f','h','i'];
  const arrNumeri = [1,2,3,4,5,6,7,8,9];
  let arrFuso = [];

  let i = 0;

  while (arrLettere[i] != undefined && arrNumeri[i] != undefined) {
    arrFuso.push(arrLettere[i]);
    arrFuso.push(arrNumeri[i]);
    i++;
  }
  
  console.log(arrFuso);
});