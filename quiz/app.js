function mySubmit(event) {
event.preventDefault();

const correctAnswer1 = "script";
const correctAnswer2 = "document.getElementById('demo').innerHTML = 'Hello World!'";
const correctAnswer3 = "5";
const correctAnswer4 = "blue";

let chosenAnswer1 = document.querySelector("input[name='question1']:checked").value;
let chosenAnswer2 = document.querySelector("input[name='question2']:checked").value;
let chosenAnswer3 = document.querySelector("input[name='question3']:checked").value;
let chosenAnswer4 = document.querySelector("input[name='question4']:checked").value;

let points = document.getElementById("score");
let total = 0;

if (chosenAnswer1 === correctAnswer1) {
    total = 5;
    points.innerHTML = total;
}

if (chosenAnswer2 === correctAnswer2) {
    total += 5;
    points.innerHTML = total;
}

if (chosenAnswer3 === correctAnswer3) {
    total += 5
    points.innerHTML = total;  
}

if (chosenAnswer4 === correctAnswer4) {
    total += 5
    points.innerHTML = total;  
}

else {
    points.innerHTML = total;
}



}



