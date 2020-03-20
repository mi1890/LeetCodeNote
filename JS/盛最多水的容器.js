/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) 
{
    var max = 0;
    var index_start = 0;
    var index_end = height.length -1;
    while(index_start < index_end)
    {
        var h = Math.min(height[index_start],height[index_end]);
        max = Math.max(max,h*(index_end - index_start));
        if(height[index_start ] < height[index_end])
        {
            index_start++;
        }else
        {
            index_end --;
        }
    }
    return max;
};


function main()
{
    console.log(maxArea([1,8,6,2,5,4,8,3,7]));
    console.log("盛最多水的容器");
}
main();
