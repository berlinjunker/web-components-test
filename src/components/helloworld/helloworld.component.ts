import { GenericComponent } from "../generic.component.js";

export class HelloWorld extends GenericComponent {
  static selector = 'hello-world';

  name?: string;

  constructor() {
    super();
    this.selector = HelloWorld.selector;
  }
  
  template = `
    <p id="helloText">Hello World!</p>
    <button id="testButton">TestButton</button>
  `;

  styleSheet = `
    p {
      text-align: center;
      font-weight: normal;
      padding: 1em;
      margin: 0 0 2em 0;
      background-color: #eee;
      border: 1px solid #666;
    }
    `;

  init() {
    // event handling
    this.shadow.querySelector('#testButton').addEventListener('click', () => {
      alert('hi')
    });

    this.shadow.querySelector('#helloText').textContent = `Hello ${this.name}`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.init();
  }

  static get observedAttributes() {
    return ['name'];
  }
}
