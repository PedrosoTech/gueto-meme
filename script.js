// Variáveis e constantes em português
const imagemPrincipal = document.getElementById('imagemPrincipal');
const botaoRisada = document.getElementById('botaoRisada');
const contadorRisadas = document.getElementById('contadorRisadas');

let numeroDeRisadas = 0;
let rotacaoAtual = 0;

// Função para girar a imagem aleatoriamente
function girarImagemAleatoria() {
    const anguloAleatorio = Math.random() * 360;
    rotacaoAtual += anguloAleatorio;
    imagemPrincipal.style.transform = `rotate(${rotacaoAtual}deg)`;
}

// Função para adicionar risadas
function adicionarRisada() {
    numeroDeRisadas++;
    contadorRisadas.textContent = numeroDeRisadas;
    
    if (numeroDeRisadas % 10 === 0) {
        girarImagemAleatoria();
    }
}

// Eventos
botaoRisada.addEventListener('click', adicionarRisada);
imagemPrincipal.addEventListener('click', girarImagemAleatoria);

// Easter egg
const frasesMeme = [
    'STONKS!',
    'Não era o Dollynho...',
    'Mais perdido que cego em tiroteio',
    'Só que não!',
    'Confused Stonks'
];

imagemPrincipal.addEventListener('dblclick', () => {
    const fraseAleatoria = frasesMeme[Math.floor(Math.random() * frasesMeme.length)];
    alert(fraseAleatoria);
});
