function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }
    var firstnode = l1.val > l2.val ? l2 : l1;
    var tempnode = new ListNode();
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
    if (l1) {
        tempnode.next = l1;
    } else if (l2) {
        tempnode.next = l2;
    }

    return firstnode;
}



function main() {
    var l = new ListNode(1);
    var l1 = new ListNode(2);
    var l2 = new ListNode(4);

    l.next = l1;
    l1.next = l2;

    var r = new ListNode(1);
    var r1 = new ListNode(3);
    var r2 = new ListNode(4);
    r.next = r1;
    r1.next = r2;
    // l.next = l1;
    // l1.next= l2;
    // l2.next = l3;
    // console.log(sort(l));
    console.log(mergeTwoLists(l, r));
    console.log("合并两个有序链表");
}
main();


// var mergeTwoLists = function(l1, l2)
// {
//     if(l1 ==  null)
//     {
//         return l2;
//     }
//     if(l2 == null)
//     {
//         return l1;
//     }
//     var ret = l1.val>l2.val?l2:l1;
//     var tempnode = ret;
//     var first= l1;
//     var last = l1.next;
//     var finish = false;
//     while(last && first.val == last.val )
//     {
//         last = last.next
//     }
//     while(l2)
//     {
//         //插入到firstvalue之前
//         while(l2.val < first.val)
//         {
//             tempnode.next = l2;
//             tempnode = tempnode.next;
//             l2 = l2.next;
//             if(!l2)
//             {
//                 finish = true;
//                 break;
//             }
//         }
//         if(finish)
//         {
//             break;
//         }
//         if(l2.val > first.val)
//         {
//             while(l2.val > last.val)
//             {
//                 tempnode.next = first;
//                 tempnode = tempnode.next;
//                 first = last;
//                 last = last.next;
//                 if(!last)
//                 {
//                     tempnode.next = first;
//                     first.next = l2;
//                     finish = true;
//                     break;
//                 }
//             }
//             if(finish)
//             {
//                 break;
//             }
//         }
//         tempnode.next = l2;
//         tempnode = tempnode.next;
//         l2 = l2.next;
//     }
//     return ret;
// };