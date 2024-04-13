let qno = select(".qno");
let ques = select(".question");
let optionsCont = select(".options");
let correctSf = new Audio("audio/correct.mp3");
let wrongSf = new Audio("audio/wrong.mp3");
let isAnimating = false;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(quizQuestion);

function select(elem) {
  return document.querySelector(elem);
}

let score = 0;
let curr = Math.floor(Math.random() * quizQuestion.length); 
let curr_qno = 1;

function setInit() {
  curr = getUnseenQuestionIndex();
  if (curr === -1) {
    alert(`Congratulations!!! Your score is ${score}`);
    return;
  }
  qno.innerHTML = curr_qno + ".";
  select('.score').innerHTML = score
  ques.innerHTML = quizQuestion[curr].question;
  let clutter = "";
  quizQuestion[curr].options.forEach((opt) => {
    clutter += `<h3 class="text-xl md:text-2xl lg:text-[2xl] opt w-[80%] mx-4 border border-black py-2 px-4">${opt}</h3>`;
  });
  optionsCont.innerHTML = clutter;
}

function getUnseenQuestionIndex() {
  for (let i = 0; i < quizQuestion.length; i++) {
    if (!quizQuestion[i].hasAppeared) {
      return i;
    }
  }
  return -1;
}

document.addEventListener('DOMContentLoaded', function () {
  shuffleArray(quizQuestion); 
  setInit(); 
});




optionsCont.addEventListener("click", function (el) {
  let clicked = el.target;
  if (clicked.classList.contains("opt")) {
    handleClick(clicked.textContent, clicked);
  }
});

function loadNextQuestion() {
  if (curr_qno == 11) {
    select('.r-score').innerHTML = score
    select('.completed').style.display = 'flex'
    select('.game').style.display = 'none'
} else {
      setInit();
  }
}
function handleClick(el, e) {
  if (isAnimating) return;
  curr_qno++;
  isAnimating = true;

  let isCorrect = el === quizQuestion[curr].answer;
  quizQuestion[curr].hasAppeared = true;

  document.querySelectorAll(".opt").forEach((optionElement) => {
    optionElement.classList.remove(
      "border",
      "border-2",
      "border-black",
      "border-green-500",
      "bg-green-100",
      "border-red-500",
      "bg-red-100"
    );
    optionElement.classList.add("border", "border-black");
  });

  if (isCorrect) {
    e.classList.add("border-2", "border-green-500", "bg-green-100");
    score++;
    correctSf.play();
  } else {
    e.classList.add("border-2", "border-red-500", "bg-red-100");
    wrongSf.play();
    document.querySelectorAll(".opt").forEach((optionElement) => {
      if (optionElement.textContent === quizQuestion[curr].answer) {
        optionElement.classList.add(
          "border-green-500",
          "border-2",
          "bg-green-100"
        );
      }
    });
  }
  setTimeout(function(){
    loadNextQuestion();
    isAnimating = false;
  }, 1500);
}

select(".restart").addEventListener("click", function () {
  location.reload()
});
select(".start-btn").addEventListener("click", function () {
  select(".intro").style.display = "none";
  select(".game").style.display = "block";
});
