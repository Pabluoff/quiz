const progressElement = document.getElementById("progress");
const quizContent = document.getElementById("quiz-content");
let progressPercentage = 10;

// Histórico para armazenar os estados anteriores do quiz
const quizHistory = [];

function updateProgress(increment = 10) {
    progressPercentage += increment;
    if (progressPercentage > 100) progressPercentage = 100;
    progressElement.style.width = `${progressPercentage}%`;
}

function startQuiz() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="headline">Quem é Gaara?</div>
        <div class="texto-sub">
            Se você não me conhece, meu nome é Huri Alexandre, mais conhecido como <strong>Gaara</strong>. Muitas pessoas não têm ideia de como faço dinheiro online em cassinos. Chegou a hora de contar a verdade.
        </div>
        <div class="image-container">
            <img src="img/face.JPG" alt="Gaara" class="story-image">
        </div>
        <div class="options">
            <button class="start-btn" onclick="exposeTruth()">
                Continuar
            </button>
        </div>
    `;
    updateProgress(10);
    scrollToTop(); 
}

function exposeTruth() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="headline">Eu Decidi Expor Tudo!</div>
        <div class="texto-sub">
            A verdade é que a maioria dos influenciadores sabe disso, mas <strong>todos escondem</strong> a oportunidade de você ganhar. Estou arriscando muito ao compartilhar, mas você merece saber.
        </div>
        <div class="image-container">
            <img src="img/money.JPG" alt="Exposição da Verdade" class="story-image">
        </div>
        <div class="texto-sub">
            O <strong>Mines Hack</strong> é o único software funcional em 2025. Ele utiliza inteligência artificial para identificar falhas e aumentar sua assertividade em até 98%.
        </div>
        <div class="options">
            <button class="start-btn" onclick="showWarning()">
                Como Funciona?
            </button>
        </div>
    `;
    updateProgress(10);
    scrollToTop(); 
}

function showWarning() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="warning">
            <ion-icon name="alert-circle-outline"></ion-icon> PRESTA ATENÇÃO!
        </div>
        <div class="headline">TEMPO LIMITADO PARA ACESSAR O SOFTWARE</div>
        <div class="subheadline">
            Se você reprovar, <strong>não terá outra chance</strong>. Esta é sua única oportunidade de mudar seu destino.
        </div>
        <div class="image-container">
            <img src="img/IMG_7302.GIF" alt="Última Chance" class="story-image">
        </div>
        <div class="options">
            <button class="start-btn" onclick="startQuizQuestion()">
                Entrar no Jogo!
            </button>
        </div>
    `;
    updateProgress(10);
    scrollToTop(); 
}

function startQuizQuestion() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="headline">Responda:</div>
        <div class="options">
            <button class="quiz-option" onclick="passFirstTest()"><ion-icon name="calculator-outline"></ion-icon> Perdi dinheiro com influenciadores</button>
            <button class="quiz-option" onclick="passFirstTest()"><ion-icon name="cash-outline"></ion-icon> Preciso de dinheiro ainda este mês</button>
            <button class="quiz-option" onclick="failTest()"><ion-icon name="sad-outline"></ion-icon> Não tenho um centavo para investir</button>
        </div>
    `;
    updateProgress(10);
    scrollToTop(); 
}

function passFirstTest() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="success">Parabéns, você passou na primeira prova!</div>
        <div class="texto-sub">
            Agora vamos descobrir se você vai <strong>REPROVAR</strong> ou desbloquear a chave para fazer dinheiro hoje mesmo.
        </div>
        <div class="options">
            <button class="quiz-option" onclick="unlockStep()">Eu quero acessar o software</button>
            <button class="quiz-option" onclick="failTest()">Eu não tenho dinheiro agora</button>
        </div>
    `;
    updateProgress(10);
    scrollToTop(); 
}

function unlockStep() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="pre-warning">VOCÊ Desbloqueou o Próximo Passo!</div>
        <div class="texto-sub">
            Assista tudo e comece a ganhar ainda hoje!
        </div>
        <div class="image-container">
            <img src="img/IMG_7303.PNG" alt="Vídeo Explicativo" class="story-image">
        </div>
        <div class="options">
            <button class="start-btn" onclick="showVideo()"> <ion-icon name="play-circle"></ion-icon>Assistir Agora</button>
        </div>
    `;
    updateProgress(10);
    scrollToTop(); 
}

function showVideo() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="pre-warning"><ion-icon name="warning-outline"></ion-icon>Assista com Atenção!</div>
        <div class="texto-video">
            Esse vídeo pode <strong>mudar sua vida!</strong>
        </div>
        <div class="options">
            <button class="start-btn blink" onclick="redirectToSoftware()">
                Acessar o software agora!
            </button>
        </div>
    `;
    updateProgress(10);
    scrollToTop(); 
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
}

function redirectToSoftware() {
    window.open('https://example.com', '_blank');
}

function failTest() {
    saveStateToHistory();
    quizContent.innerHTML = `
        <div class="headline">Oportunidade Perdida</div>
        <div class="subheadline">
            Você não está pronto para mudar sua realidade agora. Volte quando estiver preparado para assumir o controle do seu futuro.
        </div>
        <div class="options">
            <button class="start-btn" onclick="restartQuiz()">
                <ion-icon name="reload"></ion-icon> Recomeçar
            </button>
        </div>
    `;
    updateProgress(0); 
}

function restartQuiz() {
    progressPercentage = 10;
    progressElement.style.width = "10%";
    quizContent.innerHTML = `
        <div class="headline">Você está pronto para transformar sua realidade?</div>
        <div class="subheadline">Esta é sua oportunidade de acessar o <strong>Mines Hack</strong> e mudar sua vida.</div>
        <div class="options">
            <button class="start-btn" onclick="startQuiz()">
                Sim, quero começar agora!
            </button>
            <button class="decline-btn" onclick="declineQuiz()">Prefiro ficar como estou</button>
        </div>
    `;
}

function declineQuiz() {
    quizContent.innerHTML = `
        <div class="headline">Quantas oportunidades você já deixou escapar?</div>
        <div class="texto-sub">
            Quantas vezes você prometeu a si mesmo que a <strong>próxima chance</strong> seria diferente? 
            Sem ação, não há progresso. Sem progresso, o amanhã será apenas uma repetição do hoje. 
            Ao recusar agora, você está decidindo que permanecer no mesmo lugar é o suficiente. 
            Mas lembre-se: o tempo não volta, e as chances não esperam.
        </div>
        <div class="options">
            <button class="start-btn" onclick="restartQuiz()">
                <ion-icon name="refresh-outline"></ion-icon> Não Deixe Isso Escapar
            </button>
        </div>
    `;
}

// Função para salvar o estado atual no histórico
function saveStateToHistory() {
    quizHistory.push(quizContent.innerHTML);
}

// Função para voltar ao estado anterior
function goBack() {
    if (quizHistory.length > 0) {
        quizContent.innerHTML = quizHistory.pop();
        progressPercentage -= 10;
        progressElement.style.width = `${progressPercentage}%`;
    }
}
