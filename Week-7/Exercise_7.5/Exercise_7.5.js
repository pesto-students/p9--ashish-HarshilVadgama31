function perfectDiffPair(arrayA, B) {
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayA.length; j++) {
            if(i === j){
                continue
            }
            if (arrayA[i] - arrayA[j] === B) {
                console.log(arrayA[i],arrayA[j],i,j)
                return 1;
            }
        }
    }
    return 0;
}

console.log(perfectDiffPair([5, 10, 3, 2, 50, 80],78))
module.exports = perfectDiffPair