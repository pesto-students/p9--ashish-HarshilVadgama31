function maxSumSubarray(A) {
    let maxSum = A[0];
    let currentSum = A[0];
    
    for (let i = 1; i < A.length; i++) {
      currentSum = Math.max(currentSum + A[i], A[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
  }
  
  console.log(maxSumSubarray([1,2,3,4,-10]))
  
  module.exports = maxSumSubarray
