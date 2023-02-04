/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Leetcode problem => https://leetcode.com/problems/remove-duplicates-from-sorted-list/submissions/
// Neetcode video on YT => https://www.youtube.com/watch?v=p10f-VpO4nE

/* Big-O analysis: Time complexity: O(N)
                   Space complexity: O(1)
                   
   NOTE: Why nested while loop and O(N)? Shouldn't it be O(N^2)?
   Not in this case. This is because the outer while loops keeps track of curr node, whereas the inner while loop is responsible for
   moving the pointer when curr and next nodes are equal. Because of that, linked list is not traversed twice.
*/
/**
 * @function removeDuplicates
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeDuplicates(head) {
  /*  In linked list problems, we usually have a dummy node - `prev` - but we don't need one in this problem
        because the linked list is already sorted, so first node remains at its original position.
    */
  let curr = head;

  // Outer loop keeps track of curr
  while (curr !== null) {
    // Inner loop removes duplicates
    while (curr.next && curr.val === curr.next.val) {
      curr.next = curr.next.next;
    }
    // Always update curr to next node on every outer iteration
    curr = curr.next;
  }

  return head;
}
