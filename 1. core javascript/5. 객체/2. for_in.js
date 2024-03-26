let phone = {
  company: '삼성',
  color: '펄 화이트',
  model: '갤럭시 S24 ultra',
  price: 120000
};

// 배열의 for of 와는 다르게 값이 아닌 키가 반복된다.
for (var data in phone) {
  // console.log(data);

  console.log(phone[data]);
  // console.log(phone.data);

  // console.log(typeof data);
};

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티를 추가하고 싶음
console.log('============================');
console.log('model' in phone);
// 연산자 우선순위에서 !가 더 쌔기때문에 괄호로 묶어줌

if (!('memory' in phone)) {
phone.memory = '32GB';
}

// 
let newkey2 = 'memory'
if (!(newkey2 in phone)) {
phone[newkey2] = '32GB';
}

console.log(phone);