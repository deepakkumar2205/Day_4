const a=require('lodash');
var obj1={name:"Person 1",age:5}
var obj2={age:5,name:"Person 1"}

console.log(a.isEqual(obj1, obj2)); // returns false if different
