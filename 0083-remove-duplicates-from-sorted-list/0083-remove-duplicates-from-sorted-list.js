/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


/**

O a sorted, linked list without duplicates
I a sorted, linked list wuith integers
C
E
- linked list could be 0
- linked list could be all the same integer

Psuedocode
Variables
currentInteger
holdingArray
finalListNode

Declare variables
Iterate through the given list
- if val is not equal to currentInteger
-- set currentInteger to val
-- add val to the front of holdingArray
- remove val from list and make next val
- stop when list is empty val is null
Iterate through holdingArray
- add the first integer in holdingArray as val in finalListNode. Move previous val to next
- remove the first integer in holdingArray
Return finalListNode

Example
head = [null]
        ^
currentInteger 3
holdingArray []
              ^
finalListNode [1,2,3]

*/
var deleteDuplicates = function(head) {
    // Declare variables
    let linkedList = head;
    let currentInteger;
    let holdingArray = [];
    let nodeToMove;

    // Iterate through the given list
    while (linkedList !== null) {
        // - if val is not equal to currentInteger
        if (linkedList.val !== currentInteger) {
            // -- set currentInteger to val
            currentInteger = linkedList.val;
            // -- add val to the front of holdingArray
            holdingArray.unshift(linkedList.val);
        }
        // - remove val from list and make next val
        linkedList = linkedList.next;
        console.log("loop head :"+linkedList)
        // - stop when list is empty val is null
    }
    // Iterate through holdingArray
    if (head !== null) {
    let finalListNode = new ListNode(holdingArray[0]);

    for (let i = 1 ; i < holdingArray.length ; i++) {
        // - add the first integer in holdingArray as val in finalListNode. Move previous val to next
        finalListNode = new ListNode(holdingArray[i],finalListNode);
    }
    // Return finalListNode
    return finalListNode;
    } else {
        finalListNode = new ListNode();
        return finalListNode.next;}

};