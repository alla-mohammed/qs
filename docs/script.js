const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Machine Language",
            "High Text Main Language"
        ],
        correct: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used for styling web pages?",
        answers: [
            "HTML",
            "CSS",
            "Python",
            "PHP"
        ],
        correct: "CSS"
    },

    {
        question: "Which language is used for web interactivity?",
        answers: [
            "JavaScript",
            "CSS",
            "HTML",
            "SQL"
        ],
        correct: "JavaScript"
    },

    {
        question: "Which symbol is used for IDs in CSS?",
        answers: [
            ".",
            "#",
            "*",
            "@"
        ],
        correct: "#"
    },

    {
        question: "Which tag creates a paragraph?",
        answers: [
            "<h1>",
            "<div>",
            "<p>",
            "<span>"
        ],
        correct: "<p>"
    }
];

const question = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const nextBtn = document.getElementById("nextBtn");


let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
    question.textContent =
        questions[currentQuestion].question;

    answers.forEach((btn, index) => {
        btn.textContent =
            questions[currentQuestion].answers[index];
            
    });
}

answers.forEach(btn => {

    btn.addEventListener("click", function() {
        
        if (btn.textContent === questions[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    });

});

function showResult() {


 document.querySelector(".bg-white").innerHTML = `
        <h1 class="text-3xl font-bold text-center mb-4">
            Your Score: ${score} / ${questions.length}
        </h1>

        <button
            onclick="resetQuiz()"
            class="w-full bg-blue-500 text-white p-3 rounded-lg"
        >
            Reset Quiz
        </button>
    `;
}

function resetQuiz(){

    currentQuestion = 0;
    score = 0;

    location.reload();
}
