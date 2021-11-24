const icon = document.getElementById('icon');
const menu = document.getElementById('menu');
const main = document.getElementById('main');

icon.addEventListener('click' , (e) =>{
    menu.classList.toggle('activo');
    const name = icon.className;
    icon.className = (name === "fas fa-bars"?"fas fa-times" : "fas fa-bars");
    body.classList.toggle('opacity');
    if(icon.className === "fas fa-times"){
      window.addEventListener('scroll', disableScroll);
    }
    else window.removeEventListener('scroll', disableScroll);
});

function disableScroll(){
  window.scrollTo(0, 0);
}
