// No pude crear los arreglos para lograr eliminar los atributos por ejemplo"id" o "color", lo intente mucho y vi videos pero no fui capaz

const cars = require('./cars.json');
console.log(typeof cars);
const carronuevo = cars.filter(
    (carronuevo) => carronuevo.year >2010

)
var n=0;
for(let i=0; i < carronuevo.length; i++){
    if(carronuevo === carronuevo){
        
        n=n+1;


    }
}
console.log(n)

const carrosrojos = cars.filter(
    (carrosrojos) => carrosrojos.color=='Red')
var cantrojos=0;
for(let i=0; i < carrosrojos.length; i++){
    if(carrosrojos === carrosrojos){
        
        cantrojos=cantrojos+1;


    }
    console.log(cantrojos)
}
var carro=String
for(let i=0; i < carronuevo.length; i++){
    if(carronuevo === carronuevo){
        carronuevo.slice(0,1)
        carronuevo.slice(4,1)
        carro=carronuevo
        


    }
}
console.log(carro)
const luxurytax = cars.filter(
    (luxurytax) => luxurytax.brand=='Jaguar' || luxurytax.brand=='Aston Martin')
var cantlux=0;
for(let i=0; i < luxurytax.length; i++){
    if(luxurytax === luxurytax){
        
        cantlux=cantlux+1;


    }
}
console.log(cantlux)

const año= prompt("ingrese el año del auto que busca");
const añote=cars.filter(
    (añote) => añote.year>año 
)
