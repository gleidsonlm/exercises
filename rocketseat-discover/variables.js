// https://app.rocketseat.com.br/discover/course/o-guia-estelar-de-java-script/praticando-e-avancando/exercicios

//  1. Declare uma variável de nome weight
// let weight;

//  2. Que tipo de dado é a variável acima?
// console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        - name: String
        - age: Number (integer)
        - stars: Number (float)
        - isSubscribed: Boolean
*/
// let person {
//     name : "Gleidson",
//     age : 38,
//     stars : 4.9,
//     isSubscribed : true,
// }

/*
    4. A variável student abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
    4.2 Mostre no console a segunte mensagem:
        <name> de idade <age> pesa <weight> kg.
        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
// let student = {}
// console.log(typeof student)
let student = {
    name : "Gleidson",
    age : 38,
    stars : 4.9,
    weight : 100,
    isSubscribed : true,
}
// console.log(typeof student)
// console.log(` ${student.name}, ${student.age} anos, pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
students = [
    student
]
// console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
// console.log(students[0])

/*
    8. Crie um novo student e coloque na posiçãõ 1 do Array students
*/
let student1 = {
    name : "Juliane",
    age : 29,
    stars : 4.9,
    weight : 60,
    isSubscribed : false,
}
students[1] = student1
console.log(students[1])

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/
console.log(a)
var a = 1