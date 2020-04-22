import router from './services/router.js';

// Listen on hash change:
window.addEventListener('hashchange', router);

// Listen on page load:
window.addEventListener('load', router);

function updateMenuDisplay(menuItemClicked) {
  const activeClassName = 'active';
  const activeMenuItem = document.querySelector(
    `.menu-item.${activeClassName}`
  );

  if (menuItemClicked !== activeMenuItem) {
    activeMenuItem.classList.remove(activeClassName);
  }
  menuItemClicked.classList.add(activeClassName);
}

// Listen for Menu Item changes
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    updateMenuDisplay(event.target);
  });
});
