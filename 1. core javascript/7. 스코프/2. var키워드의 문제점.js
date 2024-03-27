// 1. 변수의 중복선언을 암묵적으로 허용
// var x = 10;
// let x = 10;

// .... 10만줄

// var x = 'ddd';
// let x = 'ddd';
// console.log(`x : ${x}`);


// 2. 블록 레벨 스코프를 지원하지 않음
var i = '메롱';

for (var i = 0; i < 5; i++) {
  console.log(`for - i: ${i}`);
}

console.log(`global-i : ${i}`);