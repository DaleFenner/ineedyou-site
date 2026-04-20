const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const ambientLeft = document.querySelector('.ambient-left');
const ambientRight = document.querySelector('.ambient-right');

window.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  ambientLeft.style.transform = `translate(${x * 12}px, ${y * 10}px)`;
  ambientRight.style.transform = `translate(${x * -12}px, ${y * -10}px)`;
});
