console.log("welcome biii");

let music = new Audio("ting.mp3");
let audioturn = new Audio("tang.mp3");
let gameover = new Audio("till.mp3");

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) &&
            boxtexts[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Wins!";
            document.querySelector('.imgbox img').style.display = "block";
            gameover.play();
        }
    });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (document.querySelector('.info').innerText.includes("Wins!") === false) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.imgbox img').style.display = "none";
});
