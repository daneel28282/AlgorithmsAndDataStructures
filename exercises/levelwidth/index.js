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
   
    if (!root) 
    {
      return [];
    }
  
    const widths = [];
    const queue = [root];
  
    while (queue.length > 0) 
    {
      const levelWidth = queue.length;
  
      for (let i = 0; i < levelWidth; i++) 
      {
        const node = queue.shift(); 
  
        if (node.children) 
        { 
          queue.push(...node.children);
        }
      }
  
      widths.push(levelWidth);
    }
  
    return widths;
}

module.exports = levelWidth;
