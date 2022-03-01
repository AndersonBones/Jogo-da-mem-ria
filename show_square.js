var squares = document.querySelectorAll(".square");

for(var i=0; i<squares.length; i++){
    squares[i].addEventListener('click',Set_square);
    
}

var players = [];
var flip_players = [];
var Flip = true;
var Equal = false;
var equal_total = 0;

function Set_square(){


    if(players.indexOf(this) == -1 && flip_players.indexOf(this) == -1){
        
        if(this.style.transform == 'rotateY(180deg)'){
            flip_players.push(this);
        }
        
        if(Flip == true){
            players.push(this); // armazena os squares sem icones
        }
        
    }

    if(this.style.transform != 'rotateY(180deg)'){
        Show_square(players); // mostra os icones dos squares
    }


    if(players.length == 2){ // armazena apenas dois squares por vez
        players = [];
    }
    
}

function Show_square(players){


    if(Flip == true){ // se o icone do square atual estiver escondido
        players[players.length-1].style.transform = 'rotateY(180deg)'; // mostra o icone do square
    }
    
    if(players.length == 2){ 
        Check_equality(players); // checa a igualdade de cada par de squares
    }

    if(players.length > 1){
        if(players[1].style.transform == 'rotateY(180deg)'){
            Hide_square(players) // Esconde os icones dos dois squares
        }
    }
}


function Hide_square(players){
    Flip = false 

    setTimeout(()=>{

        if(Equal == false){ // volta a esconder os icones dos dois squares se ambos não forem iguais.
            players[0].style.transform = 'none';
            players[1].style.transform = 'none';
        }
        
        if(players[0].style.transform == 'none' && players[1].style.transform == 'none' || Equal == true){ // caso os icones dos dois squares estiverem escondidos
                                                                                                           // ou forem iguais
            Flip = true; // permite mostar mais dois squares
        }
    }, 1000)

    
}


function Check_equality(players){
    let player1 = players[0];
    let player2 = players[1];

    if(player1.children[1].classList.value == player2.children[1].classList.value){ // se os icones dos dois squares forem iguais
        Equal = true;
        equal_total+=1;
    }


    else{
        Equal = false;
    }

    Game_over(equal_total); // game over
}


function Game_over(total){

    if(total == 10){
        var game_over = document.querySelector('.game_over');

        setTimeout(()=>{
            game_over.style.animation = 'showMSG .3s both'; // Abre a tela de Game Over
        }, 1000)
        
    }
}
