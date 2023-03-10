//score elements defined
let scoreElement = document.getElementById("score");
let incorrectElement = document.getElementById("incorrect");
let userScore = 0;

// an array for the quetions and answers
let questions = [{
  qno: 0,
  question: "These four actors played which character in a well know film series?",
  sorc: "assets/images/q1.png",
  ans1: "P",
  ans2: "Q",
  ans3: "R",
  ans4: "S",
  correctAnswer: "Q"
}, {
  qno: 1,
  question: "These four actors played which character in the same film series?",
  sorc: "assets/images/q2.png",
  ans1: "J",
  ans2: "K",
  ans3: "L",
  ans4: "M",
  correctAnswer: "M"
}, {
  qno: 2,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/images/q3.png",
  ans1: "D",
  ans2: "E",
  ans3: "F",
  ans4: "G",
  correctAnswer: "D"
}, {
  qno: 3,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/images/q4.png",
  ans1: "D",
  ans2: "E",
  ans3: "S",
  ans4: "P",
  correctAnswer: "E"
}, {
  qno: 4,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/images/q5.png",
  ans1: "H",
  ans2: "I",
  ans3: "T",
  ans4: "L",
  correctAnswer: "H"
}, {
  qno: 5,
  question: "In the country depicted by the flag, what letter would be on the number plate?",
  sorc: "assets/images/q6.png",
  ans1: "F",
  ans2: "G",
  ans3: "H",
  ans4: "I",
  correctAnswer: "I"
}, {
  qno: 6,
  question: "What letter did the Romans use for their number '500'?",
  sorc: "assets/images/q7.png",
  ans1: "L",
  ans2: "V",
  ans3: "D",
  ans4: "M",
  correctAnswer: "D"
}, {
  qno: 7,
  question: "What is Mariah Carey's perfume called?",
  sorc: "assets/images/q8.png",
  ans1: "C",
  ans2: "D",
  ans3: "M",
  ans4: "L",
  correctAnswer: "M"
}, {
  qno: 8,
  question: "What is the chemical symbol of the element Potassium?",
  sorc: "assets/images/q9.png",
  ans1: "K",
  ans2: "E",
  ans3: "P",
  ans4: "O",
  correctAnswer: "K"
}, {
  qno: 9,
  question: "What is the chemical symbol of the element Tungsten?",
  sorc: "assets/images/q10.png",
  ans1: "T",
  ans2: "U",
  ans3: "V",
  ans4: "W",
  correctAnswer: "W"
}, {
  qno: 10,
  sorc: "assets/images/thats-all-folks.png",
  question: `This is the end of the quiz. Out of a possible 10, you scored ${userScore}`,
}];

//name start/nxt question button
let startButton = document.getElementById('next-button');
let dataContainer = document.getElementById("q-and-a-box");
let questionContainer = document.getElementById('the-question');
let picContainer = document.getElementById('q-pic');

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("next-button").textContent = "Start";
  startButton.disabled = false;

})

let currentQuestionIndex = -1;

function displayQuestion() {
  let question = questions[currentQuestionIndex];

  //get the answer boxes back
  document.getElementById("answers-box").style.display = "block";

  //allow the answer buttons to be clicked
  answerButtons.forEach(button => button.disabled = false);

  // Update the question text and picture
  dataContainer.setAttribute('data-id', question.qno);
  document.getElementById("the-question").textContent = question.question;
  document.getElementById("q-pic").src = question.sorc;
  // Update the answer buttons
  document.getElementById("answer-1").textContent = question.ans1;
  document.getElementById("answer-2").textContent = question.ans2;
  document.getElementById("answer-3").textContent = question.ans3;
  document.getElementById("answer-4").textContent = question.ans4;

  // Update the text of the "Next Question" button
  if (currentQuestionIndex === questions.length - 1) {

    let finalQuestion = questions[currentQuestionIndex];
    finalQuestion.question = `This is the end of the quiz. Out of a possible 10, you scored ${userScore}.`;
    questionContainer.innerHTML = finalQuestion.question;
    document.getElementById("q-pic").src = 'assets/images/thats-all-folks.png';
    document.getElementById("next-button").textContent = "Restart";
    document.getElementById("answers-box").style.display = "none";
    // Add an event listener to the "Restart" button to reload the page when clicked
    document.getElementById("next-button").addEventListener("click", function() {
      window.location.reload();

    });
  } else {
    document.getElementById("next-button").textContent = "Next Question";
  }
}

// Add a click event listener to the "Next Question" button
document.getElementById("next-button").addEventListener("click", function() {
  // Increment the current question index
  currentQuestionIndex++;

  // Display the next question
  displayQuestion();
  startButton.disabled = true;

  if (currentQuestionIndex === questions.length - 1) {
    startButton.disabled = false;
  }

  //change color of buttons back
  document.querySelectorAll('.ans').forEach(function(element) {
    element.style.backgroundColor = '#CDF0EA';


  });

});

// Get all the answer buttons
let answerButtons = document.querySelectorAll(".ans");


// Process to identify the correct answer and adjust score accordingly
// Add an event listener to each button
answerButtons.forEach(button => {

  button.addEventListener("click", function(e) {

    // Identify the selected answer from the button's data-type attribute
    let selectedAnswer = button.dataset.type;

    //Identify the question being asked
    let questionId = dataContainer.getAttribute('data-id');

    //Identify the correct answer from the questions array
    let correctAnswer = questions[questionId].correctAnswer

    //check if it is correct
    let isCorrect = e.target.innerText === correctAnswer

    // Update the score
    let currentScore = parseInt(scoreElement.textContent);
    let currentIncorrect = parseInt(incorrectElement.textContent);


    if (isCorrect) {
      scoreElement.textContent = currentScore + 1;
      userScore = userScore + 1;
      button.style.backgroundColor = '#ADE792';
      alert("Correct!")


    } else {
      incorrectElement.textContent = currentIncorrect + 1;
      button.style.backgroundColor = '#FF4A4A';
      //notify user of correct answer
      alert("Incorrect! The correct answer is " + correctAnswer);

    }
    answerButtons.forEach(button => button.disabled = true);
    startButton.disabled = false;

  });

});
