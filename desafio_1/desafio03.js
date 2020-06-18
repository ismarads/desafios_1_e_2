/* 

Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

*/

// const usuarios = [

//     {
//         nome: 'Carlos',
//         tecnologias: ["HTML", "CSS"]
//     },
//     {
//         nome: 'Jasmine',
//         tecnologias: ["Javascript", "CSS"]
//     },

//     {
//         nome: 'Tuane',
//         tecnologias: ["HTML", "Node.js"]
//     },

// ]

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

/*for (let usuario of usuarios){

    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`)
}*/


/*Baseado no desafio anterior, utilize a mesma lista de usuários construída.
Crie uma função que recebe os dados de um objeto de usuário e retorna SE 
o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.*/

// function checaUsuarioUsaCSS(usuario) {
//     for (let tecnologia of usuario.tecnologias) {
//         if (tecnologia === 'CSS')
//             return true
//     }
//     return false
// }

/*Percorra o array de usuários e, para cada um, 
verifique se o mesmo trabalha com CSS utilizando a função construída acima,
 se SIM, imprima em tela as informações do usuário:*/


/*for (let i = 0; i < usuarios.length; i++ ){
    const usuarioTrabalhaComCss = checaUsuarioUsaCSS(usuarios[i])// chamando a função criada acima

    if (usuarioTrabalhaComCss){

        console.log(` O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}*/



// for(let i = 0; < usuarios.length; i ++){
//     const usuarioTrabalha = 
// }



// objeto alunos e suas propriedades


/* ++++++++++++++++++++++++++ PRA FIXAÇÃO+++++++++++++++++++++++++++++++++++ */
// const alunos = [

//     {
//         nome: "Victor",
//         instrumentos: ["Violão", "Cavaquinho", "Banjo"],
//         idade: 24

//     },

//     {
//         nome: "Pablo",
//         instrumentos: ["Guitarra", "Baixo", "Violão", "Teclado"],
//         idade: 22

//     },

//     {
//         nome: "Rafael",
//         instrumentos: ["Baixo", "Teclado", "Voz"],
//         idade: 24

//     }

// ]

// // me diga o nome dos alunos e quais instrumentos eles tocam

// for (let aluno of alunos) {

//     console.log(` ${aluno.nome} toca ${aluno.instrumentos} muito bem!`)
// }

// // percorre o array e só verifica quem toca o que e não me mostra nada, só verifica
// function quemTocaOque(aluno) {
//     for (let instrumento of aluno.instrumentos) {
//         if (instrumento === "Teclado")
//             return true
//     }
//     return false
// }

// //percorre o array procurando quem toca teclado e mmostra
// for (let i = 0; i < alunos.length; i++) {
//     const tocaTeclado = quemTocaOque(alunos[i]) // atribuindo o valor correspondente achado no array

//     if (tocaTeclado) {

//         console.log(`O aluno ${alunos[i].nome} toca Teclado`) // relacionando quem toca teclado
//     }
// }



/* +++++++++++++++++ SEGUNDA PARTE DO DESAFIO +++++++++++++++++++ */





// Crie um programa que calcula a soma de receitas e despesas
//  de usuários e no fim retorna o saldo (receitas - despesas).
/*
const usuarios = [

    {
        nome: "Salvio",
        receitas: [115.3, 48.70, 98.30, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },

    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },

    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]



function calculaSaldo(receitas, despesas) {

    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas

}

function somaNumeros(numeros) {
    let soma = 0
    for (let numero of numeros) {
        soma = soma + numero
    }

    return soma
}

for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
} */
