/* =============================================
   PORTFÓLIO — SMOKEZ3 // CYBERSECURITY
   main.js — versão 2.0

   Controla:
   1. Tela de boot
   2. Animação dos blocos de letras (hero title)
   3. Animações de entrada no scroll
   4. Link ativo na navbar
============================================= */

/* =============================================
   1. TELA DE BOOT
   BOOT_DURATION = tempo total em ms antes de mostrar o site
============================================= */
window.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  const main       = document.getElementById('main');
  const BOOT_DURATION = 3500;

  setTimeout(() => {
    bootScreen.classList.add('fade-out');
    setTimeout(() => {
      bootScreen.style.display = 'none';
      main.classList.remove('hidden');
      initBlockLetters();   // anima o título em blocos
      initScrollAnimations();
    }, 800);
  }, BOOT_DURATION);
});

/* =============================================
   2. ANIMAÇÃO DOS BLOCOS DE LETRAS
   Cada bloco cai do topo com delay escalonado
============================================= */
function initBlockLetters() {
  const letters = document.querySelectorAll('.block-letter');

  letters.forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.add('visible');
    }, i * 80); // 80ms entre cada letra — diminua para mais rápido
  });
}

/* =============================================
   3. ANIMAÇÕES DE SCROLL
   Elementos aparecem ao rolar a página
============================================= */
function initScrollAnimations() {
  const style = document.createElement('style');
  style.textContent = `
    .cert-card, .project-card, .skill-category,
    .contato-card, .info-item {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .cert-card.visible, .project-card.visible,
    .skill-category.visible, .contato-card.visible,
    .info-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll(
    '.cert-card, .project-card, .skill-category, .contato-card, .info-item'
  ).forEach(el => observer.observe(el));
}

/* =============================================
   4. NAVBAR — LINK ATIVO NO SCROLL
============================================= */
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navbar a');
  let current = '';

  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 150) current = s.id;
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${current}`) link.style.color = '#00ff88';
  });
});
