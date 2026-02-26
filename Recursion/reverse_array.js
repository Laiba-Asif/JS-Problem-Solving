let arr = [1,2,3,4,5]

function reverse(arr, left=0,right=arr.length-1){
    if(left>=right) return arr;
    
        [arr[left],arr[right]] = [arr[right],arr[left]]
        
        return reverse(arr,left+1,right-1)
    
    
    
}
console.log(reverse(arr))