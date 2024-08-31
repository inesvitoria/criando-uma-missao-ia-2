// Pegar o botão assustador
const buttonTwo = document.querySelector(".buttonTwo");

buttonTwo.addEventListener('click', function (event) {

    contador++;
    switch (contador) {
        case 1:
            pContainerIA.innerHTML = "Correto pois a gamificação é um processo mais atraente  e estimula mudanças comportamentais ao integrar a aprendizagem com a aplicação prática do cotidiano do aluno e o uso de tecnologias."
            buttonOne.innerHTML = "Como a IA aprende?"
            buttonTwo.innerHTML = "Quais as desvantagens da inteligência artificial";
            break;
        case 2:
            pContainerIA.innerHTML = "A IA pode substituir tarefas e empregos que antes eram realizados por humanos, especialmente em setores como manufatura, atendimento ao cliente e logística, o que pode levar ao desemprego em massa.";
            buttonOne.innerHTML = 'Entendi...';
            buttonTwo.style.display = "none"
            console.log(contador);
            break;
        case 3:
            pContainerIA.innerHTML = ""
            buttonTwo.style.display = "block"
            console.log("botao funcionou")
            break;
        case 4:
            pContainerIA.innerHTML = ""
            buttonOne.innerHTML = "Voltar ao inicio"
            buttonTwo.style.display = "block"
            buttonTwo.innerHTML = "Finalizar"
            break;
        case 5:
            pContainerIA.innerHTML = "FIM"
            pContainerIA.style.display = "flex"
            pContainerIA.style.justifyContent = "center"
            pContainerIA.style.alignItems = "center"
            buttonOne.style.display = "none"
            buttonTwo.style.display = "none"
            break
        default:
            pContainerIA.innerHTML = "FIM"
            pContainerIA.style.display = "flex"
            pContainerIA.style.justifyContent = "center"
            pContainerIA.style.alignItems = "center"
            buttonOne.style.display = "none"
            buttonTwo.style.display = "none"
            
    }
});