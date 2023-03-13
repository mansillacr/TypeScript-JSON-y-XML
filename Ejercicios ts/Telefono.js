"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
class Telefono {
    //Constructor de la clase
    constructor(numero, tipo) {
        this._numero = numero;
        this._tipo = tipo;
    }
    //Método get y set
    set numero(numero) {
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}
exports.Telefono = Telefono;
