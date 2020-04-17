import './views/components/nav-bar.js';
import router from './services/router.js';

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);
