let n = +prompt('첫번째 숫자 입력');
let m = +prompt('두번째 숫자 입력');
var a = 0;
if (n<=m) {
  while (n<=m){
    a = a + n;
    n++;
  }
  alert (a);
} else {
  while (n>=m){
    a= a+m;
    m++;
  }
  alert (a);
}

// 범위값 정수들의 합

// x ~ y 까지 등차수열의 합

//아래는 while-basic.js 마지막에서 따옴

var x = +prompt('첫번째 숫자')
var x = +prompt('두번째 숫자')
var total = 0;

var i = x;
while (i<=y) {
  total += i;
  i++
}

alert(`${total}`);
