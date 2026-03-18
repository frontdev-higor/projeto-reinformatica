
/**
 * Dados dos produtos
 */

  const produtos = {

    "mais-vendidos": [

      {
        id: "itens.html?id=352",
        nome: "ThinkCentre i7 6700",
        antigo: "1.600,00",
        novo: "R$ 1.400,00",
        img: "imagens/slim/lenovo/i7-6700/i7-6700-frente.webp"
      },

      {
        id: "itens.html?id=552",
        nome: "ThinkPad T480 i5-8350u",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/notebook/lenovo/i5-8350u/i5-8350u-frente.webp"
      },

      {
        id: "itens.html?id=152",
        nome: "Desktop Mini i5 6500t",
        antigo: "1.300,00",
        novo: "R$ 1.100,00",
        img: "imagens/mini/lenovo/i5-6500t/i5-6500t-frente.webp"
      },

    ],

    "custo-beneficio": [

      {
        id: "itens.html?id=151",
        nome: "Lenovo Mini i3 6500t",
        antigo: "1.200,00",
        novo: "R$ 900,00",
        img: "imagens/mini/lenovo/i3-6500t/i3-6500t-frente.webp"
      },

      {
        id: "itens.html?id=551",
        nome: "ThinkPad T470 i5 6300u",
        antigo: "1.400,00",
        novo: "1.200,00",
        img: "imagens/notebook/lenovo/i5-6300u/i5-6300u-frente.webp"
      },

      {
        id: "itens.html?id=400",
        nome: "Positivo Master i5 7500",
        antigo: "1.100,00",
        novo: "R$ 850,00",
        img: "imagens/slim/positivo/i5-7500/i5-7500-frente.webp"
      }

    ],

    "trabalho": [

      {
        id: "",
        nome: "OptiPlex 3060 i5 8500",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/slim/dell/i5-8500/i5-8500-frente.webp"
      },

      {
        id: "",
        nome: "OptiPlex 3060 i5 8500",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/slim/dell/i5-8500/i5-8500-frente.webp"
      },

      {
        id: "",
        nome: "OptiPlex 3060 i5 8500",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/slim/dell/i5-8500/i5-8500-frente.webp"
      }

    ],

    "estudos": [

      {
        id: "",
        nome: "OptiPlex 3060 i5 8500",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/slim/dell/i5-8500/i5-8500-frente.webp"
      },

      {
        id: "",
        nome: "OptiPlex 3060 i5 8500",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/slim/dell/i5-8500/i5-8500-frente.webp"
      },

      {
        id: "",
        nome: "OptiPlex 3060 i5 8500",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/slim/dell/i5-8500/i5-8500-frente.webp"
      }

    ]

};

// ========================================================================= //

/**
 * Carousel dinâmico
 */

  function carregarCarousel(categoria) {

    // Proteção contra categoria inexistente
    if (!produtos[categoria]) return;

    const inner = document.querySelector("#carousel-dinamico .carousel-inner");
    const indicators = document.querySelector("#carousel-dinamico .carousel-indicators");

    inner.innerHTML = "";
    indicators.innerHTML = "";

    produtos[categoria].forEach((produto, index) => {

      indicators.innerHTML += `
        <button type="button" 
          data-bs-target="#carousel-dinamico" 
          data-bs-slide-to="${index}" 
          class="${index === 0 ? 'active' : ''}">
        </button>
      `;

      inner.innerHTML += `
      <div class="carousel-item ${index === 0 ? 'active' : ''}">
        <a href="${produto.id}">
          <img src="${produto.img}" class="img-fluid" alt="${produto.nome}">
          <div class="caption-top">
            <p class="texto-imagem-cima">${produto.nome}</p>
          </div>
          <div class="caption-bottom">
            <p class="texto-imagem-baixo">
              De <strong class="preco-atual">R$ ${produto.antigo}</strong>
              por <strong class="preco-novo">R$ ${produto.novo}</strong>
            </p>
          </div>
        </a>
      </div>
    `;
    });
  }

// ========================================================================= //

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

    document.addEventListener("DOMContentLoaded", () => {

    // Inicializa dropdown mobile
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

    // Detecta aba ativa
    const activeTab = document.querySelector('.nav-tabs .nav-link.active');

    // Sincroniza dropdown
    if (activeTab) {
      syncDropdownWithTab(
        activeTab.getAttribute('data-bs-target')
      );
    }

    // troca de aba → carregar novo carousel
    document.addEventListener('shown.bs.tab', function (event) {

      const categoria = event.target
        .getAttribute('data-bs-target')
        .replace('#', '');

      carregarCarousel(categoria);

    });

    // Inicializa carousel
    let categoria = "mais-vendidos";

    if (activeTab) {
      categoria = activeTab
        .getAttribute('data-bs-target')
        .replace('#', '');
    }

    carregarCarousel(categoria);

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