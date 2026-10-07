/**
 * main.js - Comportamentos interativos, rastreamento Google Ads/GA4 e UX da ZHAARQ
 * Inclui: FAQ Acordeão, Rastreamento com UTMs e dataLayer, Lightbox, Toast e LGPD
 */

// Inicializa dataLayer para Google Tag Manager / Google Ads
window.dataLayer = window.dataLayer || [];

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initWhatsAppTracking();
  initLightbox();
  initLgpdBanner();
});

/**
 * Captura parâmetros de rastreamento UTM e GCLID da URL atual
 * @returns {string} Texto formatado com as tags de campanha
 */
function getTrackingSuffix() {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source');
  const utmCampaign = params.get('utm_campaign');
  const utmMedium = params.get('utm_medium');
  const utmContent = params.get('utm_content');
  const gclid = params.get('gclid');

  let tags = [];
  if (utmSource) tags.push(`Origem: ${utmSource}`);
  if (utmCampaign) tags.push(`Campanha: ${utmCampaign}`);
  if (utmMedium) tags.push(`Mídia: ${utmMedium}`);
  if (utmContent) tags.push(`Conteúdo: ${utmContent}`);
  if (gclid) tags.push(`Google Ads: Sim`);

  return tags.length > 0 ? ` (${tags.join(' | ')})` : '';
}

/**
 * Inicializa o acordeão da seção de FAQ (Dúvidas Frequentes)
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
 * Configura os botões do WhatsApp com rastreamento Google Ads e preservação de UTMs
 */
function initWhatsAppTracking() {
  const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
  const baseMessage = 'Olá, encontrei a ZHAARQ pelo Google e gostaria de entender como regularizar meu imóvel.';

  whatsappButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const phone = btn.getAttribute('data-phone') || '5511999999999';
      const ctaLocation = btn.getAttribute('data-cta-location') || 'geral';
      const fullMessage = baseMessage + getTrackingSuffix();
      const encodedMsg = encodeURIComponent(fullMessage);
      const url = `https://wa.me/${phone}?text=${encodedMsg}`;

      // Dispara evento de conversão para Google Tag Manager / Google Ads / GA4
      window.dataLayer.push({
        event: 'whatsapp_conversion',
        event_category: 'Lead',
        event_action: 'Click WhatsApp',
        event_label: ctaLocation,
        cta_position: ctaLocation
      });

      showToast('Redirecionando para o WhatsApp da ZHAARQ...', 'success');

      // Abre o WhatsApp imediatamente em nova aba
      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 350);
    });
  });
}

/**
 * Exibe notificação visual estilo Toast
 * @param {string} message - Texto informativo
 * @param {'success' | 'info' | 'warning' | 'error'} type - Categoria
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

  toast.className = `toast mb-3 px-5 py-3.5 rounded-xl bg-white shadow-xl border-l-4 ${borderColors[type] || borderColors.info} flex items-center space-x-3 text-sm font-semibold`;
  toast.innerHTML = `
    <svg class="w-5 h-5 text-[#993819] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/**
 * Lightbox modal com zoom e tecla Escape
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

/**
 * Banner de conformidade LGPD / Cookies
 */
function initLgpdBanner() {
  const hasAccepted = localStorage.getItem('zhaarq_lgpd_accepted');
  if (hasAccepted) return;

  const banner = document.createElement('div');
  banner.id = 'lgpd-banner';
  banner.className = 'fixed bottom-20 md:bottom-5 left-4 right-4 md:left-6 md:right-auto md:max-w-md bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5DCD2] shadow-2xl z-40 text-xs text-[#6B635B] space-y-3';
  banner.innerHTML = `
    <p>Utilizamos cookies essenciais e tecnologias de medição para otimizar a navegação e melhorar nossos atendimentos em conformidade com a <strong>LGPD</strong>.</p>
    <div class="flex items-center justify-end space-x-2">
      <button id="lgpd-accept" class="bg-[#141312] text-white font-bold px-4 py-1.5 rounded-lg text-xs hover:bg-[#993819] transition-colors">
        Entendi e Aceito
      </button>
    </div>
  `;

  document.body.appendChild(banner);

  document.getElementById('lgpd-accept')?.addEventListener('click', () => {
    localStorage.setItem('zhaarq_lgpd_accepted', 'true');
    banner.remove();
  });
}
