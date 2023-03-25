function queueUsingStack(inputString){
    let s1 = [], s2 = [], tempVar1 = 0, tempVar2 = 0, poppedString = ''
    for (let i = 0; i < inputString.length; i++) {
        if(inputString[i]==' '){
            continue
        }
        if(inputString[i]=='1'){
            if(s2.length === 0){
                s2.push(inputString[i+2])
                i=i+3
            }
            else{
                tempVar1 = s2.pop()
                if(s1.length === 0){
                    s1.push(tempVar)
                }else{
                    tempVar2 = s1.pop()
                    s1.push(tempVar1)
                    s1.push(tempVar2)
                }
            }
        } else if(inputString[i] == '2'){
            if(s1.length !== 0){
                poppedString += `${s1.pop()}` + ' '
            }else if(s2.length !== 0){
                poppedString += `${s2.pop()}` + ' '
            }else{
                poppedString += '-1' + ' '
            }
        }
    }
    return poppedString
}

console.log(queueUsingStack('1 2 2 2 1 4'))

module.exports = queueUsingStack