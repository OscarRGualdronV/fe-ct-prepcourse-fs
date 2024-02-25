//una persona que quiere entrar a una discoteca debe tener 18 años y 
//tener el tiquet de entrada.

//si la persona quiere entrar, pero no tiene ticket, y es amigo//a 
//del dueño entonces puede entrar

// and or 

function entrada (nombre, edad, ticket, friend){

 if ((edad >= 18) && (ticket == true))
 return nombre + " Puede ingresar";
else if ((edad >= 18 && ticket >= false) && friend == true) 
return nombre + " Puede ingresar";
else return " No puede ingresar";

}
var resultado = entrada('oscar', 18 , false, false)

console.log(resultado)

// for while

var edad = 18

for(var i = 0; i <= 200; i++){

    if (edad == 18 && i == 18) console.log ("pasaste por el numero 18");

    console.log(i);
}

var i = 0;
var edad = 18

while(i < 201){
    if (i == 18 && edad == 18)
    console.log("pasaste por el numero 18");
    console.log(i);
    i++;
}

// switch

var edad = 1

switch (edad) {
    case 1:
        console.log("es menor de edad");
        break;
    case 18:
        console.log("es mayor de edad");
        break;
    default:
        break;
}

// do while

var i = 99;

do{
    console.log(i);
    i++;


}while(i < 200)

// continue

for (let i = 0; i < 200; i++) {
    if (i % 2 == 0) {
        continue; 
        console.log(i);
    }else console.log(i);
        
}

// break

for (let i = 0; i < 200; i++) {
    if (i == 20) {
        break; 
        console.log(i);
    }else console.log(i);        
}

