const inputCharsElement = document.querySelector('#productname');

const remainingCharsElement = document.querySelector('#remaining-chars');

const maxAllowedChars = inputCharsElement.maxLength;

function changeRemainingChars(event) {
    const enteredText = event.target.value;
    const enteredTextLength = enteredText.length;
    const remainingChars = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingChars;
    
    if (remainingChars === 0) {    
    // 가장 특정성이 강한 조건 : 남은 문자가 정확히 0일 때
    inputCharsElement.classList.add('error');
    remainingCharsElement.classList.add('error');
    inputCharsElement.classList.remove('warning');
    remainingCharsElement.classList.remove('warning');
    
    } else if (remainingChars <= 10) {
    // 남은 문자가 1부터 10까지일 때
    inputCharsElement.classList.add('warning');
    remainingCharsElement.classList.add('warning');
    inputCharsElement.classList.remove('error');
    remainingCharsElement.classList.remove('error');

    } else {
    // 남은 문자가 11 이상일 때 (즉 if, else if가 거짓일 때)
    inputCharsElement.classList.remove('error', 'warning');
    remainingCharsElement.classList.remove('error', 'warning');
    }
}

inputCharsElement.addEventListener('input',changeRemainingChars);

// JS 로 Style

//remainingCharsElement.style.backgroundColor = 'grey';

/* inputCharsElement.className = 'warning';
remainingCharsElement.className = 'warning'; */
// 이 방법은 기존 class가 있다면 overwrite 하는 단점이 있음.
// 그래서 아래와 같은 방법을 추천함

// 빼는 방법은 .remove