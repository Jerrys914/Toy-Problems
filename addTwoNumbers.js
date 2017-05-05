/**
Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let resultList;
  let pass =0;
  let value =0;
  const recurse = (list1, list2,p) => {
    if(list1.val+list2.val + p > 9){
      pass = Math.floor((list1.val+list2.val+p)/10);
      value = (list1.val+list2.val+p) % 10;
    } else {
      value = list1.val+list2.val + p
    }

    let result = ListNode(value)
    if(list1.next && list2.next){
      result.next = recurse(list1.next, list2.next, pass)
    }
    return result;
  };
  return recurse(l1,l2, 0);
};


let list1 = ListNode(2);
list1.next = ListNode(4);
list1.next.next = ListNode(3);
let list2 = ListNode(5)
list2.next = ListNode(6);
list2.next.next = ListNode(4);
addTwoNumbers(list1, list2);



