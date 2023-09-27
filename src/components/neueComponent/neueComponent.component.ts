import { GenericComponent } from "../generic.component.js";

export class NeueComponentComponent extends GenericComponent {
  static selector = 'neue-component';

  constructor() {
    super();
    this.selector = NeueComponentComponent.selector;
  }
}
