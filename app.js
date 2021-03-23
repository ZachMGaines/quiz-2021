// import functions and grab DOM elements
import {
    isYes,
 } from './utils.js';
// initialize state

// set event listeners to update state and DOM


const button = document.getElementById('button')
const results = document.getElementById('results')
const z = 'Zach'


button.addEventListener('click', () => {
    alert (`Welcome 2 ${z}'s Quiz!`)
    const startConfirm = confirm('Are you ready to play?') 
        if (!startConfirm) 
            alert('Bubye :(')
    const letsBegin = alert('Let us begin...')
    const name = prompt('What is your name?')
    let score = 0;    
    const firstQuestion = prompt(`Is ${z} over 20 years old?`)
    const secondQuestion = prompt(`Was ${z} born in Oregon?`)
    const thirdQuestion = prompt(`Is ${z} a profesional web developer?`)

    if (isYes(firstQuestion)) score++;
    if (!isYes(secondQuestion)) score++;
    if (!isYes(thirdQuestion)) score++;
        
    const resultsString = `Good Job ${name}, you got ${score} right!`
            results.textContent = resultsString
})