let navbar = document.querySelector('.navbar .menue')

document.querySelector('#menubr').onclick = () =>{
    navbar.classList.add('active');
}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}