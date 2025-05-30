// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
  } else {
    // Default to light mode if no preference saved
    body.classList.add('light');
  }
  
  // Theme toggle click handler
  themeToggle.addEventListener('click', () => {
    body.classList.add('dark-transition');
    
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      body.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light');
      body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    
    // Remove transition class after animation completes
    setTimeout(() => {
      body.classList.remove('dark-transition');
    }, 500);
  });
});