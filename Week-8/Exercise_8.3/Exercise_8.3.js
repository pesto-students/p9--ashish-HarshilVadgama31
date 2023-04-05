class Node{
    constructor(content){
        this.data = content
        this.next = null
    }
}

class LinkList{
    constructor(){
        this.head = null
        this.size = 0
    }

    addNode(value){
        var nodeToAdd =  new Node(value)
        var currentNode

        if(this.head==null) this.head = nodeToAdd
        else{
            currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = nodeToAdd
        }
        this.size++
    }

    printLinkedList() {
        let linkListArr = "", count = 0
        let temp = this.head 
        while(temp && count<=this.size) {
            if(temp.next){
                linkListArr += ` ` + `${temp.data}`
                linkListArr += ` ` + `-->` 
            } else {
                linkListArr += ` ` + `${temp.data}`
            }
            count++
            temp = temp.next;
        }
        return(linkListArr)
    }

    loopDetector(){
        let nodeplus1 = this.head, nodeplus2=this.head, flag = 0   
        while(nodeplus1 != null && nodeplus2 != null && nodeplus2.next != null){
            nodeplus1 = nodeplus1.next
            nodeplus2 = nodeplus2.next.next
            if( nodeplus1 == nodeplus2)
            {
                flag = 1
                break
            }
        }
        if(flag == 1){
            return true
        }else{
            return false
        }
    }

    loopInserter(loopStart){
        let travElement = this.head, loopPointer = this.head, count = loopStart-1
        while(travElement.next != null){
            travElement = travElement.next
        }
        while(count > 0){
            loopPointer = loopPointer.next
            count--
        }
        travElement.next = loopPointer
    }
}

let A = new LinkList()


A.addNode(1)
A.addNode(3)
A.addNode(4)

console.log("Link List has loop:")
console.log(A.loopDetector())
console.log(A.printLinkedList())

A.loopInserter(2)
console.log("Link List now has loop:")
console.log(A.loopDetector())
console.log(A.printLinkedList())

module.exports = A