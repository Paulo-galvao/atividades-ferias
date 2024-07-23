const prompt = require('prompt-sync')();
const {
    inserirAtividade,
    listarAtividades, 
    atualizarAtividade, 
    deletarAtividade
    } = require('./functions.js');

let dia, atividade;

const atividades = [
    {data: "15/07", atividade: []},
    {data: "16/07", atividade: []},
    {data: "17/07", atividade: []},
    {data: "18/07", atividade: []},
    {data: "19/07", atividade: []},
    {data: "20/07", atividade: []},
    {data: "21/07", atividade: []}    
];

while(true) {    

    console.log("O que você deseja fazer? ");
    console.log(`1 - Inserir uma nova atividade
2 - Listar atividades
3 - Atualizar alguma atividade
4 - Deletar alguma atividade
0 - Sair`);

    let opcao = +prompt();

    switch(opcao) {

        // inserir dados
        case 1:
            escolherData();

            switch(dia) {
                case 1:
                    inserirAtividade(0, atividade, atividades);
                    break;
                case 2:
                    inserirAtividade(1, atividade, atividades);
                    break;
                case 3:
                    inserirAtividade(2, atividade, atividades);
                    break;
                case 4:
                    inserirAtividade(3, atividade, atividades);
                    break;
                case 5:
                    inserirAtividade(4, atividade, atividades);
                    break;
                case 6:
                    inserirAtividade(5, atividade, atividades);
                    break;
                case 7:
                    inserirAtividade(6, atividade, atividades);
                    break;
                default:
                    console.log("Opção inválida!");
                    break;
            }
            break;
        
        // listar dados
        case 2:
            listarAtividades(atividades);
            break;
        // atualizar
        case 3:
            escolherData();
            switch(dia) {
                case 1:
                    atualizarAtividade(0, atividade, atividades);
                    break;
                case 2:
                    atualizarAtividade(1, atividade, atividades);
                    break;
                case 3:
                    atualizarAtividade(2, atividade, atividades);
                    break;
                case 4:
                    atualizarAtividade(3, atividade, atividades);
                    break;
                case 5:
                    atualizarAtividade(4, atividade, atividades);
                    break;
                case 6:
                    atualizarAtividade(5, atividade, atividades);
                    break;
                case 7:
                    atualizarAtividade(6, atividade, atividades);
                    break;
                default:
                    console.log("Opção inválida!");
                    break;
            }
            break;
        // deletar
        case 4:
            escolherData();
            switch(dia) {
                case 1:
                    deletarAtividade(0, atividades);
                    break;
                case 2:
                    deletarAtividade(1, atividades);
                    break;
                case 3:
                    deletarAtividade(2, atividades);
                    break;
                case 4:
                    deletarAtividade(3, atividades);
                    break;
                case 5:
                    deletarAtividade(4, atividades);
                    break;
                case 6:
                    deletarAtividade(5, atividades);
                    break;
                case 7:
                    deletarAtividade(6, atividades);
                    break;
                default:
                    console.log("Opção inválida!");
                    break;
            }
            break;
        // sair
        case 0:
            return;
            
        default:
            console.log("Opção não localizada, por favor tente novamente!");
            break;
    }


    
}

function escolherData() {
    console.log(`Escolha o dia das férias
1 - 15/07 - segunda-feira
2 - 16/07 - terça-feira
3 - 17/07 - quarta-feira
4 - 18/07 - quinta-feira
5 - 19/07 - sexta-feira
6 - 20/06 - sábado
7 - 21/07 - domingo`);

    dia = +prompt();
}