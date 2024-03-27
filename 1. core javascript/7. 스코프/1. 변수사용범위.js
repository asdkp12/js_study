var x = 99; // global scope : 전역 변수
var y = true;

function foo() {
  // var x = '홍길동'; // local scope : 지역 변수
  console.log(`foo x: ${x}`);
  var y = '메롱';
  console.log(`foo y: ${y}`);
  var z = 100;
  return x;
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);
console.log(`z: ${z}`);