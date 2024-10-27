const menuIcon = document.getElementById("menu")
const links = document.querySelector('#links')
const container = document.querySelector('.container')

const toggle = false;

menuIcon.addEventListener('click', ()=>{
    if(!toggle){
        container.innerHTML = links.innerHTML
    }else{container.innerHTML}
    }
)