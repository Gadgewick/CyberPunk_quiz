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
            "1960's",
            "1980's",
            "1970's",
            "1940's"
        ],
        correctAnswer: "1980's"
    },
    {
        question: 'One of the Early films of Cyberpunk is _________.',
        answers: [
            '"Terminator"',
            '"Blade Runner"',
            '"Star Wars"',
            '"Tron"'
        ],
        correctAnswer: '"Blade Runner"'
    },
    {
        question: 'Central themes include: ',
        answers: [
            'Augmentation, MegaCorporations and Desperation',
            'Space Ships, Explosions and Light Sabers',
            "Bombs, Guns and Rock'n'Roll",
            'Candle Light, Long Walks and Beaches'
        ],
        correctAnswer: 'Augmentation, MegaCorporations and Desperation'
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
            '"Live long and prosper."',
            '"Carpe Noctem."',
            '"Death, Sex, and Robots."',
            '"Lowlife and high-tech."'
        ],
        correctAnswer: '"Lowlife and high-tech."'
    },
    {
        question: 'One of the first Cyberpunk themed games was a tabletop game called _______ that came out in _____.',
        answers: [
            '"Cyberpunk", 1988',
            '"Bits and Pieces", 1986',
            '"Robo Hunter", 1987',
            '"Shadowrun", 1968'
        ],
        correctAnswer: '"Cyberpunk", 1988'
    },
    {
        question: 'Cyberpunk was popularized by the novel __________.',
        answers: [
            '"Altered Carbon" by Richard Morgan',
            '"Snow Crash" by Neal Stephenson',
            '"Neuromancer" by William Gibson',
            '"Do Androids Dream of Electric Sheep?" by Philip K. Dick' 
        ],
        correctAnswer: '"Neuromancer" by William Gibson'
    },
    {
        question: 'Cyberpunk took off in japan, later inspiring the animated movie ___________.',
        answers: [
            '"Space Dandy"',
            '"Evangelion"',
            '"Power Rangers"',
            '"Akira"'
        ],
        correctAnswer: '"Akira"'
    },
    {
        question: 'Cyberpunk today has had a pop culture boom with new sequels to "Blade Runner" and "The Matrix". Another classic tabletop is having a new videogame adaptation called ________.',
        answers: [
            '"Cyberpunk 2077"',
            '"Shadowrun: One Last Job"',
            '"Fallout Prequel"',
            '"Unnamed Android Project"'
        ],
        correctAnswer: '"Cyberpunk 2077"'
    },
];
 
console.log('outside function')
let score = 0;
let questionNumber = 0;

    
function updateScore() {
    score++;
    $('.scoreTotal').text(score);
}

function updateQuestionNumber() {
    questionNumber++;
    $('.questionNumber').text(questionNumber + 1);
}

function resetStats() {
  score = 0;
  questionNumber = 0;
  $('.score').text(0);
  $('.questionNumber').text(0);
}

function startQuiz() {
    $('.startScreen').on('click', '.startButton', function() {
        event.preventDefault();
        console.log ( 'button is clicked');
        $(this).hide();
        $('.questionNumber').text(1);
        $('.questionBox').show('slow');
        //$('.questionBox').prepend(generateQuestion());
    });
}

function createForm(questionIndex) {
    let formMaker = $(`<form>
    <fieldset>
    <legend class= "questionText">${STORE[questionIndex].question}</legend>
    </fieldset>
    </form>`)

    let fieldSelector = $(formMaker).find('fieldset');

    $()
}
function makeQuiz() {
    startQuiz();
}

$(makeQuiz);