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

const userDataList = {
    FirstName: 'Neo' ,
    LastName: 'Anderson' ,
    Age: 30
}

const userDataButton = document.querySelector('#user-data button');
const userDataUl = document.querySelector('#output-user-data');

function displayUserData() {

    for(const key in userDataList) {
        const userDatali = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + userDataList[key];
        userDatali.textContent = outputText;
        userDataUl.append(userDatali);
        // append와 insertAdjacentElement의 차이를 알자!
        // userDataUl.insertAdjacentElement('beforeend',userDatali);
        // append 는 단순히 요소를 마지막에 추가하는데 사용할 수 있으므로 코드가 더 간단해진다. 
        // insertAdjacentElement의 경우 텍스트는 넣지못하고 Element(요소) 만 추가할 수 있어서 유연성이 떨어진다. 하지만 단일 요소만 추가할 때는 더 명확한 선택일 수 있다.
    }

    // 최초 한번만 출력하고싶다면 이벤트 리스너를 제거해보자.
    userDataButton.removeEventListener('click',displayUserData);
    // 다른 방법으로는 상태 변수를 사용하는 것
    // let isUserDataDisplayed = false; // 상태 변수
    // function 안에 아래 if문을 넣자.
    // if (isUserDataDisplayed) {
    // return; // 이미 추가된 경우 함수 종료
    // }
    // if 문이 false 처리가 난다면 그 밑에 for문을 수행할 것이고 그 뒤에 아래와 같이 상태변수를 true로 반환시켜주면 다시 클릭이벤트가 발생하더라도 if 문에서 true 처리가 되어서 return(함수종료) 처리가 되어 for 문이 반복되지 않음.
    // isUserDataDisplayed = true;

    // 혹은 간단하게
    // userDataUl.innerHTML = ''; 를 함수 첫줄에 적어주면 버튼을 누를 때 마다 기존에 ul 안에 요소들을 싹 밀어주는 방법도 있음. 요 방법은 4번에서 사용 예정
}

userDataButton.addEventListener('click',displayUserData);


// 4. Statistics / Roll the Dice (복습 필수!)


const statisticsButton = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
    // 0 ~ 6 에서 부동 소수점을 제외하고 정수만 반환하기 위해 Math.floor 적용 (정확히는 반내림)
    // 그리고 + 1을 해줘야 반내림을 하더라도 1 ~ 6의 숫자를 반환함.
}

function deriveNumberOfDiceRolls() {
    const targetNumberElement = document.querySelector('#user-target-number');
    const diceRollsListElement = document.querySelector('#dice-rolls');

    const enteredNumber = targetNumberElement.value;
    // = +targetNumberElement.value; 처리 해주면 string이 아닌 number로 처리
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        numberOfRolls++;

        const newRollsListElement = document.createElement('li');
        const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber;
        newRollsListElement.textContent = outputText;

        diceRollsListElement.append(newRollsListElement);
        /* if (rolledNumber == enteredNumber) {
            // enteredNumber 즉 벨류는 string 처리되기 때문에 ==로
            hasRolledTargetNumber = true;
        } */
        // 위 if문과 같이 비교연산 할때는 아래와 같이 함축할 수 있다.
        hasRolledTargetNumber = rolledNumber == enteredNumber;
        // rolledNumber == enteredNumber 와 같은 비교연산은 불리언값을 만들어 내기 때문이다. 즉 rolledNumber 와 enteredNumber 값이 같다면 true, 아니라면 false를 반환하기 때문에 굳이 if 문을 쓰지 않더라도 hasRolledTargetNumber 변수가 불리언 값을 가지게 되기 때문이다.
        // 그렇다면 true 값을 반환하게 된다면 while 문 조건이 !true 즉 false가 될테니 while 문은 수행을 종료하게 될 것이다.
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;

}

statisticsButton.addEventListener('click',deriveNumberOfDiceRolls);