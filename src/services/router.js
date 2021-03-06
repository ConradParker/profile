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

function getCurrentRoute() {
  // Get the parsed URl from the address bar
  const request = parseRequestURL();
  return (
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '')
  );
}

// The router code. Checks the URL, checks against the list of supported routes and then renders the corresponding content page.
async function changeRoute(elementId) {
  // TODO: Hide content whilst loading new page to prevent flash
  // const contentDiv = document.querySelector('.content');
  // contentDiv.setAttribute('style', 'visibility: hidden; height:1500px');

  // Lazy load view element:
  const content = null || document.getElementById(elementId);
  const parsedURL = getCurrentRoute();

  // Get the page from our hash of supported routes.
  // If the parsed URL is not in our list of supported routes, select the 404 page instead
  const page = routes[parsedURL] ? routes[parsedURL] : error404;
  content.innerHTML = await page.render();

  // Call any events on the page after its been rendered
  await page.after_render();
}

export { getCurrentRoute, changeRoute };
