class NoteItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const title = this.getAttribute('title');
    const body = this.getAttribute('body');

    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note-item');
    noteDiv.innerHTML = `<h3>${title}</h3><p>${body}</p>`;

    shadow.appendChild(noteDiv);
  }
}

customElements.define('note-item', NoteItem);