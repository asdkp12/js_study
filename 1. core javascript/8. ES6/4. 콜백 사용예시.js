// 정수 n을 전달하면 1 ~ n까지의 모든 짝수를 출력
function showEvenNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// 이건 홀수 출력임
function showOddNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// 이건 짝수나 홀수를 파라미터로 받아서 값 추출 가능한 함수
function showOddOrEvenNumber(n, isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// 이건 파라미터 추가해서 배수를 추가하는 함수
function showTripleNumber(n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showEvenNumber(7);
showOddNumber(7);
showOddOrEvenNumber(7, 1);
showTripleNumber(12, 3);

// ========즉 여기까진 간단한 파라미터 조작을 통해 제어 가능=====

// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1~n 까지의 정수를 조건에 맞게 출력해주는 함수임

function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showNumber(100, function (n) {
  return n % 6 === 0 && n % 12 !== 0;
});

showNumber(100, function (i) {
  return true;
});

console.log("=====================================");

function makeCook(recipeName, recipeCode) {
  console.log("#### 나만의 레시피 ####");
  console.log(`!!! 요리 이름: ${recipeName}`);
  // 실제 레시피 출력은 만들어서 전달해 주세요
  recipeCode();

  console.log("~~~ 참 쉽죠 님들도 해보셈~! ~~~");
}

makeCook("맛돌이 라면", () => {
  console.log("1. 아리수 팔팔 끓이기");
  console.log("2. 대파 양파 청양고추를 팍팍");
  console.log("3. 음 ~ 마시따~");
});
