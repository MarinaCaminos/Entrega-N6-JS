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
  
// Función para calcular el resultado 
function calcularResultado(flujoDeCaja) {
    let totalIngresos = 0;
    let totalEgresos = 0;
  
    for (const mes of flujoDeCaja) {
        totalIngresos += mes.ingreso;
        totalEgresos += mes.egreso;
    }
  
    let resultadoTexto = "";
    if (totalIngresos > totalEgresos) {
        resultadoTexto = "La empresa está generando ganancias.";
    } else if (totalIngresos < totalEgresos) {
        resultadoTexto = "La empresa está generando pérdidas.";
    } else {
        resultadoTexto = "La empresa tiene un equilibrio en su flujo de caja.";
    }
  

    console.log(resultadoTexto);

    /* Mostrar el resultado en la pagina en caso de crear un html
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = resultadoTexto;
    */
}
  

calcularResultado(flujoDeCaja);
  