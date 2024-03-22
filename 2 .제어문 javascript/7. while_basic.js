// 백틱 공부 $공부 03.20공부하면 됨
// while문 예시 스페이스바가 눌리는 동안 미사일을 쏘게 해라. 마우스 포인트가 있는 좌표로 이동할때까지 이동해라.

var begin=10, end=0, step=1;

var n = 10;

while (n >= 0) {
console.log(`${n}!!`);
n-=2;
};

// while (n >= 0) {
// console.log(`${n--}!!`);
// };
// 이렇게 하는게 정배 아닌가 왜 n--;을 저렇게 해도 되는거임

var begin=10, end=0, step=1;

var n = begin;

while (n >= end) {
console.log(`${n}!!`);
n-=step;
};

console.log('=================');

// 구구단
var level = 7;
var n = 1;
while (n <= 9){
  console.log(`${level}x${n} = ${level*n}`)
  n++;
}

console.log('=================');

// 10~34까지의 정수를 1씩 증가하면서 출력;

var m = 10; //begin

while (m <= 34) {
  if (m % 2 === 1) {
  console.log(m);
}
  m++
}

console.log('=================');

// 1 ~ 10 까지 등차수열의 합
var total = 0;

var i = 1;
while (i<=10) {
  total += i;
  i++
}

console.log(total);