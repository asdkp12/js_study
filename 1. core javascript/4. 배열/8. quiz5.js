var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

//반복문
var menu = 0;
var Member = '';
while (true) {
  menu = +prompt (`현재 멤버:${tvxq} \n메뉴를 선택하세요\n1. 새로운 멤버 추가\n2. 기존 멤버 제거\n3. 프로그램 종료`)
  if (menu === 3) {
    break;
  } else if (menu === 1) {
    Member = prompt (`1번 새 멤버 추가하기를 선택하셨습니다.\n새로 추가할 멤버 이름을 입력해주세요.\n '!!나가기' 를 입력하시면 초기화면으로 돌아갑니다.`);
    if(Member === '!!나가기') continue;
    tvxq.push(Member);
  } else if (menu === 2) {
    while (true) {
      Member = prompt (`2번 기존 멤버 제거하기를 선택하셨습니다.\n제거할 멤버의 이름을 입력해주세요.\n현재 멤버 : ${tvxq} \n '!!나가기' 를 입력하시면 초기화면으로 돌아갑니다.`);
    if(Member === '!!나가기') break;
    
    if (tvxq.includes(Member)) {
      tvxq.splice(tvxq.indexOf(Member),1); 
    } else {
    alert(`잘못입력하셨습니다.`);
    }
  }
}
}
alert (`멤버 : ${tvxq} \n 프로그램을 종료합니다.`)