/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (59.73%)
 * Likes:    330
 * Dislikes: 0
 * Total Accepted:    19.7K
 * Total Submissions: 33K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 空白格用 '.' 表示。
 * 
 * 
 * 
 * 一个数独。
 * 
 * 
 * 
 * 答案被标成红色。
 * 
 * Note:
 * 
 * 
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) 
{
    var hashMap = new Map();
    var hor_map = new Map();
    var ver_map = new Map();
    for(var i = 0 ; i < board.length ;  i++)
    {
        hor_map.set(i,new Map());
        for(var j = 0 ;j < board.length ; j++)
        {
            var num = board[i][j];
            if(num == ".")
            {
                continue;
            }
            //9x1 
            if(!ver_map.has(j))
            {
                ver_map.set(j,new Map());
            }
            if(ver_map.get(j).has(num))
            {
                return false;
            }else
            {
                ver_map.get(j).set(num,true);
            }
            if(hor_map.get(i).has(num))
            {
                return false;
            }else
            {
                hor_map.get(i).set(num,true);
            }
            //3x3
            var hashkey = (~~(i/3))*10+ (~~(j/3));
            // console.log(num,":", hashkey);
            if(!hashMap.has(hashkey))
            {
                var arr = new Map();
                arr.set(num,true);
                hashMap.set(hashkey,arr);
            }else
            {
                var arr = hashMap.get(hashkey);
                if(arr.has(num))
                {
                    return false;
                }
                arr.set(num,true);
            }
        }
    }

};
// @lc code=end

