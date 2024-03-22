let a = +prompt('정수를 입력해 주세요.');
let result = '';
let b = 0;

for (let i=1; i<=a; i++) {
  if (a%i === 0) {
    result = result + i + ' ';
    b++;
  }
}

alert (`${result} 약수는 ${b}개 입니다.`);
// console.log(i);

// 1 2 3 6 9 18
// 1 2 4 8
// 

// for 문 let i=1 은 전역변수 자동설정 떄문에 let 키워드를 써줘서 for문 안에서만
// let 변수가 적용된다.