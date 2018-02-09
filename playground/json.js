// var obj = {
//     name: 'David'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "David", "age": 35}';

// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'SOme tirle',
    body: 'some  bodsy'
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
const note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
