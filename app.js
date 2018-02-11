console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command entered: ', command);
console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note added`);
        notes.logNote(note);
    } else {
        console.log('note already exists');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    note = notes.getNote(argv.title);
    if (note) {
        console.log(`Note read`);
        notes.logNote(note);
    } else {
        console.log('note does not exist');
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? `Note successfully removed` : `Note does not exist`;
    console.log(message);
} else {
    console.log('Command not recognised');
};
