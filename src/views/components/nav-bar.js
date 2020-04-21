import './menu-icon.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    .topnav {
      font-family: Arial, Helvetica, sans-serif;
      overflow: hidden;
      background-color: var(--secondary-color, #333);
    }

    .topnav a {
      transition:all 0.4s ease;
      float: left;
      display: block;
      color: var(--background-color, #f2f2f2);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 17px;
    }

    .topnav a:hover {
      background-color: var(--primary-color, #ddd); 
      color: black;
    }

    .topnav a.active {
      background-color: var(--tertiary-color, #4caf50);;
      color: white;
    }

    .topnav .icon {
      display: none;
    }

    @media screen and (max-width: 600px) {
      .topnav a:not(:first-child) {display: none;}
      .topnav .icon {
        float: right;
        display: block;
        padding: 2px 12px;
      }
    }

    @media screen and (max-width: 600px) {
      .topnav.responsive {position: relative;}
      .topnav.responsive .icon {
        position: absolute;
        right: 0;
        top: 0;
      }
      .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
      }
    }
  </style>

  <nav id="top-nav" class="topnav">
    <a href="/#/" class="active">Home</a>
    <a href="/#/skills">Skills</a>
    <a href="/#/contact">Contact</a>
    <menu-icon class="icon"></menu-icon>
  </nav>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
    this.root.querySelector('.icon').addEventListener('click', () => {
      const nav = this.root.getElementById('top-nav');
      if (nav.className === 'topnav') {
        nav.className += ' responsive';
      } else {
        nav.className = 'topnav';
      }
    });
  }
}

customElements.define('nav-bar', NavBar);
