// EXEMPLO 1 

// function dizOi() {
//     console.log("oi")
// }

// dizOi()


// EXEMPLO 2

// ------------------------------------------- EXEMPLO DE FUNCAO NOMEADA -----------------

// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)

// function somaDoisNumeros(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }




// ------------------------------------------- EXEMPLO DE FUNCAO NÃO NOMEADA -----------------


// const somaDoisNumeros = function(numero1, numero2) {
//     const soma = numero1 + numero2
//     return soma
// }
    
// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)



// ------------------------------------------- EXEMPLO DE ARROW FUNCTION (FUNCAO FLECHA) -----------------


// const somaDoisNumeros = (numero1, numero2) => {
//     const soma = numero1 + numero2
//     return soma
// }


// const resultado1 = somaDoisNumeros(5, 6)
// const resultado2 = somaDoisNumeros(10, 20)

// console.log(resultado1)
// console.log(resultado2)




// ------------------------------------------- EXERCÍCIO 1 -----------------

// function verificaArray(arrayDeParametro) {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length 
// }


// ------------------------------------------- EXERCÍCIO 2 -----------------


// const verificaTamanhoDoArray = (arrayDeParametro) => {
//     for (let elemento of arrayDeParametro) {
//         console.log(elemento)
//     }

//     return arrayDeParametro.length
// }

// const profs = ["chijo", "paulinha", "sot", "caio", "severo"]

// const tamanhoDoArray = verificaTamanhoDoArray(profs)


//EXERCÍCIO 1
//A- 10 
//   50
//B- Não vai imprimir no console

//EXERCÍCIO 2
//A- Será impresso o eletmeto 0 e 1 do arrayDeNomes
//B- Amanda, Caio

//EXERCÍCIO 3


//EXERCÍCIO 4
 
/*A
function infomacoes1() {
	console.log("Meu nome é Luana, moro em São Paulo e sou estudante.")

}

B-

let nome = ["Luana"]
let idade = [27]
let cidade = ["São Paulo"]
let estudade = true
function infomacoes1() {
	console.log("Meu nome é ", nome , "moro em ",cidade, " e sou " estudante)

}