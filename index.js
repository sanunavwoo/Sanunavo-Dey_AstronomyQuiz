var readLineSync = require("readline-sync");

//High Scores 
var highScores =
  [
    {
      name: "Sanu",
      score: "10"
    },
    {
      name: "Rajesh Koothrapali",
      score: "11"
    },
    {
      name: "Neil Degrasse Tyson",
      score: "∞"
    }

  ];
// Questions
var quizQuestions =
  [
    {
      question: "Which planet in the Solar System is furthest from the Sun?",
      answer: "neptune"
    },
    {
      question: "Which planet is known for its distinctive red spot caused by an anti-cyclone?",
      answer: "jupiter"
    },
    {
      question: "A light year is the distance travelled by light in how many Earth years?(in number)",
      answer: "1"
    },
    {
      question: "Saturn is the planet with the most moons in the Solar System. How many moons does it have?(in number)",
      answer: "82"
    },
    {
      question: "Which of the following planets is known as Earth’s twin?",
      answer: "venus"
    },
    {
      question: "Comets revolve around ________",
      answer: "sun"
    },
    {
      question: "Which star is at the center of our Solar System? ",
      answer: "sun"
    },
    {
      question: "What percent of the solar system’s mass does Sun holds?(in decimal number)",
      answer: "99.8"
    },
    {
      question: "How much time does sun rays take to reach earth?(in number)",
      answer: "8"
    },
    {
      question: "Which planet is known as the Morning Star or the Evening Star?",
      answer: "venus"
    },
    {
      question: "Rotational axis of which of the following planet is highly tilted?",
      answer: "uranus"
    }

  ];

//Function to welcome
function welcome() {
  var userName = readLineSync.question("Hey there! What's your name?- ");
  console.log("\nHi " + userName + ". Let's take a small stroll through this grand universe..\n");
}


//Function to ask questions and calculate score
function gameOfAstros() {
  var yourScore = 0;
  for (var i = 0; i < quizQuestions.length; i++) {
    var userAnswer = readLineSync.question(quizQuestions[i].question);

    if (userAnswer.toLowerCase() === quizQuestions[i].answer) {
      yourScore += 1;
      console.log("\nThat is correct!!");
      console.log("\nYour current score: " + yourScore);
    }
    else {
      console.log("\nOops! You need to spend some more time with the night sky\n");
    }

  }
  console.log("\nYour final score- " + yourScore);
  console.log("====================================");
}


//Function to display high scores
function displayHighScores() {
  console.log("\nAll time highs\n");
  for (var hs = 0; hs < highScores.length; hs++) {
    console.log("Name: " + highScores[hs].name + "\nScore: " + highScores[hs].score);
  }
}

welcome();
gameOfAstros();
displayHighScores();
