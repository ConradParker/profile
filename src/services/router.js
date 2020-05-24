import routes from './routes.js';
import error404 from '../views/pages/error404.js';

/**
 * Parse a url and break it into resource, id and verb
 */
function parseRequestURL() {
  const url = window.location.hash.slice(1) || '/';
  const [resource, id, verb] = url.split('/').splice(1);
  return { resource, id, verb };
}

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
export default async (elementId) => {
  const loadingText = 'Loading...';

  // Lazy load view element:
  const content = null || document.getElementById(elementId);

  // Set loading state
  content.innerHTML = loadingText;

  // Get the parsed URl from the address bar
  const request = parseRequestURL();
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
