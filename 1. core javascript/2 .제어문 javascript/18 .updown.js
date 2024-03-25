var input;// = +prompt ('1~50사이의 무작위 숫자를 맞춰 보세요');
var rn = Math.floor(Math.random() * 50) + 1;
let low = 1;
let high = 50;
let chance = 10;

for (var i=1; true; i++) {
  input = +prompt (`${low}~${high}사이의 무작위 숫자를 맞춰 보세요. 남은 기회 ${chance}`);
  if (input > high ||input < low) {
    i--; alert ('잘못된 값 입니다');
    continue;
  }
  
  
  if (rn>input) {
    alert ('up'); chance = 10 - i;
    low = input;
    } else if (rn<input) { 
      alert('down'); chance = 10 - i;
      high = input;
      } else {
        alert('정답입니다');
        break;
        }
      }

//`${input}`