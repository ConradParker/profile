import utils from '../../../services/utils.js';
import '../../components/project-item.js';

function displayProjects(projects) {
  const projectContainer = document.querySelector('.projects-container');

  projects.forEach((project) => {
    const projectElement = document.createElement('project-item');
    projectElement.project = project;
    projectContainer.appendChild(projectElement);
  });
}

export default {
  render: async () => {
    return utils.getPage('projects');
  },
  after_render: async () => {
    const response = await fetch('../../../data/projects.json');

    // handle success
    if (response.ok) {
      const json = await response.json();
      displayProjects(json);
    }
  },
};
