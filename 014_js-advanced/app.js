console.dir(document);
// window 객체의 document 속성을 통해 DOM에 접근 (window.document)

// alert();
// window.alert(); 

// window 오브젝트 & document 오브젝트
// widnow obj - Holds information and functionality related to the active browser window / tab
// document obj - Holds information and functionality to the loaded website content

// DOM = Document Object Model
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// --------------------------------------
//document.body.children[1].children[0].href = 'https://google.com';
// --------------------------------------

// body에 있는 a태그보다 head 에 script 가 먼저 실행되어서 오류가 생김
// console.log(document) 나 console.dir(document) 의 경우 기존에 html 문서가 이미 기록되어있고, 그것을 불러오기 때문에 html 문서 상단(head)에 있어도 올바르게 실행된다. 
// 이것을 해결하는 방법은 2가지이다.
// 1. body 태그 내부 끝에다 script 를 넣기. (직관적이지만 비추)
// 2. head 단에 그대로 script 태그를 사용하지만 defer 속성을 추가해주기.

// defer 속성
// boolean 속성이기 때문에 value를 따로 넣지않고 추가해주기만 해도 활성화
// defer은 전체 문서가 실행되기 전까지 스크립트 실행이 지연되어야 한다고 브라우저에게 알려주는 속성.
///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// document.body.children[1].children[0].href = 'https://google.com';
// 위와 같이 Drill Into Elements 방식으로 DOM을 파고드는 방식이 있고

// document.getElementByld('some-id');
// document.querySelector('.some-class');
// 혹은 위와 같이 Query Elements 방식으로 브라우저가 유저에게 제공하는 일부 유틸리지 함수(CSS로 치자면 id나 class와 같은)로 특정 명령을 사용해서 특정 요소를 쿼리 할 수도 있다.
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// DOM 드릴링

console.dir(document.body.children[0]);
console.dir(document.body.firstChild);
console.dir(document.body.firstElementChild);
// firstChild 의 경우 DOM에 HTML 요소만 있는 것이 아니라 브라우저에 의해 저장된 텍스트도 있기 때문에 결과가 #text로 나온다.

console.dir(document.body.childNodes);
// 노드는 기본적으로 텍스트와 HTML 요소이기 때문에 HTML 컨텐츠가 노드로 해석될 수 있다. (위 코드를 실행하면 노드리스트가 나온다.)
console.dir(document.body.childNodes[1]);
// > h1 

// 즉 firstChild 는 첫번째 노드를 뜻하고 fisrtElementChild 는 첫번째 요소를 뜻한다.

// DOM의 텍스트노드에는 HTML 문서에 공백 데이터들도 포함이 된다.
// 그래서 firstChild 의 값을 살펴보면 data: "\n    " 으로 표시되어있다. 이는 <body>태그 이후의 줄 바꿈과 공백을 뜻한다.
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// HTML 에서 새로운 요소들이 추가가 된다면 기존에 드릴링으로 작성했던 코드들이 오류를 일으킬 수 있다. (app.js:17 참고)
// 이를 해결하는 2가지 방법이 있다.

// document 객체의 getElementById 메서드 사용하기. (id 방식)
let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com'

// querySelector 메서드 사용하기 (CSS 선택자 방식)
anchorElement = document.querySelector('#external-link');
anchorElement.href = 'https://naver.com'
// 꼭 ID가 아니여도 CSS에서 사용하던 선택자 방식으로 잡아줄 수 있음.
// 예시 : document.querySelector('p a');

////// 기본적인 쿼리 메서드 //////

// document.getElementById('some-id');
// ID로 HTML 요소 선택

// document.getElementByClassName('some-class');
// Class로 HTML 요소 선택

// document.querySelect('some-css-selector');
// CSS 선택자에 의해 쿼리/선택된 첫 번째 요소

// document.querySelectAll('some-css-selector');
// CSS 선택자에 의해 쿼리/선택된 모든 요소

// document.getElementByTagName('Tag');
// HTML 태그 유형의 모든 HTML 요소

/////////////////////////////////////////////////////

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a');
// createElement
newAnchorElement.href = 'https://google.com'; 
newAnchorElement.textContent = 'google';
// 1번에서는 'a' 를 createElement 했지만 html 문서에서는 나타나지 않음

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p');

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);
// 2번에서 선언 해준 첫번째 p태그.append(추가) -> 매개변수를 (1번인 newAnchorElement)

/* let parentElement = firstParagraph.parentNode;
parentElement.insertBefore(newAnchorElement,firstParagraph); */

// firstParagraph.insertAdjacentElement('afterend', newAnchorElement);
// insertAdjacentElemnet 의 매개변수 4가지 
// beforebegin : 요소 앞에 삽입
// afterbegin : 요소 안쪽 첫번째 자식으로 삽입
// beforeend : 요소 안쪽 마지막 자식으로 삽입
// afterend : 요소 뒤에 삽입

// 이해하기 쉽게 태그를 <begin>content<end> 로 생각하면 될듯? 