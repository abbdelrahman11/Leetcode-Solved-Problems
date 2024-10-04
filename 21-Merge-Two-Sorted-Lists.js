/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let copy = (newList = new ListNode());
if (list1 === null) return list2;

  if (list2 === null) return list1;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next;
    }
    newList = newList.next;
    if (list2) {
      newList.next = list2;
    } if  (list1) {
      newList.next = list1;
    }
  }
  return copy.next;
};