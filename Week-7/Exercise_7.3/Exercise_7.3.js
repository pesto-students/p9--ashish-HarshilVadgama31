function sortArray012(arrayA) {
    for (let i = 0; i < arrayA.length; i++) {
        let min = arrayA[i]
        for (let j = i+1; j < arrayA.length; j++) {
            if (arrayA[j] < arrayA[i]) {
                min = arrayA[j];
                arrayA[j] = arrayA[i];
                arrayA[i] = min;
            }
        }
        // arrayA[i] = min
    }
    return arrayA
    // return arrayA.sort();
}

console.log(sortArray012([0,0,1,2,1,1,0]))
module.exports = sortArray012