export class GenericComponent extends HTMLElement {
  template: string;
  selector = 'undefined';
  styleSheet = '* { color: red };';
  shadow: ShadowRoot;

  constructor() {
    super();
  }

  getDefaultTemplate() {
    return `<p>${this.selector} is ready!</p>`;
  }

  init() {
    this.connectedCallback();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: 'closed' });
    if (!this.template) this.template = this.getDefaultTemplate();
    this.shadow.innerHTML = this.getStyleSheet() + this.template;
  }

  getStyleSheet() {
    return `<style type="text/css">${this.styleSheet}</style>`
  }

  attributeChangedCallback(property: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) return;
    this[property] = newValue;
  }
}