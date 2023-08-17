
// Tabla de oferta de créditos
const ofertaDeCreditos = [
    { nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15 },
    { nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10 },
    { nombre: 'Plan 003', capital: 485000, plazo: 60, tasa: 23 }
];

// Función para calcular el interés
function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
}

// Función para generar información de créditos, 
// infoCreditos es el array que almacena la informacion de cada plan de credito.
function generarInformacionCreditos(ofertaDeCreditos) {
    const infoCreditos = [];

    for (const ofertaDeCredito of ofertaDeCreditos) {
        const { nombre, capital, plazo, tasa } = ofertaDeCredito;
        
        const interes = calcularInteres(capital, plazo, tasa);
        const planInfo = [nombre, capital, plazo, tasa, interes];
    
        // Agrego al final del array de infoCreditos el array planInfo
        infoCreditos.push(planInfo);
    }

    return infoCreditos;
}
 

function main() {
    const informacionCreditos = generarInformacionCreditos(creditOffers);
    console.log(informacionCreditos);
}


main();
  