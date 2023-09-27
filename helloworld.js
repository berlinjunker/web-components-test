// web component
class HelloWorld extends HTMLElement {
  
  // component attributes
  static get observedAttributes() {
    return ['name'];
  }
  
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[ property ] = newValue;
  }
  
  // connect component
  connectedCallback() {
    const 
      shadow = this.attachShadow({ mode: 'closed' }),
      hwMsg = `Hello ${ this.name }`;
    
    // append shadow DOM
    shadow.append( 
      document.getElementById('hello-world').content.cloneNode(true)
    );
   
    // find all slots with a hw-text class
    Array.from( shadow.querySelectorAll('slot.hw-text') )
      // update first assignedNode in slot
     .forEach( n => n.assignedNodes()[0].textContent = hwMsg );
  }
}

// register component
customElements.define('hello-world', HelloWorld);