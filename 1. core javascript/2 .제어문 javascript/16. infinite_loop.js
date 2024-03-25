// while 문 사용 예시
// 랜덤으로 숫자를 1~100까지 돌릴때 77이 나오면 멈춘다.
// 몇번 반복할지 모르기 때문에 쓴다.
// 통상적으로 횟수가 정해져 있다 for문을 쓰는게 편하고
// 횟수가 정해져 있지 않다면 while을 쓰자
// for 문의 무한루프는 for (;;){} 이다.


// 1에서 100사이의 랜덤정수
// random() * (y-x+1) + x


while (true) {
  var rn = Math.floor(Math.random() * 10) + 1;
  console.log('hello');
  if (rn === 7) break;
}
console.log('반복문종료')