"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
function add(a, b) {
    return a + b;
}
var result = add(2, 5);
console.log(result);
var person;
var people;
person = {
    name: "max",
    age: 18
};
console.log(person);
var obj1 = {
    a: 10,
    b: 20
};
console.log(obj1);
var obj2 = __assign(__assign({}, obj1), { a: 30 });
console.log(obj2);
var unaPersona = {
    name: "max",
    age: 18
};
var gente = [unaPersona];
console.log(gente);
exports["default"] = gente;
