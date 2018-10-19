/*
* Write a function below to get the first n Fibonacci numbers.
* Note: The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . .
* Each subsequent number is the sum of the previous two.
*/


/**
 * 
 * @param {number} num 
 */
function fibo(num) {
  if (num < 0) return "positive numbers"
  if (num === 0) return "0";
  const ans = [0, 1];
  for (let index = 2; index < num; index++) {
    const len = ans.length;
    ans.push(ans[len-1] +  ans[len-2]);
  }
  return ans.join(" ");
}

console.log(fibo(8));