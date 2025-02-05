const infosec = document.querySelector('.info-sec');
const menu = document.getElementById('menu_btn');
const nav = document.getElementById('nav-container');
const cl = document.getElementById('close');
const blu = document.querySelector('.blur-overlay')

menu.onclick = function() {

  nav.style.left = '25vh';
  nav.style.transition = '0.9s';
  blu.style.visibility = 'visible';
  blu.style.transition = '0.4s';


}

cl.onclick = function() {
  nav.style.left = '100vh';
  blu.style.visibility = 'hidden';
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    infosec.classList.add('hidden');
    
    
  } else {
    infosec.classList.remove('hidden');
    
    
    
  }
});



const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});



