"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    //Constructor de la clase
    constructor(mail, tipo) {
        this._mail = mail;
        this._tipo = tipo;
    }
    //Método get y set de los atributos
    set mail(mail) {
        this._mail = mail;
    }
    get mail() {
        return this._mail;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
}
exports.Mail = Mail;
