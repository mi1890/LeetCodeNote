/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) 
{
    var counter = 0;
    if(head.next == null)
    {
        return head;
    }
    var ret = head.next;
    var last = null;
    while(true)    
    {
        var next = head.next;
        if(next == null)
        {
            break;
        }
        var temp = next.next;
        head.next = temp;
        next.next = head;
        if(last)
        {
            last.next= next;
        }
        last = head;
        head = temp;    
        if(head == null)
        {
            break;
        }
    }
    return ret;
};