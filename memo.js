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

testFunction()