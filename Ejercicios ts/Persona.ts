import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona{
    //Atributos de la clase
    private _nombre:string;
    private _apellidos:string;
    private _edad:number;
    private _dni:string;
    private _fecha:Date;
    private _coloFavorito:string;
    private _sexo:boolean;
    private _direcciones:Direccion[];
    private _mails:Mail[];
    private _telefonos:Telefono[];
    private _notas:string;

    //Constructor vacío
    constructor(nombre:string,apellidos:string, edad:number, dni:string, fecha:Date, colorFav:string, 
        sexo:boolean, direcciones:Direccion[], mails:Mail[], telefonos:Telefono[], notas:string){
            this._nombre = nombre;
            this._apellidos = apellidos;
            this._edad = edad,
            this._dni = dni;
            this._fecha = fecha;
            this._coloFavorito = colorFav;
            this._sexo = sexo;
            this._direcciones = direcciones;
            this._mails = mails;
            this._telefonos = telefonos;
            this._notas = notas;
        }
    
    //Métodos Set y Get de los atributos de la clase
    public set nombre(nombre:string){
        this._nombre = nombre;
    }

    public get nombre(){
        return this._nombre;
    }

    public set apellidos(apellidos:string){
        this._apellidos = apellidos;
    }

    public get apellidos(){
        return this._apellidos;
    }

    public set edad(edad:number){
        this._edad = edad;
    }

    public get edad(){
        return this._edad;
    }

    public set dni(dni:string){
        this._dni = dni;
    }

    public get dni(){
        return this._dni;
    }

    public set fecha(fecha:Date){
        this._fecha = fecha;
    }

    public get fecha(){
        return this._fecha;
    }

    public set colorFavorito(coloFavorito:string){
        this._coloFavorito = coloFavorito;
    }

    public get colorFavorito(){
        return this._coloFavorito;
    }

    public set sexo(sexo:boolean){
        this._sexo = sexo;
    }

    public get sexo(){
        return this._sexo;
    }

    public set direccion(direccion:Direccion){
        this._direcciones[this._direcciones.length] = direccion;
    }

    public get getDireccion(){
        return this._direcciones;
    }

    public set mail(mails:Mail){
        this._mails[this._mails.length] = mails;
    }

    public get getMail(){
        return this._mails;
    }

    public set telefono(telefonos:Telefono){
        this._telefonos[this._telefonos.length] = telefonos;
    }

    public get getTelefono(){
        return this._telefonos;
    }

    public set notas(notas:string){
        this._notas = notas;
    }

    public get notas(){
        return this._notas;
    }

    //Buscar DNI
    public buscarDNI(valor:string){
        if(this._dni.localeCompare(valor) == 0){
            return true;
        }else{
            return false;
        }
    }

    //Mostrar datos
    public mostrarPersona(){
            console.log("\t" + this._nombre + " " + this._apellidos);
        console.log("DATOS");
        console.log("Edad: " + this._edad + "\nDNI: " + this._dni + "\nFecha de Nacimiento: " + this._fecha +
            "\nColor Favorito: " + this._coloFavorito);
        
        if(this._sexo){
            console.log("Sexo: Hombre");
        }else{
            console.log("Sexo: Mujer");
        }
        
        for(let i = 0; i < this._direcciones.length; i++){
        
            console.log("Dirección: \n\tCalle: " + this._direcciones[i].calle + " " + this._direcciones[i].numero + " " 
                + this._direcciones[i].piso + this._direcciones[i].letra + "\n\tCodigo Postal: " 
                + this._direcciones[i].codigoPostal + "\n\tPoblación: " + this._direcciones[i].poblacion 
                + "\n\tProvincia: " + this._direcciones[i].provincia);
        
        }
        
        for(let i = 0; i < this._mails.length; i++){
        
            console.log("Mail: " + this._mails[i].mail + " Tipo: " + this._mails[i].tipo);
                
        }
        
        for(let i = 0; i < this._telefonos.length; i++){
        
            console.log("Teléfono: " + this._telefonos[i].numero + " Tipo: " + this._telefonos[i].tipo);
                
        }
    }
}