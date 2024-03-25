// push() : 배열 맨 끝 데이터 추가

var pets = ['멍멍이', '야옹이', '쩝쩝이']

console.log(pets);

pets.push('징징이');
pets.push('어흥이','망망이','닭둘긔');

console.log(pets);

// pop(): 배열 맨 끝 데이터 삭제

var a = pets.pop();
var b = pets.pop();
pets.pop();
console.log(pets);
console.log(a);
console.log(b);

// shift() : 배열의 맨 첫 데이터 삭제
// unshift() : 배열의 맨 첫 데이터 추가
console.log('========================');
pets.shift();

console.log(pets);

pets.unshift('뽈뽈이');

console.log(pets);