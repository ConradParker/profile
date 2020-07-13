import home from '../views/pages/home/home.js';
import skills from '../views/pages/skills.js';
import projects from '../views/pages/projects/projects.js';
import career from '../views/pages/career.js';
import contact from '../views/pages/contact/contact.js';
import blog from '../views/pages/blog.js';

const routes = {
  '/': home,
  '/skills': skills,
  '/projects': projects,
  '/career': career,
  '/contact': contact,
  '/blog': blog,
};

export default routes;
