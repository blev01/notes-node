console.log('Starting notes.js');
const fs = require('fs');

let fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        console.log('notes-data.json doesn\'t exist. creating new file' );
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = function (title, body) {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };    
 debugger;  
    let duplicateNotes = notes.filter((note) => note.title === title);
    if ( duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
    }
    
}

let removeNote = ( title ) => {
    let notes = fetchNotes();
    //fetch notes
    let filteredNotes = notes.filter((note) => note.title !== title);
    //filter notes, remove the one with the title rgument
    saveNotes(filteredNotes);
    //save the new notes array
}
let getAll = function () {
    return fetchNotes();
    console.log(`Printing ${allNotes.length} notes(s)`);
    allNotes.forEach(note => notes.logNote(note));
}
let getNote = (title) => {
    console.log('Getting note:', title);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}
let deleteNote = function () {
    console.log('Deleting note:', title);
}

let logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}