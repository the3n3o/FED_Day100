// for 문
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// for of 문 (array)
const users = ['neo','neo2','neo3','neo4'];

for (const user of users) {
    console.log(user);
}
// for of 의 경우 for 문으로 해석하면 아래와 같다.
//  for (let i = 0; i < someArray.length; i++) {
//      console.log(someArray[i]);
//  }
// someArray.length = 배열의 인덱스 요소 개수
// 즉 인덱스 0부터 .length(위 users 배열을 예시로 하면 4) 까지 console.log 한다는 뜻


// for in 문 (object)
const loggedInUser = {
    name: 'Neo',
    age: 30,
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]); 
    // propertName 의 값은 name , age , isAdmin 이므로
    // loggedInUser[propertName] 은 ['name','age','isAdmin'] 값을 반환한다.
    // 참고
    // loggedInUser['name']
    // = loggedInUser.name
}


// while 문
let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}
// while (ture) 로 진행하게 된다면 무한루프로 반복되기 때문에 충돌이 일어날 수 있음.
// 그래서 isFinished 라는 변수를 생성해서 false 불리언 값을 주고, while 문 내부에서 isFinished 변수를 재정의 해준다. 
// confirm 메서드를 통해 (alert랑 비슷하지만 예/아니요 선택가능) 대화 상자를 노출시킨다.
// while의 조건문에서 !isFinsihed 로 논리부정연산자를 사용해서 true 값으로 반환시켜 무한히 반복되게 하지만, 아까 재정의해준 confirm 메서드의 결과값이 ture 즉 "예"를 누르게 된다면 while 조건문은 false가 되어 반복문이 종료된다.

console.log('Done!');
// 반복문이 종료가 되어야 다음 코드가 진행되기 때문에 정상적으로 while 문이 끝났다면 Done 콘솔로그가 나타날것.