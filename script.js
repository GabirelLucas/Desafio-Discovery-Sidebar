let button =  document.querySelector('button')
let sidebar = document.querySelector('.openSidebar')
let logoContainer =  document.querySelector('#logo')
let buscar = document.querySelector('.active')
let userContainer = document.querySelector('.user')
let userImage = userContainer.firstElementChild
let userInfo = userImage.nextElementSibling
let logoImage = logoContainer.firstElementChild
let sidebarAberto = ("openSidebar" == sidebar.getAttribute('class'))
let sidebarFechado



function closeSidebar () {
    
    sidebar.classList.remove('openSidebar')
    sidebar.classList.add('closeSidebar')
    logoContainer.removeAttribute('logo')
    logoImage.setAttribute('id', 'logo')
    button.setAttribute('id', 'openBtn')
    buscar.classList.remove('active')
    buscar.classList.add('closeActive')
    userImage.removeAttribute('PhotoProfile')
    userImage.setAttribute('id', 'userImage')
    userInfo.classList.toggle('logOut')
    sidebarFechado = ("closeSidebar" == sidebar.getAttribute('class'))
    sidebarAberto = ("openSidebar" == sidebar.getAttribute('class'))
}

function openSidebar () {
    sidebar.classList.remove('closeSidebar')
    sidebar.classList.add('openSidebar')
    logoImage.removeAttribute('id')
    logoContainer.setAttribute('id', 'logo')
    button.removeAttribute('id')
    buscar.classList.remove('closeActive')
    buscar.classList.add('active')
    userImage.removeAttribute('id')
    userImage.setAttribute('id', 'PhotoProfile')
    userInfo.classList.toggle('logOut')
    sidebarFechado = ("closeSidebar" == sidebar.getAttribute('class'))
    sidebarAberto = ("openSidebar" == sidebar.getAttribute('class'))
}

function toggleSidebar () {
    if(sidebarAberto) {
        closeSidebar()
    } else {
        openSidebar()
    }
}




button.addEventListener('click', toggleSidebar)
