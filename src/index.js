import router from './services/router.js';

function updateRoute() {
  const contentElement = 'page-container';
  router(contentElement);
}
// Listen on hash change:
window.addEventListener('hashchange', updateRoute);

// Listen on page load:
window.addEventListener('load', updateRoute);

function updateMenuDisplay(menuItemClicked) {
  const activeClassName = 'menu__item--active';
  const activeMenuItem = document.querySelector(`.${activeClassName}`);

  if (menuItemClicked !== activeMenuItem) {
    activeMenuItem.classList.remove(activeClassName);
  }
  menuItemClicked.classList.add(activeClassName);
}

// Listen for Menu Item changes
const menuItems = document.querySelectorAll('.menu__item');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    updateMenuDisplay(event.target);
  });
});
