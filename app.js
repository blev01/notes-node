const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const argv = yargs
    .command('add', 'Adds a note', {
      title: {
          describe: 'Title of note',
          demand: true
      }  
    })
    .help()
    .argv;
let command = argv._[0];

 console.log('Starting app');

if ( command === 'add') {
   let note = notes.addNote(argv.title, argv.body); 
   if (note) {
       console.log('Note Created');
       notes.logNote(note); 
   } else {
       console.log('Note title taken');
   }
} else if ( command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
} else if ( command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
} else if ( command === 'read') {
   let note = notes.getNote(argv.title);
   if (note) {
       console.log('Note Found');
       notes.logNote(note);
   } else {
       console.log('Note not found');
   }
} else {
    console.log('Command not found');
}

console.log('Yargs', argv);