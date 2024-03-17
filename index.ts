var readlineSync = require('readline-sync');
let name: string = readlineSync.question('What is your name? ');

export function hello(): string {
    return ('Hello ' + name + '!');
}
console.log(hello());