const inputCharsElement = document.querySelector('#productname');

const remainingCharsElement = document.querySelector('#remaining-chars');

const maxAllowedChars = inputCharsElement.maxLength;

function changeRemainingChars(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingChars;
}

inputCharsElement.addEventListener('input',changeRemainingChars);

// JS 로 Style

//remainingCharsElement.style.backgroundColor = 'grey';

/* inputCharsElement.className = 'warning';
remainingCharsElement.className = 'warning'; */
// 이 방법은 기존 class가 있다면 overwrite 하는 단점이 있음.
// 그래서 아래와 같은 방법을 추천함

inputCharsElement.classList.add('warning');
remainingCharsElement.classList.add('warning');
// 빼는 방법은 .remove