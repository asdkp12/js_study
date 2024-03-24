const food = "돈까스";
const userName = "스윙스";

console.log(`${food} 의 왕 ${userName}`);

// 브라우저 전용 함수. : node js에서 사용 불가.
// pormpt () : 브라우저에서 입력을 할 수 있게 하는 함수
// confirm() : 브라우저에서 확인/취소를 할 수 있게 하는 함수
// alert() : 브라우저에서 알림창을 띄우는 함수

var yourName = prompt(`당신의 이름을 입력하세요!`);
alert(`입력한 이름: ${yourName}`);

var resultFlag = confirm("혹시 얼마있니? 가진거 다 내놓으렴?");
console.log(`나의 대답: ${resultFlag}`);
