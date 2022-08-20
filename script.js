let squares = document.querySelectorAll('.square')
let player = ''
let xScore = 0
let oScore = 0
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
//Checks if there has already been a winner
        if (document.querySelector('#winnerAnnouncement').textContent ==='X is the Winner' || document.querySelector('#winnerAnnouncement').textContent ==='O is the Winner'){
            return
//Checks if X is the winner
        }else if (winCondition[i][0].textContent === 'X' && winCondition[i][1].textContent === 'X' && winCondition[i][2].textContent === 'X'){
            document.querySelector('#winnerAnnouncement').textContent ='X is the Winner'
            xScore++
            console.log(xScore)
            document.querySelector('#scoreboard').textContent = 'X:'+xScore + '  |-----Scoreboard-----|  O:' + oScore
//Checks if O is the winner
        } else if (winCondition[i][0].textContent === 'O' && winCondition[i][1].textContent === 'O' && winCondition[i][2].textContent === 'O'){
            document.querySelector('#winnerAnnouncement').textContent ='O is the Winner'
            oScore++
            document.querySelector('#scoreboard').textContent = 'X:'+xScore + '  |-----Scoreboard-----|  O:' + oScore
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
    clearBoard()
    player = 'X'
}
//O Starts Button
function oStarts() {
    clearBoard()
    player = 'O'
}

//Clear Board Button 
function clearBoard() {
    squares.forEach(element => {
        element.textContent = ''
        element.classList.remove('xMarker')
        element.classList.remove('yMarker')
        document.querySelector('#winnerAnnouncement').textContent =''
        player = ''
    })
}
//Clear Score Button 
function clearScore() {
    xScore = 0
    oScore = 0
    document.querySelector('#scoreboard').textContent = 'X:'+xScore + '  |-----Scoreboard-----|  O:' + oScore
    }

