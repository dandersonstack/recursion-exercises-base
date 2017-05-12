const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  const treeArray = flattenTreeToArray(root);
  for(let i = 0; i < treeArray.length; i++) {
    if(treeArray[i].id === id) {
      return treeArray[i];
    }
  }
};

const getElementsByClassName = function(root, className) {
  const elemnts = [];
  const treeArray = flattenTreeToArray(root);
  for(let i = 0; i < treeArray.length; i++) {
    if(treeArray[i].className) {
      const classNames = treeArray[i].className.toString().split(" ");
      for(let j = 0; j < classNames.length; j++) {
        if(classNames[j] === className) {
          elemnts.push(treeArray[i]);
        }
      }
    }
  } return elemnts;
};

const getElementsByTagName = function(root, tagName) {
  const elemnts = [];
  const treeArray = flattenTreeToArray(root);
  for(let i = 0; i < treeArray.length; i++) {
    if(treeArray[i].tagName === tagName) {
      elemnts.push(treeArray[i]);
    }
  } return elemnts;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
