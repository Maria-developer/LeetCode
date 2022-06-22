var hasCycle = function(head) {
    
    let fast = head;
    let slow = head;
    
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow == fast) {
            return true;
        }
    }
    
    return false;
    
};

// What linked lists are: https://coderbyte.com/video/the-basics-of-linked-lists

// Analogy for fast and slow pointers: https://leetcode.com/problems/linked-list-cycle/discuss/1829768/JavaScript-Easy-to-understand-slow-and-fast-pointers-detailed-explanation

// Explanation of solution: https://www.youtube.com/watch?v=agkyC-rbgKM