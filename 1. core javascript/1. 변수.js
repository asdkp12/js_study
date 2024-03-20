
var result; //변수선언

result = 10 + 20; //값을 변수에 할당 (대입)

var multiple = result * 2;

console.log(multiple);


var fruit;
fruit = '자몽'; //초기화
console.log(fruit);

var food = '볶음밥';
food = '돈까스'; //재할당
console.log(food);

// 변수 이름 규칙

// var 7number; (x)
// var num7ber; (o)

// var user name; (x)
var current_login_user_name; //snake case
var currentLoginUserName; // camel case

var apple;
var APPLE;
var Apple;
//대소문자 구분

// var myPetName!; (x)
var $myPetName_;

// var for; (x)
var For; // O
var lEt; // O

var 쪨리 = '곰표젤리'; //(x)


var myMoney = 1000;
const $orange = 'ffa808';

// $orange = 'asdasd' (const는 재할당 불가능.)

console.log($orange);

const COLOR_RED = "#F00";
// - 기억하기 힘든 값을 변수에 할당해 별칭으로 사용하는 것은 널리 사용되는 관습입니다.
// - 이런 상수는 대문자와 밑줄로 구성된 이름으로 명명합니다.