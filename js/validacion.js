
const form = document.getElementById('consultaForm');
const camposObligatorios = ['nombre', 'fecha', 'apellido', 'e-mail', 'direccion', 'fono', 'cel', 'dni','departamento','placa','modelo', 'propietario','observaciones','compra','detalle'];


function validarCampo(id) {
  const campo = document.getElementById(id);
  const feedback = campo.nextElementSibling;

  if (campo.value.trim() === '') {
    campo.classList.add('is-invalid');
    campo.classList.remove('is-valid');
    return false;
  } else {
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
    return true;
  }
}

function validarFecha() {
  const fecha = document.getElementById('fecha');
  if (!fecha.value) {
    fecha.classList.add('is-invalid');
    fecha.classList.remove('is-valid');
    return false;
  }
  fecha.classList.remove('is-invalid');
  fecha.classList.add('is-valid');
  return true;
}


camposObligatorios.forEach(campo => {
  document.getElementById(campo).addEventListener('input', () => validarCampo(campo));
});
document.getElementById('fecha').addEventListener('change', validarFecha);


form.addEventListener('submit', (e) => {
  e.preventDefault(); // evita recarga

  let ok = true;
  camposObligatorios.forEach(campo => ok &= validarCampo(campo));
  ok &= validarFecha();

  if (ok) {
    alert('Consulta validada y lista para enviar.');
    
  } else {
    alert('Por favor complete los campos obligatorios.');
  }
});