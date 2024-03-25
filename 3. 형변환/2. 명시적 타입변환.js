var x = '30.5', y = '40.5';

var result = Number(x) + Number(y);

var result2 = parseInt(x) + parseInt(y);

// parseInt 는 문자를 숫자로 바꿀때 '정수'로 바꾼다.
// parseDouble 을 사용하면 서수점을 지킬 수 있다.

var result3 = +x + +y;

console.log(result);
console.log(result2);
console.log(result3);

console.log('==============');
// 아래는 문자열로 형 변환

var m = '' + 10 + 20;
console.log(m);

var f = ''+false;

console.log('=============');
// 아래는 논리로 명시적 형변환

console.log(Boolean('hello'));
console.log(Boolean(null));

console.log(!!999);
console.log(!!undefined);

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
