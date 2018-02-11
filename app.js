const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
    .command('add', 'Add a new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read all notes', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note added`);
        notes.logNote(note);
    } else {
        console.log('note already exists');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
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
