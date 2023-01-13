/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  
    let sum;
    let addition = 0;
    let final = new ListNode(0);
    let result = final;

    
    while (l1 || l2) {
        
        if (l1) {
            sum = l1.val;
            l1 = l1.next;
        }
        
        if (l2) {
            sum = sum + l2.val
            l2 = l2.next;
        } 
        
        sum = sum + addition;
        addition = 0;
        
        if (sum > 9) {
            addition = 1;
            sum = sum % 10;
        }
        console.log(sum);
        console.log(addition)
        
        final.next = new ListNode(sum);
        final = final.next;
        
        if (addition > 0) {
            final.next = new ListNode(addition);
        }
        
        sum = 0;
    }
    
 return result.next;
    
};