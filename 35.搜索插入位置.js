/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) 
{
    if(nums.length == 0 )
    {
        return 0;
    }
    if(nums.length == 1)
    {
        if(target >  nums[0])
        {
            return 1;
        }else
        {
            return 0;
        }
    }
    var ret = 0;
    var min = 0;
    var max = nums.length-1;
    var find = false;
    while(min <= max)
    {
        var mid = Math.floor((min + max)/2);
        ret = mid;
        if(nums[mid] < target)
        {
            min = mid +1;
        }else if(nums[mid] > target)
        {
            max = mid -1;
        }else
        {
            find = true;
            break;
        }
    }
    if(!find)
    {
        if(nums[ret] < target)
        {
            return ret+1;
        }
    }
   
    return ret;
};
console.log(searchInsert([1,3,5,6]
    ,2));
// @lc code=end

