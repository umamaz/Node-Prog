/*Exporting functions from a module 
function sum(a,b) {
  return a+b;
}
function sub(a,b){
  return b-a;
}

module.exports = {
  addFN : sum,
  subFn : sub
}; */

exports.add = (a,b) =>  a+b ;
exports.sub = (a,b) => b-a ;
