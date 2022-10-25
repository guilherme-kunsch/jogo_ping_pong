function setup() {
    createCanvas(1920, 980)
}


function draw() {
    background(0)
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    raquete(xRaquete, yRaquete);
    movimentaRaquete();
    colisaoRaquete();
    raqueteBordaSuperior();
    raqueteBordaInferior();
    raquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
}

//####################### PLACAR #######################
let meusPontos = 0;
let pontosOponente = 0;


function incluiPlacar() {
    stroke(255)
    textAlign(CENTER);
    textSize(20);
    fill(color(255, 69, 0)) //cor do retangulo 1
    rect(800, 10, 40, 20);
    fill(255); //cor dos numeros/placar 1
    text(meusPontos, 820, 26);
    fill(color(255, 69, 0)) //cor do retangulo 2
    rect(1050, 10, 40, 20);
    fill(255); //cor dos numeros/placar 2
    text(pontosOponente, 1070, 26)
}


//####################### MARCA PONTO #######################
function marcaPonto() {
    if(xBolinha > 1920){
        meusPontos =+ 1
    }
    if(xBolinha < 10){
        pontosOponente += 1
    }
}

//####################### BOLINHA #######################

//variáveis da bolinha, onde vai iniciar o jogo
let xBolinha = 960;
let yBolinha = 490;
let diametro = 15;

//Fazendo com que a bolinha não considere o valor x como o centro do raio.Raio = diamentro/2
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 10;
let velocidadeYBolinha = 10;

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
    if(xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha  *= -1;
    }
    if(yBolinha  + raio > height || yBolinha - raio < 0){
        velocidadeYBolinha *= -1;
    }
}

//####################### RAQUETE ESQUERDA #######################

//variáveis raquete
let xRaquete = 2;
let yRaquete = 450;
let comprimento = 10;
let altura = 90;

//Criando a função para criar a raquete da esquerda
function raquete(x, y) {
    rect(x, y, comprimento, altura)
}

function raqueteBordaSuperior() {
    return windowHeight > 0
}

function raqueteBordaInferior() {
    return yRaquete + altura < height
}

//Criando a função para mover a raquete no lado esquerdo
function movimentaRaquete() {
    if(keyIsDown(87)) {
        yRaquete -= 10;
    }

    if(keyIsDown(83)){
        yRaquete += 10;
    }
}

function colisaoRaquete() {
    if((xBolinha - raio) < (xRaquete + comprimento) && (yBolinha - raio) < (yRaquete + altura) && (yBolinha + raio) > yRaquete) {
        velocidadeXBolinha *= -1;
    }
}

//####################### RAQUETE DIREITA #######################

//Criando a variável para assumir a posição da raquete direita
let xRaqueteOponente = 1910
let yRaqueteOponente = 450
let velocidadeYOponente;


function movimentaRaqueteOponente() {
    if(keyIsDown(UP_ARROW)) {
        yRaqueteOponente -= 10;
    }

    if(keyIsDown(DOWN_ARROW)){
        yRaqueteOponente += 10;
    }
}

