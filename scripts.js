const hamburguesa = document.getElementById('hamburguesa');
const menu = document.getElementById('menu');

hamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const menuItems = document.querySelectorAll('#menu li a');

menuItems.forEach(item => {
    item.addEventListener('click',() => {
        menu.classList.remove('active');
    });
});