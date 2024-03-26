// console.log(`김철수님 안녕하세요! hello!!`);
// console.log(`오늘도 즐거운 하루되세요!!`);

// // 코드 100줄 정도 작성...

// console.log(`박영희님 안녕하세요! hello!!`);
// console.log(`오늘도 즐거운 하루되세요!!`);

// // 코드 500줄 정도 작성...

// console.log(`뽀로로님 안녕하세요! hello!!`);
// console.log(`오늘도 즐거운 하루되세요!!`);

// 함수 정의 (함수를 정규화 즉, 만든다.)

// 관례 : 변수는 동사형
function sayHello(userName) {
  console.log(`${userName}님 안녕하세요! hello!!`);
  console.log(`오늘도 즐거운 하루되세요!!`);
}

// 함수 호출 (사용한다.)

sayHello('둘리');

function makeLine() {
  console.log('=============================================================');
}

makeLine();

// 나의 프로그램에서는 원의 넓이를 자주 구함

// 반지름이 5인 원의 넓이
let circle = PI * 5 ** 2;
console.log(circle);

// 반지름이 r인 원의 넓이를 구하는 함수 정의
function calcAreaCircle(r) {
  return PI * r ** 2;
}
const PI = 3.141592265;


// 반지름이 7인 원의 넓이
console.log(calcAreaCircle(7));


// 게시글을 삭제하는 함수
function removeBoardArticle() {};