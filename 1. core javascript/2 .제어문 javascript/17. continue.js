// skip 하는거임

for (var i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue; //skip
  console.log(i);
}
console.log('반복문 종료')
// 위 코드는 짝수일때 스킵한다.

while (true) {
  var n = +prompt('수를 입력');

  if (n===0) break;
  else if (n===1) continue;

  alert('메롱');
}

alert('끗');