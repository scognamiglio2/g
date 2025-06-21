const letters = [
    "Eu prometo amar a tua alma em todas as estações. Quando fizer frio, serei o teu calor. Quando fizer calor, serei a tua sombra. Quando o mundo estiver barulhento demais, você poderá se esconder no meu silêncio. Quando tudo escurecer, segurarei a sua mão e nunca soltarei. Ah, quando eu te amar, vou te amar com toda a minha alma.",
    "Quando eu digo que te amo mais, não quero dizer que te amo mais do que você me ama. Quero dizer que te amo mais do que os dias difíceis que ainda virão. Te amo mais do que qualquer briga que possamos ter. Te amo mais do que a distância que possa existir entre nós. Eu te amo mais do que tudo.",
    "Eu escolhi você. E vou continuar escolhendo você, de novo e de novo e de novo. Sem hesitar, sem duvidar, num piscar de olhos. Eu continuarei escolhendo você.",
    "Oh, once in your life you find someone\nWho will turn your world around\nBring you up when you're feeling down\nYeah, nothing could change what you mean to me\n\nOh, there's lots that I could say\nBut just hold me now\n'Cause our love will light the way\n\nAnd baby you're all that I want\nWhen you're lying here in my arms\nI'm finding it hard to believe\nWe're in heaven\n\nYeah, love is all that I need\nAnd I found it there in your heart\nIt isn't too hard to see\nWe're in heaven\n\nYeah\n\nI've been waiting for so long\nFor something to arrive\nFor love to come along\n\nHaven - Bryan Adams",
    "Acho que desejei você por toda a minha vida. Se vidas passadas forem reais, acredito que fomos amantes lá, onde só a morte poderia nos separar. Se universos paralelos existirem, tenho certeza de que fomos duas almas entrelaçadas, procurando uma à outra em cada canto do mundo. Nesta vida também, enviei minhas esperanças às estrelas, torcendo para que estivéssemos destinados a ficar juntos mais uma vez. Então você apareceu, e foi como se todos os meus desejos sussurrados finalmente tivessem encontrado o caminho de volta para casa — porque você é o meu amor eterno.",
    "\"Esse é nosso começo. Esse é o momento em que se torna real. Somos o infinito. Conrad e eu. O primeiro garoto com quem eu dancei uma música lenta. O primeiro que amei.\"",
    "Eu te amo, e não posso negar as batidas do meu coração por você. Sempre cuidarei do seu coração, e sempre buscarei acalmar sua alma e te dar com o melhor de mim, pois eu te amo muito. Sou tão cheia de amor que as lágrimas escorrem pelo meu rosto, meu coração tão cheio, tão cheio de você, enquanto minhas mãos, meu coração, minha alma cantam poesia para você.",
    "Seu nome vibra dentro do meu peito. Acho que é isso que significa amar. Acho que é isso que significa estar vivo.",
    "And I'd give up forever to touch you\n'Cause I know that you feel me somehow\nYou're the closest to heaven that I'll ever be\nAnd I don't wanna go home right now",
    "I have an entire forest living inside of me and you have carved your initials into every tree.",
    "Espero que estejamos juntos em todos os universos. Não importa quem somos em cada universo; o que importa é que estamos juntos. Quero estar com você o tempo todo; quero segurar sua mão o tempo todo; e quero sentir o mesmo calor do seu abraço o tempo todo. Deixe-me estar com você de todas as formas possíveis, e estarei com você de todas as formas possíveis. Quero ser as estrelas, se você reencarnar como a lua. Quero estar com você o tempo todo, porque estar com você é como dançar nos nossos momentos mais felizes. Estar com você significa que posso segurar seu coração sozinho. E estar com você significa que estou em casa.",
    "Eu te amo porque você existe, porque você é exatamente como é, e porque isso sempre foi tudo o que eu precisei que você fosse. O que eu sinto por você não tem condição. É constante, como se sempre estivesse ali, mesmo antes de eu saber nomear.",
    "Amar você nunca foi difícil e nunca precisei aprender. Amar você é, talvez, a coisa mais fácil que já fiz neste mundo. É um hábito que não exige mais pensamento ou esforço do que respirar, como se eu tivesse sido feito apenas para isso. Meu coração está tão cheio de você que chega a parecer tolice chamá-lo por outro nome que não o seu. Eu olho para você e tudo o que consigo sentir pulsando pelas minhas veias e ecoando nas paredes do meu coração é amor. Esse afeto puro e incondicional que carrego por você é algo que vai viver muito além de nós, mesmo depois que deixarmos de existir. Então não, não é difícil amar você. É impossível não amar.",
    "Time, curious time\nGave me no compasses, gave me no signs\nWere there clues I didn't see?\nAnd isn't it just so pretty to think\nAll along there was some\nInvisible string\nTying you to me?\n\nInvisible String - Taylor Swift",
    "Eu não sei senão amar-te,\nNasci para te querer.\nÓ quem me dera beijar-te,\nE beijar-te até morrer.\n\nFernando Pessoa",
    "Agora eu vejo que eu nem sabia nada\nAmar é mais do que dizer do amor\nE a gente se escolhe todo dia\nE eu te escolheria mais milhões de vidas\nPorque uma só é pouco com você, amor\nE eu quero tudo que eu puder viver, amor\n\n Explodir - AnaVitoria",
    "O que há dentro do meu coração\nEu tenho guardado pra te dar\nE todas as horas que o tempo tem pra me conceder\nSão tuas, até morrer\n\n Amor puro - Djavan",
    "Sempre li sobre amor e achava que conhecia ele, até você chegar. Então soube que amor é muito mais do que eu imaginava. É muito melhor. É mais profundo. Mais euforico. É mais intenso. É mais verdadeiro. E sei que é tudo isso, porque eu sinto por você.",
    "E assim como o nascer do sol,\namar você é inevitável.\nÉ onde começam os meus dias.\nÉ a minha primeira fonte de calor.\nNunca ouvi alguém perguntar\n“será que o sol vai nascer amanhã?”\nMas caso você se pergunte, a resposta é sim, eu vou continuar amando você amanhã.",
    "Teu amor trouxe significado a todos os conceitos que eu tinha da palavra amar, foi o sentimento mais lindo que eu já tive a honra de viver.",
    "Te espero porque a esperança é vertente do amor,\numa virtude de quem ama sem olhar as adversidades.\nPorque o amor é tudo que eu tenho a te oferecer.\nTodos os dias, com a sinceridade que te estima.\nEu não enxergo a distância,\nminimizo o tempo — só pra estar com você.",
    "Eu quero estar perto, de corpo colado, bem grudado. Quero sentir a sua pele em contato com a minha, suas mãos entrelaçadas nas minhas e o seu cheiro. Eu quero tudo isso e mais um pouco. Com você, eu topo tudo, até mesmo ficar no seu abraço, sem dizer uma palavra, só sentindo os nossos corações batendo no mesmo compasso.",
    "De algum modo,\nminha alma\nconhecia\na sua alma\nantes que\ntivéssemos tido\na chance\nde nos encontrar.\nFoi como voltar para casa\ndepois de um dia muito, muito longo.",
    "Você coube direitinho nas músicas, nos versos, nos detalhes, nos filmes, nos textos, nas frases, nos sonhos, nos planos, nos lugares e no meu coração.",
    "Eu e você não fomos feitos um pro outro. Nós dois fomos feitos de pó de estrelas e fragmentos do sol. Mesmo que não sejamos para todo o sempre, ainda haverá sua luz em mim e meu brilho em você.",
    "Você significa tanto para mim\nque às vezes não sei como lidar com isso.\nQuero te cuidar e te prender em meus braços\ncomo se o mundo ainda não estivesse preparado\npara merecer alguém como você.",
    "Eu te amo de um jeito totalmente inexplicável e maravilhoso.\nEu te amo porque o meu coração chega a bater mais forte só de pensar em te abraçar.\nEu te amo porque você virou o meu lar, a minha morada, e faz parte da minha vida.\nEu te amo porque eu não quero mais nada além de você.\nEu te amo porque eu te amo, e o que eu sinto não precisa de explicação.\nEu te amo sem explicações, sem perguntas, e só com amor.\nEu te amo tanto, que a única coisa que sei é: eu te amo."

];

const cardsData = Array.from({ length: 27 }, (_, i) => ({
    id: i + 1,
    image: `images/card${i + 1}.png`,
    letter: letters[i] || `Carta número ${i + 1}`  // fallback se não tiver texto no array
}));



// Function to show a specific screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Function to generate cards
function generateCards() {
    const cardsContainer = document.querySelector('.cards-container');
    // escrever carta [i+1] no card
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
           
            <div class="card-number">Carta ${card.id}</div>
        `;
        cardElement.addEventListener('click', () => showLetter(card));
        cardsContainer.appendChild(cardElement);
    });
}

// Function to show letter
function showLetter(card) {
    const letterContent = document.querySelector('.letter-content');
    letterContent.textContent = card.letter;
    showScreen('letter-screen');
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.getElementById('welcome-screen').classList.contains('active')) {
        showScreen('cards-screen');
    }
});

document.querySelector('.back-button').addEventListener('click', () => {
    showScreen('cards-screen');
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateCards();
    showScreen('welcome-screen');
}); 
