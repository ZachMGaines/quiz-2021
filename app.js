// import functions and grab DOM elements
import {
    isYes,
 } from './utils.js';
// initialize state

// set event listeners to update state and DOM


const button = document.getElementById('button')
const results = document.getElementById('results')
const owl = 'Owl'


button.addEventListener('click', () => {
    alert (`Welcome 2 ${owl}'s Quiz!`)
    const startConfirm = confirm('Are you ready to play?') 
        if (!startConfirm) {
        return alert('Bubye :(')
    }
    const letsBegin = alert('Let us begin...')
    const name = prompt('What is your name?')
    
    let score = 0;

    const firstQuestion = prompt(`Can some ${owl}'s live over 20 years old?`)
    const secondQuestion = prompt(`Do ${owl}'s live in Oregon?`)
    const thirdQuestion = prompt(`Are ${owl}'s loud flyers?`)

    if (isYes(firstQuestion)) {
        score++;
    }
    if (isYes(secondQuestion)) { 
        score++; 
    }
    if (!isYes(thirdQuestion)) { 
        score++;
    }
      console.log(score)  
    const resultsString = `Good Job ${name}, you got ${score} questions right!`
            results.textContent = resultsString
})