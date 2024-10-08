const myName = 'Neo';

if (myName === 'Neo') {
    console.log('hello');
}

let isLoggedIn = true;

if (!isLoggedIn) {
    console.log('User is NOT logged in!')
} else {
    console.log('User is logged in!')
}

const enteredUserName = 'Neo'; // 빈문자열 & 0은 False 처리

if (enteredUserName) {
    // = (enteredUserName.length > 0) 즉 true
    console.log('Input is valid!');
}

// if (부울값)

// 5 == 5 true
// 5 == '5' true 
// 5 === '5' false 

// 5 != 5 flase
// 5 != '5' false
// 5 !== 5 false
// 5 !== '5' true

// 3 > 4 false
// 'a' > 'b' false
// 'cb' > 'ab' ture 
    // 글자별로 비교, 'c' > 'a' 
    // 만약 'ac' > 'ab' 라면 
    // 'a' 는 같으니 2번째 글자인 'c' > 'b' 
    // 즉 true 

// 5 >= 5 true
// 3 <= 2 false
// !(5 < 5) true
// !(5 <= 5) false

// && [and]   || [or]
// 5 === 5 && 3 === 3 true
// 5 === 5 && 3 === 2 false
// 5 === 4 && 3 === 2 false 
// 5 === 5 || 3 === 3 true
// 5 === 5 || 3 === 2 true
// 5 === 4 || 3 === 2 false 

// 2 === 2 || 2 === 3 && 5 === 6 ture
// &&(and) 가 더 우선순위기 때문에 2 === 3 && 5 === 6 을 먼저 평가
// 그럼 값은 false 가 나올 것 이고 그것을 2 === 2(true) 와 ||(or)
// 로 비교하기 때문에 값이 ture로 나온다.

// 풀어보자면
// 2 === 2 ||  ( 2 === 3 && 5 === 6 )
//  (true) ||       ( false )
// 임으로 true 값 반환
// 만약 or 부터 실행하고 싶다면 아래와 같이 식을 써주면 된다.
// (2 === 2 || 2 === 3) && 5 === 6
// 값은 false
