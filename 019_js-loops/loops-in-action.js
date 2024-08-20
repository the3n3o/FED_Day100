// 1. Calculator
const calculatorButton = document.querySelector('#calculator button');
const userNumberElement = document.querySelector('#user-number');

function calculate(event) {
    const userNumber = userNumberElement.value;

    let outputNumber = 0;
    for (let i = 0; i <= userNumber; i++) {
        outputNumber = outputNumber + i;
    }
    
    const outputParagraph = document.querySelector('#calculated-sum');
    outputParagraph.textContent = outputNumber;
    outputParagraph.style.display = 'block';
}

calculatorButton.addEventListener('click',calculate);

// 2. Highlight

const highlightButton = document.querySelector('#highlight-links button');
const highlightAnchorElement = document.querySelectorAll ('#highlight-links a');

function highlight() {

    for (const highlightAnchor of highlightAnchorElement) {
        highlightAnchor.classList.add('highlight');
    }
}

highlightButton.addEventListener('click',highlight);

// 3. Your Information