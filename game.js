/*
    ####################    Ligando os níveis de dificuldade    ####################
*/
var createTime = 1500
var level = window.location.search
level = level.replace('?', '')

if(level === 'easy'){
    createTime = 1500
}else if(level === 'normal'){
    createTime = 1000
}else if(level === 'hard'){
    createTime = 750
}else{
    createTime = 500
}

/* 
####################    Definindo palco do jogo    ####################
*/
var height = 0
var width = 0


function setArea(){
    height = window.innerHeight
    width = window.innerWidth
    console.log(width, height)
}

setArea();

/* 
####################    Criando cronômetro    ####################
*/
var time = 10
var timer = setInterval(function(){
    time -= 1
    if(time<0){
        clearInterval(timer)
        clearInterval(createMosquito)
        window.location.href = 'win_game.html'
    }else{
        document.getElementById('timer').innerHTML = time
    }
}, 1000)

/* 
####################    Gerando posições aleatórias para o mosquito nascer    ####################
*/
var lifes = 1
function randomPosition(){

     //removendo mosquito (caso exista)
     if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //controlando vidas
        if(lifes>3){
            window.location.href = 'end_game.html'
        }else{
            document.getElementById('l' + lifes).src = '/imagens/coracao_vazio.png'
            lifes++
        }
        
    }

    var positionX = Math.floor(Math.random() * width) - 90;
    var positionY = Math.floor(Math.random() * height) - 90;

    //controle de posição
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //criando elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide();
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

/* 
####################    Deixando os mosquitos com tamanhos aleatórios    ####################
*/
function randomSize(){
    var rank = Math.floor(Math.random() * 3);

    switch(rank){
        case 0:
            return 'mosquito'
        case 1:
            return 'mediumMosquito'
        case 2:
            return 'bigMosquito'
    }   
}

/* 
####################    Alterando direção do mosquito    ####################
*/
function randomSide(){
    var rank = Math.floor(Math.random() * 2);

    switch(rank){
        case 0:
            return 'rightSide'
        case 1:
            return 'leftSide'
    }   
}

