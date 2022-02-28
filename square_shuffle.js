var square_list = document.querySelectorAll("button");
var square_icons = ['<i class="devicon-css3-plain-wordmark colored"></i>', 
                     '<i class="devicon-electron-original colored"></i>',
                     '<i class="devicon-javascript-plain colored"></i>',
                     '<i class="devicon-html5-plain-wordmark colored"></i>',
                     '<i class="devicon-firebase-plain colored"></i>',
                     '<i class="devicon-mongodb-plain-wordmark colored"></i>',
                     '<i class="devicon-bootstrap-plain colored"></i>',
                     '<i class="devicon-react-original colored"></i>',
                     '<i class="devicon-nodejs-plain colored"></i>',
                     '<i class="devicon-jquery-plain-wordmark colored"></i>'];



function Sort_icons(){ // sorteia uma lista de numeros aleatórios que representa as posições dos icones na lista "square_icons"
    let icons_position_list = [];

    while(icons_position_list.length < 10){
        let sort_value = Math.floor(Math.random() * 10);
        
        if(icons_position_list.indexOf(sort_value) == -1){
            icons_position_list.push(sort_value);
        }
    }   

    return icons_position_list;

}

function Sort_squares(){ // sorteia uma lista de numeros aleatórios que representa as posições das peças no lista tabuleiro
    let squares_position_list = [];

    while(squares_position_list.length < 10){
        let sort_value = Math.floor(Math.random() * 20);
        
        if(squares_position_list.indexOf(sort_value) == -1){
            squares_position_list.push(sort_value);
        }
    }

    return squares_position_list;
}


function Shuffle(){
    let icons_list = Sort_icons();
    let squares = Sort_squares();
    
    Set_squares(icons_list, squares); // define o icone das peças do tabuleiro
    
}

onload = Shuffle();

function Set_squares(icons, squares){

    //  define os icones das peças
    for(var i=0; i<10; i++){
        square_list[squares[i]].innerHTML += square_icons[icons[i]];
    }

    let empty_squares = []; // armazena as peças sem icones

    for(var square of square_list){
        if(square.children.length <= 1){ // caso alguma peça não tenha icone
             empty_squares.push(square);
        }
    }   

    let icons2 = [...Sort_icons()];// sorteia uma nova lista de numeros aleatórios que representa as posições dos icones na lista "square_icons"

    // define os icones das peças que ainda estão sem icones
    for(var i=0; i<10; i++){
        empty_squares[i].innerHTML += square_icons[icons2[i]]
    }
    
}

