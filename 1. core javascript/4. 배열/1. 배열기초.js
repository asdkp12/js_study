
var food1 = '짬뽕';
var food2 = '탕수육';
var food3 = '자몽';
var all = `${food1}, ${food2}, ${food3}`;

// 변수하나로 여러 데이터를 관리하면 좋겠다 => 배열
// 배열로 만들면 데이터를 옆집에 만들어서 속도 측면에서도 효율적이다.

var arr = [10,20,30,40,50,60]

console.log(typeof arr);
//object
// 객체라는것은 여러 데이터.
console.log(arr[1]);
console.log(arr[2] ** 2);
console.log(arr[2]);

arr[1] = 99;
arr[3]++;

console.log(arr);

// 배열 데이터 수 확인

console.log(arr.length);

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length - 1]}`);

console.log('==========================');
// 배열데이터 순회 (전체참조: travis)

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log('==========================');

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// for ~ of 반복문 (배열 전용 반복문)

var weekDays = ['월','화','수','목','금','토','일',];
console.log('==========================');

// for (var i = 0; i < weekDays.length; i++) {
//   console.log(`${weekDays[i]}요일!`);
// }

for (var day of weekDays) {
  console.log(`${day}요일!!`);
}

for (var n of [1,3,5,7]) {
  console.log(`${n}`);
}

// of 뒤에 배열 [] 이 와야한다.
// of 앞에는 변수를 하나 만들어준다.
// 작동순서 = 월을 day 에 저장해서 출력 + 화를 day 에 저장해서 출력 + ... + 일을 day 에 저장해서 출력.
// 즉 전체를 순회하는 코드이다.



// 배열 생성 관례
//  이름 복수형, -List 어미
var fruits = ['자몽','딸기','오렌지', ];
var fruitList = ['자몽','딸기','오렌지'];
var fruitArray = ['자몽','딸기','오렌지'];

console.log(fruits.length);

var tags = ['<li>오렌지</li>', 
'<a href=#>링크</a>',
'<h1>로고</h1>',
'<h2>로고</h2>',
]