const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const treeArray = flattenTreeToArray(root);
  for(let i = 0; i < treeArray.length; i++) {
    if(treeArray[i].id === id) {
      return treeArray[i];
    }
  } return -1;
};

const getElementsByClassName = function(root, className) {
  // Your code here
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
