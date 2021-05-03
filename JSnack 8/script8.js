$(function(){
  //inserimento array di nomi
  const arrNomi = ['lorenzo','Paul','Patrick','luana','gaia','Raffa','giovanni','Sara','Ginevra'];

  //Inserimento metodo .toLowerCase per farle finuscole
  console.log('-----------Minuscole----------------');
  const nomiTuttimin = arrNomi.map((nome) => console.log(nome.toLowerCase())); 

  //Inserimento metodo .toUppercase per trasformare un maiuscole tutte le lettere
  console.log('---------Maiuscole-----------');
  const nomiTuttimaiusc = arrNomi.map((nome) => console.log(nome.toUpperCase()));

  //Inserimento metodi che permettono che legga la prima lettera (in posizione '0') per poi trasformarl ain maiuscola successivamente estraendo il seguito della parola dal punto '1' in poi...
  console.log('------------Capitalize---------');
    
  const nomiTuttiPrim = arrNomi.map((nome)=> console.log(nome.charAt(0).toUpperCase() +nome.slice(1)));
  console.log('-----------Fine----------------');


});