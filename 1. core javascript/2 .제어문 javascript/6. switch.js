var season = prompt("계절을 입력하세요");

// switch 소괄호 안에는 조건을 판별할 변수를 넣어준다
// 이때 비교식은 쓸 수 없으며, 문자값이나 숫자값만 가능하다.
switch (season) {
  case "봄":
  case "spring":
    alert("벚꽃보러 가세연");
    break;
  case "여름":
  case "summer":
    alert("해수욕 가세연");
    break;
  case "가을":
  case "autom":
    alert("낙엽구경 가세연");
    break;
  case "겨울":
  case "winter":
    alert("눈구경 가세연");
    break;
  default:
    alert(
      "봄 여름 가을 겨울 혹은 spring summer autom winter 중 선택하세요"
    );
}
