// 랜덤 정수 생성하기 : Math.random()

// 1이상 10이하의 랜덤 정수 생성

// Math.random()        0.0 <= ~ < 1.0
// Math.random()*10     0.0 <= ~ < 10.0

// Math.floor() : 소수점이하를 버림
// Math.floor(9.229) -> 9

// Math.floor(Math.random()*10)       0 <= ~ < 10
// Math.floor(Math.random()*10)+1     1 <= ~ < 11

// 랜덤 범위 정수값 공식;
// x ~ y 랜덤정수 생성
// Math.floor(Math.random() * (y - x + 1)) + x;
// ex) 117 ~ 142
// Math.floor(Math.random() * (142 - 117 + 1)) + 117;
// Math.floor(Math.random() * (26)) + 117;
// 걍 읽으면 된다 0.0~1.0 이 있는데 26을 곱해서 0.0~26.0 이 되고 각 항에
// 117을 더해주니 117~142가 된다. 굿.

var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤값: ${randomNumber}`);

var score = Math.floor(Math.random() * 101);
console.log(`점수는 ${score}점 입니다.`);

if (score >= 60) {
  console.log("합격하셨습니다");
}
else {
    console.log("다시 하셔야겠네요~");
}
