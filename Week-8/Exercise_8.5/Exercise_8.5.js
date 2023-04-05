function nextGreater(arr){
    let answerString = "", i = 0, j = 0
    for (i = 0; i < arr.length; i++) {
        for (j = i+1; j < arr.length; j++) {
            if(arr[i]<arr[j]){
                answerString += `${arr[j]}` + ' ' 
                break
            }
        }
        if(j == arr.length){
            answerString += '-1' + ' '
        }    
    }
    return answerString.trim()
}

console.log(nextGreater([6,8,0,1,3]))

module.exports = nextGreater