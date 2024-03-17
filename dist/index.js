"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var readlineSync = require('readline-sync');
let name = readlineSync.question('What is your name? ');
function hello() {
    return ('Hello ' + name + '!');
}
exports.hello = hello;
console.log(hello());
