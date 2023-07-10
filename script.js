const sidebarIconsEl = document.querySelectorAll('.sidebar-icons')
const sidebarEl = document.querySelector('.sidebar')
const sidebarSpanEl = document.querySelectorAll('.sidebar-span')

function toggleSidebar() {
    sidebarEl.classList.toggle('showAndHideSidebar')

    sidebarSpanEl.forEach((e) => {
        e.classList.toggle('show')
    })
}

sidebarIconsEl.forEach(e => {
    e.addEventListener('click', toggleSidebar)
})