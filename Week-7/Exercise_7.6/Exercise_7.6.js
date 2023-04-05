function sumNearTarget(S, target) {
    S.sort((a, b) => a - b);
  
    let closestSum = Infinity;
    let minDiff = Infinity;
    let i = null
    let left = null
    let right = null

    let iNew = null
    let leftNew = null
    let rightNew = null
    
    for (i = 0; i < S.length - 2; i++) {
      left = i + 1;
      right = S.length - 1;
      
      while (left < right) {
        let sum = S[i] + S[left] + S[right];
        let diff = Math.abs(target - sum);
        
        if (diff < minDiff) {
            closestSum = sum;
            minDiff = diff;
            iNew = i;
            leftNew = left;
            rightNew = right;
        }
        
        if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
    
    return `${closestSum} is due to [ ${S[iNew]}, ${S[leftNew]}, ${S[rightNew]} ]`
}

let S = [-1, 2, 1, 4]
let target = 2
console.log(sumNearTarget(S, target))

module.exports = sumNearTarget