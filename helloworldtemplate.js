class HelloWorldTemplate extends HTMLElement {

  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    const template = document.getElementById('hello-world-template').content.cloneNode(true);
    const hwMsg = `Hello ${ this.name }`;

    Array.from( template.querySelectorAll('.hw-text') )
      .forEach( n => n.textContent = hwMsg );

    shadow.append( template );
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }

}

// register component
customElements.define( 'hello-world-template', HelloWorldTemplate );