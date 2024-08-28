// 1. Calculate
// 1번 요소 변수 선언
const userNumberElement = document.querySelector('#user-number');
const outputParagraph = document.querySelector('#calculated-sum');
const calculatorButton = document.querySelector('#calculator button');

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
    outputParagraph.style.display = 'block';
}

calculatorButton.addEventListener('click', calculate);

// 2. Highlight
// 2번 요소 변수 선언
const highlightButton = document.querySelector('#highlight-links button');
const highlightAnchorElement = document.querySelectorAll('#highlight-links a');

function highlight() {
    for(const highlightAnchor of highlightAnchorElement) {
        highlightAnchor.classList.add('highlight');
    }
    // highlightAnchorElement 는 array 형태로 모든 a태그를 내포하고 있는 노드리스트이다.
    // 각 요소들을 순차적으로 접근해서 highlightAnchor 라는 변수를 할당하고, 그 변수에 클래스를 추가해준다는 것.
}

highlightButton.addEventListener('click',highlight);