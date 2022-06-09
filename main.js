function openMenu(){
    if (menuHamburger.classList.contains('menu-expanded'))
        menuHamburger.classList.remove('menu-expanded')
    else
        menuHamburger.classList.add('menu-expanded')
}

function popUp(){
    pop.classList.add('popup-open')
}

function closePopUp(){
    pop.classList.remove('popup-open')
}