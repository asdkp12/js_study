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

const add = function (n1, n2) {
  return n1 + n2;
};
const r1 = add(1,2)
console.log(r1);
