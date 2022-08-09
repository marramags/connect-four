// alert('hey there');

// constants
const winCombos = [
    // <!-- COLUMN 0 -->
    [[0,0],[0,1], [0,2], [0,3]],
    [[0,1],[0,2], [0,3], [0,4]],
    [[0,2],[0,3], [0,4], [0,5]],
    // <!-- COLUMN 1 -->
    [[1,0],[1,1], [1,2], [1,3]],
    [[1,1],[1,2], [1,3], [1,4]],
    [[1,2],[1,3], [1,4], [1,5]],
    //    <!-- COLUMN 2 -->
    [[2,0],[2,1], [2,2], [2,3]],
    [[2,1],[2,2], [2,3], [2,4]],
    [[2,2],[2,3], [2,4], [2,5]],
    //    <!-- COLUMN 3 -->
    [[3,0],[3,1], [3,2], [3,3]],
    [[3,1],[3,2], [3,3], [3,4]],
    [[3,2],[3,3], [3,4], [3,5]],
    //    <!-- COLUMN 4 -->
    [[4,0],[4,1], [4,2], [4,3]],
    [[4,1],[4,2], [4,3], [4,4]],
    [[4,2],[4,3], [4,4], [4,5]],
    //    <!-- COLUMN 5 -->
    [[5,0],[5,1], [5,2], [5,3]],
    [[5,1],[5,2], [5,3], [5,4]],
    [[5,2],[5,3], [5,4], [5,5]],
        // <!-- COLUMN 6 -->
    [[6,0],[6,1], [6,2], [6,3]],
    [[6,1],[6,2], [6,3], [6,4]],
    [[6,2],[6,3], [6,4], [6,5]],
    
    // <!-- ROW 0 -->
    [[0,0], [0,1], [0,2], [0,3]],
    [[0,1], [0,2], [0,3], [0,4]],
    [[0,2], [0,3], [0,4], [0,5]], 
    [[0,3], [0,4], [0,5], [0,6]], 
    //  <!-- ROW 1 -->
    [[1,0], [1,1], [1,2], [1,3]],
    [[1,1], [1,2], [1,3], [1,4]],
    [[1,2], [1,3], [1,4], [1,5]], 
    [[1,3], [1,4], [1,5], [1,6]], 
    //  <!-- ROW 2 -->
    [[2,0], [2,1], [2,2],[2,3]],
    [[2,1], [2,2], [2,3],[2,4]],
    [[2,2], [2,3], [2,4],[2,5]], 
    [[2,3], [2,4],[ 2,5],[2,6]], 
    //  <!-- ROW 3 -->
    [[3,0], [3,1], [3,2], [3,3]],
    [[3,1], [3,2], [3,3], [3,4]],
    [[3,2], [3,3], [3,4], [3,5]], 
    [[3,3], [3,4], [3,5], [3,6]], 
    //  <!-- ROW 4 -->
    [[4,0], [4,1], [4,2], [4,3]],
    [[4,1], [4,2], [4,3], [4,4]],
    [[4,2], [4,3], [4,4], [4,5]], 
    [[4,3], [4,4], [4,5], [4,6]], 

    // <!-- Diagonal Left to Right && Bottom to Top -->
    [[0,2], [1,3], [2,4], [3,5]],
    [[0,1], [1,2], [2,3], [3,4]],
    [[1,2], [2,3], [3,4], [4,5]],
    [[0,0], [1,1], [2,2], [3,3]],
    [[1,1], [2,2], [3,3], [4,4]],
    [[2,2], [3,3], [4,4], [5,5]], 
    [[1,0], [2,1], [3,2], [4,3]], 
    [[2,1], [3,2], [4,3], [5,4]],
    [[3,2], [4,3], [5,4], [6,5]],
    [[2,0], [3,1], [4,2], [5,3]],
    [[3,1], [4,2], [5,3], [6,4]],
    [[3,0], [4,1], [5,2], [6,3]],

    // <!-- Diagonal Left to Right && Top to Bottom-->
    [[0,3], [1,2], [2,1], [3,0]],
    [[0,4], [1,3], [2,2], [3,1]],
    [[1,3], [2,2], [3,1], [4,0]],
    [[0,5], [1,4], [2,3], [3,2]],
    [[1,4], [2,3], [3,2], [4,1]],
    [[2,3], [3,2], [4,1], [5,0]], 
    [[1,5], [2,4], [3,3], [4,2]], 
    [[2,4], [3,3], [4,2], [5,1]],
    [[3,3], [4,2], [5,1], [6,0]],
    [[2,5], [3,4], [4,3], [5,2]],
    [[3,4], [4,3], [5,2], [6,1]],
    [[3,4], [4,4], [5,3], [6,2]],

]

let testColumn = [5, 5, 5, 5, 5, 5, 5]

// column 0 array
const column0 = [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]]
const column1 = [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]]

// Boardgame array layout
let gameBoardArr = [
    [[0,0],[0,1],[0,2],[0,3],[0,4],[0,5]],
    [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5]],
    [[2,0],[2,1],[2,2],[2,3],[2,4],[2,5]],
    [[3,0],[3,1],[3,2],[3,3],[3,4],[3,5]],
    [[4,0],[4,1],[4,2],[4,3],[4,4],[4,5]],
    [[5,0],[5,1],[5,2],[5,3],[5,4],[5,5]],
    [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5]],
    ]

// let gameBoard = [
//     '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '',
//     '', '', '', '', '', '', '',
// ]

let gameBoard;

let player1 = [];
let player2 = [];
let currentPlayer = player1;

let winner;
let turns;

// event listeners
let message = document.querySelector('.message');
const pointers = document.querySelectorAll('.pointers');
const pointer0 = document.querySelector('.pointer-0');
const pointer1 = document.querySelector('.pointer-1');
const pointer2 = document.querySelector('.pointer-2');
const pointer3 = document.querySelector('.pointer-3');
const pointer4 = document.querySelector('.pointer-4');
const pointer5 = document.querySelector('.pointer-5');
const pointer6 = document.querySelector('.pointer-6');
const allCircles = document.querySelectorAll('.all-circles');
const restBtn = document.querySelector('.restart')

// allCircles.setAttribute('style','background-color: red');

// for (i =0 ; i < allCircles.length; i++) {
//     allCircles[i].addEventListener('click', (e) => {
//         console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
//     })
// }

// for (i =0 ; i < allCircles.length; i++) {
//     allCircles[i].addEventListener('click', (e) => {
//         console.log(`${e.target.parentElement.rowIndex},${e.target.cellIndex}`)
//     })
// }

// adding eventlisteners
pointer0.addEventListener('click', pointer0Click);
pointer1.addEventListener('click', pointer1Click);
pointer2.addEventListener('click', pointer2Click);
pointer3.addEventListener('click', pointer3Click);
pointer4.addEventListener('click', pointer4Click);
pointer5.addEventListener('click', pointer5Click);


function pointer0Click (currentColor) {
    gameBoardArr[0].reverse()
    for (let i = 0; i<gameBoardArr[0].length; i++) {
        // if(gameBoardArr - 1 )
        // console.log(gameBoardArr[0][i]);
        let circleColor = currentColor.style;
        pointer0.addEventListener('click', function (){ 
            if (gameBoardArr[0] === circleColor.backgroundColor !== 'red'){
                // allCircles.setAttribute('style', 'background-color: red;')
                circleColor.backgroundColor = 'red';
        };
    
        
        // if (gameBoardArr[0][i])
        
        })
    }
}
// function pointer0Click () {
//     gameBoardArr[0].reverse()
//     for (let i = 0; i<gameBoardArr[0].length; i++) {
//         if (gameBoardArr[0][i] === ) {
            
//         }

//         // let testing = gameBoardArr[0][i]
//         // console.log(gameBoardArr[0][i]);
//         // testing.reverse()
//         // console.log(testing);
//     }
// }

function pointer1Click () {
    gameBoardArr[1].reverse()
    for (let i = 0; i<gameBoardArr[1].length; i++) {
        console.log(gameBoardArr[1][i]);
    }
}


for (let i =0 ; i < allCircles.length; i++) {
    allCircles[i].addEventListener('click', (e) => {
        console.log(e.target)
    })
}


startGame();

function startGame() {
    let gameBoard = [
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
    ]
    player1 = [];
    player2 = [];
    winner = null;
    let turns = player1;
    currentPlayer = true;
    const pointers = document.querySelectorAll('.pointers');
    const pointer0 = document.querySelector('.pointer-0');

}

allCircles.addEventListener('click', playerMoves);

// pointer0.addEventListener('click', playerMoves);
// pointer1.addEventListener('click', playerMoves);


function playGame() {
    
}

//when a player clicks on a pointer, the last row in the coloumn will change color based on the player 
function playerMoves() { 

}

function playerTurns() {
    if (currentPlayer === true) {
        this.style.backgroundColor = red;
    } else {
        this.style.backgroundColor = yellow;
    }
    currentPlayer = !currentPlayer
    playGame();
}


function restartGame() {

}