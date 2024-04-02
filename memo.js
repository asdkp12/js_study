function showNumber(n, condition) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}

showNumber(100, function (a) {
  return a % 6 === 0 && a % 12 !== 0;
});

//   이해랑 활용은 다름.

function testFunction() {
  console.log(this);
}

testFunction();

console.log("======================================================");

arr = [
  {
    age: 15,
    name: "곽재우",
  },
  {
    age: 18,
    name: "이동혁",
  },
  {
    age: 21,
    name: "박예찬",
  },
  {
    age: 24,
    name: "황장원",
  },
];

// 이름 순서대로 출력 평균나이
// const a = arr.map((p) => {
//   return p.name;
// });

const b = arr.reduce((a, b) => {
  console.log(b.name);
  return a + b.age / arr.length;
}, 0);

console.log(`${b}`);

// 0번째 idx
// 0
// v
