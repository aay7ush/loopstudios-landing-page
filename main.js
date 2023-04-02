const menuButton = document.getElementById('menu')
const menuCloseButton = document.getElementById('menu-close')
const navMenu = document.getElementById('nav-menu')

menuButton.addEventListener('click', () => {
  menuButton.classList.add('hidden')
  menuCloseButton.classList.remove('hidden')
  navMenu.classList.replace('hidden', 'grid')
})

menuCloseButton.addEventListener('click', () => {
  menuCloseButton.classList.add('hidden')
  menuButton.classList.remove('hidden')
  navMenu.classList.replace('grid', 'hidden')
})
