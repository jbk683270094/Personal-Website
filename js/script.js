app()

function app(){
    navigationSlideIn()
}

function navigationSlideIn(){
    const burgerMenu = document.querySelector('.burger-menu')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burgerMenu.addEventListener('click', () => {
        // Burger menu animation
        burgerMenu.classList.toggle('toggle')
        // Navigation bar slide-in animation
        nav.classList.toggle('nav-active')
        // Navigation links fade-in animation
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFadeIn 0.5s ease forwards ${index / 7 + 0.5}s`
            }
        })
    })
}