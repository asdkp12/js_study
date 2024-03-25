

var n1 = 10;
var n2 = '20';

console.log(n2+n1);

var n3 = n1+'';
console.log(typeof n3);
//더하기는 문자열로 돼서 '2010' 이런식

var n4 = n2 - n1 -5 - '3';
console.log(n4);
// 이새기 또 빼기는 숫자로 해줌 ㅋㅋ

var n5 = n1 * n2;
console.log(n5);
// 곱셈도 숫자로 해줌

var n6 = 'hello' * 3;
console.log(n6);
// 근데 ''안에 문자열이면 곱셈 안해줌. NaN찍힘.

console.log('=======================');

var n7 = +'99';
// 이런식으로 숫자로 된 문자열 앞에 +,- 를 붙여주면 숫자로 형변환.
// +prompt 를 생각해보자

console.log(true + false);
// true = 1
// false = 0

console.log('=======================');

// while (1) {

// }

// falsy : undefined, null, 0, NaN, ''

if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (null) console.log('hello-3');
if (undefined) console.log('hello-4');
if (NaN) console.log('hello-5');

if (99) console.log('hello-6');
if (-87.876) console.log('hello-7');
if (`알룡?`) console.log('hello-8');
// 아무튼 falsy 값 5개 를 제외하고 모두 truthy 로 판단

for (var i = 1; i <= 10; i++) {
  if (i % 2) {
    console.log(`${i}는 짝수입니다.`);
  } else {console.log(`${i}는 홀수입니다.`);
}
} 

// 나누기 값이 0 일때를 생각하자
console.log('=========================');
var apple = 10;
if (apple) {
  console.log('사과있음');
} else {
  console.log('사과없음');
}

var n = 20;
var flag = n > 10;

if (!flag) {}
