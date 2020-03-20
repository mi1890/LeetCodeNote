/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) 
{
    if(nums.length == 1 && nums[0] == val)
    {
        return 0;
    }
    var index = -1;
    for(var i = 0 ; i < nums.length; i++)
    {
        if(nums[i] == val)
        {
            var finish = true;
            for(var j = i + 1 ; j < nums.length ; j++)
            {
                if(nums[j] != val)
                {
                    finish = false;
                    nums[i] = nums[j];
                    nums[j] = val;
                    break;
                }
            }
            if(finish)
            {
                index = i;
                break;
            }
        }
    }
    return index == -1?nums.length:index;
};
console.log(removeElement([4,5]
    ,4));