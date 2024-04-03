//======================= 전역 변수 영역 =========================//
// 서버와 통신할 데이터만 쓰면 됨
let count = 3;
const $template = document.querySelector(".todo-template");
const todos = [
  {
    id: 1,
    text: "할 일 1",
    done: false,
  },
  {
    id: 2,
    text: "할 일 2",
    done: false,
  },
  {
    id: 3,
    text: "할 일 3",
    done: false,
  },
];
//======================= 함수 정의 영역 =========================//
/*새로운 할 일을 li태그로 만들어서 ul에 추가하는 함수*/
// 1. li태그 만들어줌 (추가로 class를 붙여주자)
function makeLi(i, text) {
  const $newLi = document.createElement("li");
  $newLi.dataset.id = i;
  $newLi.classList.add("todo-list-item");
  $newLi.innerHTML = `<label class="checkbox">
                            <input type="checkbox">
                            <span class="text">${text}</span>
                        </label>
                        <div class="modify">
                            <span class="lnr lnr-undo"></span>
                        </div>
                        <div class="remove">
                            <span class="lnr lnr-cross-circle"></span>
                        </div>`;
  const $ul = document.querySelector(".todo-list");
  $ul.appendChild($newLi);
}

const $add = document.getElementById("add");
$add.addEventListener("click", (e) => {
  e.preventDefault();
  count++;
  const $input = document.querySelector("#todo-text");
  todos.push({
    id: count,
    text: $input.value,
    done: false,
  });

  makeLi(count, $input.value);
  $input.value = "";
});

$template.addEventListener("click", (e) => {
  if (!e.target.matches(".remove span")) return;
  const $list = document.querySelector(".todo-list");
  const $li = e.target.closest(".todo-list-item");
  const index = todos.findIndex((todo) => +$li.dataset.id === todo.id);
  todos.splice(index, 1);
  //   console.log(e.target.closest(".todo-list-item"));
  $list.removeChild($li);
});
// 체크박스할건데
// 템플릿에 이벤트를 걸어 
// if 어쩌구 저쩌구 matches로 내가 찍은 e.target이랑 !== 이면 다 리턴.
// classlist.add 로 내가 이벤트를 발생시키면 e.target으로 찾은 라벨에게
// 없으면 checked를 추가하고 만약 checked가 있으면 삭제

// 2. li태그 안에 문자 넣어줌
// 3. li태그 ul에 넣어줌

// 1. 삭제기능

//========= 함수 실행 영역 - 함수 호출, 이벤트 리스너 등록 ========//
