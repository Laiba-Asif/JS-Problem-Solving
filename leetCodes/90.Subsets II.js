// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

//Solution: Backtracking
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const allSubsets = []
    nums.sort((a,b)=>a-b)

    function backtrack(index, currentPath){
        if(index=== nums.length){
            allSubsets.push([...currentPath])
            return;
        }

        currentPath.push(nums[index]);
        backtrack(index+1,currentPath);

        // now check if element is coming more than once 
        let s_index = index+1;
        while(s_index < nums.length && nums[s_index]===nums[s_index-1]){
            s_index++;
        }
        currentPath.pop();
        backtrack(s_index , currentPath)
    }

    backtrack(0,[]);
    return allSubsets;
};


// Time Complexity : O(n * 2^n)
// Space Complexity : O(n * 2^n)