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
 * @return {boolean}
 */



/**

O boolean
I root of a binary tree
C
E

Psuedocode

if left node or right node exists, see if left node root is the same as right node root.
if it's the same, do it again from the left node and the right node
it it's not, change result to false

*/

var isSymmetric = function(root) {

    let result = true;
    let leftNode;
    let rightNode;
    
    const checkNodes = function (left, right) {
        if (left.left !== null || right.right !== null) {
            if (left.left === null || right.right === null) {
                result = false;
            } else if (left.left.val !== right.right.val) {
                result = false;
            } else {
                checkNodes(left.left,right.right)
            }
        }
        
        if (left.right !== null || right.left !== null) {
            if (left.right === null || right.left === null) {
                result = false;
            } else if (left.right.val !== right.left.val) {
                result = false;
            } else {
                checkNodes(left.right,right.left)
            }
        }
        
    };
    
    if (root.left !== null || root.right !==null) {
        leftNode = root.left;
        rightNode = root.right;
        if (leftNode === null || rightNode === null) {
            result = false;
        } else if (leftNode.val !== rightNode.val) {
            result = false;
        } else {
            checkNodes(root.left,root.right)
        }
    };
    
   
    return result;
    
};