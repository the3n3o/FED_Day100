// Math operations

console.log(10 + 4);
console.log(10 - 4);
console.log(10 * 4);
console.log(10 / 4);

console.log(10 % 4); // 10 / 4 => 나머지 2
console.log(10 % 3); // 나머지 1
// modulus 연산 (나머지remainder 연산)
// 정수와 부동소수점 (Floating-point)

console.log((10 + 3 - 5) * 10);

let result = (10 + 3 - 5) * 10;
result = 10 * 4; // 40
result = result + 1; // 41
// 이전 변수 계산식이 수행된 다음에야 다음 계산식이 저장되기 때문에
// 등식 우측에 같은 변수가 들어갈 수 있다.

result++; // result = result + 1
result--; // result = result - 1

result += 5; // result = result + 5
result -= 5; // result = result - 5
result /= 5; // result = result / 5
result *= 5; // result = result * 5
// 추가 예시
// age = 4 ** 3 
//ㄴ age = 4 * 4 * 4

console.log(result);

console.log("Neo" + " " + "Anderson");
console.log('neo' - 'ax'); // NaN = Not a Number
// Strings 에선 + 만 가능


// 값 유형

let a = 'hi' + ' there'; 
// 'hi there' => a string
let b = 'the number' + ' 2'; 
// 'the number 2' => a string
let c = 'the number' + 2; 
// 'the number2' => a string
let d = 2 + 2; 
// 4 => a number
let e = 2 + '2'; 
// '22' => a string! (i.e. the number 2 is treated like a string '2' here)
let f = '2' + '2'; 
// '22' => a string! ('2' and '2' concatenated)
let g = '2' * 3; 
// 6 => a number

// 여기서 알 수 있는 점은 + 와 - 는 문자열로 취급하지만
// * 와 / 의 경우 연산에 실패하는 대신 문자열을 숫자로 변환 시도하고 그 숫자를 연산에 대신 사용하려고 시도한다. 그래서 g의 경우 6(number)의 값을 얻는다. [같은 경로 내 pdf 참조]


let userName = 'Neo';
console.log(userName.length);
// 위 변수에서 strings가 object가 아님에도 불구하고 메서드를 사용할 수 있는 이유는 자바스크립트 내장 기능으로서 생성되는 모든 문자열을 보이지않는 오브젝트로 wrap 하기 때문이다.

console.log(userName.toUpperCase());