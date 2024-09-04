

// function mostrarTexto(){
//     console.log("O texto apareceu")
// }

// var contagem = 0

// function mostrarContagem(){
//     contagem ++
//     console.log(contagem)
// }

// //Cria mostra a função apenas uma vez
// meuTimeOut = setInterval(mostrarTexto, 1000)
// //Mostra pra sempre com o intervalo de quantos segundos que você definiu
// minhaContagem = setInterval(mostrarContagem, 1000)


// function para(){
//     clearInterval(minhaContagem)
// }

// function pare(){
//     clearInterval(meuTimeOut)
// }




var horas = document.getElementById('horas')
var minutos = document.getElementById('minutos')
var segundos = document.getElementById('segundos')
var textoSaudacao = document.getElementById('saudacaoTexto')
var ano = document.getElementById('ano')
var mes = document.getElementById('mes')


var diasSemana = ['DOMINGO' , 'SEGUNDA-FEIRA' , 'TERÇA-FEIRA' , 'QUARTA-FEIRA' , 'QUINTA-FEIRA' , 'SEXTA-FEIRA' , 'SÁBADO']


var atualizaRelogio = setInterval(function (){
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var mesAtual = dataAtual.getMonth()
    var horaAtual = dataAtual.getHours()
    var minutoAtual = dataAtual.getMinutes()
    var segundoAtual = dataAtual.getSeconds()
    var diaAtual = dataAtual.getDay()

    if(minutoAtual <= 9) minutoAtual = '0' + minutoAtual
    if(segundoAtual <= 9) segundoAtual = '0' + segundoAtual
    if(horaAtual <= 9) horaAtual = '0' + horaAtual
    if(mesAtual <= 9) mesAtual = '0' + mesAtual
    
    ano.textContent = anoAtual
    mes.textContent = mesAtual
    horas.textContent = horaAtual
    minutos.textContent = minutoAtual
    segundos.textContent = segundoAtual
    textoSaudacao.textContent =  `${trocaSaudacao(horaAtual)} / ${diasSemana[diaAtual]}`
})


function trocaSaudacao(horas){
    if(horas < 6)
        return 'BOA MADRUGADA'
     else if(horas < 12)
        return 'BOM DIA'
    else if(horas < 18)
        return 'BOA TARDE'
    else 
        return 'BOA NOITE'
      
}



