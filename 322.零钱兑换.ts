/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (41.30%)
 * Likes:    810
 * Dislikes: 0
 * Total Accepted:    133.4K
 * Total Submissions: 323K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 
 * 
 * 
 * 示例 1:
 * 
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3 
 * 解释: 11 = 5 + 5 + 1
 * 
 * 示例 2:
 * 
 * 输入: coins = [2], amount = 3
 * 输出: -1
 * 
 * 
 * 
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 * 
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    // let dptable: Map<number, number> = new Map<number, number>();
    var ret = -1;
    let dptable = Array<number>(amount+1);
    dptable.fill(amount+1);
    dptable[0] = 0;
    for(var i = 0;i < dptable.length;i++)
    {
        for(var coin of coins)
        {
            if(i - coin < 0)
            {
                continue;
            }
            dptable[i] = Math.min(dptable[i],1+ dptable[i- coin]);
        }
    }
    if(dptable[amount] != amount+1)
    {
        return dptable[amount];
    }
    return ret;
};

// function coinDp(coins: number[], amount: number, table: Map<number, number>): number {
//     if (amount == 0) {
//         return 0;
//     }
//     if (amount < 0) {
//         return -1;
//     }
//     if (table.has(amount)) {
//         return table.get(amount) as number;
//     }
//     var ret = Number.MAX_SAFE_INTEGER;
//     for (var coin of coins) {
//         var sub = coinDp(coins, amount - coin, table);
//         if (sub == -1) {
//             continue;
//         }
//         ret = Math.min(sub+1, ret);
//     }
//     if (ret == Number.MAX_SAFE_INTEGER) {
//         table.set(amount, -1);
//         ret = -1;
//     } else {
//         table.set(amount, ret);
//     }
//     return ret;
// }

// coinChange([1,2,5],11);
// @lc code=end

