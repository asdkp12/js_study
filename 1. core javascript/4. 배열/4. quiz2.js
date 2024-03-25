/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
   입력받은 값들을 배열에 순차적으로 저장합니다.
   
2. '그만'이라고 입력하면 질문을 멈추고
   입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/


var total = 0;
var input = 0;
var arr = [];
var count = 0;

while (true) {
  input = prompt('더하려는 값을 입력하세요. 그만 을 치면 값이 출력됩니다');
  count++;
  if (input === '그만') {
    break; //가까운 반복문 탈출
  } else {
    arr.push(+input);
    total = total + +input;
    if (count === 6) break;
  }
}
alert(`${arr}총합:${total}`);
// 1.pormpt 창을 뜨워서 받은 값들을 배열로 저장
// 변수를 만들어서 저장해야됨
// 2. 그만 이라고 칠때까지닌까 while문 사용하고 break는 그만을 prompt에 쳤을때
// 3. 배열로 저장한 값들의 합을 alert로 출력.
// 다하면 최대 6개 6개일경우 끝나게