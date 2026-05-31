/* =============================================
   PORTFÓLIO — DAVI LOPES // CYBERSECURITY
   main.js

   Este arquivo controla:
   1. Animação da tela de boot
   2. Efeito de digitação no nome (hero)
   3. Animação de entrada das seções (scroll)
   4. Highlight do link ativo na navbar
============================================= */

/* =============================================
   1. TELA DE BOOT
   Remove a tela de boot após as animações
   DURAÇÃO TOTAL: ~3.5 segundos
   Para desabilitar: comente o bloco abaixo
============================================= */
window.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  const main       = document.getElementById('main');

  // Tempo total do boot em milissegundos
  // Aumente para um boot mais longo, diminua para mais rápido
  const BOOT_DURATION = 3500;

  setTimeout(() => {
    // Inicia o fade-out da tela de boot
    bootScreen.classList.add('fade-out');

    // Após o fade, remove a tela e mostra o conteúdo
    setTimeout(() => {
      bootScreen.style.display = 'none';
      main.classList.remove('hidden');

      // Inicia as outras animações após o boot
      initTypewriter();
      initScrollAnimations();
    }, 800); // tempo do fade em ms
  }, BOOT_DURATION);
});

/* =============================================
   2. EFEITO DE DIGITAÇÃO (TYPEWRITER)
   Digita o nome na seção hero letra por letra
   Para alterar o texto, mude a variável "text"
============================================= */
function initTypewriter() {
  const el = document.getElementById('typed-name');
  if (!el) return;

  // Texto a ser digitado — normalmente o nome do dono do site
  const text = el.textContent;
  el.textContent = '';

  // Velocidade de digitação em milissegundos por letra
  // Menor = mais rápido
  const SPEED = 80;

  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(type, SPEED);
    }
  }

  // Pequeno delay antes de começar a digitar
  setTimeout(type, 300);
}

/* =============================================
   3. ANIMAÇÕES DE ENTRADA (SCROLL)
   Os elementos aparecem com fade-in ao rolar
   Para desabilitar: comente este bloco inteiro
============================================= */
function initScrollAnimations() {
  // Adiciona estilo de "invisível" nos cards e seções
  const style = document.createElement('style');
  style.textContent = `
    .cert-card,
    .project-card,
    .skill-category,
    .contato-card,
    .info-item {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .cert-card.visible,
    .project-card.visible,
    .skill-category.visible,
    .contato-card.visible,
    .info-item.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Configuração do IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        // Delay escalonado para cada elemento
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80); // 80ms entre cada elemento
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // elemento precisa estar 10% visível
    rootMargin: '0px 0px -50px 0px'
  });

  // Seleciona todos os elementos animáveis
  const animatables = document.querySelectorAll(
    '.cert-card, .project-card, .skill-category, .contato-card, .info-item'
  );

  animatables.forEach(el => observer.observe(el));
}

/* =============================================
   4. NAVBAR — LINK ATIVO NO SCROLL
   Destaca o link da navbar conforme a seção visível
============================================= */
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('#navbar a');

  let currentSection = '';

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === `#${currentSection}`) {
      // Cor do link ativo — troque se quiser outra cor
      link.style.color = '#00ff88';
    }
  });
});
