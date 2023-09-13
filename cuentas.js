var entrada = parseInt(prompt("Ingrese el monto de la entrada"));
var entrada = parseInt(prompt("Ingrese el monto del segundo plato"));
var entrada = parseInt(prompt("Ingrese el monto del postre"));

var montoparcial = entrada + segunhdo + postre;

var igv = montoparcial * 18 / 100;

var montototal = montoparcial + igv;

console.log("El monto dse la entrada es"+entrada);
console.log("El monto del segundo plato es:"+segundo);
console.log("El monto del postrees"+postre);

console.log("El IGV asciende a: "+igv);

console.log("El monto a pagar es: " +montototal);