const heroDiv = document.querySelector('.hero-div');



window.addEventListener('scroll', () => {
  // When scroll goes beyond 100px, apply the hidden class
  if (window.scrollY > 100) {
    heroDiv.classList.add('hidden');
    
  } else {
    heroDiv.classList.remove('hidden');
    
    
  }
});



const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

