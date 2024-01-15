const sideMenu = document.querySelector('.side-menu');

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        sideMenu.className = 'side-menu show'
    } else {
        sideMenu.className = 'side-menu'

    }
})