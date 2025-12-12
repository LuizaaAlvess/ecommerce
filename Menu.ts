import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
    
export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.bg.black, colors.fg.magenta,
                    "*****************************************");

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
                    console.log(colors.fg.whitestrong, "\n\nCadastrar produto\n\n", colors.reset);

                    break;
                case 2: 
                console.log(colors.fg.whitestrong, "\n\nBuscar produto via ID", colors.reset);

                break;
                case 3:
                    console.log(colors.fg.whitestrong, "\n\nListar produtos", colors.reset);

                break;
                case 4:
                    console.log(colors.fg.whitestrong, "\n\nAtualizar informações\n\n", colors.reset);

                break;
                case 5:
                    console.log(colors.fg.whitestrong, "Deletar do estoque", colors.reset);
                
                break;
                default:
                    console.log(colors.fg.whitestrong, colors.fg.whitestrong,"Selecione uma opção válida!", colors.reset)
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