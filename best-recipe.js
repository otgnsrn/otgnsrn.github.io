const template = document.createElement('template');
template.innerHTML = `<h2>h2>`;

class BestRecipe extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
  }
}

window.customElements.define('best-recipe', BestRecipe);