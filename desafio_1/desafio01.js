//Crie um programa 
//para calcular o IMC e nível de obesidade de uma pessoa.

/*const name = 'Carlos'
const weight = 78
const height = 1.75

const imc = weight / (weight * height)

if (imc >= 30) {
    console.log(`${name}, você está acima do peso. `)
}
if (imc < 29.9) {

    console.log(`${name}, você não está acima do peso.`)
}*/

//***************************************************** */

//Crie um programa para calcular a aposentadoria de uma pessoa.
//Obs.: Esse cálculo é fictício, dentro da aposentadoria existem 
//muitos outros fatores para serem levados em conta :)

const name = 'Silvana'
const genere  = 'F'
const age = 48
const contribuitonTime = 23


const status = age + contribuitonTime
const maleOk = genere ==='M' && status >= 35 
const feminineOk =  genere ==="F" && status >= 30

if(feminineOk || maleOk){
    console.log(`${name}, você pode se aposentar!`)
}else{
    console.log(`${name}, você não pode se aposentar!`)
}


