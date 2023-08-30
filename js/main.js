//Simulador de prestamos
//Entradas

const TNA = 137.50;
const TEA = 267.92;
const CFTEA = 375.60;
const limiteMonto = 5000000;
const descuentoEstudiante =10;
let interesPaquete;
let interesCuota;
let estudiante = "No";

//Entrada de datos de coder
let sosCliente = ingresarEstudiante();


//Solicito tipo de paquete

let tipoPaquete = ingresarTipoPaquete();
interesPaquete = calcularInteresPaquete(tipoPaquete);

console.log(`Interes paquete ${interesPaquete}`);

//Aclaro monto a solicitar

let monto = ingresarMontoSolicitado();

console.log(`Monto solicitado ${monto}`);

//Inreso cantidad de cuotas

let cuotas = ingresarCuotas();

interesCuota = calcularInteresCuota(cuotas);

console.log(`Interes cuota ${interesCuota}`);


//Calculo de Intereses

let cuotaPura = monto / cuotas; //83.333
let interesPaqueteCuota = interesPaquete /cuotas;
let interesCuota2 = interesCuota / cuotas;
let tnaCuota = TNA / cuotas;
let teaCuota = TEA / cuotas;
let cfteaCuota = CFTEA /cuotas;

let cuotaPura_interesPaqueteCuota = (cuotaPura * interesPaqueteCuota) / 100;
console.log(cuotaPura_interesPaqueteCuota);
let cuotaPura_interesCuota2 = (cuotaPura * interesCuota2) / 100;
console.log(cuotaPura_interesCuota2);
let cuotaPura_tnaCuota = (cuotaPura * tnaCuota) / 100;
console.log(cuotaPura_tnaCuota);
let cuotaPura_teaCuota = (cuotaPura * teaCuota) / 100;
console.log(cuotaPura_teaCuota);
let cuotaPura_cfteaCuota = (cuotaPura * cfteaCuota) / 100;
console.log(cuotaPura_cfteaCuota);

let valorCuota = cuotaPura + cuotaPura_interesPaqueteCuota + cuotaPura_interesCuota2 + cuotaPura_tnaCuota + cuotaPura_teaCuota + cuotaPura_cfteaCuota;
console.log("Valor de cuota " + valorCuota);
//Salida

//Verificar si soy estudiante de coder y aplicar descuento
if (sosCliente == 1) {
    valorCuota = valorCuota - ((valorCuota * descuentoEstudiante) / 100);
    console.log(`Descuento aplicado ${valorCuota}`);
    estudiante = "si";
}

let salida = "SIMULADOR DE PRESTAMOS BANCO FRANCO \n\n";
salida += "Sos estudiante " + estudiante + "\n";
salida += "Tipo de paquete " + tipoPaquete + "\n";
salida += "Monto del prestamo $" + monto + "\n";
salida += "Cuotas " + cuotas + "\n\n";
salida +="Total a pagar:\n";
salida += cuotas + "cuotas de $" + valorCuota.toFixed(3);
alert(salida);
console.log(salida);