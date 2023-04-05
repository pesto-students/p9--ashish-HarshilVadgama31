//Spiral Matrix Print
let i = 0, j = 0, k=0
let SpiralList=[]
function checkLength(Arr){
	return SpiralList.length == (Arr[i].length * Arr.length)
}
function printSpiral(Arr){
  let columnsize = Arr[i].length
  let rowsize = Arr.length
        for(j = k; j<columnsize; j++){
            SpiralList.push(Arr[i][j])
            if(checkLength(Arr)){
        			return
        		}
        }
        j--
        for(i=k+1; i<rowsize; i++){
            SpiralList.push(Arr[i][j])
            if(checkLength(Arr)){
        			return
        		}
        }
        i--
        do{
        	j--
          SpiralList.push(Arr[i][j])
          if(checkLength(Arr)){
        			return
        	}
        }while(j !== k)
        do{
        	i--
          SpiralList.push(Arr[i][j])
          if(checkLength(Arr)){
        			return
        	}
        }while(i !== k+1)
        if(!checkLength(Arr)){
						k++
            columnsize--
            rowsize--
            printSpiral(Arr)
        }
        else{
        	return
        }
}

printSpiral([[1,2,3],[4,5,6],[7,8,9]])
console.log(SpiralList)
module.exports = SpiralList