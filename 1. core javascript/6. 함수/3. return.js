
//return은 함수의 탈출문(종료문)
function add(n1, n2) {
  console.log(`n1: ${n1}, n2: ${n2}`);
  return n1 + n2;

}

// 반환값(return): 함수 호출부로 함수의 결과값을 전달해주는 것

let result = add(10, 20) * add(add(1, add(1, add(1, add(1, 1)))), add(1, 1))

console.log(result);

// 리턴이 없는 함수
function multi(n1, n2) {
  console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

console.log('========================');

let r1 = multi(3, 4);
console.log(`r1:${r1}`);

multi(add(2, 3), add(5, 6));

// 리턴이 없는 함수는 변수에 저장하지 말고, 
// 다른 함수의 매개값으로도 쓰면 안됨
let r2 = add(multi(2, 4), multi(2, 2));
console.log(`r2:${r2}`);

// 데이터베이스를 접속하는 함수
// function connectDatabase(id, pw, auth){
//   let connet = getConnection;
//   // ...
//   // ...
//   return blahblahblah;
// }

// return이 없는 함수에서 return을 break처럼 사용하기
function callName(nickName) {
  let prohibits = ['바보', '멍청이', '메롱']
  if (prohibits.includes(nickName)) {
    console.log('나쁜말! (검지검지!)');
    return;
  }
  console.log(`${nickName}님 안녕하세요!`);
}

console.log('=======================');

callName('바보');