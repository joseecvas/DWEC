var operando1 = 1;
var operando2 = 4; var resultado = operando1 + operando2;

//Obtener el valor de operando1
var elementoOperando1 = document.getElementById("txtOperando1");
//console.log(elementoOperando1)
operando1 = elementoOperando1.value;
operando1 = document.getElementById("txtOperando1").value;
console.log(operando1);

//var resultado = operando1 + operando2