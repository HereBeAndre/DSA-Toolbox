class ListNode {
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @function reverseSinglyLinkedList
 * @link https://leetcode.com/problems/reverse-linked-list/
 * @description Given the head of a singly linked list, reverse the list, and return the reversed list.
                Example 1:
                Input: head = [1,2,3,4,5]
                Output: [5,4,3,2,1]
 * @param {ListNode} head
 * @returns {ListNode}
 */
const reverseSinglyLinkedList = (head) => {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    console.log(curr);
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
