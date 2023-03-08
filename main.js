const botaoMenuLateral = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu__lateral');

botaoMenuLateral.addEventListener('click', () => {
    menu.classList.toggle('menu__lateral--ativo')
})