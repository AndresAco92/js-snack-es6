$(function(){

  let arrPiccoleZu = [];
  let arrGrandiZu =[];
  let limite = 15;

  const arrZucchina = [
    {
      varieta : 'gialla',
      peso : 0.5,
      lunghezza : 23
    },
    {
      varieta : 'verde',
      peso : 0.3,
      lunghezza : 25
    },
    {
      varieta : 'bruna',
      peso : 0.2,
      lunghezza : 23
    }, 
    {
      varieta : 'grigia',
      peso : 0.9,
      lunghezza : 11
    },
    {
      varieta : 'arancione', 
      peso : 1,
      lunghezza : 19 
    },
    {
      varieta : 'nera', 
      peso : 1.2,
      lunghezza : 25 
    },
    {
      varieta : 'verde', 
      peso : 2,
      lunghezza : 22 
    },
    {
      varieta : 'gialla', 
      peso : 1.3, 
      lunghezza : 20 
    },
    {
      varieta : 'gialla_bianca',
      peso : 1.5,
      lunghezza : 11 
    },
    {
      varieta : 'gialla',
      peso : 1.7,
      lunghezza : 12
    }
  ];


  let pesoPiccole = 0;
  let pesoGrandi = 0;

 for(let zucchinelong of arrZucchina){
  if(zucchinelong.lunghezza < limite){
    arrPiccoleZu.push(zucchinelong);
    pesoPiccole += zucchinelong.peso;
  }else{
    arrGrandiZu.push(zucchinelong);
    pesoGrandi += zucchinelong.peso;
  }
 };
  console.log('Il peso totale delle Zucchine che sono meno dei '+ limite +'cm è: '+ pesoPiccole);

  console.log('Il peso totale delle Zucchine che sono piu grandi dei '+ limite  +'cm è: '+ pesoGrandi);

});