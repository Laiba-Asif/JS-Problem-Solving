function MaxProfit(prices){
  let l=0
  let r=1;
  let maxProfit=0;
  
  while(r<prices.length){
      if(prices[l]<prices[r]){
          profit = prices[r] - prices[l]
          maxProfit = Math.max(profit, maxProfit)
      }else{
          l = r;
      }
      r+=1;
  }
  console.log("buy: ", l , "sell: ", r-1)
  
    return maxProfit ;
}

console.log(MaxProfit([7,6,3,1,5,4]))