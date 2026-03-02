// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].



// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// map is like key value pair, we can store the value and index in the map, then we can check if the complement (target - current number) exists in the map, if it does, we return the indices.
const twoSum = function(nums, target) {
    const memory = new Map();
    for(let i = 0; i <= nums.length-1; i++){
        const complement = target - nums[i];
        if(memory.has(complement)){
            return [memory.get(complement),i]
        }
        memory.set(nums[i],i)
    }
};

console.log(twoSum([2,7,11,15], 9)) // [0,1]
console.log(twoSum([3,2,4], 6)) // [1,2]