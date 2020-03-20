/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) 
{
    if(nums.length == 0)
    {
        return[-1,-1];
    }
    if(nums.length == 1 && nums[0] == target)
    {
        return [0,0];
    }
    if(nums.length ==2)
    {
        if(nums[0] == target)
        {
            if(nums[1] == target)
            {
                return [0,1];
            }
            return [0,0];
        }else if(nums[1] == target)
        {
            return [1,1];
        }
    }
    var targetindex = -1;
    var find = false;
    

    var max = nums.length -1;
    var min = 0;
    var lasttemp = -1;
    while(!find && min <= max)
    {
        var half_index = Math.ceil((min+max)/2);
        if(nums[half_index] < target)
        {
            min = half_index+1;
        }else if(nums[half_index] > target)
        {
            max = half_index-1;
        }else
        {
            find = true;
        }
    }
    if(find)
    {
        min = half_index;
        max = half_index;
        for(var i = half_index ;i>= 0; i--)
        {
            if(nums[i] == target)
            {
                min = i;
            }else
            {
                break;
            }
        }
        for(var i = half_index ;i < nums.length; i++)
        {
            if(nums[i] == target)
            {
                max = i;
            }else
            {
                break;
            }
        }
    }else
    {
        return [-1,-1];
    }
    return [min,max];

};


function main()
{
    console.log("34.在排序数组中查找元素的第一个和最后一个位置")
    console.log(searchRange([1,2,2]
        ,2));
}
main();
// @lc code=end

