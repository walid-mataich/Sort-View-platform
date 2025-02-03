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

// // Dark Mode Toggle
// const themeToggle = document.getElementById('theme-toggle');
  
// // Get stored theme or system preference
// const currentTheme = localStorage.getItem('theme') || 
//   (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// document.documentElement.setAttribute('data-theme', currentTheme);
// updateButtonIcon(currentTheme);

// themeToggle.addEventListener('click', () => {
//   const activeTheme = document.documentElement.getAttribute('data-theme');
//   const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
  
//   document.documentElement.setAttribute('data-theme', newTheme);
//   localStorage.setItem('theme', newTheme);
//   updateButtonIcon(newTheme);
// });

// function updateButtonIcon(theme) {
//   themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
// }

// // Watch for system theme changes
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
//   const newTheme = e.matches ? 'dark' : 'light';
//   document.documentElement.setAttribute('data-theme', newTheme);
//   localStorage.setItem('theme', newTheme);
//   updateButtonIcon(newTheme);
// });
