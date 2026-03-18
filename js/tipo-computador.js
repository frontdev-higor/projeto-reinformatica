
/**
 * Entra na Aba específica da Página
 */

  // Prioriza hash
  document.addEventListener("DOMContentLoaded", function () {
  let tabId = null;

    if (window.location.hash) {
      tabId = window.location.hash;
    } 
    else {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");

      if (tabParam) {
        tabId = "#" + tabParam;
      } 
      else {
        // pega a última aba salva
        tabId = localStorage.getItem("ultimaAbaComputador");
      }
    }

    if (tabId) {
      const trigger = document.querySelector(
        `[data-bs-toggle="tab"][data-bs-target="${tabId}"]`
      );

      if (trigger) {
        new bootstrap.Tab(trigger).show();
        window.scrollTo(0,0);
      }
    }
  });

// ========================================================================= //

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
          const tab = new bootstrap.Tab(tabTrigger);
          tab.show();
        }
      });
    });

// ========================================================================= //

/**
 * Dropdown mobile ativo
 */
    
  function syncDropdownWithTab(target) {
    if (!target) return

    const dropdownItems = document.querySelectorAll(
      '.dropdown-tabs-mobile .dropdown-item'
    )
    const dropdownButton = document.getElementById('dropdownTabButton')

    dropdownItems.forEach(item => {
      item.classList.remove('active')

      if (item.getAttribute('data-bs-target') === target) {
        item.classList.add('active')
        dropdownButton.textContent = item.textContent.trim()
      }
    })
  }

  // Ao trocar de aba
  document.addEventListener('shown.bs.tab', function (event) {

    const target = event.target.getAttribute('data-bs-target')

    // salva a aba atual
    localStorage.setItem('ultimaAbaComputador', target)

    syncDropdownWithTab(target)

  })

  // Ao carregar a página
  document.addEventListener('DOMContentLoaded', function () {
    const activeTab = document.querySelector('.nav-tabs .nav-link.active')
    if (activeTab) {
      syncDropdownWithTab(
        activeTab.getAttribute('data-bs-target')
      )
    }
  })