// 가로세로 별찍기 4 . 7 입력시 4행 7

let a = prompt('횡 입력');
let b = prompt('종 입력');
let result = '';

for (let i = 0; i < a; i++) {
 for (let l = 0; l < b; l++ ) {
  result = result + '*';
 }
 result = result + '\n';
}

alert (result);