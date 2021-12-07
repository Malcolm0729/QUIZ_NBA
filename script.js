// Create an object with the questions as array elements
var questions = [
    {
        question: "What team won the very first NBA Game?",
        multChoices: [
            "Chicago Stags",
            "Philadelphia Warriors",
            "Toronto Huskies",
            "New York Knicks"
        ],
        correct: "New York Knicks"
    },
    {
        question: "What NBA player scored 100 points on March 2, 1962?",
        multChoices: [
            "Wilt Chamberlain",
            "Kareem Abdul-Jabbar",
            "Bill Russell",
            "Elgin Baylor"
        ],
        correct: "Wilt Chamberlain"
    },
    {
        question: "Who was the youngest player to score 10,000 points in the NBA?",
        multChoices: [
            "LeBron James",
            "Kobe Bryant",
            "Michael Jordan",
            "Wilt Chamberlain"
        ],
        correct: "LeBron James"
    },
    {
        question: "What team owns the longest winning streak in NBA history",
        multChoices: [
            "Miami Heat",
            "Golden State Warriors",
            "Los Angeles Lakers",
            "Chicago Bulls"
        ],
        correct: "Los Angeles Lakers"
    },
    {
        question: "Who is the youngest player to record three triple-doubles?",
        multChoices: [
            "Luka Doncic",
            "Magic Johnson",
            "Michael Jordan",
            "LeBron James"
        ],
        correct: "Luka Doncic"
    },    
    {
        question: "Who was the first teenager in NBA history to score 20+ points in 10 consecutive games?",
        multChoices: [
            "Zion Williamson",
            "Kobe Bryant",
            "LeBron James",
            "Luka Doncic"
        ],
        correct: "Zion Williamson"
    },
    {
        question: "What player won All-Star Game MVP, NBA MVP, and NBA Finals MVP awards in 2000?",
        multChoices: [
            "Michael Jordan",
            "Kobe Bryant",
            "Tim Duncan",
            "Shaquille O'Neal"
        ],
        correct: "Shaquille O'Neal"
    },
    {
        question: "Who is the only player in NBA history to record more than 200 blocks and 200 steals in the same season?",
        multChoices: [
            "Scottie Pippen",
            "Julius Erving",
            "Hakeem Olajuwon",
            "Michael Jordan"
        ],
        correct: "Hakeem Olajuwon"
    },
    {
        question: "Against which team did the Indiana Pacers double their opponent's score?",
        multChoices: [
            "Oklahoma City Thunder",
            "Portland Trail Blazers",
            "Denver Nuggets",
            "Minnesota Timberwolves"
        ],
        correct: "Portland Trail Blazers"
    },
    {
        question: "Who was the first player in NBA history to make 400 three-pointers in a season?",
        multChoices: [
            "James Harden",
            "Stephen Curry",
            "Ray Allen",
            "Dennis Scott"
        ],
        correct: "Stephen Curry"
    },
    {
        question: "What NBA player has won the most league MVPs?",
        multChoices: [
            "Stephen Curry",
            "LeBron James",
            "Kareem Abdul-Jabbar",
            "Michael Jordan"
        ],
        correct: "Kareem Abdul-Jabbar"
    },
    {
        question: "What teammates were nicknamed the Splash Brothers?",
        multChoices: [
            "Michael Jordan & Scottie Pippen",
            "Stephen Curry & Klay Thompson",
            "Jerry West & Wilt Chamberlain",
            "Kevin Durant & Russell Westbrook"
        ],
        correct: "Stephen Curry & Klay Thompson"
    },
    {
        question: "How many points did LeBron James score in his first NBA game?",
        multChoices: [
            "25",
            "19",
            "36",
            "27"
        ],
        correct: "25"
    },
    {
        question: "Who was the shortest player in NBA history?",
        multChoices: [
            "Spud Webb",
            "Manute Bol",
            "Earl Boykins",
            "Muggsy Bouges"
        ],
        correct: "Muggsy Bouges"
    },
    {
        question: "Who is the NBA Championship trophy named after?",
        multChoices: [
            "Larry O'Brien",
            "Maurice Podoloff",
            "James Naismith",
            "Red Auerbach"
        ],
        correct: "Larry O'Brien"
    },
    {
        question: " Who has the most blocked shots in NBA history?",
        multChoices: [
            "Hakeem Olajuwon",
            "Mark Eaton",
            "Dikembe Mutombo",
            "Kareem Abdul-Jabbar"
        ],
        correct: "Hakeem Olajuwon"
    },
    {
        question: "What player holds the NBA record for most career assists?",
        multChoices: [
            "Jason Kidd",
            "Magic Johnson",
            "Steve Nash",
            "John Stockton"
        ],
        correct: "John Stockton"
    },
    {
        question: "Who was the first NBA player to record a triple-double in the All-Star Game?",
        multChoices: [
            "Michael Jordan",
            "Allen Iverson",
            "Russell Westbrook",
            "Javale McGee"
        ],
        correct: "Michael Jordan"
    },
    {
        question: "Who was the first Toronto Raptor to score 50 points in a playoff game?",
        multChoices: [
            "Kyle Lowry",
            "Kawhi Leonard",
            "Vince Carter",
            "Demar Derozan"
        ],
        correct: "Vince Carter"
    },
    {
        question: "Which player made the most three-pointers in his NBA debut?",
        multChoices: [
            "P.J. Washington",
            "Reggie Miller",
            "Kyrie Irving",
            "Damian Lillard"
        ],
        correct: "P.J. Washington"
    },
   
];

// Declare time interval
var timeInterval;

// Get the parent element that will store the content
var contentContainerEl = document.querySelector('.content');

// Create welcome page in document
var welcome = document.createElement("h2");
var instructions = document.createElement("h3");
var startGame = document.createElement("button");

// Add text to welcome page
welcome.textContent = "Welcome to the NBA History Quiz :]";
instructions.textContent = "You'll have 3 minutes to see how well your NBA Knowledge is, Warning!! if you answer the question incorrectly you will lose 15 seconds from the timer....";
startGame.textContent = "Start";

contentContainerEl.appendChild(welcome);
contentContainerEl.appendChild(instructions);
contentContainerEl.appendChild(startGame);

welcome.className = "contentHeader";
welcome.id = "welcomeHeader";
instructions.setAttribute("style", "margin:auto; width:80%; padding:15px 0px; line-height: 1.5;");
instructions.id = "instructions";
startGame.id = "startGameButton";

// Welcome page content including start game button
var startGameButton = document.querySelector('#startGameButton');
var welcomeEl = document.querySelector('#welcomeHeader');
var instructionsEl = document.querySelector('#instructions')

// When start game is clicked start timer, hide welcome content and start quiz
startGameButton.addEventListener("click",countdown);

function startGameFxn() {
    emptyContainer();
    renderQuestion();
    // // Hiding scoreboard thing
    // highscoreDivEl.classList.setAttribute("style", "display:none;");
}

// Clears contents of contentContainerEl 
function emptyContainer() {
    contentContainerEl.innerHTML = "";
};

// Clears contents of timer
function emptyTimerContent() {
    var timerContent = document.querySelector('#countdown');
    timerContent.innerHTML = "";
}


// Function for the rendering the question by grabbing it from the questions object
var quizIndex = 0;

function renderQuestion() {
    // Create question headers
    var question = document.createElement("h2");
    question.textContent = questions[quizIndex].question;
    question.className = "contentHeader";
    contentContainerEl.appendChild(question);
    
    // Add data attributes to the buttons use multChoice.dataset below the text.Content
    for(var i=0; i<4; i++) {
        var multChoice = document.createElement("button");
        var lineBreak = document.createElement("br");
        multChoice.textContent = questions[quizIndex].multChoices[i];
        multChoice.className = "multChoices";
        contentContainerEl.appendChild(multChoice);
        contentContainerEl.appendChild(lineBreak);
        // when the answer is selected nextQuestion is called
        multChoice.addEventListener("click",nextQuestion)
    };
};


// Function to render next Question and reveal if answer was correct and decrement timer if wrong
function nextQuestion(event) {
    // Declare button that was clicked
    var userAnswer = event.target.innerText;
    // Declare correct answer
    var correct = questions[quizIndex].correct;
    var result = document.createElement("h3");

    // only generates next question until you run out of questions
    if( quizIndex < questions.length - 1 ) {
        if(userAnswer == correct) {
            console.log("correct");
            result.textContent = correct + " was correct! ";
            result.className = "result";
        } else {
            console.log("incorrect");
            result.textContent = "Sorry... The correct answer was " + correct;
            result.className = "result";
            console.log(timeLeft);
            timeLeft = timeLeft - 15;
            console.log(timeLeft);
        };
    
        quizIndex++;  

        // Clear the previous question and renders next question
        emptyContainer();
        contentContainerEl.appendChild(result);
        renderQuestion();   

    } else {
        clearInterval(timeInterval);
        emptyTimerContent()
        winGame();
    }
};

// Add timer element
var timer = document.getElementById('countdown');
var timeLeft = 180; //this is 3 minutes in seconds


// function for the countdown timer
function countdown() {
        timeInterval = setInterval(function () {
        timeLeft--; // Everytime this runs it grabs the timeLeft from the global variable that's why the subtract ten is working from within a different function
        timer.textContent = "Time remaining: " + timeLeft + " seconds";

        // If the timer is running, start the game
        if (timeLeft > 0) {
            startGameFxn();
        } else { // If you run out of time, you lose
            clearInterval(timeInterval);
            emptyTimerContent()
            loseGame();
        }

    }, 1000);
};

// scoreboard variables and default for starting
var scoreTracker = [];
var endGame = document.createElement("h2");
var highscoreDivEl = document.querySelector("#highscoreDiv");
var formEl = document.querySelector("#initials");
var savesScoreEl = document.querySelector("#savesScore");


// The winGame function is called if the win condition is met.
function winGame() {
    emptyContainer();
    endGame.textContent = "You've completed the NBA Knowledge Quiz Congratualtions!!! Your score is " + timeLeft;
    contentContainerEl.appendChild(endGame);
    scoreTracker.push(timeLeft);
    // Removing the class hidden so that it becomes visible
    highscoreDivEl.classList.remove("hidden");

    savesScoreEl.addEventListener("click",setWins);
    
}

// The loseGame function is called when timer reaches 0
function loseGame() {
    emptyContainer();
    endGame.textContent = "Sorry you ran out of time. Want To Play Again?";
    contentContainerEl.appendChild(endGame);
    contentContainerEl.appendChild(startGame);
    startGameButton.addEventListener("click",replayGame);
}


// Refresh page to restart game if you run out of time
function replayGame(e){
    var e=window.event||e;
    if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}
 }


 // setWins function
function setWins() {
    // Grabbing the initials
    var userInitials = formEl.value;
    var object = {
        user: userInitials,
        score: timeLeft
    }
    scoreArray.push(object);
    localStorage.setItem("highscores", JSON.stringify(scoreArray));
}