const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  if(obj == null) {
    return 'null';
  } else if(typeof(obj) === "boolean" || typeof(obj) === "number") {
    return obj.toString();
  } else if(typeof(obj) === "string") {
    return "\"" + obj + "\"";
  } else if(Array.isArray(obj)) {
    return printArray(obj);
  } else {
    return printObject(obj);
  }
       
};
const printObject = function(obj) {
  let stringBuilder = "{";
  const arr = [];
  _.each(obj, (item, key) => {
    keyValuePair = stringify(key) + ":" + stringify(item);
    arr.push(keyValuePair);
  });
  stringBuilder += arr.join(",");
  stringBuilder += "}"
  return stringBuilder;
}

const printArray = function(obj) {
  let stringBuilder = "[";
  const arr = [];
  _.each(obj, item => {
    arr.push(stringify(item));
  });
  stringBuilder += arr.join(",");
  stringBuilder += "]"
  return stringBuilder;
}

module.exports = {
  stringify: stringify
};