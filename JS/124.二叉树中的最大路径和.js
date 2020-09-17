"use strict";
/*
 * @lc app=leetcode.cn id=124 lang=typescript
 *
 * [124] 二叉树中的最大路径和
 *
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (39.39%)
 * Likes:    591
 * Dislikes: 0
 * Total Accepted:    59.5K
 * Total Submissions: 139.4K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个非空二叉树，返回其最大路径和。
 *
 * 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 *
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 *
 * 输出: 6
 *
 *
 * 示例 2:
 *
 * 输入: [-10,9,20,null,null,15,7]
 *
 * -10
 * / \
 * 9  20
 * /  \
 * 15   7
 *
 * 输出: 42
 *
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
var ret;
function maxPathSum(root) {
    ret = Number.MIN_SAFE_INTEGER;
    traverseTree(root);
    return ret;
}
;
function traverseTree(node) {
    if (node == null) {
        return 0;
    }
    var left = Math.max(0, traverseTree(node.left));
    var right = Math.max(0, traverseTree(node.right));
    ret = Math.max(ret, left + right + node.val);
    return Math.max(left, right) + node.val;
}
// @lc code=end
//# sourceMappingURL=124.二叉树中的最大路径和.js.map