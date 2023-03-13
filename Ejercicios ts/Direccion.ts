export class Direccion{
    private _calle:string;
    private _numero:number;
    private _piso:number;
    private _letra:string;
    private _codigoPostal:string;
    private _poblacion:string;
    private _provincia:string;

    constructor(calle:string,numero:number,piso:number,letra:string,codigoPostal:string,poblacion:string,provincia:string){
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }

    //Métods get y set de los atributos
    public set calle(calle:string){
        this._calle = calle;
    }
    public get calle(){
        return this._calle;
    }

    public set numero(numero:number){
        this._numero = numero;
    }
    public get numero(){
        return this._numero;
    }

    public set piso(piso:number){
        this._piso = piso;
    }
    public get piso(){
        return this._piso;
    }

    public set letra(letra:string){
        this._letra = letra;
    }
    public get letra(){
        return this._letra;
    }

    public set codigoPostal(codigoPostal:string){
        this._codigoPostal = codigoPostal;
    }
    public get codigoPostal(){
        return this._codigoPostal;
    }

    public set poblacion(poblacion:string){
        this._poblacion = poblacion;
    }
    public get poblacion(){
        return this._poblacion;
    }

    public set provincia(provincia:string){
        this._provincia = provincia;
    }
    public get provincia(){
        return this._provincia;
    }
}