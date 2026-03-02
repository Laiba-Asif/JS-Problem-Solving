// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]
 

//Solution: Backtracking
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];

   function backtrack(index,currentPath){
    if(index === nums.length){
        result.push([...currentPath])
        return;
    }

    currentPath.push(nums[index])
    backtrack(index+1,currentPath);

    currentPath.pop();
    backtrack(index+1, currentPath)
   }

   backtrack(0,[]);
   return result;



};

console.log(subsets([1,2,3]))

// Time Complexity : O(n * 2^n)
// Space Complexity : O(n * 2^n)