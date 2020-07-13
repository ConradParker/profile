const template = document.createElement('template');
template.innerHTML = `
<style>

/*
* === Header CSS Grid Layout ===
*/
@media screen and (min-width: 720px) {
  .header {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      'image image image name name name name name cv'
      'image image image title title title title title links'
      'image image image menu menu menu menu menu menu';
  }
  .header__item {
    box-sizing: border-box;
    font-size: 2em;
  }
  .header__name {
    text-align: left;
  }
  .header__title {
    text-align: left;
  }
  .header__cv {
    grid-area: cv;
    margin: auto;
  }
  .link__img {
    max-height: 5em;
    object-fit: cover;
  }
  .header__links {
    grid-area: links;
    background-color: #006699;
    margin: 0;
  }

  .header__menu {
    font-size: 1em;
  }
}

@media screen and (max-width: 720px) {
  .header__cv {
    display: none;
  }
  .header__links {
    display: none;
  }
  .header__link {
    height: 100%;
  }
  .header__name {
    text-align: center;
    font-size: 24px;
  }
  .header__title {
    text-align: center;
    font-size: 24px;
  }
}

.header__item {
  padding: 1em;
}
.header__image {
  grid-area: image;
  background: url('../images/conrad.jpg') center;
  background-size: cover;
  min-height: 250px;
}
.header__name {
  grid-area: name;
  background-color: var(--tertiary-color, #333);
}
.header__title {
  grid-area: title;
  background-color: var(--quaternary-color, #666);
}

.header__menu {
  grid-area: menu;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 0;
  cursor: pointer;
}
@media screen and (max-width: 600px) {
  .header__menu {
    grid-template-columns: repeat(3, 1fr);
  }
}

.menu__item {
  background-color: var(--secondary-color, #2f4858);
  transition: all 0.4s ease;
  color: var(--main-font-color, #f2f2f2);
  text-align: center;
  padding: 1em 1em;
  text-decoration: none;
}
.menu__item:hover {
  background-color: var(--primary-color, #ddd);
  color: black;
}

.menu__item--active {
  background-color: var(--tertiary-color, #4caf50);
  color: white;
}
/** === End Header CSS Grid Layout === */
</style>
<header class="header">
  <div class="header__item header__image"></div>
  <div class="header__item header__name">Conrad Parker</div>
  <div class="header__cv">
    <a class="header__link" href="./documents/ConradParker.pdf" download>
      <img class="link__img" src="../images/cv.png" alt="conradjparker" title="Download PDF CV" />
    </a>
  </div>  
  <div class="header__item header__title">Software Developer</div>
  <div class="header__item header__links">
    <!--<a href="https://www.linkedin.com/in/conradjparker/">
      <img class="header_link" src="../images/linked-in.png" alt="conradjparker" />
    </a>-->
  </div>
  <div class="header__item header__menu menu">
    <a href="/#/" class="menu__item menu__item--active">Home</a>
    <a href="/#/projects" class="menu__item">Projects</a>
    <a href="/#/skills" class="menu__item">Skills</a>
    <a href="/#/career" class="menu__item">Career</a>
    <a href="/#/contact" class="menu__item">Contact</a>
    <a href="/#/blog" class="menu__item">Blog</a>
  </div>
</header>
  `;

class HeaderBlock extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }

  updateMenuDisplay(menuItemClicked) {
    const activeClassName = 'menu__item--active';
    this.activeMenuItem = this.root.querySelector(`.${activeClassName}`);

    if (menuItemClicked !== this.activeMenuItem) {
      this.activeMenuItem.classList.remove(activeClassName);
    }
    menuItemClicked.classList.add(activeClassName);
  }

  connectedCallback() {
    // Listen for Menu Item changes
    const menuItems = this.root.querySelectorAll('.menu__item');
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener('click', (event) => {
        this.updateMenuDisplay(event.target);
      });
    });
  }
}

customElements.define('header-block', HeaderBlock);
