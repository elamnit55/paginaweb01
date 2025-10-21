// Suavizar scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Validación contacto
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensaje enviado. Gracias por contactarnos.');
  e.target.reset();
});

// Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const usuario = e.target[0].value.trim();
  const password = e.target[1].value.trim();

  if (!usuario || !password) {
    alert('Completa todos los campos.');
    return;
  }

  // Simula ingreso
  alert('Bienvenido a Derco');
  window.location.href = 'dashboard.html'; // <-- tu página interna
});