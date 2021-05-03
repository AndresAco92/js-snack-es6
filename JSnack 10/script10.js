$(function(){

  const arrMotorizazzione =
  [
    {
      nome : 'Andrea',
      cognome : 'Toffanini',
      eta: 25
    },
    {
      nome : 'Carlo',
      cognome : 'Torrini',
      eta: 49
    },
    {
      nome : 'Loorenzo',
      cognome : 'Imperatore',
      eta: 17
    },
    {
      nome : 'Tobia',
      cognome : 'Longobardi',
      eta: 9
    },
    {
      nome : 'Loredana',
      cognome : 'Pescini',
      eta: 80
    },
    {
      nome : 'Valentina',
      cognome : 'Delonghi',
      eta: 17
    },
    {
      nome : 'Martina',
      cognome : 'Casalini',
      eta: 39
    }
  ];

  let  risultPatente = arrMotorizazzione.map((people) =>{
    let {nome, cognome, eta} = people;
    if(eta > 18 && eta < 65){
      return `${nome} ${cognome}, è abilitato per guidare.`
    }else{
      return `${nome} ${cognome}, non è abilitato per guidare.`
    }
  })
  
  console.log(risultPatente);
});