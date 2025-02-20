class NoteForm extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const form = document.createElement('form');
    form.innerHTML = `
      <input type="text" id="note-title" placeholder="Judul Catatan" required>
      <textarea id="note-body" placeholder="Isi Catatan" required></textarea>
      <button type="submit">Tambah</button>
    `;

    shadow.appendChild(form);
  }
}

customElements.define('note-form', NoteForm);