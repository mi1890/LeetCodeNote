"use strict";
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
function longestPalindrome(s) {
    if (s.length == 1 || s.length == 0) {
        return s;
    }
    var dp = new Array();
    for (var i = 0; i < s.length; i++) {
        var arr = new Array(s.length);
        arr.fill(false);
        dp.push(arr);
    }
    for (var i = 0; i < s.length; i++) {
        dp[i][i] = true;
    }
    var max = 1;
    var ret = s[0];
    for (var i = s.length - 1; i >= 0; i--) {
        for (var j = i + 1; j < s.length; j++) {
            if (s[i] == s[j] && (dp[i + 1][j - 1] || j - i < 3)) {
                dp[i][j] = true;
                if (j - i > max) {
                    max = j - i;
                    ret = s.substr(i, max + 1);
                }
            }
            // if(s[i] == s[j])
            // {
            //     dp[i][j] = dp[i+1][j-1]+2;
            //     if(dp[i][j]> max)
            //     {
            //         max = dp[i][j];
            //         ret = s.substr(i,max);
            //     }
            // }else
            // {
            //     dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]);
            // }
        }
    }
    return ret;
    // var ret_first =0;
    // var ret_last = 0;
    // var indexfirst = 0;
    // var indexlast = 0;
    // var even = false;
    // let array = s.split("");
    // if(s.length ==1)
    // {
    //     return s;
    // }
    // if(s.length == 2 && s[0] == s[1])
    // {
    //     return s;
    // }
    // for(var i = 0 ;  i < array.length ;i++)
    // {
    //     indexfirst = i;
    //     indexlast = 0;
    //     for(var j = array.length-1;j > i; j--)
    //     {
    //         if(array[indexfirst] == array[j])
    //         {
    //             indexfirst++;
    //             if(indexlast == 0)
    //             {
    //                 indexlast = j;
    //             }
    //         }else
    //         {
    //             indexfirst = i;
    //             if(indexlast > 0)
    //             {
    //                 j = indexlast;
    //             }
    //             indexlast = 0;
    //         }
    //         if(j - indexfirst == 0 || j - indexfirst == 1)
    //         {
    //             if(indexlast != 0)
    //             {
    //                 if(indexlast - i > ret_last -ret_first)
    //                 {
    //                     ret_first = i;
    //                     ret_last = indexlast;
    //                 }
    //                 indexlast = 0;
    //             }
    //         }
    //     }
    // }
    // return s.substring(ret_first,ret_last+1);
}
;
longestPalindrome("cbbd");
// @lc code=end
//# sourceMappingURL=5.最长回文子串.js.map