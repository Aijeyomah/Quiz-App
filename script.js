const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionBox = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-btn')


let shuffledQuestions, currentQuestionIndex;
//when the start button is clicked
function startGame (){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionBox.classList.remove('hide');
    setNextQuestion()

}
//function to show what will happen when the next button is clicked

function setNextQuestion() {
    //reset the question and answer once the next button is clicked
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
    //displaying the question
    questionElement.innerText = question.question
    
    //selecting an answer the answer section
    question.answers.forEach(answer =>{
        //The answer selected will be displayed here
        const button= document.createElement('button')
        button.innerText= answer.text;
        button.classList.add('btn')
        //check if answer is correct
        if(answer.correct){
            button.dataset.correct =answer.correct
        }
        button.addEventListener('click' , selectAnswer)
        answerButtons.appendChild(button)

    })
}
    function resetState(){
        clearStatusClass(document.body)
        nextButton.classList.add('hide')
         while(answerButtons.firstChild){
            answerButtons.removeChild
           (answerButtons.firstChild)
        }
   
}
//function when an answer is being selected
let selectAnswer = (e) => {
//to get the button selected
const selectedButton = e.target
//check if selected button is correct
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtons.children).forEach(button=>{
    setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
}else{
    startButton.innerText = 'restart'
    startButton.classList.remove('hide')
    
}


}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')

    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions = [
    {
        question: 'is HTML a programming language?',
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true }
        ]
    },
    {
        question: 'is HTML a programming language?',
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true }
        ]
    },
    {
        question: 'is HTML a programming language?',
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true }
        ]
    },
    {
        question: 'is HTML a programming language?',
        answers: [
            { text: 'true', correct: false },
            { text: 'false', correct: true }
        ]
    }
    
    
]
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    setNextQuestion()
})

