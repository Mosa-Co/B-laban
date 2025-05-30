// Language toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const languageToggle = document.getElementById('language-toggle');
  const html = document.documentElement;
  
  // Check for saved language preference
  const savedLang = localStorage.getItem('language');
  if (savedLang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    updateTextContent('ar');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
  }
  
  // Language toggle click handler
  languageToggle.addEventListener('click', () => {
    if (html.getAttribute('dir') === 'ltr') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
      localStorage.setItem('language', 'ar');
      updateTextContent('ar');
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      localStorage.setItem('language', 'en');
      updateTextContent('en');
    }
  });
  
  // Function to update text content based on language
  function updateTextContent(lang) {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
      if (lang === 'ar') {
        element.textContent = element.getAttribute('data-ar');
      } else {
        element.textContent = element.getAttribute('data-en');
      }
    });
  }
});