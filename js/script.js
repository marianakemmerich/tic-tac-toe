let x = document.querySelector('.x')
let o = document.querySelector('.o')
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer

// count moves from each player:
let player1 = 0
let player2 = 0

for(let i = 0; i < boxes.length; i++){
    boxes[i].addEventListener('click', function() {
        let el = checkEl(player1, player2)

        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true)
            this.appendChild(cloneEl)

            if(player1 == player2) {
                player1++

                if(secondPlayer == 'ai-player') {
                    computerPlay()
                    player2++
                }
            } else {
                player2++
            }

            checkWinCondition()
        }
    })
}

// click events
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {        
        secondPlayer = this.getAttribute("id")

        // hide buttons
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none'
        }

        setTimeout(function() {
            let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 200)
    })
}

function checkEl(player1, player2) {
    if(player1 == player2) {
        el = x
    } else {
        el = o
    }

    return el
}

function checkWinCondition() {
    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')

    // horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declareWinner('x')
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declareWinner('o')
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declareWinner('x')
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declareWinner('o')
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    // vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declareWinner('o')
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declareWinner('x')
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declareWinner('o')
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }


    // diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declareWinner('x')
        } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declareWinner('o')
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declareWinner('x')
        } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declareWinner('o')
        }
    }

    let counter = 0

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if(counter == 9) {
        declareWinner('Game tied! No one wins.')
    }
}

function declareWinner(winner) {
    let scoreboardX = document.querySelector('#scoreboard-1')
    let scoreboardO = document.querySelector('#scoreboard-2')
    let msg = ''

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'Congratulations, Player 1! You win!'
    } else if(winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1
        msg = 'Congratulations, Player 2! You win!'
    } else {
        msg = 'Game tied! No one wins.'
    }

    // displays message on the screen
    messageText.innerHTML = msg
    messageContainer.classList.remove('hide')

    // hides message
    setTimeout(function() {
        messageContainer.classList.add('hide')
    }, 3000)

    // resets scoreboard
    player1 = 0
    player2 = 0

    // removes x's and o's
    let boxesToRemove = document.querySelectorAll('.box div')
    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }
}

// logic for ai player
function computerPlay() {
    let cloneO = o.cloneNode(true)
    counter = 0
    filled = 0

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5)

        // fill the boxes only if they're empty
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO)
                counter++
                break
            }

            // check which boxes are filled
        }else {
            filled++
        }
    }

    if(counter == 0 && filled < 9) {
        computerPlay()
    }
}