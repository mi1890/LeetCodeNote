/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (31.84%)
 * Likes:    2674
 * Dislikes: 0
 * Total Accepted:    374.5K
 * Total Submissions: 1.2M
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * 
 * 示例 1：
 * 
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 * 
 * 
 * 示例 2：
 * 
 * 输入: "cbbd"
 * 输出: "bb"
 * 
 * 
 */

// @lc code=start
function longestPalindrome(s: string): string {

    if (s.length == 1 || s.length == 0) {
        return s;
    }
    var dp: boolean[][] = new Array<Array<boolean>>();
    for (var i = 0; i < s.length; i++) {
        var arr = new Array<boolean>(s.length);
        arr.fill(false);
        dp.push(arr);
    } for (var i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }
    var max = 0;
    var ret = s[0];
    for (var i = s.length - 1; i >= 0; i--) {
        for (var j = i + 1; j < s.length; j++) {
            if (s[i] == s[j] && (dp[i + 1][j - 1] || j-i<3)) {
                dp[i][j] = true;
                if (j - i > max) {
                    max = j-i;
                    ret = s.substr(i, max+1);
                }
            }
        }
    }
    return ret;
};

// longestPalindrome("cbbd");
// @lc code=end

