/**
 * main.js - Comportamentos interativos da Landing Page ZHAARQ
 * Inclui: FAQ Acordeão, Gerenciamento de WhatsApp, Toast Notifications e Modal Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initWhatsAppTracking();
  initLightbox();
});

/**
 * Inicializa o acordeão da seção de FAQ (Dúvidas Frequentes)
 * Permite alternar a visualização das respostas com controle acessível
 */
function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-trigger');

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const parentItem = button.closest('.faq-item');
      const isAlreadyActive = parentItem.classList.contains('active');

      // Fecha todos os itens abertos
      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('active');
        const trigger = item.querySelector('.faq-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });

      // Se não estava ativo, abre o item clicado
      if (!isAlreadyActive) {
        parentItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Configura os links do WhatsApp para incluir a mensagem do briefing
 * Exibe notificação toast elegante informando o redirecionamento
 */
function initWhatsAppTracking() {
  const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
  const defaultMessage = 'Olá, encontrei a ZHAARQ pelo Google e gostaria de entender como regularizar meu imóvel.';

  whatsappButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // Se não houver número configurado, usa um placeholder seguro ou abre link
      const phone = btn.getAttribute('data-phone') || '5511999999999';
      const encodedMsg = encodeURIComponent(defaultMessage);
      const url = `https://wa.me/${phone}?text=${encodedMsg}`;

      showToast('Redirecionando para o WhatsApp da ZHAARQ...', 'success');
      
      // Permite o clique seguir após breve feedback
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 400);
      e.preventDefault();
    });
  });
}

/**
 * Exibe uma notificação visual moderna no estilo Toast (evita alert nativo)
 * @param {string} message - Texto descritivo da notificação
 * @param {'success' | 'info' | 'warning' | 'error'} type - Categoria da notificação
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const borderColors = {
    success: 'border-[#993819] text-[#1F1D1B]',
    info: 'border-[#C4966B] text-[#1F1D1B]',
    warning: 'border-yellow-600 text-yellow-900',
    error: 'border-red-600 text-red-900',
  };

  toast.className = `toast mb-3 px-5 py-3.5 rounded-xl bg-white shadow-xl border-l-4 ${borderColors[type] || borderColors.info} flex items-center space-x-3 text-sm font-medium`;
  toast.innerHTML = `
    <svg class="w-5 h-5 text-[#993819] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Modal Lightbox para visualização ampliada das fachadas e etapas de projetos
 */
function initLightbox() {
  const zoomableImages = document.querySelectorAll('.zoomable-image');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalClose = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  zoomableImages.forEach((img) => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    });
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Fecha o modal ao pressionar a tecla Escape (Esc)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
