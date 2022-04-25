    function EntraData() {
    let txt = document.getElementById("tempEntrada"); let temp = parseInt(txt.value);
    return temp;
    }

    function EscriuData(nomZona, text) { document.getElementById(nomZona).innerHTML = text;
    }

    function toFahrenheit() { let temp = EntraData();
    temp = ((1.8) * temp + 32);
    EscriuData('Zona1', temp + " ºF"); // por pantalla la temp resultado FraseRelativa(temp);
    }

    function toCelsius() {
    let temp = EntraData();
    let temp2 = ((temp - 32) / 1.8); EscriuData('Zona1', temp2 + " ºC"); FraseRelativa(temp);
    }


    function FraseRelativa(temperatura) { let cadena="-";
    if ((temperatura >= 14) && (temperatura < 32)) cadena ="Temperatura baja";
    if ((temperatura >= 32) && (temperatura < 68)) cadena ="Temperatura adecuada"; if ((temperatura >= 68) && (temperatura <= 96)) cadena ="Temperatura alta";
    if (cadena=="-") cadena = "Temperatura desconocida"; EscriuData('Zona2', cadena);
    }