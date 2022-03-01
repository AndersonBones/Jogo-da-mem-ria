// CRIA A TELA DE GAME OVER

var game_over_container = document.createElement('div');
game_over_container.classList.add('game_over');

var game_over_msg = document.createElement('h2');
game_over_msg.innerText = 'Parabéns, você conseguiu completar o jogo:'
var restart_btn = document.createElement('button');
restart_btn.innerText = 'Reiniciar';

game_over_container.appendChild(game_over_msg);
game_over_container.appendChild(restart_btn);
document.body.appendChild(game_over_container);


function Restart_Animation(){ // Fecha a tela de Game Over
    game_over_container.style.animation = 'hideMSG .3s both'
    equal_total = 0;
    Restart_Game();
}
restart_btn.addEventListener('click',Restart_Animation);

function Restart_Game(){ // Reinicia os squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.transform = 'none';
    
        if(squares[i].hasChildNodes()) {
            squares[i].removeChild(squares[i].children[1]);
        }
       
    }
    
    setTimeout(()=>{
        Shuffle();
    }, 1000)
    
   
}
