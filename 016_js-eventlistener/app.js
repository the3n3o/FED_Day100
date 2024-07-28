let paragraphElement = document.querySelector("p");

function changeParagraphText() {
    paragraphElement.textContent = "Clicked !";
    console.log('Paragraph Clicked!')
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputTextElement = document.querySelector('input');

function  retrieveUserInput() {
    let enteredText = inputTextElement.value;
    console.log(enteredText);
}

inputTextElement.addEventListener('input',retrieveUserInput);