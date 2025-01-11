const progressElement = document.getElementById('progress');
const quizContent = document.getElementById('quiz-content');

let progressPercentage = 10; // Barra de progresso inicia em 10%

// Atualiza a barra de progresso
function updateProgress(increment = 10) {
    progressPercentage += increment;
    if (progressPercentage > 100) progressPercentage = 100;  // Garantir que o progresso não ultrapasse 100%
    progressElement.style.width = `${progressPercentage}%`;
}

// Função para iniciar o quiz
function startQuiz() {
    quizContent.innerHTML = `
        <div class="headline">Conheça Gaara, o YouTuber que desvendou os cassinos!</div>
        <div class="subheadline">Gaara sempre teve uma curiosidade insaciável sobre como os cassinos funcionam. Mas, ao investigar mais a fundo, ele descobriu algo surpreendente...</div>
        <div class="image-container">
            <img src="/img/gaara_storytelling.png" alt="Gaara - YouTuber" class="story-image">
        </div>
        <div class="subheadline">Com a ajuda de um misterioso aplicativo russo, Gaara conseguiu identificar falhas nos sistemas dos cassinos, revelando algo que ninguém imaginava...</div>
        <div class="options">
            <button class="start-btn" onclick="continueStory()">Continuar</button>
        </div>
    `;
    updateProgress(10);  // Inicia o progresso com 10%
}

// Função para continuar a história
function continueStory() {
    quizContent.innerHTML = `
        <div class="headline">A Revolução nos Cassinos</div>
        <div class="subheadline">Gaara descobriu que esse aplicativo russo tinha o poder de analisar as falhas nos cassinos online, identificando padrões que nem os desenvolvedores sabiam que existiam!</div>
        <div class="image-container">
            <img src="/img/app_russo.png" alt="Aplicativo Russo" class="story-image">
        </div>
        <div class="subheadline">Ao compartilhar sua descoberta, Gaara rapidamente ganhou a atenção de milhões de pessoas, tornando-se uma referência no assunto.</div>
        <div class="options">
            <button class="start-btn" onclick="nextStep()">Descubra o Impacto!</button>
        </div>
    `;
    updateProgress(30);  // Atualiza o progresso para 40% (10% + 30%)
}

// Função para mostrar o impacto da descoberta de Gaara
function nextStep() {
    quizContent.innerHTML = `
        <div class="headline">O Impacto da Descoberta</div>
        <div class="subheadline">A revelação de Gaara abalou o mundo dos cassinos online. Agora, muitas pessoas estavam se perguntando: como usar essas falhas a seu favor?</div>
        <div class="image-container">
            <img src="/img/cassino_impacto.png" alt="Impacto nos Cassinos" class="story-image">
        </div>
        <div class="subheadline">A próxima etapa da jornada de Gaara será ainda mais impressionante. Mas será que ele irá compartilhar ainda mais segredos?</div>
        <div class="options">
            <button class="start-btn" onclick="showFinalStep()">Finalizar e Entrar no Jogo!</button>
        </div>
    `;
    updateProgress(30);  // Atualiza o progresso para 70% (40% + 30%)
}

// Função para finalizar o storytelling
function showFinalStep() {
    quizContent.innerHTML = `
        <div class="headline">Parabéns!</div>
        <div class="subheadline">Você acompanhou toda a jornada de Gaara, agora é hora de tomar decisões que podem transformar sua vida, assim como ele transformou a realidade dos cassinos online!</div>
        <div class="options">
            <button class="start-btn" onclick="restartQuiz()">Refazer a Jornada</button>
        </div>
    `;
    updateProgress(30);  // Atualiza o progresso para 100% (70% + 30%)
}

// Função para reiniciar o quiz
function restartQuiz() {
    progressPercentage = 10;  // Reinicia o progresso para 10%
    progressElement.style.width = '10%';  // Redefine a barra para 10%
    startQuiz();  // Reinicia o quiz
}
