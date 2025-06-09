// Scroll animation logic
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

// Responsive navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
