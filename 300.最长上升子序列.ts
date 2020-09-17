/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长上升子序列
 *
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (45.17%)
 * Likes:    979
 * Dislikes: 0
 * Total Accepted:    145.5K
 * Total Submissions: 322.1K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * 给定一个无序的整数数组，找到其中最长上升子序列的长度。
 * 
 * 示例:
 * 
 * 输入: [10,9,2,5,3,7,101,18]
 * 输出: 4 
 * 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
 * 
 * 说明:
 * 
 * 
 * 可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
 * 你算法的时间复杂度应该为 O(n^2) 。
 * 
 * 
 * 进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?
 * 
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    if(nums.length ==0)
    {
        return 0;
    }
    if(nums.length ==1)
    {
        return 1;
    }
    var dp = Array<number>(nums.length+1);
    dp.fill(1);
    dp[0] = 1;
    var ret = 1;
    for(var i = 0 ; i < dp.length-1; i++)
    {
        for(var j = 0; j < i;j++)
        {
            if(nums[i] > nums[j]) 
            {
                dp[i] = Math.max(dp[i],dp[j]+1);
                if(dp[i] > ret)
                {
                    ret = dp[i];
                }
            }
        }
    }
    return ret;
};

// lengthOfLIS([10,9,2,5,3,7,101,18]);
// @lc code=end

