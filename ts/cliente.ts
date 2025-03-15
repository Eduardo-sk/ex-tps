namespace empresa{
    export class Cliente extends Pessoa{
    private _codigo: number;
    private _saldo: number;
    
    constructor(codigo:number){
        super();
        this._codigo = codigo;

    }

    get codigo(){
        return this._codigo
    }

    get saldo(){
       return this._saldo
    }

    set saldo(saldo:number){
        this._saldo = saldo;
    }
    public deposita (valor:number) {
        this.saldo += valor;
    }

    public comprar(valorCompra:number):boolean{
        if(this.saldo >= valorCompra){
            this.saldo = this.saldo - valorCompra;
            return true;
        }

        else{
            return false;
        }
    }
}
}