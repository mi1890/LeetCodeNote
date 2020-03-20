function ListNode(val) {
    this.val = val;
    this.next = null;
}

function sort(l) {
    var ret = null;
    var selectnode = l;
    var select_previous = null;
    while (selectnode != null) {
        var minnode = selectnode;
        var minnode_previous = selectnode;
        var iter_previous = selectnode;
        var iternode = selectnode.next;
        while (iternode != null) {
            if (iternode.val < minnode.val) {
                minnode = iternode;
                minnode_previous = iter_previous;
            }
            iter_previous = iternode;
            iternode = iternode.next;
        }
        if (minnode != selectnode) {
            var temp = minnode.next;
            if (minnode_previous == selectnode) {
                minnode.next = selectnode;
                selectnode.next = temp;
                if (select_previous) {
                    select_previous.next = minnode;
                }
            } else {
                minnode.next = selectnode.next;
                minnode_previous.next = selectnode;
                selectnode.next = temp;
                selectnode = minnode.next;
            }
            if (ret == null) {
                ret = minnode;
            }
            select_previous = minnode;
            continue;
        }
        select_previous = minnode;
        selectnode = selectnode.next;
    }
    return ret;
}