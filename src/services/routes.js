import home from '../views/pages/home/home.js';
import skills from '../views/pages/skills/skills.js';
import projects from '../views/pages/projects/projects.js';
import career from '../views/pages/career/career.js';
import contact from '../views/pages/contact/contact.js';
import links from '../views/pages/links.js';

const routes = {
  '/': home,
  '/skills': skills,
  '/projects': projects,
  '/career': career,
  '/contact': contact,
  '/links': links,
};

export default routes;
