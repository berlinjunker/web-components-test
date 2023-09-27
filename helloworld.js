class HelloWorld extends HTMLElement {

  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    this.textContent = `Hello ${ this.name }!`;
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

}

// register component
customElements.define( 'hello-world', HelloWorld );