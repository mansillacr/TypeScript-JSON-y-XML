export class Telefono{
    private _numero:string;
    private _tipo:string;

    //Constructor de la clase
    constructor(numero:string,tipo:string){
        this._numero = numero;
        this._tipo = tipo;
    }

    //Método get y set
    public set numero(numero:string){
        this._numero = numero;
    }
    public get numero():string{
        return this._numero;
    }

    public set tipo(tipo:string){
        this._tipo = tipo;
    }
    public get tipo(){
        return this._tipo;
    }
}
