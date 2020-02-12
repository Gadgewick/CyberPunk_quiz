const STORE = [
    {
        question: 'Cyberpunk is a term coined by writer______.',
        answers: [
            'Ray Bradbury',
            'H.G. Wells',
            'William Gibson',
            'Bruce Bethke'
        ],
        correctAnswer: 'Bruce Bethke'
    },
    {
        question: 'Cyberpunk can be first seen in the ______.',
        answers: [
            `1960's`,
            `1980's`,
            `1970's`,
            `1940's`
        ],
        correctAnswer: "1980's"
    },
    {
        question: 'One of the Early films of Cyberpunk is _________.',
        answers: [
            `Terminator`,
            `Blade Runner`,
            `Star Wars`,
            `Tron`
        ],
        correctAnswer: `Blade Runner`
    },
    {
        question: 'Central themes include: ',
        answers: [
            `Augmentation, MegaCorporations and Desperation`,
            `Space Ships, Explosions and Light Sabers`,
            `Bombs, Guns and Rock'n'Roll`,
            `Candle Light, Long Walks and Beaches`
        ],
        correctAnswer: `Augmentation, MegaCorporations and Desperation`
    },
    {
        question: 'Protagonist tend to be __________.',
        answers: [
            'Happy-Go-Lucky Boyscouts',
            'Maniacal Maniacs',
            'Noir-Style Anti-Heroes',
            'The Protagonist usually changes as the story goes on'
        ],
        correctAnswer: 'Noir-Style Anti-Heroes'
    },
    {
        question: 'An oft-quoted maxim by Sterling:',
        answers: [
            `Live long and prosper.`,
            `Carpe Noctem.`,
            `Death, Sex, and Robots.`,
            `Lowlife and high-tech.`
        ],
        correctAnswer: `Lowlife and high-tech.`
    },
    {
        question: 'One of the first Cyberpunk themed games was a tabletop game called _______ that came out in _____.',
        answers: [
            `Cyberpunk, 1988`,
            `Bits and Pieces, 1986`,
            `Robo Hunter, 1987`,
            `Shadowrun, 1968`
        ],
        correctAnswer: `Cyberpunk, 1988`
    },
    {
        question: 'Cyberpunk was popularized by the novel __________.',
        answers: [
            `Altered Carbon by Richard Morgan`,
            `Snow Crash by Neal Stephenson`,
            `Neuromancer by William Gibson`,
            `Do Androids Dream of Electric Sheep? by Philip K. Dick` 
        ],
        correctAnswer: `Neuromancer by William Gibson`
    },
    {
        question: 'Cyberpunk took off in japan, later inspiring the animated movie ___________.',
        answers: [
            `Space Dandy`,
            `Evangelion`,
            `Power Rangers`,
            `Akira`
        ],
        correctAnswer: `Akira`
    },
    {
        question: 'Cyberpunk today has had a pop culture boom with new sequels to "Blade Runner" and "The Matrix". Another classic tabletop is having a new videogame adaptation called ________.',
        answers: [
            `Cyberpunk 2077`,
            `Shadowrun: One Last Job`,
            `Fallout Prequel`,
            `Unnamed Android Project`
        ],
        correctAnswer: `Cyberpunk 2077`
    },
];

//static elements
console.log('outside function');
let score = 0;
let questionNumber = 0;

    
function updateScore() {
    score++;
    $('.scoreTotal').text(score);
}

function updateQuestionNumber() {
    questionNumber++;
    $('#questionNumber').text('Question: ' + questionNumber + '/10');
}

function reset() {
    score = 0;
    questionNumber = 0;
    $('.scoreTotal').text(0);
    $('#questionNumber').text('Question: ' + questionNumber + '/10');

}

//button elements
function startQuiz() {
    $('.startScreen').on('click', '.startButton', function() {
        event.preventDefault();
        console.log ( 'start button is clicked');
        $('.startScreen').hide();

        $('.questionBox').fadeIn('slow');
        createForm(questionNumber);
    });
}

function submitQuizQuestion() {
    $('.questionBox').on('click', '.submitButton', function(event) {
        event.preventDefault();
        console.log ( 'submit button is clicked');        
        let answer = $('input:radio[name=answers]:checked').val();
        let correct = STORE[questionNumber].correctAnswer;
        if (!answer) {
            alert("At least guess...");
            return;
        }
        $('.questionBox').hide();
        

        
        
        if (answer === correct) {
            correctScreen();
            $('.response').fadeIn(50);
        } else {
            wrongScreen();
            $('.response').fadeIn(50);
        };
    });
}

function nextQuestion() {
    $('.response').on('click', '.nextButton', function(event) {
        event.preventDefault();
        console.log ( 'next button is clicked');
        $('.response').fadeOut(50);
        $('.questionBox').show('slow');
        updateQuestionNumber();
        if (questionNumber >= 10) {
            finalScore();
            $('.questionBox').hide();
        } else {
        createForm(questionNumber);
        };
        

    });
}

function correctScreen() {
    $('.response').html(
        `<h3 class="headline">Your answer is correct!</h3>
        <img src="images/correct.jpg" alt= "five light bulbs hitting one another" class= "image">
        <button type="button" class="nextButton">Next</button>`
    );
    updateScore();
}

function wrongScreen() {
    $('.response').html(
        `<h3 class="headline">Your answer is incorrect...</h3>
        <img src="images/wrong.jpg" alt= "dunking a lemon" class= "image">
        <h3 class="headline">The correct answer is ${STORE[questionNumber].correctAnswer}</h3>
        <button type="button" class="nextButton">Next</button>`
    )
}

function createForm(questionIndex) {
    let formMaker = $(`<form>
            <legend class= "headline">${STORE[questionIndex].question}</legend>
                <div class="answers">
                    <div>
                    <input type="radio"  name="answers" value="${STORE[questionIndex].answers[0]}"  >
                    <label class="answers">${STORE[questionIndex].answers[0]}</label>
                    </div>
                    <div>
                    <input type="radio"  name="answers" value="${STORE[questionIndex].answers[1]}">
                    <label class="answers">${STORE[questionIndex].answers[1]}</label>
                    </div>
                    <div>
                    <input type="radio"  name="answers" value="${STORE[questionIndex].answers[2]}">
                    <label class="answers">${STORE[questionIndex].answers[2]}</label>
                    </div>
                    <div>
                    <input type="radio"  name="answers" value="${STORE[questionIndex].answers[3]}">
                    <label class="answers">${STORE[questionIndex].answers[3]}</label>
                    </div>
                </div>
                <button type="button" class="submitButton">submit</button>
    </form>`);

    //let fieldSelector = $(formMaker).find('fieldset');

    $('form').replaceWith(formMaker);


}

function finalScore() {
    $('.finalScore').show();

    let ab= [
        "Are you part machine!?",
        "images/great.jpg",
        "Neon Robot chillin with drinks and chips",
    ];

    let cd= [
        "You know your way around cyberspace.... or at least google",
        "images/passing.jpg",
        "Girl touching hologram screen",
    ];
    
    let f= [
        "Are you suffering from Cyberpsychosis? You don't even know what that means...",
        "images/fail.jpg",
        "Blurry man surrounded by neon",
    ];

    if (score >= 8) {
        array = ab;
    } else if (score < 8 && score >= 4) {
        array = cd;
    } else {
        array = f;
    }
    return $('.finalScore').html(
        `<h3 class ="headline">${array[0]}</h3>
        <img src="${array[1]}" alt="${array[2]}" class="image">
            <h3 class ="headline">Your score is ${score}</h3>
            <button type="button" class="restartButton">Restart</button>`
    );
}

function restartQuiz() {
    $('.finalScore').on('click', '.restartButton', function(event) {
        event.preventDefault();
        console.log ( 'restart button is clicked'); 
        reset();
        $('.finalScore').hide();
        $('.startScreen').show();
    });
}



function makeQuiz() {
    startQuiz();
    submitQuizQuestion();
    nextQuestion();
    restartQuiz();
}

$(makeQuiz);