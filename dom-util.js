
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  callback(node);
  //call visitAllNodes on all the children
  const childrenList = node.childNodes;
  for(let index = 0; index < childrenList.length; index++) {
    visitAllNodes(childrenList[0], callback);
  }
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  const arr = [];
  visitAllNodes(node, (node) => {
    arr.push(node);
  })
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};