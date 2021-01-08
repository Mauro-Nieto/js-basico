// e esta coeción implicita se crea un string por el + que se prioriza como concatenación 

var a = 4 +"7";
typeof a


var b = 4 * "7";
typeof b


// coerción explicita

var a = 20;
var b = a + "";
console.log(b);

var c = String(a);
console.log(c);

var d = Number(c);
console.log(d)
