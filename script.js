// Aguarda o carregamento total da árvore DOM para segurança da execução
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Declaração de variáveis e seleção de elementos do DOM
    const botaoTema = document.getElementById("botao-tema");
    const botaoCalcular = document.getElementById("botao-calcular");
    const formulario = document.getElementById("formulario-simulador");
    const containerResultado = document.getElementById("resultado-calculo");
    const textoResultado = document.getElementById("texto-resultado");

    // Constante que dita a economia teórica: Litros salvos por quilo produzido de forma inteligente
    const LITROS_SALVOS_POR_KG = 9.5;

    // 2. Manipulador de Evento para Mudança de Tema (Melhoria de Usabilidade)
    botaoTema.addEventListener("click", () => {
        // Altera a classe do corpo da página aplicando os estilos de Modo Escuro
        document.body.classList.toggle("modo-escuro");
        
        // Atualiza dinamicamente o texto impresso no botão para guiar o usuário
        if (document.body.classList.contains("modo-escuro")) {
            botaoTema.textContent = "Modo Claro";
        } else {
            botaoTema.textContent = "Modo Escuro";
        }
    });

    // 3. Manipulador de Evento para o Cálculo de Sustentabilidade
    botaoCalcular.addEventListener("click", () => {
        // Coleta os dados digitados e trata o valor numérico
        const nomeInjetado = document.getElementById("nome-usuario").value.trim();
        const quilosDigitados = parseFloat(document.getElementById("quilos-produzidos").value);

        // Validação manual simples para evitar processamento incorreto
        if (nomeInjetado === "" || isNaN(quilosDigitados) || quilosDigitados <= 0) {
            alert("Por favor, preencha todos os campos corretamente com valores positivos.");
            return;
        }

        // Processa as informações calculando a economia final (Variáveis lógicas)
        const economiaTotalLitros = (quilosDigitados * LITROS_SALVOS_POR_KG).toFixed(1);

        // Cria a string personalizada manipulando a mensagem de retorno
        const mensagemCustomizada = `Olá, <strong>${nomeInjetado}</strong>! Ao produzir ${quilosDigitados}kg de alimentos de forma sustentável, estima-se que você poupou <strong>${economiaTotalLitros} litros</strong> de água frente aos sistemas agrícolas tradicionais desregulados. Parabéns por apoiar o equilíbrio ambiental!`;

        // Altera a propriedade de texto interna do elemento do DOM de forma segura
        textoResultado.innerHTML = mensagemCustomizada;

        // Exibe o bloco de resultado modificando as classes CSS dinamicamente
        containerResultado.classList.add("resultado-visivel");
    });
});
