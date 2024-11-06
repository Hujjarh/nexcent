const menuIcon = document.getElementById("menu")
const links = document.querySelector('#links')
const container = document.querySelector('.container')


// const handleToggle = ()=>{
//     const toggle = false;
//     if(!toggle){
//         container.innerHTML = links.innerHTML
//         console.log("i have been clicked");
        
//     }
// }
// const updateToggle = (setToggle)=>{
//     setToggle = true;
// }
// menuIcon.addEventListener('click', ()=>{
//     handleToggle()
    
//     const setToggle = links.innerHTML
//     console.log('whats going on');
//     console.log(setToggle);
    
    
    
// })

const handleMenu = (setMenu)=>{
    setMenu = false;
    if(!setMenu){
        container.innerHTML = links.innerHTML
    }
}

const toggle = false;

const handleToggle = ()=>{
    if(!toggle){
        container.innerHTML = links.innerHTML
    }
}

toggle === false ? null : handleToggle()