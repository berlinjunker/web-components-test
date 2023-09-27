import { HelloWorld } from "./components/helloworld/helloworld.component.js";
import { NeueComponentComponent } from "./components/neueComponent/neueComponent.component.js";

const componentList = [
  {
    class: HelloWorld,
    path: 'helloworld.component'
  },
  {
    class: NeueComponentComponent,
    path: 'neueComponent.component'
  },
  // ...
]

function initAllComponents() {
  for (const component of componentList) {
    const scriptElement = document.createElement('script');
    scriptElement.setAttribute('type', 'module');
    scriptElement.setAttribute('src', `./components/${component.path.split('.')[0]}/${component.path}.js`);
    document.body.appendChild(scriptElement);

    customElements.define(component.class.selector, component.class);
  }
}

initAllComponents();