// importing
var readlineSync = require("readline-sync");

var score = 0; //assigning score

var questionOne = ("Is VINEETH older than 20? ");
var answerOne = ("yes");  

var userName = readlineSync.question("Your NAME please!! "); //input

console.log("welcome " + userName);//output


console.log("----------------------------")


// Now we will see two questions in a function
function play (question , answer) {
  
  // input
  var userAnswer = readlineSync.question(question);
  console.log( "your answered " + userAnswer);

  // processing

  if (userAnswer === answer) {

    // output

    console.log("You are right!!");
    score = score+1;
    console.log("Your score is " , score);
  }
  else {

    // output

    console.log("you are wrong");
    score = score-1;
    console.log("Your score is " , score);
  }

}

// calling function
play (questionOne,answerOne);


console.log("----------------------------")


var questionTwo = ("where do VINEETH stay?  ");
var answerTwo = ("bellary");

play (questionTwo,answerTwo);

console.log("----------------------------")


var questionThree = ("which Bike do VINEETH use?  ");
var answerThree = ("avenger");

play (questionThree,answerThree);

