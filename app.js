const navbarMenu = document.querySelector('.navbar');
const offScreenMenu = document.querySelector('.navbar__menu')

navbarMenu.addEventListener('click', () =>{
    navbarMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})