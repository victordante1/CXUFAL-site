  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    msg.textContent = 'Mensagem registrada. Este formulário é um exemplo — conecte a um serviço de envio (ex: e-mail ou backend) antes de publicar.';
    msg.style.color = 'var(--accent)';
    form.reset();
  });
