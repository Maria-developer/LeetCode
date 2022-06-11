class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(Number(5));
const b = new Node(Number(4));
const c = new Node(Number(8));
const d = new Node(Number(11));
const e = new Node(Number(13));
const f = new Node(Number(4));
const g = new Node(Number(7));
const h = new Node(Number(2));
const i = new Node(Number(1));

a.left = b;
a.right = c;
b.left = d;
c.left = e;
c.right = f;
d.left = g;
d.right = h;
f.right = i;

function hasPathSum(root, targetSum) {
  if (!root) {
    return false
  } else if (!root.left && !root.right && (targetSum - root.val) == 0) {
    return true
  } else {
    return hasPathSum (root.left, (targetSum - root.val)) || hasPathSum(root.right, (targetSum - root.val))
  }
}

console.log(hasPathSum(a,22))

// This question asks: Is there a path from the root of the tree that sums to 22, the targetSum?

// To solve it:

  // Subtract the value of each node from the targetSum until we hit 0
  // If no next node, return false
  // If no next left or right node (i.e. the current node is a leaf node/has no children) AND the target sum subtract the value of the root is 0, return true
  // Otherwise, pass the recursive call down to the next nodes to ask the same question of the left and right: Does the target sum subtract the value of the root equal 0?

// How to create a binary tree (7:22): https://coderbyte.com/video/introduction-to-binary-trees