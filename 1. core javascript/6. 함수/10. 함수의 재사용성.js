// 배열안에 특정 요소의 인덱스를 찾아 반환하는 함수
// 즉 index of 가 있지만 직접만들어 볼거임

const NOT_FOUND = -1;

function myIndexOf(array, searchElement) {
  for (let i = 0; i < array.length; i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }
  return NOT_FOUND;
}
// 이건 includes
function myIncludes(array, searchElement) {
  return myIndexOf(array, searchElement) !== NOT_FOUND;
}

let foods = ["족발", "피자", "파스타", "김치찌개"];

let idx = myIndexOf(foods, "김치찌개");
console.log(idx);

let flag = myIncludes(foods, "족발");
console.log(flag);
