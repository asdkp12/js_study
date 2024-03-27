// 함수 선언문 (정의문) ';' 안찍음
// 먼저 호출하고 나중에 함수를 쓸 수 있음.
function add(n1, n2) {
  return n1 + n2;
}

const r1 = add(10, 30);
console.log(r1);

const plus = add;
console.log(typeof plus);
// 즉 함수도 하나의 데이터 이며 값이다.

const r2 = plus(5, 8);
console.log(r2);

const log = console.log;
log("zzz");

// 즉 라이브러리 함수를 만들어서 쓸수있다.

// 익명 함수 : 함수를 값(리터럴)으로 본 경우
// 함수 표현식 ';' 찍음
// 먼저 호출하고 나중에 함수를 쓸 수 없음.
const multiply = function (n1, n2) {
  return n1 * n2;
};

const r3 = multiply(3, 4);
console.log(`r3: ${r3}`);
// ;를 찍고 값으로 저장.
