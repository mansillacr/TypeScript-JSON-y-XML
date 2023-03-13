//Importaciones de módulos
import {Telefono} from './Telefono';
import { Mail } from './Mail';
import { Direccion } from './Direccion';
import { Persona } from './Persona';

//Declaración de variables
let telefono = new Telefono('1234567','casa');
let telefono2 = new Telefono('321654987', 'casa');
let telefono3 = new Telefono('456123789','trabajo');
let telefono4 = new Telefono('456133779','casa');

let mail = new Mail("mansillacr@gmail.com",'trabajo');
let mail2 = new Mail("marina@gmail.com","trabajo");
let mail3 = new Mail("david@gmail.com","trabajo");

let direccion = new Direccion("C/Alemania",21,1,"A","06600","Cabeza del Buey", "Badajoz");
let direccion2 = new Direccion("C/Frank",3,1,"B","11400","Peñarroya", "Cordoba");
let direccion3 = new Direccion("C/Estrella",56,4,"D","13003","Ciudad Real","Ciudad Real");
let direccion4 = new Direccion("C/Torero",5,4,"D","14004","Cordoba","Cordoba");

let arrayT:Array<Telefono> = [telefono,telefono3]; 
let arrayT2:Array<Telefono> = [telefono2];
let arrayT3:Array<Telefono> = [telefono4];  

let arrayM:Array<Mail> = [mail]; 
let arrayM2:Array<Mail> = [mail2];
let arrayM3:Array<Mail> = [mail3];  

let arrayD:Array<Direccion> = [direccion]; 
let arrayD2:Array<Direccion> = [direccion2,direccion4]; 
let arrayD3:Array<Direccion> = [direccion3]; 

let persona = new Persona("Carmen","Mansilla Ramiro",26,"08830600W",new Date(1996/9/11),"Azul",false,arrayD,arrayM,arrayT,"Persona número 1");
let persona2 = new Persona("Marina","Sánchez Urtel",24,"18882533F",new Date(1998/1/5),"Amarillo",false,arrayD2,arrayM2,arrayT2,"Persona número 2");
let persona3 = new Persona("David","Rojano García",22,"18882533F",new Date(2001/5/13),"Negro",true,arrayD3,arrayM3,arrayT3,"Persona número 3");

let arrayP:Array<Persona> = [persona,persona2,persona3];


//Impresión de datos de las personas
for(let j = 0; j < arrayP.length; j++){
    console.log("Persona " + (j+1));
    arrayP[j].mostrarPersona();
}

//Búsqueda por DNI
console.log("\nBUSCANDO DNI: 08830600W");

for(let i = 0; i < arrayP.length; i++){
    if(arrayP[i].buscarDNI("08830600W")){
        let tel = new Telefono('987654321','móvil');
        let mailNuevo = new Mail("lscd@gmail.com",'ocio');
        let direccionNueva = new Direccion("C/Arturo",32,4,"A","11400","Peñarroya", "Córdoba");

        arrayP[i].telefono = tel;
        arrayP[i].mail = mailNuevo;
        arrayP[i].direccion = direccionNueva;

        console.log("PERSONA " + (i+1) + " MODIFICADA\n");
    }
}


//Mostrar de nuevo los datos
for(let i = 0; i < arrayP.length; i++){
    console.log("Persona " + (i+1));
    arrayP[i].mostrarPersona();
}
