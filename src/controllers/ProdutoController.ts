import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";

export class ProdutoController implements ProdutoRepository {

    public listaProdutos: Array<Produto> = new Array<Produto>();
    numero: number = 0; 

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.visualizar();
        } else
            console.log(colors.fg.red, "\nA Produto de ID: " + id
                +" não foi encontrado!", colors.reset);
    }

    listarTodos(): void {
        for (let produto of this.listaProdutos){
            produto.visualizar()
        }
    }
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto);
        console.log(colors.fg.green, "\nA Produto: " + produto.nome +
            " foi criado com sucesso!", colors.reset)
    }
    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nA Produto: " + produto.visualizar() +
            "foi atualizado com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Produto: " + produto.nome +
                "não foi encontrada!", colors.reset);
    }
    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, "\nA Produto: " + buscaProduto.nome +
                "foi apagada com sucesso!", colors.reset)
        }else
            console.log(colors.fg.red, "\nA Produto de ID: " + id +
                "não foi encontrado!", colors.reset);
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(id: number): Produto | null {

        for (let Produto of this.listaProdutos) {
            if (Produto.id === id)
                return Produto;
        }
        return null;
    }

}