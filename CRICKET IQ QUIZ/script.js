const quizData = [
  {
      question: "Who won the ICC Cricket World Cup in 2019?",
      a: "Australia",
      b: "India",
      c: "England",
      d: "New Zealand",
      correct: "c",
  },
  {
      question: "Who is the highest run-scorer in Test cricket?",
      a: "Ricky Ponting",
      b: "Brian Lara",
      c: "Sachin Tendulkar",
      d: "Steve Waugh",
      correct: "c",
  },
  {
      question: "Which cricketer has the highest individual score in an ODI match?",
      a: "Chris Gayle",
      b: "Martin Guptill",
      c: "Rohit Sharma",
      d: "Virender Sehwag",
      correct: "c",
  },
  {
      question: "Which country hosted the first-ever Cricket World Cup?",
      a: "Australia",
      b: "India",
      c: "South Africa",
      d: "England",
      correct: "d",
  },
  {
      question: "Who is known as the 'Rawalpindi Express'?",
      a: "Wasim Akram",
      b: "Waqar Younis",
      c: "Shoaib Akhtar",
      d: "Imran Khan",
      correct: "c",
  },
  {
      question: "Which cricketer has the most wickets in Test cricket?",
      a: "Shane Warne",
      b: "Muttiah Muralitharan",
      c: "Anil Kumble",
      d: "James Anderson",
      correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
      if (answerEl.checked) {
          answer = answerEl.id;
      }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  
  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;

      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
          <br><br><br><br>
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              
              <button onclick="location.reload()">Reload</button>
          `;
      }
  }
});
