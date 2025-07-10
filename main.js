// ===== CUENTA REGRESIVA =====
const fechaEvento = new Date("2026-08-23T00:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  const diasElem = document.getElementById("dias");
  const horasElem = document.getElementById("horas");
  const minutosElem = document.getElementById("minutos");
  const segundosElem = document.getElementById("segundos");

  if (diasElem && horasElem && minutosElem && segundosElem) {
    diasElem.textContent = dias;
    horasElem.textContent = horas;
    minutosElem.textContent = minutos;
    segundosElem.textContent = segundos;
  }
}, 1000);


// ===== CONFIRMACIÓN POR WHATSAPP =====
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btnConfirmar");
  const formulario = document.getElementById("formularioConfirmacion");
  const form = document.getElementById("formConfirmacion");

  // Mostrar u ocultar el formulario al dar clic
  if (btn && formulario) {
    btn.addEventListener("click", function () {
      formulario.classList.toggle("oculto");
    });
  }

  // Enviar datos a WhatsApp
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value.trim();
      const asistire = document.getElementById("asistire").value;
      const comentarios = document.getElementById("comentarios").value.trim();

      if (!nombre || !asistire) {
        alert("Por favor completa los campos requeridos.");
        return;
      }

      const mensaje = `Hola, confirmo mi asistencia:\n\n👤 Nombre: ${nombre}\n✅ Asistiré: ${asistire}\n📝 Comentarios: ${comentarios || 'Ninguno'}`;
      const url = `https://wa.me/525536659768?text=${encodeURIComponent(mensaje)}`;

      window.open(url, "_blank");

      formulario.classList.add("oculto");
      form.reset();
    });
  }
});
