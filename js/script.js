document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. ENVÍO DE RESERVA A WHATSAPP
  // ==========================================
  const orderForm = document.getElementById('orderForm');
  const PHONE_NUMBER = "51910782436"; 

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('fullName').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const quantitySelect = document.getElementById('quantity');
      const quantity = quantitySelect ? quantitySelect.options[quantitySelect.selectedIndex].text : "1";
      const address = document.getElementById('address').value.trim();

      if (!name || !phone || !address) {
        alert('Por favor, completa todos los campos del formulario.');
        return;
      }

      const message = `✨ *NUEVA RESERVA - CAPULÍ ADVIENTO* ✨\n\n` +
        `👤 *Nombre Completo:* ${name}\n` +
        `📱 *Teléfono / WhatsApp:* ${phone}\n` +
        `📦 *Cantidad:* ${quantity}\n` +
        `📍 *Dirección de Envío:* ${address}\n\n` +
        `¡Hola! Quisiera confirmar esta reserva.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  // ==========================================
  // 2. MODAL DE PRODUCTO (AMPLIAR IMAGEN)
  // ==========================================
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalClose = document.getElementById('modalClose');
  const modalReserveBtn = document.getElementById('modalReserveBtn');
  const cards = document.querySelectorAll('.card');

  if (modal) {
    // Abrir modal al hacer clic en cualquier tarjeta
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('.card-img img');
        const badge = card.querySelector('.day-badge');
        const title = card.querySelector('h3');
        const description = card.querySelector('p');

        if (modalImg) modalImg.src = img ? img.src : '';
        if (modalBadge) modalBadge.textContent = badge ? badge.textContent : '';
        if (modalTitle) modalTitle.textContent = title ? title.textContent : '';
        if (modalDescription) modalDescription.textContent = description ? description.textContent : '';

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      });
    });

    // Función para cerrar modal
    function closeModal() {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    if (modalReserveBtn) {
      modalReserveBtn.addEventListener('click', closeModal);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
      }
    });
  }

});