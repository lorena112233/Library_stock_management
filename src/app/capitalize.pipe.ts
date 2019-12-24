import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  //el interfaz transform no obliga a implementar este metodo transform
  transform(value: any, ...args: any[]): any {
    //lo que yo devuelva es lo que aparece en la vista, asi recupero el control sobre lo que quiero que apareyca con el return
    //así miestro el hola mundo con la primera en mayusculas (2 formas)
      //return value[0].toUpperCase() + value.slice(1);
      //return value[0].toUpperCase() + value.substring(1);

    /*  forma1:
    let palabras = value.slit(" ") //para que lo separa en cada espacio, lo que seria "por palabras"
    let total = "";
    for (let i= 0; i<palabras.length; i++){
      total+=palabras[i][0].toUpperCase()+palabras[i].substring(1);
    }
    return total;
    */

//item es cada elemento que me ha dividido el split
//el join es el contraRio a split, y le paso el caracter de separacion
    return value.split(" ").map(item=> item[0].toUpperCase()+item.substring(1)).join(" ")
  }
  

}
