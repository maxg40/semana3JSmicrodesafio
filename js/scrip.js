const calculadora = (num1=parseFloat (prompt ('Ingresa tu primer valor')),operador = prompt ('Ingresa un operador matematico (multiplicar=*, dividir=/,sumar=+ o restar=-)'),num2=parseFloat( prompt('Ingresa tu segundo valor'))) => { do {
    if (operador == '*'){
        console.log (num1*num2);
    }
    else if (operador == '-'){
        console.log (num1-num2);
    }
    else if (operador == '+'){
        console.log (num1+num2);
    }
    else if (operador == '/'){
        console.log (num1/num2);
    }
    else {
        console.log ('No ingresaste un operador válido')
    }
} while ((num1,operador,num2) == 'salir') {
    alert ('Gracias por usar este sistema')
}
}

calculadora()