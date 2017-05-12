
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here

  callback(node);
  const childrenList = node.childNodes;
  if(childrenList) {
    //call visitAllNodes on all the children
    for(let index = 0; index < childrenList.length; index++) {
      visitAllNodes(childrenList[index], callback);
    }
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