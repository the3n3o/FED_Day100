let age = 30;
alert(age);

// 성인나이 function_1
// 기본적인 구조

let adultYears;
// adultYears 라는 외부변수를 만들고
function calculateAdultYears() {
    adultYears = age - 20;    
}
// calculateAdultYears 라는 함수를 만들고 그 함수의 내용은
// adultYears 는 age - 20 이라는 내용.
age = 21;
// age 변수 값을 바꿔주고
calculateAdultYears();
// 지정한 함수(명령어)를 한 번 실행시켜 계산을 해줘야 한다.
alert(adultYears);
// 결과


// 성인나이 function_2
// 기본적인 구조에서는 외부 변수 이름이 바뀔때 내부 변수들도 바꿔줘야함. 그래서 return 을 써서 값을 내줄수 있음.

let adultYears2;
function calculateAdultYears2() {
    return age - 20;
}
age = 22;
calculateAdultYears2();
// 함수를 실행했으나 결과값이 adultYears2 라는걸 알 수 없으므로 아래와 같이 변수를 지정해줘야함
adultYears2 = calculateAdultYears2();
alert(adultYears2);


// 성인나이 function_3
// 만약 age 가 계속 바뀐다면 그때마다 age 변수를 새로 지정해줘야 하는데 매개변수(parameter)를 사용하면 함수에 데이터를 쉽게 전달할 수 있다.

let adultYears3;
function calculateAdultYears3(userAge) {
    return userAge - 20;
}
// 함수에 userAge 라는 파라미터를 설정해주고 값은 userAge - 20 이 나온다.
age = 23;
adultYears3 = calculateAdultYears3(age);
// 마찬가지로 함수 아웃풋을 변수에 저장해줌. 매개변수 _ 1 (외부변수)
alert(adultYears3);
adultYears3 = calculateAdultYears3(24);
alert(adultYears3);

// 성인나이 function_4 (번외)
// 함수 밖인 외부변수가 아닌 내부 변수를 지정하고 실행할수도 있음

let adultYears4;
function calculateAdultYears4(userAge) {
    let result;
    result = userAge - 20;
    return result;
}
// result 라는 내부 변수를 만들고 그 변수에 식을 넣고 결과값을 result로 내겠다는 뜻.

age = 25;
adultYears4 = calculateAdultYears4(age);
alert(adultYears4);

adultYears4 = calculateAdultYears4(26);
alert(adultYears4);