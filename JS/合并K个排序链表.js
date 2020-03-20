/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) 
{
    var tempnode = new ListNode();
    mergeLists(lists,0,tempnode);
    return tempnode.next;    
};

var mergeLists = function(lists,index,startnode)
{
    if(index == lists.length - 1)
    {
        startnode.next = lists[lists.length - 1][0];
        return;
    }
    var l1 = lists[index];
    var l2 = lists[index+1];
    startnode = mergeTwoLists(l1,l2,startnode);
    mergeLists(lists,index+1,startnode);
}

var mergeTwoLists = function (l1, l2,tempnode) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    while (true) {
        if (l1.val > l2.val) {
            tempnode.next = l2;
            tempnode = tempnode.next;
            l2 = l2.next
            // tempnode.next = null;
        } else {
            tempnode.next = l1;
            tempnode = tempnode.next;
            l1 = l1.next
            // tempnode.next = null;
        }
        if (l1 == null || l2 == null) {
            break;
        }
    }
    if (l1) 
    {
        tempnode.next = l1;
    } else if (l2) 
    {
        tempnode.next = l2;
    }
    while(tempnode.next)
    {
        tempnode = tempnode.next;
    }

    return tempnode;
}
