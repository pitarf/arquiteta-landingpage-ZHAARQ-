/** 
 * main.js - Comportamentos interativos, rastreamento Google Ads/GA4 e UX da ZHAARQ
 * Inclui: FAQ Acordeão, Rastreamento com UTMs e dataLayer, Lightbox, Toast e LGPD
 */

window.dataLayer = window.dataLayer || [];

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initWhatsAppTracking();
  initLightbox();
  initLgpdBanner();
  initScrollReveal();
  initPremiumInteractions();
});

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
  if (gclid) tags.push('Google Ads: Sim');

  return tags.length > 0 ? ` (${tags.join(' | ')})` : '';
}

function initFaqAccordion() {
  const faqButtons = document.querySelectorAll('.faq-trigger');

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const parentItem = button.closest('.faq-item');
      const isAlreadyActive = parentItem.classList.contains('active');

      document.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('active');
        const trigger = item.querySelector('.faq-trigger');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });

      if (!isAlreadyActive) {
        parentItem.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initWhatsAppTracking() {
  const whatsappButtons = document.querySelectorAll('.btn-whatsapp');
  const baseMessage = 'Olá, encontrei a ZHAARQ pelo Google. Quero entender como regularizar meu imóvel e posso enviar as informações para uma análise inicial.';

  whatsappButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const phone = btn.getAttribute('data-phone') || '5511999999999';
      const ctaLocation = btn.getAttribute('data-cta-location') || 'geral';
      const fullMessage = baseMessage + getTrackingSuffix();
      const encodedMsg = encodeURIComponent(fullMessage);
      const url = `https://wa.me/${phone}?text=${encodedMsg}`;

      window.dataLayer.push({
        event: 'whatsapp_conversion',
        event_category: 'Lead',
        event_action: 'Click WhatsApp',
        event_label: ctaLocation,
        cta_position: ctaLocation
      });

      showToast('Redirecionando para o WhatsApp da ZHAARQ...', 'success');

      setTimeout(() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }, 350);
    });
  });
}

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
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });
}

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

function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = document.querySelectorAll('main section, body > section');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('is-visible'));
    return;
  }

  sections.forEach((section) => {
    section.classList.add('scroll-section');

    const revealItems = section.querySelectorAll(
      ':scope > div > div, .pain-card, .timeline-connector, .faq-item, .editorial-shadow, [data-reveal]'
    );

    revealItems.forEach((item, index) => {
      if (item.closest('.faq-item') && !item.classList.contains('faq-item')) return;
      item.classList.add('scroll-reveal');
      item.style.setProperty('--reveal-delay', `${Math.min(index * 70, 420)}ms`);
    });
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('is-visible');

      const items = entry.target.querySelectorAll('.scroll-reveal');
      items.forEach((item) => item.classList.add('is-visible'));

      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  sections.forEach((section) => observer.observe(section));
}

function initPremiumInteractions() {
  const header = document.querySelector('header');
  const hero = document.querySelector('body > section:first-of-type');

  if (header) {
    header.classList.add('site-header');

    const updateHeader = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 24);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progress);

  const updateProgress = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
  };

  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });

  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  hero.classList.add('hero-premium');

  const heroImage = hero.querySelector('img');
  const heroCard = hero.querySelector('.editorial-shadow');

  if (!heroImage || !heroCard || !window.matchMedia('(pointer: fine)').matches) return;

  let frame = null;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const render = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    hero.style.setProperty('--hero-x', `${currentX}px`);
    hero.style.setProperty('--hero-y', `${currentY}px`);
    heroCard.style.setProperty('--card-x', `${currentX * 0.18}px`);
    heroCard.style.setProperty('--card-y', `${currentY * 0.18}px`);

    frame = requestAnimationFrame(render);
  };

  const onPointerMove = (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    targetX = x * 12;
    targetY = y * 10;
  };

  const reset = () => {
    targetX = 0;
    targetY = 0;
  };

  hero.addEventListener('pointermove', onPointerMove);
  hero.addEventListener('pointerleave', reset);

  frame = requestAnimationFrame(render);

  window.addEventListener('pagehide', () => {
    if (frame) cancelAnimationFrame(frame);
  }, { once: true });
}
