/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */


/**


O boolean
I two binary trees
C
E 
- if one of the trees has 0 nodes

Pseudocode
recursive function to check if nodes are the same
- check val. if it's the same, call function if left and right tres
- if values are not equal, return false

*/

var isSameTree = function(p, q) {

    let equal = true;

    if (p === null && q === null) {
        return true;
    }
    const checkTrees = function(tree1, tree2) {
        
        if (tree1 && tree2) {
            if (tree1.val === tree2.val) {
                if (tree1.left || tree2.left) {
                    checkTrees(tree1.left, tree2.left);
                }

                if (tree1.right || tree2.right) {
                    checkTrees(tree1.right, tree2.right);
                }
            } else {
                equal = false;
            }
        } else {
            equal = false;
        }
        return equal;
    }
    
    return checkTrees(p,q);
    
};