let paragraphElement = document.querySelector("p");

function changeParagraphText(event) {
    paragraphElement.textContent = "Clicked !";
    console.log('Paragraph Clicked!')
    console.log(event);
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputTextElement = document.querySelector('input');

function  retrieveUserInput(event) {
    /* let enteredText = inputTextElement.value; */
    let enteredText = event.target.value;
    console.log(enteredText);
    console.log(event);
}

inputTextElement.addEventListener('input',retrieveUserInput);