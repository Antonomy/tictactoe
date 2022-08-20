let squares = document.querySelectorAll('.square')
let player = ''
//Checks for Winner
function checkForWinner(){
    let winCondition =[
        [squares[0],squares[1],squares[2]],
        [squares[3],squares[4],squares[5]],
        [squares[6],squares[7],squares[8]],
        [squares[0],squares[3],squares[6]],
        [squares[1],squares[4],squares[7]],
        [squares[2],squares[5],squares[8]],
        [squares[0],squares[4],squares[8]],
        [squares[2],squares[4],squares[6]]
    ]
    for (let i=0; i<winCondition.length; i++){
        if (winCondition[i][0].textContent === 'X' && winCondition[i][1].textContent === 'X' && winCondition[i][2].textContent === 'X'){
            document.querySelector('#scoreboard').textContent ='X is the Winner'
        } else if (winCondition[i][0].textContent === 'O' && winCondition[i][1].textContent === 'O' && winCondition[i][2].textContent === 'O'){
            document.querySelector('#scoreboard').textContent ='O is the Winner'
        }
    }
}

//Takes inputs for player selections
squares.forEach(element => {
    element.addEventListener('click', function() {
//Checks if Starting Player has been selected
        if (player !== 'X' && player !== 'O'){
            alert("Select starting player!")
            return
        }else {
//Checks if box has already been seelected
            if (element.textContent === 'X' ||element.textContent === 'O'){
                return
            } else {
//Makes player selection, checks for winner, continues to other players turn
                if (player === 'X'){
                    element.textContent = 'X'
                    element.classList.add('xMarker')
                    checkForWinner()
                    player = 'O'
                }else {
                    element.textContent = 'O'
                    element.classList.add('yMarker')
                    checkForWinner()
                    player = 'X'
                }
            }
        }
    })
})

//X Starts Button
function xStarts() {
    player = 'X'
    clearBoard()
}
//O Starts Button
function oStarts() {
    player = 'O'
    clearBoard()
}

//Clear Board Button Function
function clearBoard() {
    squares.forEach(element => {
        element.textContent = ''
        element.classList.remove('xMarker')
        element.classList.remove('yMarker')
        document.querySelector('#scoreboard').textContent =''
    })
}

