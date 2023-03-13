"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    //Constructor vacío
    constructor(nombre, apellidos, edad, dni, fecha, colorFav, sexo, direcciones, mails, telefonos, notas) {
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
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
    get apellidos() {
        return this._apellidos;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set dni(dni) {
        this._dni = dni;
    }
    get dni() {
        return this._dni;
    }
    set fecha(fecha) {
        this._fecha = fecha;
    }
    get fecha() {
        return this._fecha;
    }
    set colorFavorito(coloFavorito) {
        this._coloFavorito = coloFavorito;
    }
    get colorFavorito() {
        return this._coloFavorito;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set direccion(direccion) {
        this._direcciones[this._direcciones.length] = direccion;
    }
    get getDireccion() {
        return this._direcciones;
    }
    set mail(mails) {
        this._mails[this._mails.length] = mails;
    }
    get getMail() {
        return this._mails;
    }
    set telefono(telefonos) {
        this._telefonos[this._telefonos.length] = telefonos;
    }
    get getTelefono() {
        return this._telefonos;
    }
    set notas(notas) {
        this._notas = notas;
    }
    get notas() {
        return this._notas;
    }
    //Buscar DNI
    buscarDNI(valor) {
        if (this._dni.localeCompare(valor) == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    //Mostrar datos
    mostrarPersona() {
        console.log("\t" + this._nombre + " " + this._apellidos);
        console.log("DATOS");
        console.log("Edad: " + this._edad + "\nDNI: " + this._dni + "\nFecha de Nacimiento: " + this._fecha +
            "\nColor Favorito: " + this._coloFavorito);
        if (this._sexo) {
            console.log("Sexo: Hombre");
        }
        else {
            console.log("Sexo: Mujer");
        }
        for (let i = 0; i < this._direcciones.length; i++) {
            console.log("Dirección: \n\tCalle: " + this._direcciones[i].calle + " " + this._direcciones[i].numero + " "
                + this._direcciones[i].piso + this._direcciones[i].letra + "\n\tCodigo Postal: "
                + this._direcciones[i].codigoPostal + "\n\tPoblación: " + this._direcciones[i].poblacion
                + "\n\tProvincia: " + this._direcciones[i].provincia);
        }
        for (let i = 0; i < this._mails.length; i++) {
            console.log("Mail: " + this._mails[i].mail + " Tipo: " + this._mails[i].tipo);
        }
        for (let i = 0; i < this._telefonos.length; i++) {
            console.log("Teléfono: " + this._telefonos[i].numero + " Tipo: " + this._telefonos[i].tipo);
        }
    }
}
exports.Persona = Persona;
