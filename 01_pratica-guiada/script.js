// Se eu tenho 15 reais, e recebo mais 22.40. Quanto dinheiro tenho agora?
let saldo = 15 + 22.40
console.log(saldo)

//Gastei 12.34. E agora, qual é o meu saldo?
saldo = saldo - 12.34
console.log(saldo)

/* Precisei dividir o dinheiro igualmente com
 meus dois irmãos. Quanto ficou pra cada um? */
saldo = saldo / 2
console.log(saldo)

/* Apliquei minha parte do dinheiro, 
e ele rendeu até ficar 3.42 vezes maior. Quanto vale agora? */
saldo = saldo * 3.42
console.log(saldo)

/* Reparti o dinheiro em fatias inteiras entre três contas,
e deixei o resto para comprar um chicletinho. 
Quanto dinheiro sobrou para o chiclete? */
saldo = (saldo / 3) 



//Igual e Diferente
let comparacaoIgual = 5 === 5
console.log(comparacaoIgual)
//esta verificando valor e tipo
//se fosse "5" seria false. 
//Com == 5 e "5" daria true 
//pq só olha o valor

let comparacaoDiferente = 5 !== 5
console.log(comparacaoDiferente)

let comparacaoTipo1 = 5 !== "5"
console.log(comparacaoTipo1)
//number !== string

let comptipo2 = "6" === "seis"
console.log(comptipo2)

let comptipo3 = typeof 5 === typeof 5
console.log(comptipo3)

let comptipo4 = typeof 5 === typeof 20
console.log(comptipo4)
//typeof compara apenas o TIPO e não o
//caractere

/* Crie duas variáveis, que guardem dois números. 
Utilizando somente os operadores >, <, >= e <=, 
faça as comparações e imprima na tela as seguintes mensagens:

O primeiro número é igual ao segundo? True/False
O primeiro número é menor ou igual ao segundo? True/False
O primeiro número é maior que o segundo? True/False
O primeiro número é menor que o segundo? True/False */


const n1 = 9
const n2 = 19
let r

r = n1 == n2
console.log(r)

r = n1 <= n2
console.log(r)

r = n1 > n2
console.log(r)

r = n1 < n2
console.log(r)


/* let a = "Quero dirigir um Celta 2012"
let b = "Sou maior de idade"
let c = "consigo comprar o Celta por 22.000 reais"
let d = "consigo alugar o Celta"
let e = "tenho carteira de motorista"

a
!b
b && !e
b && (c || d)
(b && e) && !a */


