const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

var newItem = _.flattenDeep(items);
console.log(newItem);
