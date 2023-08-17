
// Datos de flujo de caja
const flujoDeCaja = [
    { periodo: "Enero", ingreso: 1500, egreso: 1500 },
    { periodo: "Febrero", ingreso: 2500, egreso: 2500 },
    { periodo: "Marzo", ingreso: 84683, egreso: 1155 },
    { periodo: "Abril", ingreso: 135353, egreso: 1533 },
    { periodo: "Mayo", ingreso: 1535, egreso: 5434 },
    { periodo: "Junio", ingreso: 2500, egreso: 2500 },
    { periodo: "Julio", ingreso: 2500, egreso: 2500 },
    { periodo: "Agosto", ingreso: 2500, egreso: 2500 },
    { periodo: "Septiembre", ingreso: 2500, egreso: 2500 },
    { periodo: "Octure", ingreso: 2500, egreso: 2500 },
    { periodo: "Noviembre", ingreso: 2500, egreso: 2500 },
    { periodo: "Diciembre", ingreso: 2500, egreso: 2500 }
];

// Función para calcular el estado financiero
function calcularEstadoFinanciero(flujoDeCaja) {
    let totalIngresos = 0;
    let totalEgresos = 0;

    for (const mes of flujoDeCaja) {
        totalIngresos += mes.ingreso;
        totalEgresos += mes.egreso;
    }

    if (totalIngresos > totalEgresos) {
        return 1; // Ganancias
    } else if (totalIngresos < totalEgresos) {
        return -1; // Pérdidas
    } else {
        return 0; // Equilibrio
    }
}


function imprimirResultado(resultado) {
    if (resultado === 1) {
        console.log("La empresa está generando ganancias.");
    } else if (resultado === -1) {
        console.log("La empresa está generando pérdidas.");
    } else {
        console.log("La empresa tiene un equilibrio en su flujo de caja.");
    }
}


const estadoFinanciero = calcularEstadoFinanciero(flujoDeCaja);
imprimirResultado(estadoFinanciero);