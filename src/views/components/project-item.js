const template = document.createElement('template');
template.innerHTML = `
  <style>    
    .project-box {
      padding: 0 0 1rem 0;
      color: #ddd;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      background-color: #ddd;
      color: var(--black-color);
      text-decoration: none;
      max-width: 400px;
      margin: 0 auto;
    }
    .project-box__image {
      max-width: 100%;
      max-height: 289px;
    }
    .project-box__description {
      min-height: 100px;
      margin: 0 1rem; 
    }
    
  </style>
  <a
    class="project-box"
    href="#"
    target="_blank"
  >
    <img
      src="https://fakeimg.pl/350x200/?text=Image"
      class="project-box__image"
    />
    <h3 class="project-box__title">Project Title</h3>
    <p class="project-box__description">Project Description</p>
  </a>
`;

class ProjectItem extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(template.content.cloneNode(true));
  }

  /**
   * @param {{ imageSrc: any; name: any; }} project
   */
  set project(project) {
    this.link = this.root.querySelector('.project-box');
    this.link.href = project.link;

    this.image = this.root.querySelector('.project-box__image');
    this.image.src =
      project.imageSrc ?? 'https://fakeimg.pl/350x200/?text=Image';
    this.image.alt = project.name ?? '';

    this.titleElement = this.root.querySelector('.project-box__title');
    this.titleElement.innerHTML = project.name ?? '';

    this.description = this.root.querySelector('.project-box__description');
    this.description.innerHTML = project.description ?? '';
  }
}

customElements.define('project-item', ProjectItem);
