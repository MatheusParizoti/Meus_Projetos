const botoes = document.querySelectorAll('.botao')
const personagens = document.querySelectorAll('.personagem')
// console.log(botoes)

botoes.forEach((botao, indice ) =>{
    botao.addEventListener("click", () =>{

        // parte1   do meu 
        const bortaoSelecionado = document.querySelector(".botao.selecionado")
        bortaoSelecionado.classList.remove("selecionado")
        botao.classList.add("selecionado")

        // parte 2    das imagens e textos
        const personagemSelecionado = document.querySelector(".personagem.selecionado")
        personagemSelecionado.classList.remove("selecionado")
        personagens[indice].classList.add("selecionado")
    })
})