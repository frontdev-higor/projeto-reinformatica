  
  document.addEventListener("DOMContentLoaded", () => {

    const path = window.location.pathname.toLowerCase();

    // 🔹 limpa todos os ativos
    document.querySelectorAll(".dropdown-item").forEach(el => {
      el.classList.remove("active");
    });

    // 🔹 mapa de páginas → menu
    const mapaPaginas = {
      "tipo-computador": "menu-computador",
      "tipo-monitor": "menu-monitor",
      "tipo-componente": "menu-componente",
      "tipo-outro": "menu-outro"
    };

    // 🔹 ativa o menu correto
    for (const chave in mapaPaginas) {
      if (path.includes(chave)) {
        document.getElementById(mapaPaginas[chave])?.classList.add("active");
        break;
      }
    }

    // =========================================================================
    // 🔥 TOAST (popup leve)
    // =========================================================================

    if (!sessionStorage.getItem("avisoMostrado")) {

      const toastContainer = document.createElement("div");
      toastContainer.className = "position-fixed bottom-0 end-0 p-3";
      toastContainer.style.zIndex = "9999";

      toastContainer.innerHTML = `
        <div class="toast text-bg-dark border-0 show">
          <div class="d-flex">
            <div class="toast-body">
            ⚠️ A R.E Informática vende produtos seminovos
            Entre na aba <b>Contato</b> e consulte a
            quantidade do produto de interesse conosco.
            </div>
            <button class="btn-close btn-close-white me-2 m-auto"></button>
          </div>
        </div>
      `;

      document.body.appendChild(toastContainer);

      // botão fechar
      toastContainer.querySelector(".btn-close").addEventListener("click", () => {
        toastContainer.remove();
      });

      // auto remove
      setTimeout(() => {
        toastContainer.remove();
      }, 15000);

      sessionStorage.setItem("avisoMostrado", "true");
    }

  });