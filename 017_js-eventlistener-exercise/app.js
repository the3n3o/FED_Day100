let inputCharsElement = document.querySelector('#productname');

let remainingCharsElement = document.querySelector('#remaining-chars');

let maxAllowedChars = inputCharsElement.maxLength;

function changeRemainingChars(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    let remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingChars;
}

inputCharsElement.addEventListener('input',changeRemainingChars);