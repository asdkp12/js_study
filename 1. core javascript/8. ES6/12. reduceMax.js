const nums = [333, 66, 777, 1000, 5, 99];

const maxValue = nums.reduce((max, n) => (max < n ? n : max));
console.log(`최댓값 : ${maxValue}`);

// 이건 또 뭐야

// 삼항연산자 해석
// max < n ? n : max
// 위의 max < n 이 참 일경우 n (왼쪽)
// 위의 max < n 이 거짓 일경우 n (오른쪽)
