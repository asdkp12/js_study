let x;
x = "z";
x = "y";
console.log(x);

// const : 상수선언
// 수학에서의 상수가 아니라
// 변수 (변경가능한 데이터) 의 반대인 (변경 불가능한 데이터) 의미인 상수다.
const y = 1;
y = 2;
console.log(y);

const PI = 3.14159265;
const COLOR_GREEN = "#0f0";

/*
    $div.style.background = 'COLOR_GREEN';
*/

// 상수는 객체의 불변성을 유지할 수 있다.
const kim = {
  name: "엄준식",
  age: 30,
};
// 안에 프로퍼티는 바뀔 수 있음 이렇게.
kim.age = 31;
kim.name = "마이클 킴";

// 근데 이렇게 객체를 재선언 하는건 안됨.
kim = {
  name: "엄준식",
  age: 30,
};
