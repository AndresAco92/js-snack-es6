$(function(){

  const arrCars = [
    {
      marca: 'Honda',
      modello: 'CivicTypeR',
      alimentazione: 'Benzina'
    },
    {
      marca: 'fiat',
      modello: 'BravoXtreme',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Suzui',
      modello: 'SwiftRS',
      alimentazione: 'Benzina'
    },
    {
      marca: 'Subaru',
      modello: 'ImprezaWRC',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Mini',
      modello: 'OneSD',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Mercedez',
      modello: '520dAMG',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Tesla',
      modello: 'ModelX',
      alimentazione: 'Electric'
    },
    {
      marca: 'Lamborgini',
      modello: 'Centenario',
      alimentazione: 'Electric'
    },
    {
      marca: 'Volkswagen',
      modello: 'touran',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Toyota',
      modello: 'YarisRS',
      alimentazione: 'Hybrid'
    }

  ];

  const carBenza = arrCars.filter((car) => car.alimentazione === 'Benzina');
  console.log(carBenza);
  
  
  const carGasolio = arrCars.filter((car) => car.alimentazione === 'Diesel');
  console.log(carGasolio);

  const carEco = arrCars.filter((car) => car.alimentazione != 'Benzina' && car.alimentazione != 'Diesel');
  console.log(carEco);
  
  let benzaCar = $('#container1 ul');
  let dieselCar = $('#container2 ul');
  let ecoCar = $('#container3 ul');

  stampa(carBenza, benzaCar);
  stampa(carGasolio, dieselCar);
  stampa(carEco, ecoCar);


  function stampa(auto, target){
    auto.forEach((car) => {
      let {marca, modello, alimentazione} = car;
      let html = 
      `
      <li>
          marca: ${marca}
          <ul>
            <li>
              modello: ${modello}
            </li>
            <li>  
              alimentazione: ${alimentazione}
            </li>
          </ul>
      </li>
      `;
      target.append(html);
    });
    
  };

});

