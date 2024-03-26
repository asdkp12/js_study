//매개변수=파라미터

// x 부터 y까지의 누적합을 구해야 함

// 1 ~ 10

function calcRangeTotal(x, y) {
  let total = 0;
  for (let i = x; i <= y; i++) {
    total += i;
  }
  return total;
}
console.log(calcRangeTotal(1, 10));

var result1 = calcRangeTotal(1, 5);
console.log(result1);


// 매개변수의 기본값

function sayHello(language='한국어') {

  //ES5
  // language = language || '한국어';

  switch (language) {
    case '한국어':
      console.log('안녕하세요');
      break;
    case '영어':
      console.log('HELLO~~');
      break;
    case '중국어':
      console.log('따쟈하오');
      break;
    case '일본어':
      console.log('콘니치와');
      break;
    default:
      console.log('우가우가~~~');
  }
}

sayHello();
sayHello('중국어')

// 매개변수가 없는 함수
function selectRandomPet(n) {

  let pets = ['멍멍이','야옹이','짹짹이','고라니','노루루']
  let rn = Math.floor(Math.random() * pets.length);
  return pets[rn];
}
let r1 = selectRandomPet(3);
let r2 = selectRandomPet(4);
let r3 = selectRandomPet(0);
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`r3: ${r3}`);

