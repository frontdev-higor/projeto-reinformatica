
/**
 * Dropdown mobile funcional
 */

  document.querySelectorAll('.dropdown-tabs-mobile .dropdown-item')
    .forEach(item => {
      item.addEventListener('click', function () {
        const target = this.getAttribute('data-bs-target');
        const tabTrigger = document.querySelector(
          `.nav-tabs [data-bs-target="${target}"]`
        );

        if (tabTrigger) {
          new bootstrap.Tab(tabTrigger).show();
        }
      });
    });

// ========================================================================= //

/**
 * Dropdown mobile ativo
 */

  function syncDropdownWithTab(target) {
    if (!target) return;

    const dropdownItems = document.querySelectorAll(
      '.dropdown-tabs-mobile .dropdown-item'
    );
    const dropdownButton = document.getElementById('dropdownTabButton');

    dropdownItems.forEach(item => {
      item.classList.remove('active');

      if (item.getAttribute('data-bs-target') === target) {
        item.classList.add('active');

        if (dropdownButton) {
          dropdownButton.textContent = item.textContent.trim();
        }
      }
    });
  }

// ========================================================================= //

/**
 * Ao trocar de aba
 */

  document.addEventListener('shown.bs.tab', function (event) {
    const target = event.target?.getAttribute('data-bs-target');
    if (!target) return;

    localStorage.setItem('ultimaAbaEquipamento', target);
    syncDropdownWithTab(target);

    // 🔥 fallback seguro (mantém seu sistema estável)
    setTimeout(() => {
      syncDropdownWithTab(target);
    }, 30);
  });

// ========================================================================= //

/**
 * Inicialização da página
 */
  
  document.addEventListener("DOMContentLoaded", function () {

    const DEFAULT_TAB = "#impressora";

    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab");

    let tabId = null;

    // PRIORIDADE CORRETA
    if (window.location.hash) {
      tabId = window.location.hash;
    } 
    else if (tabParam) {
      tabId = "#" + tabParam;
    } 
    else {
      tabId = localStorage.getItem("ultimaAbaEquipamento") || DEFAULT_TAB;
    }

    // 🔥 ATIVA A ABA (ESSENCIAL)
    const trigger = document.querySelector(
      `[data-bs-toggle="tab"][data-bs-target="${tabId}"]`
    );

    if (trigger) {
      new bootstrap.Tab(trigger).show();

      // sincroniza dropdown
      syncDropdownWithTab(tabId);

      // salva corretamente
      localStorage.setItem("ultimaAbaEquipamento", tabId);
    }

  });