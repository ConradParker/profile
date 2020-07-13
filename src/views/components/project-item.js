const template = document.createElement('template');
template.innerHTML = `
<style>
  .project__img {
    border-radius: 4px;
    padding: 5px;
  }
  .project__img:hover {
      box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
  }
</style>
<div class="grid-item">
  <img class="project__img" />
</div>
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
    this.image = this.root.querySelector('.project__img');
    this.image.src = project.imageSrc;
    this.image.alt = project.name;
  }
}

customElements.define('project-item', ProjectItem);
