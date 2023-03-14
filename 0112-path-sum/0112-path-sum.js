/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetSum) {

    let boolean = false;
    
    function addLeaf (node,currentSum) {
        currentSum = currentSum + node.val;
        if (node.right === null && node.left === null) {
            if (currentSum === targetSum) {
                boolean = true;
            }
        } else {
            if (node.left !== null) {
            addLeaf(node.left,currentSum);
            } 
            if (node.right !== null) {
            addLeaf(node.right, currentSum);
            }
        }
    }
    
    if (root !== null) {
        addLeaf(root,0);
    }
    return boolean;
    
};