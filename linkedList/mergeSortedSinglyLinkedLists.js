class ListNode {
  constructor(value, next) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @function mergeLinkedLists
 * @description Given two sorted singly linked lists, merge them and return the merged list
 * @description Time Complexity: O(N)
                Space Complexity: O(1)
 * @param {ListNode} l1
 * @param {ListNode} l2             
 * @returns {ListNode}
 */
const mergeLinkedLists = (l1, l2) => {
  let prev = new ListNode(-1);
  let curr = prev;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 === null ? l2 : l1;
  return prev.next;
};
