var season = prompt('계절을 입력하라우 동무')

//prompt 는 브라우저에서 입력창을 포함한 알림창.
//prompt 알림창에 값을 입력시 지정해놓은 var season 변수에 할당돼서 값이 출력된다
//alert 는  브라우저에서 입력창을 제외한 알림창. console.log 와 같음
//confirm 은 브라우저에서 예 아니요 선택창.

// 조건을 판별할 변수 (비교식x, 문자값이나 숫자값만 써야 함)
switch (season) {

  case '봄': case 'spring':
    alert('봄에는 여의도로 가세요');
    break;
  case '여름': case 'summer':
    alert('여름에는 낙산해수욕장으로 가세요');
    break;
  case '가을': case 'fall':
    alert('가을에는 설악산에 가세요');
    break;
  case '겨울': case 'winter':
    alert('겨울에는 홍천에 가세요');
    break;
  default:
    alert('계절만 입력하라우 동무');

}
