// //fazer com array
// var alunos = ["Pedro","Tiago","João"]
// var notas = [7,8,9]

// // console.log(alunos[2], "=", notas[2])

// //Declarando um obj
// var aluno = {
//     nome: "Pedro", nota: 8
// }

// console.log(aluno.nome)
// console.log(aluno.nota)
// console.log(aluno.nome, " - ", aluno.nota )

// var pessoa  = {
//     nome: "Maria",
//     idade:20
// }

// console.log(pessoa)
// console.log(console.nome)
// console.log(pessoa["idade"])

// //Add nova propriedade

// pessoa.rg = "1232324"
// console.log(pessoa);

// pessoa["profissão"] = "Tiktoker"
// console.log(pessoa);


// // add nova prop com uma var
// var novaProp = "sobrenome"
// pessoa[novaProp] = "Do Bairro"
// console.log(pessoa.sobrenome);

//Criando metodos
// var animal = {
//     nome:"Mel",
//     raca:"Poodle",
//     latir: function(){
//         console.log("Au au")
//     },

//     andar: function(){
//     console.log("Au au")
//     }
//   }


// console.log(animal.nome)
// console.log(animal["raca"])
// console.log(animal.latir())

// var aluno = {
//     nome: "Cris",
//     notas:[5, 7, 6],
//     media: function(n1,n2,n3 ){
//         return(n1+n2+n3 / 3)
//     }
// }

// console.log("nome ", aluno.nome)
// console.log("Sua media foi - ", aluno.media(aluno.notas[0], aluno1.media[1], (aluno.notas[2]))

function calculaMedia(n1,n2,n3){
    return((n1+n2+n3 /3))
}







var aluno1 = {
    nome: "Porta",
    notas:[5, 7, 6],
    media:calculaMedia
}

var aluno2 = {
    nome: "Porta",
    notas:[5, 7, 6],
    media: calculaMedia
    
}


console.log("nome ", aluno1.nome)
console.log("Sua media foi - ", aluno1.media(aluno1.notas[0], aluno1.media[1], aluno1.notas[2]))































