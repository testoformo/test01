// Animace sekcí při scrollování
const sections = document.querySelectorAll('.section');

function checkVisibility() {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
