document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.getElementById('menu-items');
    const menuBurger = document.getElementById('menu-burger');

    if (!menuBurger || menuBurger.style.display === 'none') {
        menuItems.style.display = 'flex';
    }
    menuBurger.addEventListener('click', () => {
        menuItems.style.display = menuItems.style.display === 'none' ? 'flex' : 'none';
    });
});