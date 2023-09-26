class HelloWorld extends HTMLElement {

  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    shadow.innerHTML = `
    <style>
      p {
        text-align: center;
        font-weight: normal;
        padding: 1em;
        margin: 0 0 2em 0;
        background-color: #eee;
        border: 1px solid #666;
      }
    </style>
    
    <p>Hello ${ this.name }!</p>
    `;

    // this.textContent = `Hello ${ this.name }!`;
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

}

// register component
customElements.define( 'hello-world', HelloWorld );