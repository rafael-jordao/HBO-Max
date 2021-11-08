const btnMobile = document.getElementById('btnMobile')


function toggleMenu() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);