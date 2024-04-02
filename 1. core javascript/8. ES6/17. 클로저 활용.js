const increase = () => {
  let count = 0;
  return () => ++count;
};

console.log(increase());

const countclosure = () => {
  let count = 0;
  const increase = () => ++count;
  const decrease = () => --count;

  return {
    increase,
    decrease,
  };
};

const counter = countclosure();
console.log(typeof counter);

console.log(increase());
console.log(increase());
console.log(increase());
console.log(increase());