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
            players.push(this);
        }
        
    }

    if(this.style.transform != 'rotateY(180deg)'){
        Show_square(players);        
    }


    if(players.length == 2){
        players = [];
    }
    
}

function Show_square(players){


    if(Flip == true){
        players[players.length-1].style.transform = 'rotateY(180deg)';
    }
    
    if(players.length == 2){
        Check_equality(players);
    }

    if(players.length > 1){
        if(players[1].style.transform == 'rotateY(180deg)'){
            Hide_square(players)
        }
    }
}


function Hide_square(players){
    Flip = false 

    setTimeout(()=>{

        if(Equal == false){
            players[0].style.transform = 'none';
            players[1].style.transform = 'none';
        }
        
        if(players[0].style.transform == 'none' && players[1].style.transform == 'none' || Equal == true){
            Flip = true;    
        }
    }, 1000)

    
}


function Check_equality(players){
    let player1 = players[0];
    let player2 = players[1];

    if(player1.children[1].classList.value == player2.children[1].classList.value){
        Equal = true;
        equal_total+=1;
    }


    else{
        Equal = false;
    }

    Game_over(equal_total);
}


function Game_over(total){

    if(total == 10){
        var game_over = document.querySelector('.game_over');

        setTimeout(()=>{
            game_over.style.animation = 'showMSG .3s both';
        }, 1000)
        
    }
}
