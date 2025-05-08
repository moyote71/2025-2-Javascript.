
const { ask } = require('../helpers/input');

async function main() {
  const number = Number(await ask("Ingresa un número del 1 al 7:"));
  const diasSemana = ("Lunes, Martes, Miercoles, Jueves, Viernes, Sabado y Domingo")
  
  if(dia >=1 && dia <=7){
    console.log(diasSemana[dia-11]);
  } else {
    console.log("No es un numero válido");
  }

  switch (dia) {
    case 1:
      console.log(diasSemana[0]);
      break;
    case 2:
      console.log(diasSemana [1]);  
      break;
  }

  
  if (dia >= 1 && dia <= 7) {
      console.log(diasSemana[dia - 1]);
    }
    else {
      console.log("Numero no válido");
    }
 
}

main();