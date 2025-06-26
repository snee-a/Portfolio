
/* ===== Dark / Light Mode Toggle ===== */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const userPref = localStorage.getItem('theme');

// Apply saved preference
if (userPref === 'dark' || (!userPref && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  themeIcon.textContent = 'light_mode';
} else {
  themeIcon.textContent = 'dark_mode';
}

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  themeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

/* ===== Mobile Menu Toggle ===== */
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const mobileMenu = document.getElementById('mobile-menu');

navToggle?.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
});

navClose?.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});

// Close menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('translate-x-full'));
});
