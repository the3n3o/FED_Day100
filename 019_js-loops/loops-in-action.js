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