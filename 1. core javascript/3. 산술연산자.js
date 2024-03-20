// js는 정수 나눗셈이여도 실수 결과값이 나옴
console.log(27/5);

//나머지 연산
console.log(27%5);
console.log(4%10);

console.log(5%0);
// console.log(0%5);

//제곱연산

console.log(3**4);

console.log('============');

var x = 3;
x++;
++x;
console.log(`x: ${x}`);

// 전위 연산, 후위 연산


var n1 = 10;
var n2 = n1++;
console.log(`n1: ${n1}, n2: ${n2}`);

var n3 = 10;
var n4 = ++n3;
console.log(`n3: ${n3}, n4: ${n4}`);

var xx = 5;
// xx++
xx = xx + 1;
console.log(xx);

// xx--;
// xx = xx - 1;

// 같은 코드로는 xx-=1; 이 있다. 빼서 대입하란 얘기임.  =-1 이렇게쓰면 -1이 대입됨.
// 둘은 같은 연산이지만 처리 속도가 다르다.