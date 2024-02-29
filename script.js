let textbox=document.querySelector("#text");
let submitbtn=document.querySelector("#submit");
let guesses=document.querySelector("#guesses");
let remaining=document.querySelector("#remaining");
let result=document.querySelector("#result");
let newbtn=document.querySelector("#newgame");

let random=parseInt(Math.random()*1000+1)
let remain=10

let runGame=true

if(runGame){
    submitbtn.addEventListener("click",function(e){
        e.preventDefault();
        let guess=parseInt(textbox.value)
        textbox.value=''
        validateGuess(guess)
        checkGuess(guess)
        if(remain===0){
            endGame();

        }
    })
}

function validateGuess(guess){
    if(guess<1 || guess>1000 || isNaN(guess)){
        alert("Enter valid Number.")
    }
    else{
        displayGuesses(guess)
    }
}

function displayGuesses(guess){
    guesses.textContent+=`${guess},`
    remaining.textContent=`${--remain}`
}

function checkGuess(guess){
    if(guess===random){
        displayMessage("You have guessed right number.")
        textbox.setAttribute("disabled","")
        submitbtn.setAttribute("disabled","")
    }else if(guess<random){
        displayMessage("Number is too Less")
    }else{
        displayMessage("Number is too Big")
    }
}

function displayMessage(messege){
    result.textContent=messege;
}

function endGame(){
    textbox.removeAttribute("disabled","")
    submitbtn.removeAttribute("disabled","")
    remain=10;
    remaining.innerHTML=''
    guesses.innerHTML=''
    textbox.value=''
    runGame=false
    displayMessage(`You loose the game, and random was ${random}.`)
    random=parseInt(Math.random()*1000+1)
}

function newGame(){
    random=parseInt(Math.random()*1000+1)
    endGame();
    displayMessage("New Game Started.")
    runGame=true
}

newbtn.addEventListener("click",function(){
    newGame();
})