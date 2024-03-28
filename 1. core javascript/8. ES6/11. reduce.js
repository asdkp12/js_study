// 배열고차함수
// reduce : 배열의 각 요소들을 주어진 콜백에 맞게 합산, 누적하여 하나의 결과값을 반환하는 함수.
// reduce에 들어가는 callback
// callback(accumulator, currentValue)
// accumulator: 어떤 데이터를 계속 쌓아가는 변수
// currentValue: 현재 루프회차에서 사용할 데이터
// reduce는 반복을 실행할때마다 currentValuef를 accumulator에 누적.

// ex) 사과바구니에 있는 사과들의 모든 당도를 합산한 결과 얻기

/*
appleBasket
  .reduce(() => {
    console.log(100);
  });
  */

//   이새끼 왜 다섯번 찍히냐?

/*
appleBasket
  .reduce((a,b) => {
    console.log(a);
    console.log(b);
    console.log('==========');
  });
  */

// a는 첫번째만 돌고 b는 두번째부터 마지막까지 돌고있음

/*
[1, 2, 3, 4, 5, 6].reduce((a, b) => {
//   console.log(a);
  console.log(b);
  console.log("==========");
});
*/
// 쉽게 보면 이렇게 돌고있다는거임 ㅇㅇ

/*
result = [1, 2, 3, 4, 5, 6].reduce((a, b) => {
  console.log(a);
  console.log(b);
  console.log("==========");
  return a + b;
});
*/

// 첫번째는 걍 더하면 되고
// 두번째 출력의 undefined 에다가 1을 던져주면 1+3이 가능해짐
// return a + b; 를 통해서 할수있음

/*
const result = [1, 2, 3, 4, 5, 6].reduce((a, b) => {
  //console.log(a);
  //console.log(b);
  // console.log("==========");
  return a + b;
});
console.log(result);
*/

// 라이브러리 함수 특) 이해는 어려운데 써먹긴 쉬움 ㄹㅇㅋㅋ reduce 어렵네
// 처음에는 0번 인덱스를 넣고 시작하닌까 나머지만 더해주면 되기때문에 루프횟수-1

/*
const result = [1, 2, 3, 4, 5, 6].reduce((a, b) => {
    console.log(a);
    // console.log(b);
    console.log("==========");
    //return a + b;
    console.log('hi');
  },0);
  console.log(result);
*/

// reduce의 콜백함수 다음파라미터는 initalValue를 의미하며
// 반복문의 accumulater 시작값을 의미함.
// 따라서 0을 시작값으로 두고 return a+b; 를하면
// 0 + 1 + 2 + 3 + 4 + 5 + 6
// 시작값을 없애면 accumulator의 시작값이 0번인덱스로 지정되며
// 1 + 2 + 3 + 4 + 5 + 6

const result = [10, 20, 30, 40, 50, 60].reduce((a, b) => {
  console.log(`${a}+${b}=${a + b}`);
  console.log("========================");
  return a + b;
}, 700);
console.log(result);

// ㅇㅋㅇㅋ?
// ㅈㄴ EASSSSYYYYY

// ===================================================문제 풀러 ㄱㄱ==================================================

const appleBasket = [
  {
    color: "green",
    sweet: 13,
  },
  {
    color: "red",
    sweet: 14,
  },
  {
    color: "red",
    sweet: 11,
  },
  {
    color: "green",
    sweet: 6,
  },
  {
    color: "green",
    sweet: 7,
  },
  {
    color: "green",
    sweet: 9,
  },
];

const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 9700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];

const A = appleBasket.reduce((totalSweet, apple) => {
  console.log(totalSweet);
  console.log(apple);
  console.log("=============");
  return totalSweet + apple.sweet;
});

console.log(A);

console.log("==============================");

function myReduce(array, callback, initalValue) {
  // 어떤 값을 누적할 변수
  let accumulater = initalValue === undefined ? array[0] : initalValue;
  const starIdx = initalValue === undefined ? 1 : 0;
  for (let i = starIdx; i < array.length; i++) {
    accumulater = callback(accumulater, array[i]);
  }
  return accumulater;
}
// 자 자료구조는 버리고 쓰는법만 하자 대가리 깨진다.

// =============================================================================================================
// =============================================================================================================

// 색깔별로 사과 개수 카운트하기

console.log("============색깔별로 사과 개수 카운트하기==============");

const countByColor = appleBasket.reduce((count, apple) => {
  if (apple.color in count) {
    count[apple.color]++;
  } else {
    count[apple.color] = 1;
  }
  return count;
}, {});

console.log(countByColor);


// 못하겠다 ㅈㅈ