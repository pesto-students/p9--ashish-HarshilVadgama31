class stack{
    constructor(){
        this.items = []
        this.last = null
    }

    push(element){
        this.items.push(element)
        this.last++
    }

    pop(){
        this.items.pop()
        this.last--
    }

    checkParanthesis(givenString){
        for (let index = 0; index < givenString.length; index++) {
            if(givenString[index] == '{' || givenString[index] == '(' || givenString[index] == '['){
                this.push(givenString[index])
                continue
            }else if(givenString[index] == '}'){
                if(this.items[this.last-1] == '{'){
                    this.pop()
                }else{
                    return false
                }
            }else if(givenString[index] == ')'){
                if(this.items[this.last-1] == '('){
                    this.pop()
                }else{
                    return false
                }
            }else if(givenString[index] == ']'){
                if(this.items[this.last-1] == '['){
                    this.pop()
                }else{
                    return false
                }
            }
        }
        return this.items.length == 0
    }
}

let array = new stack()
// let trueString = '[()]{}{()()}'
// console.log(array.checkParanthesis(trueString))
// let falseString = '[(])'
// console.log(array.checkParanthesis(falseString))

module.exports = array