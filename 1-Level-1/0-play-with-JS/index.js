


console.log('-index.js-')


var v = 12;
if (true) {
    var v = 13; // No block scope
}
console.log(v);  