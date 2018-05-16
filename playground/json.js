// let obj = {
//     name: 'Kenan'
// }
// let stringObj = JSON.stringify(obj);

// let personString = '{"name": "Kenan", "age": "40"}'
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
}
let originalNoteString = '{"title": "Some title", "body": "Some body"}'
let note = JSON.parse(originalNoteString);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

console.log(typeof note);
console.log(note.title);