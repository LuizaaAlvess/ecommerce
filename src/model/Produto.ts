export class Produto {
    static listaProdutos() {
        throw new Error("Method not implemented.");
    }

    private _preco: number;
    private _nome: string;
    private _quantidade: number;
    private _id: number;

    constructor(preco: number, nome: string, quantidade: number, id: number) {
        this._preco = preco;
        this._nome = nome;
        this._quantidade = quantidade;
        this._id = id;  
    }

    public get preco() {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public get nome() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome
    }

    public get quantidade() {
        return this._quantidade;
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public visualizar(): void {
        console.log("\n\n*****************************************************");
        console.log("Produto");
        console.log("*****************************************************");
        console.log("Nome: " + this._nome);
        console.log("Preço: " + this._preco);
        console.log("Quantidade: " + this._quantidade);
        console.log("ID: " + this._id);
    }

}

