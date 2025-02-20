import './note-component.js';
import './note-form.js';
import './app-bar.js';
import notesData from './note.js';

document.addEventListener('DOMContentLoaded', () => {
  const noteList = document.getElementById('note-list');
  const noteForm = document.querySelector('note-form');
  const appBar = document.querySelector('app-bar');

  function displayNotes(notes) {
    noteList.innerHTML = '';
    notes.forEach(note => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('title', note.title);
      noteItem.setAttribute('body', note.body);
      noteList.appendChild(noteItem);
    });
  }

  displayNotes(notesData);

  noteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = noteForm.querySelector('#note-title').value;
    const body = noteForm.querySelector('#note-body').value;

    if (title.trim() !== '' && body.trim() !== '') {
      notesData.push({ title, body });
      displayNotes(notesData);
      noteForm.reset();
    }
  });
});