// Tabla de oferta de créditos
const ofertaDeCreditos = [
    { nombre: 'Plan 001', capital: 150000, plazo: 30, tasa: 15 },
    { nombre: 'Plan 002', capital: 300000, plazo: 180, tasa: 10 },
    { nombre: 'Plan 003', capital: 485000, plazo: 60, tasa: 23 }
];


function calcularInteres(capital, plazo, tasa) {
    return (capital * plazo * tasa) / 100;
}

// Función para añadir el campo "interés" a cada ítem del array
function agregarInteresAInversiones(inversiones) {
    const inversionesConInteres = [];

    for (const inversion of inversiones) {
        const { nombre, capital, plazo, tasa } = inversion;

        const interes = calcularInteres(capital, plazo, tasa);

        // Crear un nuevo objeto con el campo "interés" añadido
        const inversionConInteres = {
            nombre,
            capital,
            plazo,
            tasa,
            interes
        };

        inversionesConInteres.push(inversionConInteres);
    }

    return inversionesConInteres;
}


function main() {
    const inversionesConInteres = agregarInteresAInversiones(ofertaDeCreditos);
    console.log(inversionesConInteres);
}


main();
