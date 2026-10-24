document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('orderForm');

  // CONFIGURACIÓN DE TU NÚMERO DE WHATSAPP
  // Reemplaza con tu número real (código de país + número, sin el +)
  const PHONE_NUMBER = "51910782436"; 

  // MANEJO DEL ENVÍO DEL FORMULARIO A WHATSAPP
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Captura de datos del formulario
    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const quantitySelect = document.getElementById('quantity');
    const quantity = quantitySelect.options[quantitySelect.selectedIndex].text;
    const address = document.getElementById('address').value.trim();

    // Validación de campos obligatorios
    if (!name || !phone || !address) {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    // Estructura del mensaje simplificado para WhatsApp
    const message = `✨ *NUEVA RESERVA - CAPULÍ ADVIENTO* ✨\n\n` +
      `👤 *Nombre Completo:* ${name}\n` +
      `📱 *Teléfono / WhatsApp:* ${phone}\n` +
      `📦 *Cantidad:* ${quantity}\n` +
      `📍 *Dirección de Envío:* ${address}\n\n` +
      `¡Hola! Quisiera confirmar esta reserva.`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Enlace directo a WhatsApp
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  });
});