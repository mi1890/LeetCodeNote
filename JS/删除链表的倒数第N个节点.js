/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) 
{
    if(head == null || head.next == null)
    {
        return null;
    }
    var array = new Array();
    while(head != null)
    {
        array.push(head);
        head = head.next;
    }
    n = array.length  - n;    
    if(n == 0)
    {
        return array[n+1];
    }else if(n == array.length -1)
    {
        array[array.length - 2].next = null;
    }
    else
    {
        array[n-1].next = array[n+1];
    }
    return array[0];
};