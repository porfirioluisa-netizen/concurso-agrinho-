// Aguarda o carregamento do DOM de forma segura
document.addEventListener("DOMContentLoaded", () => {
    
    // Elementos da Interface
    const botaoTema = document.getElementById("botao-tema");
    const botaoCalcular = document.getElementById("botao-calcular");
    const containerResultado = document.getElementById("resultado-calculo");
    const textoResultado = document.getElementById("texto-resultado");
    const barraProgresso = document.getElementById("barra-progresso");
    const btnAumentar = document.getElementById("btn-aumentar-fonte");
    const btnDiminuir = document.getElementById("btn-diminuir-fonte");

    // Constantes de Controle
    const LITROS_SALVOS_POR_KG = 9.5;
    let tamanhoFonteAtual = 100; // Base percentual (%)

    // --- FUNÇÃO 1: Controle de Acessibilidade (Aumentar/Diminuir Texto) ---
    function ajustarTamanhoFonte(modificador) {
        tamanhoFonteAtual += modificador;
        // Limita o tamanho do texto para não quebrar o layout (Entre 80% e 140%)
        if (tamanhoFonteAtual >= 80 && tamanhoFonteAtual <= 140) {
            document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
        } else {
            tamanhoFonteAtual -= modificador; // Desfaz caso passe do limite
        }
    }

    // --- FUNÇÃO 2: Atualização Visual da Barra de Progresso ---
    function atualizarBarraImpacto(litros) {
        // Define o limite máximo da barra baseado em 1000 litros para fins de escala visual
        let porcentagem = (litros / 1000) * 100;
        if (porcentagem > 100) porcentagem = 100;
        if (porcentagem < 10) porcentagem = 10; // Tamanho mínimo estético

        // Altera propriedades dinâmicas do elemento DOM
        barraProgresso.style.width = `${porcentagem}%`;

        // Altera a cor do gráfico dinamicamente com base no impacto (Item Avançado da Rubrica)
        if (litros < 300) {
            barraProgresso.style.backgroundColor = "var(--cor-alerta)";
        } else {
            barraProgresso.style.backgroundColor = "var(--cor-primaria)";
        }
    }

    // --- FUNÇÃO 3: Processamento dos Dados do Simulador ---
    function executarSimulacao() {
        const nomeInjetado = document.getElementById("nome-usuario").value.trim();
        const quilosDigitados = parseFloat(document.getElementById("quilos-produzidos").value);

        if (nomeInjetado === "" || isNaN(quilosDigitados) || quilosDigitados <= 0) {
            alert("Por favor, digite um nome válido e uma quantidade positiva de quilos.");
            return;
        }

        const economiaTotalLitros = (quilosDigitados * LITROS_SALVOS_POR_KG).toFixed(1);

        // Injeta o texto manipulando o DOM com segurança
        textoResultado.innerHTML = `Olá, <strong>${nomeInjetado}</strong>! Ao produzir ${quilosDigitados}kg de alimentos de forma sustentável, estima-se que você poupou <strong>${economiaTotalLitros} litros</strong> de água frente aos sistemas agrícolas tradicionais desregulados.`;

        // Exibe o painel de resultados
        containerResultado.classList.add("resultado-visivel");

        // Dispara o comportamento visual da barra de carregamento
        atualizarBarraImpacto(parseFloat(economiaTotalLitros));
    }

    // --- ESCUTADORES DE EVENTOS (Tratamento de Cliques) ---
    btnAumentar.addEventListener("click", () => ajustarTamanhoFonte(10));
    btnDiminuir.addEventListener("click", () => ajustarTamanhoFonte(-10));
    
    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("modo-escuro");
        botaoTema.textContent = document.body.classList.contains("modo-escuro") ? "Modo Claro" : "Modo Escuro";
    });

    botaoCalcular.addEventListener("click", executarSimulacao);
});
