/*
 * @lc app=leetcode.cn id=72 lang=typescript
 *
 * [72] 编辑距离
 *
 * https://leetcode-cn.com/problems/edit-distance/description/
 *
 * algorithms
 * Hard (59.82%)
 * Likes:    1134
 * Dislikes: 0
 * Total Accepted:    83.2K
 * Total Submissions: 139.1K
 * Testcase Example:  '"horse"\n"ros"'
 *
 * 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 输入：word1 = "horse", word2 = "ros"
 * 输出：3
 * 解释：
 * horse -> rorse (将 'h' 替换为 'r')
 * rorse -> rose (删除 'r')
 * rose -> ros (删除 'e')
 * 
 * 
 * 示例 2：
 * 
 * 输入：word1 = "intention", word2 = "execution"
 * 输出：5
 * 解释：
 * intention -> inention (删除 't')
 * inention -> enention (将 'i' 替换为 'e')
 * enention -> exention (将 'n' 替换为 'x')
 * exention -> exection (将 'n' 替换为 'c')
 * exection -> execution (插入 'u')
 * 
 * 
 */

// @lc code=start
function minDistance(word1: string, word2: string): number 
{
    if(word1.length == 0)
    {
        return word2.length;
    }
    if(word2.length == 0)
    {
        return word1.length;
    }
    var dptable:number[][] = [];
    for(var i = 0 ; i < word1.length;i++)
    {
        var array = new Array<number>(word2.length);
        array.fill(0);
        dptable.push(array);
    }
    return dp(word1,word2,word1.length-1,word2.length-1,dptable);
};

function dp(s1: string, s2: string,i:number,j:number,dptable:number[][] ):number
{
    if(i == -1)return j+1;
    if(j == -1)return i+1;
    if(dptable[i][j] != 0)
    {
        return dptable[i][j];
    }
    if(s1[i] == s2[j])
    {
        dptable[i][j] = dp(s1,s2,i-1,j-1,dptable);
        return dptable[i][j];
    }else
    {
        var min= Math.min(dp(s1,s2,i,j-1,dptable)+1,dp(s1,s2,i-1,j,dptable)+1,dp(s1,s2,i-1,j-1,dptable)+1);
        dptable[i][j] = min;
        return min;
    }
}

// console.log(minDistance("horse","ros"));


// @lc code=end

