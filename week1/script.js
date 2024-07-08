document.getElementById('start-quiz').addEventListener('click', function() {
    document.getElementById('quiz-container').style.display = 'block';
    loadQuiz();
});

let currentQuestion = 0;
const quizQuestions = [
    {
        question: "How many points does a badminton game consist of?",
        options: ["15", "21", "30"],
        answer: "21"
    },
    {
        question: "What is the maximum number of games in a match?",
        options: ["3", "5", "7"],
        answer: "3"
    }
];

function loadQuiz() {
    const quiz = quizQuestions[currentQuestion];
    document.getElementById('quiz-question').textContent = quiz.question;
    const optionsList = document.getElementById('quiz-options');
    optionsList.innerHTML = '';
    quiz.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', function() {
            document.querySelectorAll('#quiz-options li').forEach(li => li.style.backgroundColor = '');
            li.style.backgroundColor = '#ddd';
            li.dataset.selected = true;
        });
        optionsList.appendChild(li);
    });
}

document.getElementById('submit-answer').addEventListener('click', function() {
    const selectedOption = Array.from(document.querySelectorAll('#quiz-options li')).find(li => li.dataset.selected);
    if (selectedOption) {
        const answer = selectedOption.textContent;
        const quiz = quizQuestions[currentQuestion];
        const result = document.getElementById('quiz-result');
        if (answer === quiz.answer) {
            result.textContent = 'Correct!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Incorrect! The correct answer is ' + quiz.answer;
            result.style.color = 'red';
        }
        currentQuestion = (currentQuestion + 1) % quizQuestions.length;
        loadQuiz();
    }
});
