/**
 * @function reverseSinglyLinkedList
 * @link https://leetcode.com/problems/reverse-linked-list/
 * @description Given the head of a singly linked list, reverse the list, and return the reversed list.
                Example 1:
                Input: head = [1,2,3,4,5]
                Output: [5,4,3,2,1]
 * @description Time Complexity: O(N)
                Space Complexity: O(N)
 * @param {ListNode} head
 * @returns {ListNode}
 */
const reverseSinglyLinkedList = (head) => {
  return reverse(head, null); // null is initializer for newHead of list- a.k.a. prev in iterative solution
};

function reverse(head, newHead) {
  if (head === null) return newHead; // base condition - when last node is null, return reversed list

  let next = head.next; // Save temporary variable to hold next item in linked list
  head.next = newHead; // Revert pointer of head towards previous item
  newHead = head; // Move new head forward
  head = next; // Move head forward

  return reverse(head, newHead);
}
