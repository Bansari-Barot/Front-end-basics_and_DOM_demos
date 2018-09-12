/* Global variables just for easy practice */

// An array of objects containing questions and answers
questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language."
  },
  {
    question: "Give the selector and rule to color all paragraph text blue.",
    answer: "p {color: blue;}"
  },
  {
    question:
      "How are heading elements similar and different from the header element?",
    answer:
      "the header element is a container and can contain multiple elements. In addition it is good and commont practice to include a heading element within a header element."
  },
  {
    question:
      "When would you want to use an article element and when would this generally not be necessary?",
    answer: "To be written..."
  }
];

// Initial question to display
qIndex = 0;

// Set up variables to hold element references
bForward = document.getElementById("BForward");
bBack = document.getElementById("BBack");
bShow = document.getElementById("BShow");
bShowQC = document.getElementById("BShowQC");
bRemove = document.getElementById("BRemove");
currentQ = document.getElementById("currentQ");
currentA = document.getElementById("currentA");
bHideA = document.getElementById("BHideA");
qCreator = document.getElementById("QCreator");
bAddQ = document.getElementById("BAddQ");
bHideQC = document.getElementById("BHideQC");
question = document.getElementById("Question");
answer = document.getElementById("Answer");
contentQ = document.getElementById("contentQ");

// Example of variables and initialization
qCountSpan = document.getElementById("qCount");
qIndexSpan = document.getElementById("qIndex");
// Initialize content
qCountSpan.innerHTML = questions.length;
qIndexSpan.innerHTML = qIndex + 1;

let question1 = document.getElementById("contentQ");
let answer1 = document.getElementById("contentA");
var questionId  = document.createElement("p");
var answerId = document.createElement("p");
question1.appendChild(questionId);
answer1.appendChild(answerId)
document.getElementsByTagName("body").onload = displayQuestion();


// initialize buttons
initButtons();


/* Functions defined below here */

/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */
function initButtons() {
  // Show and hide creator
  // Show and hide answer
  // Forward and back Questions
  // Remove question
  // Add question
  bForward.addEventListener("click",forward);
  bBack.addEventListener("click",back);
  bShow.addEventListener("click",showAnswer);
  bHideQC.addEventListener("click",hideQuestionCreator);
  bHideA.addEventListener("click",hideAnswer);
  bAddQ.addEventListener("click",addQuestion);
  bShowQC.addEventListener("click",showQuestionCreator);
  bRemove.addEventListener("click",removeQuestion);
}

/* You may want to define functions like the following to attach to buttons */

/* Takes the content from the text areas and adds
 to the quesiton list */
function addQuestion() {
  // You provide the functionality.
  if(question.value==""){
		alert("please input a question");
	}
	else if(answer.value==""){
		alert("please input an answer");
	}else{
    var newQuestion = document.getElementById("Question").value;
    var newAnswer = document.getElementById("Answer").value;
    questions.push({question:newQuestion,answer:newAnswer});
		questions.push({question:newQuestion.value,answer:newAnswer.value});
	}
}

function displayQuestion(){
  questionId.innerHTML = questions[qIndex].question;
}

function showAnswer(){
  answerId.innerHTML = questions[qIndex].answer;

  document.getElementById("contentA").classList.remove("hide");
  document.getElementById("contentA").classList.add("show");
}

function hideQuestionCreator(){
	if(qCreator.classList.contains("hideStuff"))
	   qCreator.classList.toggle("showStuff");

	qCreator.classList.add("hideStuff");
}


function showQuestionCreator(){
	if(!qCreator.classList.contains("showStuff"))
	   qCreator.classList.toggle("showStuff");
}


function hideAnswer(){

  document.getElementById("contentA").classList.remove("show");
  document.getElementById("contentA").classList.add("hide");
}

function removeQuestion(){
  var index  = questions.indexOf(questions[qIndex])
  if(index > -1){
    questions.splice(index,1);
    qCountSpan.innerHTML = questions.length;
  }
  if(qIndex < questions.length){
  displayQuestion() = false;
  }else{
    displayQuestion();
  }
}

function forward(){
  if (questions.length <= 0) {
      return;
    }

    if (qIndex < questions.length - 1) {
      qIndex++;
      qIndexSpan.innerHTML = qIndex + 1;
    }
    question1.innerHTML = `${questions[qIndex].question}`;
    //answer1.innerHTML = `${questions[qIndex].answer}`;

}

function back() {
  if (questions.length <= 0) {
      return;
    }

    if (qIndex > 0 && qIndex < questions.length) {
      qIndex--;
      qIndexSpan.innerHTML = qIndex + 1;
    }
    question1.innerHTML = `${questions[qIndex].question}`;
    //answer1.innerHTML = `${questions[qIndex].answer}`;

}
