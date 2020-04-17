const template = document.createElement('template');
template.innerHTML = `
  <style>
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: var(--menu-icon-color, #333);
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {opacity: 0;}

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
  </style>

  <div class="container">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
`;

class MenuIcon extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    this.icon = this.root.querySelector('.container');
    this.icon.addEventListener('click', () => {
      this.toggleMenu();
    });
  }

  toggleMenu() {
    this.icon.classList.toggle('change');
  }
}

customElements.define('menu-icon', MenuIcon);
