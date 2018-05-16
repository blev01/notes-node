const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const {age, sign, dlnumber } = notes;
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs.argv;
let command = argv._[0];

console.log('Starting app');

if(command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if(command === 'remove') {
    notes.deleteNote(argv.title);
}else if ( command === 'list') {
    notes.getAll();
} else if (command === 'read'){
    notes.getNote(argv.title);
}else {
    console.log('Command not found');
}

console.log('Process', process.argv);
console.log('Yargs', argv);

// let filteredArray = _.uniq(['Kenan', 1, 'Kenan', 1, 2, 3, 4]);
// console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Mike'));

// let res = notes.addNote();
// console.log(res);

// let sum = notes.add(16, 12);
// console.log(sum);

// let user = os.userInfo();
// let { username } = user;


// // console.log(module.exports);
//  fs.appendFile('greetings.txt', `Hello ${username}! You are ${notes.age} years old, and your sign is ${notes.sign}.`, function(err) {
//      if(err) {
//          console.log('Unable to write to file');
//      }
//  });