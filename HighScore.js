var contentContainerEl = document.querySelector('.content');


var highscoresBoard = document.querySelector("#highscoresBoard");
var scoreBoard = document.querySelector("#scoreBoard");

// Set scoreArray to render High Score
var scoreArray = renderHighscore();



// render HighScore 
function renderHighscore() {

    var scoreArray = JSON.parse(localStorage.getItem("HighScore")) || [];
    console.log(scoreArray);

   for (var i = 0; i < scoreArray.length; i++) {

       var highScoresList = document.createElement("li");

       highScoresList.textContent = scoreArray[i].user + scoreArray[i].score;

       scoreBoard.append(highScoresList);
   }
};

// Add function to clear HighScore
var clearHighscoresButton = document.querySelector('clearHighscore')