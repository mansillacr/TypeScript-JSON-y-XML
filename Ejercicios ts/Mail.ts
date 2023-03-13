export class Mail{
    private _tipo :string;
    private _mail:string;

    //Constructor de la clase
    constructor(mail:string, tipo:string){
        this._mail = mail;
        this._tipo = tipo;
    }

    //Método get y set de los atributos
    public set mail(mail:string){
        this._mail = mail;
    }
    public get mail(){
        return this._mail;
    }

    public set tipo(tipo:string){
        this._tipo = tipo;
    }
    public get tipo(){
        return this._tipo;
    }
}