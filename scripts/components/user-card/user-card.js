const template = document.createElement("template");
template.innerHTML = `
  <style>
    .user-name {
      margin: 0;
      font-size: 1rem;
    }
  </style>
     <h1 class="user-name">
    <slot></slot>
    </h1>
    <slot name="email" class="user-email"></slot>
  `;

class userCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    // Parse the template html
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("user-card", userCard);