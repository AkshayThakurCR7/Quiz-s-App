const quizDB=[
    {
        question: "Q1: What does Html stand for?",
        a: "Hellow To My Land",
        b: "Hyper Text Markup Langauge",
        c: "Hyper Text Machine Langauge",
        d: "None Of The Above",
        ans:"ans2"
    },
    {
        question: "Q2: What is the full form Css?",
        a: "Cascading Style Sheets",
        b: "Crazy Solid Shape",
        c: "Computer Style Sheets",
        d: "None Of The Above",
        ans:"ans1"
    },
    {
        question: "Q3: What is the full form Http?",
        a: "Hyper Transfer Text Protocol",
        b: "Hyper Text Transfer Protocol",
        c: "Hexagonal Text Transfer Protocol",
        d: "Hexagonal Text Transfer Prototype",
        ans:"ans2"
    },
    {
        question: "Q4: Who invented Java?",
        a: "Bajarnae",
        b: "Deniss Ritche",
        c: "Linus Torvalds",
        d: "James Gosling",
        ans:"ans4"
    },
    {
        question: "Q5: What is the full form JS?",
        a: "Java Style",
        b: "Java Script",
        c: "Java Store",
        d: "Java Strict",
        ans:"ans2"
    },
    {
        question: "Q6: Where is RAM located?",
        a: "Expansion Board",
        b: "External Drive",
        c: "Mother Board",
        d: "All of above",
        ans:"ans3"
    },
    {
        question: "Q7: Full form of URL is ?",
        a: "Uniform Resource Locator",
        b: "Uniform Resource Link",
        c: "Uniform Registered Link",
        d: "Unified Resource Link",
        ans:"ans1"
    },
];
const quesTion =document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;


const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    quesTion.innerHTML=questionList.question;
    option1.innerHTML=questionList.a;
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d;
}
loadQuestion();

let answer;
const getCheckedAnswer=()=>{
answers.forEach(element => {
    if(element.checked){
        answer=element.id;
    } 
});
return answer;
};
const deselctAll=()=>{
    answers.forEach((element)=>element.checked=false);
}

submit.addEventListener('click' , ()=>{
    const checkedAnswer=getCheckedAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
        
    };
    questionCount++;
    deselctAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        if(score>=quizDB.length/2){
        showScore.innerHTML=`<h3>You scored ${score}/${quizDB.length}</h3>
        <h4 id="won">You are Pass!</h4>
        <button class="btn" onclick="location.reload()">Play Again</button> `;}
        else {
            showScore.innerHTML=`<h3>You scored  ${score}/${quizDB.length}</h3>
                    <h4 id="loss"> Better luck next time !</h4>
            <button class="btn" onclick="location.reload()">Play Again</button> `; 
        }
        showScore.classList.remove('scoreArea');
    }
    
})