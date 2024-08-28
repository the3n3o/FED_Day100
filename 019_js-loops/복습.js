// 1. Calculate
// 1번 요소 변수 선언
const userNumberElement = document.querySelector("#user-number");
const outputParagraph = document.querySelector("#calculated-sum");
const calculatorButton = document.querySelector("#calculator button");

function calculate() {
    const userNumber = userNumberElement.value;
    // 해당 변수는 함수 내부에서 선언되어야함, 왜냐하면 이벤트가 발생할 때 마다 유저넘버 벨류를 리슨해야 하므로 외부에서 선언하게 된다면 초기 설정된 값 그대로 끌고가기 때문에 반응이 없어짐.
    let outputNumber = 0;
    for (let i = 0; i <= userNumber; i++) {
        outputNumber = outputNumber + i;
        // ex. userNumber = 4,
        //  0+0 , 0+1 , 1+2 , 3+3 , 6+4 = 10
    }

    outputParagraph.textContent = outputNumber;
    outputParagraph.style.display = "block";
}

calculatorButton.addEventListener("click", calculate);

// 2. Highlight
// 2번 요소 변수 선언
const highlightButton = document.querySelector("#highlight-links button");
const highlightAnchorElement = document.querySelectorAll("#highlight-links a");

function highlight() {
    for (const highlightAnchor of highlightAnchorElement) {
        highlightAnchor.classList.add("highlight");
    }
    // highlightAnchorElement 는 array 형태로 모든 a태그를 내포하고 있는 노드리스트이다.
    // 각 요소들을 순차적으로 접근해서 highlightAnchor 라는 변수를 할당하고, 그 변수에 클래스를 추가해준다는 것.
}

highlightButton.addEventListener("click", highlight);

// 3. User Data
// 3번 요소 변수 선언
const userDataButton = document.querySelector("#user-data button");
const userListElement = document.querySelector("#output-user-data");
// 유저 데이터 obj
const userDataList = {
    FirstName: "Neo",
    LastName: "Anderson",
    Age: 30,
};

function displayUserData() {
    userListElement.innerHTML = "";
    for (const key in userDataList) {
        const userDataLiElement = document.createElement("li");
        const outputText = key.toUpperCase() + ": " + userDataList[key];
        userDataLiElement.textContent = outputText;
        userListElement.append(userDataLiElement);
    }
}

userDataButton.addEventListener("click", displayUserData);

// 4. Roll the Dice
// 4번 요소 변수 선언
const diceButton = document.querySelector("#statistics button");

function rolldice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const userTargetNumber = document.querySelector("#user-target-number");
    const diceRollsListElement = document.querySelector("#dice-rolls");
    const enteredNumber = +userTargetNumber.value;
    // list 초기화
    diceRollsListElement.innerHTML = "";
    // target 값과 일치하는지에 대한 불리언
    let hasRolledTargetNumber = false;
    // 몇번 돌렸는지?
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rolldice();
        numberOfRolls++;

        const newRollsListElement = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + " : " + rolledNumber;
        newRollsListElement.textContent = outputText;

        diceRollsListElement.append(newRollsListElement);
        /* if (rolledNumber == enteredNumber) {
            hasRolledTargetNumber = true;
        } */
       hasRolledTargetNumber = rolledNumber == enteredNumber;
    }
    const outputTargetNumberElement = document.querySelector('#output-target-number');
    const outputTotalRollsElement = document.querySelector('#output-total-rolls');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}


diceButton.addEventListener("click", deriveNumberOfDiceRolls);