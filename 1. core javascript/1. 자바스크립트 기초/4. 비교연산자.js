
var a = 5; //아스키코드 5
var b = '5'; //아스키코드 53

console.log(a == b);
console.log(a === b);

console.log('=============');

console.log('0'=='');
console.log(0=='');
console.log('0'==0);
console.log(false=='false');
console.log(false=='0');

console.log('=============');

//대소비교
          //97   65
console.log('a'>'A');
          //99   97
console.log('c'<'a');
console.log('강'<'황');
          //97 99  97 100
console.log('ace'<'ade');
//문자비교는 사전에서 뒤에 나오는게 크다.