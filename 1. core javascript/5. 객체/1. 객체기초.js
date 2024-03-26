// 객체 생성
// 우리 집 강아지 정보 저장
var name = '뽀삐';
var kind = '진돗개';
var age = 3;
var injection = true;
var favorite = ['산책', '간식'];
var bark = () => console.log('왈왈!');

var dog = [
  '뽀삐',
  '진돗개',
  3,
  true,
  ['산책', '간식'],
  () => console.log('왈왈!'),
];


var dog = {
  name: '뽀삐',
  kind: '진돗개',
  age: 3,
  injection: true,
  favorite: ['산책', '간식'],
  bark: () => console.log('왈왈!')
};

console.log(dog.name);
console.log(dog.favorite);


// 우리 집 고양이 정보 저장
var cat = {
  name: '콩순이',
  kind: '코숏',
  age: 2,
  injection: true,
  favorite: ['낮잠', '방 어지르기'],
  bark: () => console.log('야옹야옹'),
  hate: null
};

console.log(dog.name);
console.log(cat.name);

let 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: 'abc',
    닉네임: '깜찍이',
    가입일자: '2023-12-22',
  },
  글내용: '블라블라',
  작성일자: '2024-11-12'
}
console.log(게시판글.작성자.계정명);


// 객체에 저장된 데이터 참조(조회)

console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[0]);

// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++
console.log(dog.age);

!dog.injection
console.log(dog.injection);

dog.favorite.push('꼬리흔들기');
console.log(dog.favorite[2]);

cat.favorite.splice(0, 1);
console.log(cat.favorite);

// 아래코드는 사본과 원본으로 인한 결과이다.
dog.favorite.slice(0).splice(1, 1).reverse();
console.log(dog.favorite);

// 객체를 참조하는 두번째 방법
console.log('=============================');

var key = 'name'
console.log(dog.name);
console.log(dog['name']);
console.log(dog[key]);
// console.log(dog[name]);
// ''가 중요하다.

//프로퍼티 수정 (기존에 있는 key로 접근)
console.log('===============================');

dog.age = 4;
cat.favorite[1] = '실뭉치'
cat.favorite[2] = '사냥하기'

console.log(dog);
console.log(cat);

// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
console.log('==============================');

cat.friend = '철수';

console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;

console.log(cat);