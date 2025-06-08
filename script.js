import { allQuestions } from "./questions.js";

document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    const homeSection = document.getElementById('homeSection');
    const startBtn = document.getElementById('startBtn');
    const navigationSection = document.getElementById('navigationSection');
    const mainContainerSection = document.getElementById('mainContainer');
    const readyQuestion = document.getElementById('readyQuestion');
    const instructionsBtn = document.getElementById('instructionsBtn');
    const returnBtn = document.getElementById('returnBtn');
    const startQuizBtn = document.getElementById('startQuizBtn');
    const instructionsSection = document.getElementById('instructionsSection');
    const startQuizSection = document.getElementById('startQuizSection');
    const quizContainer = document.getElementById('quizContainer');
    const difficultySelector = document.getElementById('difficultySelector');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const difficultyBtns = document.querySelectorAll('.difficulty-btn');
    const optionsButton = document.getElementById('optionsButton');
    const optionsMenu = document.getElementById('optionsMenu');
    const optionsCaret = document.getElementById('optionsCaret');

    // State
    let selectedCategory = '';
    let difficultySelected = '';
    let selectedQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;

    // Dropdown functionality
    optionsButton.addEventListener('click', () => {
        optionsMenu.classList.toggle('hidden');
        optionsCaret.classList.toggle('rotate-180');
    });

    // Navigation
    startBtn.addEventListener('click', () => {
        homeSection.classList.add('hidden');
        navigationSection.classList.remove('hidden');
    });

    instructionsBtn.addEventListener('click', () => {
        navigationSection.classList.add('hidden');
        instructionsSection.classList.remove('hidden');
    });

    startQuizBtn.addEventListener('click', () => {
        navigationSection.classList.add('hidden');
        startQuizSection.classList.remove('hidden');
    });

    returnBtn.addEventListener('click', () => {
        instructionsSection.classList.add('hidden');
        navigationSection.classList.remove('hidden');
    });

            //Highlight the selected category
        categoryBtns.forEach(categoryBtn => {
            categoryBtn.addEventListener('click', () => {
                selectCategory(categoryBtn);
            });
        });
        // Difficulty selection
        difficultyBtns.forEach(difficultyBtn => {
            difficultyBtn.addEventListener('click', () => {
                selectDifficulty(difficultyBtn);
            });
        });

    // Category selection
    function selectCategory(categoryBtn) {
            
        selectedCategory = categoryBtn.value;
        difficultySelector.classList.remove("hidden");
                selectedCategory = categoryBtn.value;
                difficultySelector.classList.remove('hidden');
                // Highlight selected category
                categoryBtns.forEach(btn => {
                    btn.classList.remove("bg-green-500", "text-black", "font-bold", "ring", "opacity-50", "bg-gray-100", "text-gray-100", "pointer-events-none");
                    btn.disabled = false;
                });
                categoryBtn.classList.add("bg-green-500", "text-black", "font-bold", "ring");
                categoryBtn.disabled = true;
                // Fade out and disable others
                categoryBtns.forEach(btn => {
                    if (btn !== categoryBtn) {
                        btn.classList.add("opacity-50", "bg-gray-100", "text-gray-100", "pointer-events-none");
                        btn.disabled = true;
                    }
                });
            };
    
    function selectDifficulty(difficultyBtn) {
            difficultySelected = difficultyBtn.dataset.difficulty;
            
            // Highlight selected difficulty
            difficultyBtns.forEach(btn => {
                btn.classList.remove("bg-gray-800", "text-white", "text-gray-100", "bg-gray-200");
            });

            difficultyBtn.classList.add("bg-gray-800", "text-white");
            
            difficultyBtns.forEach(btn => {
                if (btn !== difficultyBtn) {
                    btn.classList.add("text-gray-100", "bg-gray-200");
                }
            });

            difficultySelector.classList.add('hidden');
            startQuizSection.classList.add('hidden');
            quizContainer.classList.remove('hidden');

            if (selectedCategory && difficultySelected) {
                selectedQuestions = allQuestions[selectedCategory][difficultySelected];
                currentQuestionIndex = 0;
                score = 0;
                displayQuestion(currentQuestionIndex);
            }
        };
   
    // Display question function (top-level)
    function displayQuestion(index) {
        let currentQuestionObj = selectedQuestions[index];

        if (!currentQuestionObj) {
            quizContainer.innerHTML = `
                <h2 class="text-2xl font-bold mb-4">🎉 Quiz Completed!</h2>
                <p class="text-lg">Your score: ${score}/${selectedQuestions.length}</p>
                <div class="flex flex-row gap-1.5">
                    <button id="restartQuiz" class="mt-4 hover:cursor-pointer px-4 py-2
                     bg-green-500 text-white rounded hover:bg-green-600">Restart Quiz</button>
                    <button id="returnToCategory" class="cursor-pointer px-4 py-2 mt-4
                     bg-blue-500 text-black rounded hover:bg-gray-700 hover:text-white mr-2">Return to Category</button>
                </div>
            `;
            // Restart Quiz
            document.getElementById('restartQuiz').onclick = () => {
                score = 0;
                currentQuestionIndex = 0;
                displayQuestion(currentQuestionIndex);
            };
            // Return to Category
            document.getElementById('returnToCategory').onclick = () => {
                quizContainer.classList.add('hidden');
                startQuizSection.classList.remove('hidden');
                // Reset category and difficulty buttons
                categoryBtns.forEach(btn => {
                    btn.classList.remove("bg-green-500", "text-black", "font-bold", "ring", "opacity-50", "bg-gray-100", "text-gray-100", "pointer-events-none");
                    btn.disabled = false;
                });
                difficultyBtns.forEach(btn => {
                    btn.classList.remove("bg-gray-800", "text-white", "text-gray-100", "bg-gray-200");
                });
                //Fix reset state variables
                difficultySelector.classList.add('hidden');
                selectedCategory = '';
                difficultySelected = '';
                selectedQuestions = [];
                currentQuestionIndex = 0;
                score = 0;
            };
            return;
        }

        // Show question
        quizContainer.innerHTML = '';
        // Header
        const questionHeader = document.createElement("div");
        questionHeader.className = "text-2xl text-gray-700 font-medium mb-2";
        questionHeader.textContent = `Question ${index + 1} of ${selectedQuestions.length}`;
        quizContainer.appendChild(questionHeader);

        // Score
        const scoreDisplay = document.createElement('div');
        scoreDisplay.className = 'text-gray-600 text-sm mb-2';
        scoreDisplay.textContent = `Score: ${score}/${selectedQuestions.length}`;
        quizContainer.appendChild(scoreDisplay);

        // Question text
        const questionText = document.createElement("p");
        questionText.className = "text-lg font-semibold";
        questionText.textContent = currentQuestionObj.question;
        quizContainer.appendChild(questionText);

        // Options
        currentQuestionObj.options.forEach(option => {
            const optionButton = document.createElement("button");
            optionButton.className = "block w-full text-left px-4 py-2 mt-2 bg-gray-300 rounded hover:bg-green-300 transition hover:cursor-pointer";
            optionButton.textContent = option;

            optionButton.addEventListener('click', () => {
                const userAnswer = option;
                const correctAnswer = currentQuestionObj.answer;

                // Disable all option buttons and highlight the correct one
                const allOptionsButtons = quizContainer.querySelectorAll("button");
                allOptionsButtons.forEach(btn => {
                    btn.disabled = true;
                    if (btn.textContent === correctAnswer) {
                        btn.classList.add("bg-green-500", "text-white");
                    }
                });

                if (userAnswer === correctAnswer) {
                    score += 1;
                    optionButton.classList.add("bg-green-500", "text-white");
                } else {
                    optionButton.classList.add("bg-red-500", "text-white");
                }

                // Move to next question after short delay
                currentQuestionIndex++;
                setTimeout(() => {
                    displayQuestion(currentQuestionIndex);
                }, 1000);
            });
            quizContainer.appendChild(optionButton);
        });
    }
});
