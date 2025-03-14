let userScore = 0 ;
let compScore = 0 ;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const newbtn = document.querySelector(".new-btn");

const newGame = () => {
    userScore = 0;
    userscorepara.innerText = userScore;
    compScore = 0;
    compscorepara.innerText = compScore;
}

newbtn.addEventListener("click", () => {
    
    // console.log("newbtn was clicked")
    newGame();
})

const genCompChoice = () => {
    const option =["rock" , "paper" , "scissors"];
    const randIdx =Math.floor(Math.random() * 3);
    return option[randIdx];
}

const draw = () => {
    // console.log("It's a draw");
    msg.innerText = "It's a draw , Play again !";
        msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin ,userChoice,compChoice)=> {
    if(userWin)
    {
        // console.log("you win !");
        userScore++ ;
        userscorepara.innerText = userScore;
        msg.innerText = `you win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("you lose !");
        compScore++ ;
        compscorepara.innerText = compScore;
        msg.innerText = `you lost !  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = " , userChoice);
    //generate computer choice 
    const compChoice = genCompChoice();
    // console.log("comp choice = " , compChoice);

    if(userChoice === compChoice)
    {
        //Draw
        draw();
    }
    else{
        userWin = true;
        if(userChoice === "rock"){
            //paper , scissors
           userWin =  compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            //rock , scissors
           userWin =  compChoice === "scissors" ? false : true ;
        }
        else {
            //rock , paper
           userWin =  compChoice === "rock" ? false : true ;
        }
        showWinner(userWin , userChoice ,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked" ,userChoice )
        playGame(userChoice);
    })
})