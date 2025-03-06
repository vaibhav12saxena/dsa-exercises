// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let arr = [];
  let traverseArray = [root, "s"];
  let level = 0;
  while (traverseArray.length > 1) {
    const node = traverseArray.shift();
    if (node === "s") {
      level++;
      traverseArray.push("s");
    } else {
      traverseArray.push(...node.children);
      arr[level] = arr[level] + 1 || 1;
    }
  }
  return arr;

  //rather than making a new variable level we can even push 0 to arr array on line 21
}

module.exports = levelWidth;
