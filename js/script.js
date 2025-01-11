const progressElement = document.getElementById('progress');
const quizContent = document.getElementById('quiz-content');

let progressPercentage = 10; // Começar com 10% de progresso

// Atualiza a barra de progresso
function updateProgress(increment = 10) {
    progressPercentage += increment;
    if (progressPercentage > 100) progressPercentage = 100;  // Não deixa ultrapassar 100%
    progressElement.style.width = `${progressPercentage}%`;
}

// Função para iniciar o quiz (primeira etapa)
function startQuiz() {
    quizContent.innerHTML = `
        <div class="headline">Conheça Gaara, o YouTuber que desvendou os cassinos!</div>
        <div class="subheadline">Gaara sempre teve uma curiosidade insaciável sobre como os cassinos funcionam. Mas, ao investigar mais a fundo, ele descobriu algo surpreendente...</div>
        <div class="image-container">
            <img src="/img/face.JPG" alt="Gaara - YouTuber" class="story-image">
        </div>
        <div class="subheadline">Com a ajuda de um misterioso aplicativo russo, Gaara conseguiu identificar falhas nos sistemas dos cassinos, revelando algo que ninguém imaginava...</div>
        <div class="options">
            <button class="start-btn" onclick="continueStory()">Continuar</button>
        </div>
    `;
    updateProgress(10); // Adiciona 10% após o primeiro clique
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
    updateProgress(30); // Adiciona 30% após continuar a história
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
    updateProgress(30); // Adiciona 30% após mostrar o impacto
}

// Função para finalizar a história
function showFinalStep() {
    quizContent.innerHTML = `
        <div class="headline">Parabéns!</div>
        <div class="subheadline">Você acompanhou toda a jornada de Gaara, agora é hora de tomar decisões que podem transformar sua vida, assim como ele transformou a realidade dos cassinos online!</div>
        <div class="options">
            <button class="start-btn" onclick="restartQuiz()">Refazer a Jornada</button>
        </div>
    `;
    updateProgress(30); // Completa o progresso para 100%
}

// Função para reiniciar o quiz
function restartQuiz() {
    // Reinicia o progresso para 10%
    progressPercentage = 10;  
    progressElement.style.width = '10%';  // Redefine a barra para 10%

    // Reinicia o conteúdo do quiz para a primeira etapa
    quizContent.innerHTML = `
        <div class="headline">Você está pronto para transformar sua realidade?</div>
        <div class="subheadline">Esta é sua oportunidade de acessar o <strong style="color: #666666;">MINES
                HACK.</strong> Ao baixar este app, prepare-se para
            mudar <strong style="color: #666666;">sua vida!</strong>
        </div>
        <div class="options">
            <button class="start-btn" onclick="startQuiz()">Sim, quero começar agora!</button>
            <button class="decline-btn" onclick="declineQuiz()">Prefiro ficar como estou</button>
        </div>
    `;
}

// Função para o caso de recusa do quiz
function declineQuiz() {
    quizContent.innerHTML = `
        <div class="headline">Entendido.</div>
        <div class="subheadline">Se mudar de ideia, estaremos aqui para ajudar!</div>
    `;
}
