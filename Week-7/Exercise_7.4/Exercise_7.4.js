function maxProfitCal(dailyPriceArray) {
    let minPrice = Infinity; 
    let maxProfit = 0; 
    
    for (let i = 0; i < dailyPriceArray.length; i++) {
      if (dailyPriceArray[i] < minPrice) { 
        minPrice = dailyPriceArray[i]; 
      } else { 
        let Profit = dailyPriceArray[i] - minPrice; 
        if (Profit > maxProfit) { 
          maxProfit = Profit; 
        }
      }
    }
    
    return maxProfit; 
  }
  
  console.log(maxProfitCal([7,1,5,3,6,4])); // Output: 5
  console.log(maxProfitCal([7,6,4,3,1])); // Output: 0

  module.exports = maxProfitCal