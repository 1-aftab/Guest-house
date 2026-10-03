// Pinecrest Stay — static template interactions
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.menu-toggle');

  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  }));

  // Reveal elements as they enter the viewport.
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Small cinematic parallax on the hero image.
  const heroMedia = document.querySelector('.hero-media');
  window.addEventListener('scroll', () => {
    if (!heroMedia || window.scrollY > window.innerHeight * 1.1) return;
    heroMedia.style.transform = `scale(1.03) translateY(${window.scrollY * 0.08}px)`;
  }, { passive: true });

  // DEMO ONLY: replace this number with the client's WhatsApp number.
  const WHATSAPP_NUMBER = '919876543210';
  const message = encodeURIComponent(
    'Hello Pinecrest Stay, I would like to enquire about a stay. Please share the room options, rates and next steps.'
  );
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
});
