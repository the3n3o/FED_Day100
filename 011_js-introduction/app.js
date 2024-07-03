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
alert(hobbies);
모든 arrays를 다 가져옴
*/
alert(hobbies[0]);
/* arrays의 인덱스는 순서대로 0부터 가지고 있음  */
alert(job.place);
/* obj.value */

age = 45;
let adultYears = age - 18;
alert(adultYears);