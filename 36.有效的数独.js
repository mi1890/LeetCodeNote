/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) 
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
    return true;
};
console.log(isValidSudoku([
    [".",".",".",".","5",".",".","1","."],
    [".","4",".","3",".",".",".",".","."],
    [".",".",".",".",".","3",".",".","1"],
    ["8",".",".",".",".",".",".","2","."],
    [".",".","2",".","7",".",".",".","."],
    [".","1","5",".",".",".",".",".","."],
    [".",".",".",".",".","2",".",".","."],
    [".","2",".","9",".",".",".",".","."],
    [".",".","4",".",".",".",".",".","."]]));
// @lc code=end

