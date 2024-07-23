const prompt = require('prompt-sync')();

// create
function inserirAtividade(index, atividade, atividades) {
    while(atividade != 0) {
        atividade = prompt("O que você fez nesse dia? Digite 0 para sair ");
        atividades[index].atividade.push(atividade);
    }
    atividades[index].atividade.pop();
}

// read
function listarAtividades(atividades) {
    atividades.forEach(atividade => {
        console.log(`${atividade.data}: ${atividade.atividade}`);
    })
}

// update
function atualizarAtividade(index, atividade, atividades) {
    deletarAtividade(index, atividades);
    while(atividade != 0) {
        atividade = prompt("O que você fez nesse dia? ");
        atividades[index].atividade.push(atividade);
    }
    atividades[index].atividade.pop();
}

// delete 
function deletarAtividade(index, atividades) {
    atividades[index].atividade = [];
}



module.exports = {inserirAtividade, listarAtividades, atualizarAtividade, deletarAtividade};