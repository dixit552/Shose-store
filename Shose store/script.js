const toggleButton = document.getElementById('toggle-theme');
const themeIcon = document.getElementById('theme-icon');

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', isDark);
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
});

// Toggle theme
toggleButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('darkMode', isDark);
});


const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
  const totalSlides = slides.length;
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(currentIndex - 1);
});


setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);

showSlide(currentIndex);

  function shopNow() {
    alert("Redirecting to Shop Page...");
  }
  
 function addToCart(button) {
  const productName = button.getAttribute('data-name');
  alert(`${productName} added to cart!`);
  // You can later push to a cart array or update UI
}

