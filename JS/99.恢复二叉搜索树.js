"use strict";
/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
 *
 * https://leetcode-cn.com/problems/recover-binary-search-tree/description/
 *
 * algorithms
 * Hard (57.57%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    20.8K
 * Total Submissions: 36.1K
 * Testcase Example:  '[1,3,null,null,2]'
 *
 * 二叉搜索树中的两个节点被错误地交换。
 *
 * 请在不改变其结构的情况下，恢复这棵树。
 *
 * 示例 1:
 *
 * 输入: [1,3,null,null,2]
 *
 * 1
 * /
 * 3
 * \
 * 2
 *
 * 输出: [3,1,null,null,2]
 *
 * 3
 * /
 * 1
 * \
 * 2
 *
 *
 * 示例 2:
 *
 * 输入: [3,1,4,null,null,2]
 *
 * ⁠ 3
 * ⁠/ \
 * 1   4
 * /
 * 2
 *
 * 输出: [2,1,4,null,null,3]
 *
 * ⁠ 2
 * ⁠/ \
 * 1   4
 * /
 * ⁠ 3
 *
 * 进阶:
 *
 *
 * 使用 O(n) 空间复杂度的解法很容易实现。
 * 你能想出一个只使用常数空间的解决方案吗？
 *
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
/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root) {
    traverse(root, null);
}
;
function traverse(node, prev) {
    if (node == null)
        return;
    traverse(node.left, prev);
    if (prev != null && node.val < prev.val) {
        let val = prev.val;
        prev.val = node.val;
        node.val = val;
    }
    prev = node;
    traverse(node.right, prev);
}
// @lc code=end
//# sourceMappingURL=99.恢复二叉搜索树.js.map