const inputCharsElement = document.querySelector('#productname');
const remainingCharsElement = document.querySelector('#remaining-chars');
const maxAllowedChars = inputCharsElement.maxLength;

function changeRemainingChars(event) {
    const inputChars = event.target.value;
    const inputCharsLength = inputChars.length;
    const remainingChars = maxAllowedChars - inputCharsLength;

    remainingCharsElement.textContent = remainingChars;
}

inputCharsElement.addEventListener('input',changeRemainingChars);

inputCharsElement.classList.add('warning');
remainingCharsElement.classList.add('warning');