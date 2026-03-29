
/**
 * Dados dos produtos
 */

  const produtos = {

    "mais-vendidos": [

      {
        id: "itens.html?id=352",
        nome: "ThinkCentre Slim i7 6700",
        comum: "1.400,00",
        img: "imagens/slim/lenovo/i7-6700/i7-6700-frente.webp"
      },

      {
        id: "itens.html?id=552",
        nome: "ThinkPad T480 i5 8350u",
        comum: "1.600,00",
        img: "imagens/notebook/lenovo/i5-8350u/i5-8350u-frente.webp"
      },

      {
        id: "itens.html?id=152",
        nome: "ThinkCentre Mini i5 6500t",
        comum: "1.100,00",
        img: "imagens/mini/lenovo/i5-6500t/i5-6500t-frente.webp"
      },

    ],

    "custo-beneficio": [

      {
        id: "itens.html?id=151",
        nome: "ThinkCentre Mini i3 6500t",
        comum: "900,00",
        img: "imagens/mini/lenovo/i3-6500t/i3-6500t-frente.webp"
      },

      {
        id: "itens.html?id=551",
        nome: "ThinkPad T470 i5 6300u",
        comum: "1.200,00",
        img: "imagens/notebook/lenovo/i5-6300u/i5-6300u-frente.webp"
      },

      {
        id: "itens.html?id=400",
        nome: "Positivo Master i5 7500",
        comum: "850,00",
        img: "imagens/slim/positivo/i5-7500/i5-7500-frente.webp"
      },

      {
        id: "itens.html?id=830",
        nome: "Monitor Positivo 18.5\"",
        comum: "200,00",
        img: "imagens/monitor/positivo/positivo-22/positivo-22-frente.webp"
      }

    ],

    "trabalho": [

      {
        id: "itens.html?id=1120",
        nome: "Kit Tela Suporte e Mini",
        comum: "1.450,00",
        img: "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-direita.webp"
      },

      {
        id: "itens.html?id=1100",
        nome: "Impressora Térmica Epson",
        comum: "450,00",
        img: "imagens/impressora/epson-termica/epson-frente.webp"
      },

      {
        id: "itens.html?id=800",
        nome: "Monitor Dell 24\"",
        comum: "550,00",
        img: "imagens/monitor/dell/dell-24/dell-24-frente.webp"
      }

    ],

    "estudos": [

      {
        id: "itens.html?id=831",
        nome: "Monitor Positivo 22\"",
        comum: "300,00",
        img: "imagens/monitor/positivo/positivo-22/positivo-22-frente.webp"
      },

      {
        id: "itens.html?id=450",
        nome: "Desktop Effect i5 6500",
        comum: "750,00",
        img: "imagens/slim/effect/i5-6500/i5-6500-frente.webp"
      },

      {
        id: "itens.html?id=500",
        nome: "Latitude 3480 i5 6200u",
        comum: "1.600,00",
        img: "imagens/notebook/dell/i5-6200u/i5-6200u-frente.webp"
      }

    ]

    /* Exemplo de item em promoção

      {
        id: "itens.html?id=151",
        nome: "Lenovo Mini i3 6500t",
        antigo: "1.200,00",
        novo: "900,00",
        img: "imagens/mini/lenovo/i3-6500t/i3-6500t-frente.webp"
      },

    */

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
    const indicators = document.querySelector
    ("#carousel-dinamico .carousel-indicators");

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
              ${
                produto.antigo && produto.novo
                  ? `De <strong class="preco-atual">R$ ${produto.antigo}</strong>
                     por <strong class="preco-novo">R$ ${produto.novo}</strong>`
                  : `Por <strong class="preco-comum">R$ ${produto.comum}</strong>
                     à vista`
              }
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