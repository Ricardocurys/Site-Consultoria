const btnMenu = document.querySelector('#menu-button');
const nav = document.querySelector('#menu');
const btnFechar = document.querySelector('.menu-fechar')

const toggleNav = () => nav.classList.toggle('aparecer');

btnMenu.addEventListener('click', toggleNav);
btnFechar.addEventListener('click', toggleNav);

const menuLista = document.querySelectorAll('.menu-lista-itens');

menuLista.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('aparecer');
    });
});
