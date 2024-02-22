const toggle = document.querySelector('#themeToggle');

toggle.addEventListener('change', function() {
  document.documentElement.classList.toggle('theme-dark');
});