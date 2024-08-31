// pegar o botao assustador
const buttonOne = document.querySelector(".buttonOne")

// pegar o h1 e p do containerIA
const h1ContainerIA = document.querySelector(".h1ContainerIA")
const pContainerIA = document.querySelector(".pContainerIA")

let contador = 0


buttonOne.addEventListener('click', function (event) {
    contador++
    switch (contador) {
        case 1:
            pContainerIA.innerHTML = "   Errado pois a gaymificação é um processo mais atraente  e estimula mudanças comportamentais ao integrar a aprendizagem com a aplicação prática do cotidiano do aluno e o uso de tecnologias. ."
            buttonOne.innerHTML = 'Entendi...E como você pode ajudar na gaymificação?'
            buttonTwo.innerHTML = "Como a IA pode ajudar no dia a dia?"
            console.log(contador)
            break;
        case 2:
            pContainerIA.innerHTML = "A inteligência artificial (IA) pode ser uma poderosa aliada na gamificação, que é a aplicação de elementos de jogos em contextos não-jogáveis, como educação, treinamento corporativo, e até em processos de saúde."
            buttonOne.innerHTML = 'Entendi...'
            buttonTwo.style.display = "none"
            console.log(contador)
            break;
        case 3:
            pContainerIA.innerHTML = "Voce gostaria de um exemplo sobre inteligencia artificial?"
            buttonTwo.style.display = "block"
            buttonOne.innerHTML = "Sim Por Favor";
            buttonTwo.innerHTML = "Não obrigada!";
            break;
        case 4:
            pContainerIA.innerHTML = "Controle de estoque de produtos nas empresas... Através de monitoramento por sensores inteligentes, eles conseguem identificar os espaços vazios nas prateleiras, favorecendo a organização dos produtos e mercadorias.";
            buttonOne.innerHTML = "Voltar ao inicio";
            buttonTwo.style.display = "block";  // Oculta o botãoTwo
            buttonTwo.innerHTML = "Finalizar"
            console.log(contador);
            // Se você deseja mostrar o botãoTwo novamente depois de ocultá-lo, defina como "block" ou "inline"
            // buttonTwo.style.display = "block"; 
            break;
        case 5:
            location.reload(); // Recarrega a página
            break
        default:
            location.reload(); // Recarrega a página
    }
})