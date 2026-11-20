
/**
 * Botão subir sobe com footer visivel
 */

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnSubir');
    const footer = document.getElementById('footer');

    if (!btn || !footer) return;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Footer visível → sobe o botão
          btn.style.position = 'absolute';
          btn.style.bottom = `${footer.offsetHeight + 15}px`;
        } else {
          // Footer fora da tela → botão fixo
          btn.style.position = 'fixed';
          btn.style.bottom = '20px';
        }
      });
    });

    observer.observe(footer);
  });
