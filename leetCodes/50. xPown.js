var myPow = function (x, n) {
  function helper(x, n) {
    if (n === 0) return 1;
    if (x === 1) return 1;
    if (x === -1) return n % 2 === 0 ? 1 : -1;

    let half = helper(x, Math.floor(n / 2));

    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }

  let ans = helper(x, Math.abs(n));

  if (n < 0) {
    return 1 / ans;
  }

  return ans;
};

console.log(myPow(1, 10));
