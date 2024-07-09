console.dir(document);
// window 객체의 document 속성을 통해 DOM에 접근 (window.document)

// alert();
// window.alert(); 

// window 오브젝트 & document 오브젝트
// widnow obj - Holds information and functionality related to the active browser window / tab
// document obj - Holds information and functionality to the loaded website content

// DOM = Document Object Model

document.body.children[1].children[0].href = 'https://google.com';
// body에 있는 a태그보다 head 에 script 가 먼저 실행되어서 오류가 생김
// console.log(document) 나 console.dir(document) 의 경우 기존에 html 문서가 이미 기록되어있고, 그것을 불러오기 때문에 html 문서 상단(head)에 있어도 올바르게 실행된다. 
// 이것을 해결하는 방법은 2가지이다.
// 1. body 태그 내부 끝에다 script 를 넣기. (직관적이지만 비추)
// 2. head 단에 그대로 script 태그를 사용하지만 defer 속성을 추가해주기.

// defer 속성
// boolean 속성이기 때문에 value를 따로 넣지않고 추가해주기만 해도 활성화
// defer은 전체 문서가 실행되기 전까지 스크립트 실행이 지연되어야 한다고 브라우저에게 알려주는 속성.


// document.body.children[1].children[0].href = 'https://google.com';
// 위와 같이 Drill Into Elements 방식으로 DOM을 파고드는 방식이 있고

// document.getElementByld('some-id');
// document.querySelector('.some-class');
// 혹은 위와 같이 Query Elements 방식으로 브라우저가 유저에게 제공하는 일부 유틸리지 함수(CSS로 치자면 id나 class와 같은)로 특정 명령을 사용해서 특정 요소를 쿼리 할 수도 있다.