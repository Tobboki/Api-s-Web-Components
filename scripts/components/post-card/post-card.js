const template = document.createElement("template");
template.innerHTML = `
  <style>
    .post-title {
      margin: 0;
      font-size: 1rem;
      font-weight: bolder;
    }
    .post-body {
    display: -webkit-box;
    line-clamp: 4;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    }
  </style>
    <h1 class="post-title">
      <slot></slot>
    </h1>
    <slot name="body" class="post-body"></slot>
  `;

class postCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    // Parse the template html
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("post-card", postCard);