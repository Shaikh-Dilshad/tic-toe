let music = new Audio("music.mp3")
let music2 = new Audio("ting.mp3")
let music3 = new Audio("gameover.mp3")
let gameover = false;
let turn = "X"
let reset = document.getElementById("reset")
let changeturn = () => {
    return turn === "X" ? "O" : "X"
}
let checkmate = () => {
    let boxtexts = document.getElementsByClassName('text')
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]
    win.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[
            1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + ": won "
            gameover= true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.opacity = '1';
            document.querySelector('.info').style.margin = '0px 0px 0px 62px'
        }
    })
}
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".text")
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeturn()
            music2.play()
            checkmate()
            if (!gameover) {
                document.getElementsByClassName('info')[0].innerText = 'your turn here:' + turn

            }
        }
    })
})
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.text');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameover = false
    document.getElementsByClassName('info')[0].innerText = 'your turn here:' + turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.opacity = '0';


})
