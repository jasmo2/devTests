/*# Welcome to Recursion Land!
#
# The task is to build a binary tree using a breadth first insertion method,
# and then print out a depth first traversal of the values:
#
# - Values to be inserted are '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15'
# - After insertion, the start of your tree should look like this...
#               1
#         ------|------
#         |           |
#         2           3
#      ---|---     ---|---
#      |     |     |     |
#      4     5     6     7
#
# ...and so on
#
# - A depth first traversal should print one value per line.

---------------
Expected Output
---------------
1
2
4
8
9
5
10
11
3
6
12
13
7
14
15
*/

/**
 * @class {Node} each node has its own value, left and right branches
 *
 */
class Node {
    constructor(num) {
        this.left = null;
        this.right = null;
        this.value = num;
    }

    /**
     * @function {BFI} breath first insert
     * @param {integer} num
     */
    BFI(num) {
        const data = [];
        if (!this.value) {
            this.value = num;
        } else if (!this.left) {
            this.left = new Node(num);
        } else if (!this.right) {
            this.right = new Node(num);
        } else {
            data.push(this.left, this.right);
            while (true) {
                const node = data.shift();
                if (!node.left) {
                    node.BFI(num);
                    break
                }
                data.push(node.left);
                if (!node.right) {
                    node.BFI(num);
                    break
                }
                data.push(node.right);
            }
        }
    }

    DFTpriting() {
        console.log(this.value);
        const visitedNodes = new Set();
        while (true) {
            if (!this.left || visitedNodes.has(this.left.value)) {
                break;
            }
            this.left.DFTpriting();
            visitedNodes.add(this.left.value);
        }
        while (true) {
            if (!this.right || visitedNodes.has(this.right.value)) {
                break;
            }
            this.right.DFTpriting();
            visitedNodes.add(this.right.value)
        }
        return null;
    }
}

/**
 * Sort the values in ascending order before creating the TREE
 */
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
values.sort((a, b) => a - b);
const tree = new Node();
for (const num of values) {
    tree.BFI(num);
}
// console.log("After Breath First Insertion");
// console.log(JSON.stringify(tree));

console.log("Depth first traversal Printing");
tree.DFTpriting();

