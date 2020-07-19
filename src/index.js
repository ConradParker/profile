import * as router from './services/router.js';
import utils from './services/utils.js';
import './views/components/header-block.js';

function updateRoute() {
  router.changeRoute('page-container');
  utils.updateMenu(router.getCurrentRoute());
}
// Listen on hash change:
window.addEventListener('hashchange', updateRoute);

// Listen on page load:
window.addEventListener('load', updateRoute);
