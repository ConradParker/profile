import * as router from './services/router.js';
import './views/components/header-block.js';

// Set the correct menu item
function updateMenu() {
  const routeName = router.getCurrentRoute();
  const headerBlock = document.querySelector('header-block');
  const anchorTag = headerBlock.root.querySelector(`a[href='/#${routeName}']`);
  headerBlock.updateMenuDisplay(anchorTag);
}

function updateRoute() {
  // Change the page
  const contentElement = 'page-container';
  router.changeRoute(contentElement);
  updateMenu();
}
// Listen on hash change:
window.addEventListener('hashchange', updateRoute);

// Listen on page load:
window.addEventListener('load', updateRoute);
