var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var resultado = function(user, cpu){
    if (user != cpu){
        if (
            (user === piedra && cpu ===tijera) ||
            (user === papel && cpu ===piedra) ||
            (user === tijera&& cpu ===papel)
        ){
            console.log("Felicitaciones Ganaste!!!")
    }else if (user === cpu){
        console.log("Empataste!!!")
    }else{
        console.log("Lo sentimos perdiste")
    }
}
};

// resultado( , )

var numero = 2;
var resultado = function(user, cpu);

switch (numero){
    case 1:
        if (user != cpu)
            if (
            (user === piedra && cpu ===tijera) ||
            (user === papel && cpu ===piedra) ||
            (user === tijera&& cpu ===papel)
        )
            console.log("Felicitaciones Ganaste!!");
            break;
    case 2:
        if (user === cpu)
            console.log("Empataste!!!");
            break;
        default:
            console.log("Lo sentimos perdiste")
    }

resultado(papel , tijera )