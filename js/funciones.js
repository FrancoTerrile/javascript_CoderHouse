function ingresarEstudiante() {
    sosCliente = prompt("Sos estudiante de CoderHouse?\n1- Si\n2- No");

    while (sosCliente != 1 && sosCliente != 2) {
        alert("Solo es posible 1(sos cliente) o 2(no sos cliente)!")
        sosCliente = prompt("Sos estudiante de CoderHouse?\n1- Si\n2- No");
    }
    console.log(`Sos cliente? ${sosCliente}`);
    return sosCliente;
}

function ingresarTipoPaquete() {
        tipoPaquete = prompt("Ingrese el tipo de paquete: Identite/Gold/Otro").toUpperCase();

    return tipoPaquete;
}

function calcularInteresPaquete(tipoPaquete) {
    if (tipoPaquete == "IDENTITE") {
        interesPaquete = 30;
    }else if (tipoPaquete == "GOLD") {
        interesPaquete = 40;
    }else{
        interesPaquete = 50;
    }
    
    return interesPaquete 
}

function ingresarMontoSolicitado() {
        monto = parseFloat(prompt("Ingrese el monto a solicitar(Max:$" + limiteMonto + ")"));

    while (monto > limiteMonto) {
        limiteMonto = parseFloat(prompt("Ingrese el monto a solicitar"));

        if (monto <= limiteMonto) {
            break;
        }
    }
    return monto;
}

function ingresarCuotas() {
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"));

    while (cuotas != 12 && cuotas != 24 && cuotas != 36 && cuotas != 48) {
        alert("Cantidad de cuotas no permitida!")
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 12/24/36/48"));
    }
    console.log(`Cuotas ${cuotas}`);
    return cuotas;
}

function calcularInteresCuota(cuota) {
    if (cuotas == 12) {
        interesCuota = 80;
    }else if (cuotas == 24) {
        interesCuota = 160;
    }else if (cuotas == 36) {
        interesCuota = 240;
    }else {
        interesCuota = 300;
    }
    return interesCuota;
}