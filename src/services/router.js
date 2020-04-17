import home from '../views/pages/home.js';
import skills from '../views/pages/skills.js';
import error404 from '../views/pages/error404.js';
import utils from './utils.js';

const routes = {
  '/': home,
  '/skills': skills,
};

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {
  const loadingText = 'Loading...';

  // Lazy load view element:
  const content = null || document.getElementById('page-container');

  // Set loading state
  content.innerHTML = loadingText;

  // Get the parsed URl from the address bar
  const request = utils.parseRequestURL();
  const parsedURL =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : error404;
  content.innerHTML = await page.render();

  // Call any events on the page after its been rendered
  await page.after_render();
};
export default router;
