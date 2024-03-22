let a = +prompt('양의 정수를 입력하세요');
let result = '';
// 2의 제곱수들 중에서 a미만의 값들을 출력

for (let i=2; i<=a; i=i*2) {
  result = result + i + ' ';
}
alert (result);

// 입력값의 약수들을 출력, 약수가 몇개인지 출력.