// vamos pegar todo o nosso modal
const Mobile_navbarResponsive = document.querySelector("#navbarResponsive") //navbar Responsive
const DivModaLoginCriarContaToggle = document.querySelector(".sectionLoginECadastro")
const DivModalLoginFrom = document.querySelector(".divLoginFrom")
const DivModalCriarcontaFrom = document.querySelector(".divCriarcontaFrom")


// Vamos criar a função para chamar o nosso modal Div Login e Criar Conta
function ShowLC(){
    DivModaLoginCriarContaToggle.classList.toggle("ShowLC")
    Mobile_navbarResponsive.style.display = 'none'

}

function escoderLC(){
    DivModaLoginCriarContaToggle.classList.remove("ShowLC")
    Mobile_navbarResponsive.style.display = 'inline-block'
}


// Remover divs
function ShowCriarConta(){
    DivModalLoginFrom.style.display = "none"
    DivModalCriarcontaFrom.style.display = "inline-block"
}

function ShowLogin(){
    DivModalCriarcontaFrom.style.display = "none"
    DivModalLoginFrom.style.display = "inline-block"
}