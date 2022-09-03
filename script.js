


//  Gameboard
function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

let board = createArray(2,3)


// Game 
const game = (() => {
    'use strict';

    return {
         play: function(p1, p2, gameBoard) {
            let turn = 1
                while (turn < 3){
                let posX = prompt("array position 1")
                let posY = prompt("arrayPos2")
                gameBoard[posX,posY] = p1.placeMark();
                turn ++
                return(gameBoard);
            }
            
        }  
    };
})();


// create players
const playerFactory = (playerNumber) => {
    const placeMark = () => {
    if(playerNumber == 1)
        return 'X'
    if(playerNumber == 2)
        return 'O'
    }
    return { playerNumber, placeMark};
};

const player1 = playerFactory(1)
const player2 = playerFactory(2)
console.log(game.play(player1, player2, board)[1,2])
for (let i = 0; i<3; i++)
    for (let j = 0; j<3; j++)
    console.log(game.play(player1, player2, board)[i,j])