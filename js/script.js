$( document ).ready(function() {

    $("#barras").click(function() {
        $("#menu").toggleClass("menu-ativo")
    })
 })
 
//function mostrarpopup(){//
 //   window.alert("hello world")//
//}
let email = document.getElementById("campo email");

function enviarEmail(){
    let emailDigitado = email.Value;
    console.log(emailDigitado)
}

let listaProdutos = [
 
    {
        titulo: "pc gamer ",
        descriçao:"pc gamer",
    },
    {
        titulo: "pc gamer ",
        descriçao:"pc gamer"
    },
    {
        titulo: "pc gamer ",
        descriçao:"pc gamer"
    },
]


function renderizarprodutos(){
    let espaco = document.getElementById("produtos gamer")

let template = "" ,

    for (let index = 0; index <listaProdutos.length; index++) {
    const produtos = listaProdutos[index];
 
          template += `<div class="${produtos}">
          <h2>Promoçao</h2>
          <img src="img/play.png" alt="foto do playstation gamer em promoçao"width="200px">
          <h3>Produto em Promoçao</h3>
          <p>Valor:2500</p>
          </div>`
}  

espaco.innerHTML = template;
}
