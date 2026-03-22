
/**
 * Dados dos produtos
 */

  const produtos = {

    "mais-vendidos": [

      {
        id: "itens.html?id=352",
        nome: "ThinkCentre Slim i7 6700",
        antigo: "1.600,00",
        novo: "R$ 1.400,00",
        img: "imagens/slim/lenovo/i7-6700/i7-6700-frente.webp"
      },

      {
        id: "itens.html?id=552",
        nome: "ThinkPad T480 i5 8350u",
        antigo: "1.800,00",
        novo: "1.600,00",
        img: "imagens/notebook/lenovo/i5-8350u/i5-8350u-frente.webp"
      },

      {
        id: "itens.html?id=152",
        nome: "ThinkCentre Mini i5 6500t",
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

    if (!produtos[categoria]) {
      categoria = "mais-vendidos";
    }

    const inner = document.querySelector("#carousel-dinamico .carousel-inner");
    const indicators = document.querySelector("#carousel-dinamico .carousel-indicators");

    if (!inner || !indicators) return;

    // 🔥 pausa o carousel antes da troca
    if (carouselInstance) {
      carouselInstance.pause();
    }

    // 🔥 containers fora do DOM
    const newInner = document.createElement("div");
    const newIndicators = document.createElement("div");

    produtos[categoria].forEach((produto, index) => {

      const indicator = document.createElement("button");
      indicator.type = "button";
      indicator.setAttribute("data-bs-target", "#carousel-dinamico");
      indicator.setAttribute("data-bs-slide-to", index);
      if (index === 0) indicator.classList.add("active");

      newIndicators.appendChild(indicator);

      const item = document.createElement("div");
      item.className = `carousel-item ${index === 0 ? 'active' : ''}`;

      item.innerHTML = `
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
      `;

      newInner.appendChild(item);
    });

    // 🔥 troca atômica
    inner.replaceChildren(...newInner.childNodes);
    indicators.replaceChildren(...newIndicators.childNodes);

    // 🔥 força reflow controlado (ESSENCIAL)
    inner.offsetHeight;

    // 🔥 volta pro slide 0 sem animação
    if (carouselInstance) {
      carouselInstance.to(0);
    }
  }

// ========================================================================= //

  let tabId = null;
  let carouselInstance = null;

  const mapaAbas = {
    all: "mais-vendidos",
    mini: "custo-beneficio",
    slim: "trabalho",
    note: "estudos"
  };

// ========================================================================= //

  document.addEventListener("DOMContentLoaded", function () {

    // 🔥 PRELOAD GLOBAL (roda 1 vez só)
    Object.values(produtos).forEach(lista => {
      lista.forEach(p => {
        const img = new Image();
        img.src = p.img;
      });
    });

    // 🔹 1. Descobre qual aba abrir
    if (window.location.hash) {
      tabId = window.location.hash;
    } 
    else {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get("tab");

      if (tabParam) {
        const abaReal = mapaAbas[tabParam] || tabParam;
        tabId = "#" + abaReal;
      } 
      else {
        const savedTab = localStorage.getItem("ultimaAbaIndex");

        const abasValidas = [
          "#mais-vendidos",
          "#custo-beneficio",
          "#trabalho",
          "#estudos"
        ];

        if (abasValidas.includes(savedTab)) {
          tabId = savedTab;
        } else {
          tabId = null;
        }
      }
    }

    // 🔹 2. Define categoria inicial
    let categoria = "mais-vendidos";

    if (tabId) {
      categoria = tabId.replace('#', '');
    }

    // 🔹 3. Ativa aba (se existir)
    if (tabId) {
      const trigger = document.querySelector(
        `[data-bs-toggle="tab"][data-bs-target="${tabId}"]`
      );

      if (trigger) {
        new bootstrap.Tab(trigger).show();
        window.scrollTo(0, 0);
      }
    }

    // 🔥 SEMPRE roda
    carregarCarousel(categoria);

    // Carousel agora atualiza visualmente
    const carousel = document.querySelector('#carousel-dinamico');

    if (carousel) {
      carouselInstance = new bootstrap.Carousel(carousel);
    }

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

    const activeTab = document.querySelector('.nav-tabs .nav-link.active');

    if (activeTab) {
      const target = activeTab.getAttribute('data-bs-target');
      syncDropdownWithTab(target);
    }

  });

  // Função de sincronização
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

  // 🔥 Evento de troca de aba (CORE do carousel)
  document.addEventListener('shown.bs.tab', function (event) {

    const target = event.target?.getAttribute('data-bs-target');
    if (!target) return;

    localStorage.setItem('ultimaAbaIndex', target);

    const categoria = target.replace('#', '');
    carregarCarousel(categoria);

    // 🔥 ESSENCIAL
    syncDropdownWithTab(target);

  });