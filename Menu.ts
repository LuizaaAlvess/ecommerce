import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ProdutoController } from "./src/controllers/ProdutoController";
import { Produto } from "./src/model/Produto";
import { isNumberObject } from "node:util/types";

export function main() {

    let opcao: number;
    let nome, preco, quantidade, id;

    let produtoController: ProdutoController = new ProdutoController();

    let produto1: Produto = new Produto(10, "produto1", 10, 1);
    produtoController.cadastrar(produto1);

    let produto2: Produto = new Produto(10, "produto2", 10, 2);
    produtoController.cadastrar(produto2);

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta,);

        console.log("********************************************");
        console.log("                                            ");
        console.log("              BRECHÓ DA LU                  ");
        console.log("                                            ");
        console.log("********************************************");
        console.log("                                            ");
        console.log("           1- Cadastrar produto             ");
        console.log("           2- Buscar produto via ID         ");
        console.log("           3- Listar produtos               ");
        console.log("           4- Atualizar informações         ");
        console.log("           5- Remover produto               ");
        console.log("           6- Sair do catálogo              ");
        console.log("                                            ");
        console.log("********************************************",
            colors.reset);

        console.log("Selecione a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log(colors.fg.gray,
                "Volte sempre!!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0)
        }
        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n"), colors.reset;
                console.log("Digite o produto que deseja cadastrar: ");
                nome = readlinesync.question("");

                console.log("Digite a quantidade do produto: ");
                quantidade = readlinesync.questionInt("");

                console.log("Digite o valor do produto: ");
                preco = readlinesync.questionFloat("");

                id = produtoController.listaProdutos.length + 1;

                produtoController.cadastrar(new Produto(preco, nome, quantidade, id))

                break;
            case 2:
                console.log(colors.fg.whitestrong, "\n\nBuscar produto via ID", colors.reset);

                console.log("Digite o ID do produto");
                id = readlinesync.questionInt("");

                produtoController.procurarPorId(id);

                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nListar produtos", colors.reset);

                produtoController.listarTodos()

                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar informações\n\n", colors.reset);

                console.log("Digite o ID do produto que deseja atualizar: ");
                id = readlinesync.questionInt("");

                let conta = produtoController.buscarNoArray(id);

                if (conta != null) {
                    console.log("Digite o nome do produto: ");
                    nome = readlinesync.question("");

                    console.log("Digite o preço do produto: ");
                    preco = readlinesync.questionFloat("");

                    console.log("\nDigite a quantidade do produto: ");
                    quantidade = readlinesync.questionInt("");

                    produtoController.atualizar(new Produto(preco, nome, quantidade, id))
                } else {
                    console.log(colors.fg.red, "\nA produto de ID: " + id + "não foi encontrado!", colors.reset);
                }
                break;



                break;
            case 5:
            console.log(colors.fg.whitestrong, "Deletar do estoque", colors.reset);
            console.log("Digite o id do produto que deseja deletar: ");
                
            id = readlinesync.questionInt("");

            produtoController.deletar(id);

    break;
 

                break;
            default:
                console.log(colors.fg.whitestrong, colors.fg.whitestrong, "Selecione uma opção válida!", colors.reset)
        }
    }

}

export function sobre(): void {
    console.log("\n************************************************");
    console.log("Projeto desenvolvido por: Andreza Luiza Alves");
    console.log("https://github.com/LuizaaAlvess")
    console.log("luiza.andreza@icloud.com")
    console.log("\n************************************************");
}

main();