class AppBar extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const header = document.createElement('header');
    header.innerHTML = `<h1>Catatan</h1>`;

    shadow.appendChild(header);
  }
}

customElements.define('app-bar', AppBar);