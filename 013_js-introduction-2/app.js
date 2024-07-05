let age = 32;
let userName = "Max" + 
'other string' +
`another st
ring`;
/* 
+ 로 추가 숫자나 string 입력 가능
역따옴표로 string 안에서 줄바꿈 가능 
*/
let hobbies = ["Sports", "Cooking", "Reading", 1, 2];
/* arrays */
let job = {
    title: "Developer",
    place: "New York",
    salary: 50000,
};

/* 
object (객체)
{} 안에 레이블(key)들을 정해주고 : 뒤에 value를 넣어줌
*/

/* 
console.log(hobbies);
모든 arrays를 다 가져옴
*/
console.log(hobbies[0]);
/* arrays의 인덱스는 순서대로 0부터 가지고 있음  */
console.log(job.place);
/* obj.value */

let adultYears;

function calculateAdultYears(userAge) {
    return userAge - 18
}
/* =
function calculaterAdultYears(userAge) {
let result;
result = userAge - 18;
return result;
}
*/

/* 함수안에서의 변수는 함수안에서만 정의된다. */

adultYears = calculateAdultYears(age);
/* = adultYears = calculateAdultYears(32); */
console.log(adultYears);

/* age = 45; */
adultYears = calculateAdultYears(45);

console.log(adultYears);

let person = {
    name: 'Max', // Property
    greet() { // Method
        console.log('Hello!');
    }
};

person.greet();