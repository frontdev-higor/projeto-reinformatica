
/* =============================== */
/* Inicio JavaScript Itens
/* =============================== */

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const categorias = [
    "allinone",
    "mini",
    "slim",
    "notebook",
    "monitor",
    "armazenamento",
    "cabo",
    "fonte",
    "periferico",
    "outro",
    "impressora",
    "kit",
    "servidor",
    "nobreak",
    "teste"
  ];

/* Coloca as categorias em grupos e as deixa ativas no menu dropdown */
const mapaMenu = {
    allinone: "menu-computador",
    mini: "menu-computador",
    slim: "menu-computador",
    notebook: "menu-computador",

    monitor: "menu-monitor",

    armazenamento: "menu-componente",
    cabo: "menu-componente",
    fonte: "menu-componente",
    periferico: "menu-componente",
    outro: "menu-componente",
    
    impressora: "menu-equipamento",
    kit: "menu-equipamento",
    servidor: "menu-equipamento",
    nobreak: "menu-equipamento"
  };

const produtos = {

  /* ==========================================================================
   * All-In-One (ID'S: 0 ~ 99)
   */

    allinone: [

    /**************************************
     * Dell (ID'S: 0 ~ 49)
     */

    {
      id: 0,
      categoria: "allinone",
      titulo: "All-In-One Dell",
      modelo: "OptiPlex 3011 AIO",
      specs1: "i5 3470s 8 Ram 256 SSD",
      specs2: "6 Usb's e Serial",
      preco: "R$ 1.000,00",
      imagens: [
        "imagens/all-in-one/dell/i5-3470s/i5-3470s-frente.webp",
        "imagens/all-in-one/dell/i5-3470s/i5-3470s-fundo.webp"
        ]
    },

    {
      id: 1,
      categoria: "allinone",
      titulo: "All-In-One Dell",
      modelo: "Inspiron 23",
      specs1: "i5 4400s 8 Ram 128 SSD",
      specs2: "7 Usb's e 2 HDMI's",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/all-in-one/dell/i5-4400s/i5-4400s-frente.webp",
        "imagens/all-in-one/dell/i5-4400s/i5-4400s-fundo.webp"
        ]
    },

    {
      id: 2,
      categoria: "allinone",
      titulo: "All-In-One Dell",
      modelo: "Inspiron 20",
      specs1: "i5 6200s 8 Ram 256 SSD",
      specs2: "4 Usb's e HDMI",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/all-in-one/dell/i5-6200s/i5-6200s-frente.webp",
        "imagens/all-in-one/dell/i5-6200s/i5-6200s-fundo.webp"
        ]
    },

    /**************************************
     * Lenovo (ID'S: 50 ~ 99)
     */

    {
      id: 50,
      categoria: "allinone",
      titulo: "All-In-One Lenovo",
      modelo: "ThinkCentre E73Z",
      specs1: "i5 4590s 8 Ram 128 SSD",
      specs2: "6 Usb's, VGA e Serial",
      preco: "R$ 900,00",
      imagens: [
        "imagens/all-in-one/lenovo/i5-4590s/i5-4590s-frente.webp",
        "imagens/all-in-one/lenovo/i5-4590s/i5-4590s-fundo.webp"
        ]
    }

  ],



  /* ==========================================================================
     * Mini (ID'S: 100 ~ 299)
     */


    mini: [


    /* =====================================
     * Dell (ID'S: 100 ~ 149)
     */

    {
      id: 100, /* [i3-6100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3040",
      specs1: "i3 6100t 8 Ram 128 SSD",
      specs2: "6 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.000,00",
      imagens: [
        "imagens/mini/dell/i3-6100t/i3-6100t-frente.webp",
        "imagens/mini/dell/i3-6100t/i3-6100t-perfil.webp",
        "imagens/mini/dell/i3-6100t/i3-6100t-fundo.webp"
        ]
    },

    {
      id: 101, /* [i5-6500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3040",
      specs1: "i5 6500t 8 Ram 256 SSD",
      specs2: "6 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/mini/dell/i3-6100t/i3-6100t-frente.webp",
        "imagens/mini/dell/i3-6100t/i3-6100t-perfil.webp",
        "imagens/mini/dell/i3-6100t/i3-6100t-fundo.webp"
        ]
    },

    {
      id: 102, /* [i3-7100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3050",
      specs1: "i3 7100t 8 Ram 128 SSD",
      specs2: "5 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/mini/dell/i7-7700t/i7-7700t-frente.webp",
        "imagens/mini/dell/i7-7700t/i7-7700t-perfil.webp",
        "imagens/mini/dell/i7-7700t/i7-7700t-fundo.webp"
        ]
    },

    {
      id: 103, /* [i5-7500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3050",
      specs1: "i5 7500t 8 Ram 256 SSD",
      specs2: "5 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.300,00",
      imagens: [
        "imagens/mini/dell/i7-7700t/i7-7700t-frente.webp",
        "imagens/mini/dell/i7-7700t/i7-7700t-perfil.webp",
        "imagens/mini/dell/i7-7700t/i7-7700t-fundo.webp"
        ]
    },

    {
      id: 104, /* [i7-7700t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3050",
      specs1: "i7 7700t 8 Ram 256 SSD",
      specs2: "5 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.700,00",
      imagens: [
        "imagens/mini/dell/i7-7700t/i7-7700t-frente.webp",
        "imagens/mini/dell/i7-7700t/i7-7700t-perfil.webp",
        "imagens/mini/dell/i7-7700t/i7-7700t-fundo.webp"
        ]
    },

    {
      id: 105, /* [i3-8100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3060",
      specs1: "i3 8100t 8 Ram 128 SSD",
      specs2: "6 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.300,00",
      imagens: [
        "imagens/mini/dell/i5-8500t/i5-8500t-frente.webp",
        "imagens/mini/dell/i5-8500t/i5-8500t-perfil.webp",
        "imagens/mini/dell/i5-8500t/i5-8500t-fundo.webp"
        ]
    },

    {
      id: 106, /* [i5-8500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3060",
      specs1: "i5 8500t 8 Ram 256 NVMe",
      specs2: "6 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/mini/dell/i5-8500t/i5-8500t-frente.webp",
        "imagens/mini/dell/i5-8500t/i5-8500t-perfil.webp",
        "imagens/mini/dell/i5-8500t/i5-8500t-fundo.webp"
        ]
    },

    {
      id: 107, /* [i3-9100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3070",
      specs1: "i3 9100t 8 Ram 256 SSD",
      specs2: "6 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.400,00",
      imagens: [
        "imagens/mini/dell/i5-9500t/i5-9500t-frente.webp",
        "imagens/mini/dell/i5-9500t/i5-9500t-perfil.webp",
        "imagens/mini/dell/i5-9500t/i5-9500t-fundo.webp"
        ]
    },

    {
      id: 108, /* [i5-9500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3070",
      specs1: "i5 9500t 8 Ram 256 NVMe",
      specs2: "6 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.800,00",
      imagens: [
        "imagens/mini/dell/i5-9500t/i5-9500t-frente.webp",
        "imagens/mini/dell/i5-9500t/i5-9500t-perfil.webp",
        "imagens/mini/dell/i5-9500t/i5-9500t-fundo.webp"
        ]
    },

    {
      id: 109, /* [i7-9700t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3070",
      specs1: "i7 9700t 8 Ram 256 NVMe",
      specs2: "6 Usb's, HDMI e DisplayPort",
      preco: "R$ 2.000,00",
      imagens: [
        "imagens/mini/dell/i5-9500t/i5-9500t-frente.webp",
        "imagens/mini/dell/i5-9500t/i5-9500t-perfil.webp",
        "imagens/mini/dell/i5-9500t/i5-9500t-fundo.webp"
        ]
    },

    {
      id: 110, /* [i3-10100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3080",
      specs1: "i3 10100t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/mini/dell/i3-10100t/i3-10100t-frente.webp",
        "imagens/mini/dell/i3-10100t/i3-10100t-perfil.webp",
        "imagens/mini/dell/i3-10100t/i3-10100t-fundo.webp"
        ]
    },

    {
      id: 111, /* [i5-10500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3090",
      specs1: "i5 10500t 8 Ram 256 SSD",
      specs2: "5 Usb's, HDMI e 2 DisplayPort's",
      preco: "R$ 2.000,00",
      imagens: [
        "imagens/mini/dell/i5-10500t/i5-10500t-frente.webp",
        "imagens/mini/dell/i5-10500t/i5-10500t-perfil.webp",
        "imagens/mini/dell/i5-10500t/i5-10500t-fundo.webp"
        ]
    },

    {
      id: 112, /* [i3-12100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3000",
      specs1: "i3 12100t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 2.200,00",
      imagens: [
        "imagens/mini/dell/i3-12100t/i3-12100t-frente.webp",
        "imagens/mini/dell/i3-12100t/i3-12100t-perfil.webp",
        "imagens/mini/dell/i3-12100t/i3-12100t-fundo.webp"
        ]
    },

    {
      id: 113, /* [i5-12500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex 3000",
      specs1: "i5 12500t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 2.600,00",
      imagens: [
        "imagens/mini/dell/i3-12100t/i3-12100t-frente.webp",
        "imagens/mini/dell/i3-12100t/i3-12100t-perfil.webp",
        "imagens/mini/dell/i3-12100t/i3-12100t-fundo.webp"
        ]
    },

    {
      id: 114, /* [i3-13100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex",
      specs1: "i3 13100t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 2.300,00",
      imagens: [
        "imagens/mini/dell/i7-13700t/i7-13700t-frente.webp",
        "imagens/mini/dell/i7-13700t/i7-13700t-perfil.webp",
        "imagens/mini/dell/i7-13700t/i7-13700t-fundo.webp"
        ]
    },

    {
      id: 115, /* [i5-13500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex",
      specs1: "i5 13500t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 3.000,00",
      imagens: [
        "imagens/mini/dell/i7-13700t/i7-13700t-frente.webp",
        "imagens/mini/dell/i7-13700t/i7-13700t-perfil.webp",
        "imagens/mini/dell/i7-13700t/i7-13700t-fundo.webp"
        ]
    },

    {
      id: 116, /* [i7-13700t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex",
      specs1: "i7 13700t 16 Ram 256 NVMe",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 3.800,00",
      imagens: [
        "imagens/mini/dell/i7-13700t/i7-13700t-frente.webp",
        "imagens/mini/dell/i7-13700t/i7-13700t-perfil.webp",
        "imagens/mini/dell/i7-13700t/i7-13700t-fundo.webp"
        ]
    },

    {
      id: 117, /* [i3-14100t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "OptiPlex",
      specs1: "i3 14100t 8 Ram 256 NVMe",
      specs2: "5 Usb's, 2 HDMI's e DisplayPort",
      preco: "R$ 2.800,00",
      imagens: [
        "imagens/mini/dell/i3-14100t/i3-14100t-frente.webp",
        "imagens/mini/dell/i3-14100t/i3-14100t-perfil.webp",
        "imagens/mini/dell/i3-14100t/i3-14100t-fundo.webp"
        ]
    },

    {
      id: 118, /* [i5-14500t] */
      categoria: "mini",
      titulo: "Desktop Dell Mini",
      modelo: "Dell Technologies",
      specs1: "i5 14500t 8 Ram 256 NVMe",
      specs2: "5 Usb's, 2 HDMI's e DisplayPort",
      preco: "R$ 3.200,00",
      imagens: [
        "imagens/mini/dell/i3-14100t/i3-14100t-frente.webp",
        "imagens/mini/dell/i3-14100t/i3-14100t-perfil.webp",
        "imagens/mini/dell/i3-14100t/i3-14100t-fundo.webp"
        ]
    },

    /* =====================================
     * Lenovo (ID'S: 150 ~ 199)
     */
      
    {
      id: 150, /* [i7-4565t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i7 4565t 8 Ram 128 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 1.000,00",
      imagens: [
        "imagens/mini/lenovo/i7-4565t/i7-4565t-frente.webp",
        "imagens/mini/lenovo/i7-4565t/i7-4565t-perfil.webp",
        "imagens/mini/lenovo/i7-4565t/i7-4565t-fundo.webp"
        ]
    },

    {
      id: 151, /* [i3-6500t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i3 6500t 8 Ram 128 SSD",
      specs2: "6 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.000,00",
      imagens: [
        "imagens/mini/lenovo/i3-6500t/i3-6500t-frente.webp",
        "imagens/mini/lenovo/i3-6500t/i3-6500t-perfil.webp",
        "imagens/mini/lenovo/i3-6500t/i3-6500t-fundo.webp"
        ]
    },

    {
      id: 152, /* [i5-6500t] Diferente das outras Lenovo 6° */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i5 6500t 8 Ram 256 SSD",
      specs2: "6 Usb's, VGA e DisplayPort",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/mini/lenovo/i5-6500t/i5-6500t-frente.webp",
        "imagens/mini/lenovo/i5-6500t/i5-6500t-perfil.webp",
        "imagens/mini/lenovo/i5-6500t/i5-6500t-fundo.webp"
        ]
    },

    {
      id: 153, /* [i7-6700t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i7 6700t 8 Ram 128 SSD",
      specs2: "6 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.800,00",
      imagens: [
        "imagens/mini/lenovo/i3-6500t/i3-6500t-frente.webp",
        "imagens/mini/lenovo/i3-6500t/i3-6500t-perfil.webp",
        "imagens/mini/lenovo/i3-6500t/i3-6500t-fundo.webp"
        ]
    },

    {
      id: 154, /* [i5-8500t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i5 8500t 8 Ram 256 SSD",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 1.500,00",
      imagens: [
        "imagens/mini/lenovo/i3-9100t/i3-9100t-frente.webp",
        "imagens/mini/lenovo/i3-9100t/i3-9100t-perfil.webp",
        "imagens/mini/lenovo/i3-9100t/i3-9100t-fundo.webp"
        ]
    },

    {
      id: 155, /* [i3-9100t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i3 9100t 8 Ram 256 SSD",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 1.300,00",
      imagens: [
        "imagens/mini/lenovo/i3-9100t/i3-9100t-frente.webp",
        "imagens/mini/lenovo/i3-9100t/i3-9100t-perfil.webp",
        "imagens/mini/lenovo/i3-9100t/i3-9100t-fundo.webp"
        ]
    },

    {
      id: 156, /* [i3-10100t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i3 10100t 8 Ram 256 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 1.500,00",
      imagens: [
        "imagens/mini/lenovo/i3-10100t/i3-10100t-frente.webp",
        "imagens/mini/lenovo/i3-10100t/i3-10100t-perfil.webp",
        "imagens/mini/lenovo/i3-10100t/i3-10100t-fundo.webp"
        ]
    },

    {
      id: 157, /* [i5-10100t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i5 10100t 8 Ram 256 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 2.000,00",
      imagens: [
        "imagens/mini/lenovo/i5-10100t/i5-10100t-frente.webp",
        "imagens/mini/lenovo/i5-10100t/i5-10100t-perfil.webp",
        "imagens/mini/lenovo/i5-10100t/i5-10100t-fundo.webp"
        ]
    },

    {
      id: 158, /* [i5-12500t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i5 12500t 8 Ram 256 SSD",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 2.600,00",
      imagens: [
        "imagens/mini/lenovo/i5-12500t/i5-12500t-frente.webp",
        "imagens/mini/lenovo/i5-12500t/i5-12500t-perfil.webp",
        "imagens/mini/lenovo/i5-12500t/i5-12500t-fundo.webp"
        ]
    },

    {
      id: 159, /* [i7-12700t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i7 12700t 8 Ram 256 SSD",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 3.300,00",
      imagens: [
        "imagens/mini/lenovo/i5-12500t/i5-12500t-frente.webp",
        "imagens/mini/lenovo/i5-12500t/i5-12500t-perfil.webp",
        "imagens/mini/lenovo/i5-12500t/i5-12500t-fundo.webp"
        ]
    },

    {
      id: 160, /* [i5-13500t] */
      categoria: "mini",
      titulo: "Desktop Lenovo Mini",
      modelo: "ThinkCentre",
      specs1: "i5 13500t 8 Ram 256 SSD",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 2.900,00",
      imagens: [
        "imagens/mini/lenovo/i5-12500t/i5-12500t-frente.webp",
        "imagens/mini/lenovo/i5-12500t/i5-12500t-perfil.webp",
        "imagens/mini/lenovo/i5-12500t/i5-12500t-fundo.webp"
        ]
    },

    /* =====================================
     * Positivo (ID'S: 200 ~ 249)
     */

    {
      id: 200, /* [i3-6100t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i3 6100t 8 Ram 128 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 900,00",
      imagens: [
        "imagens/mini/positivo/i5-7600t/i5-7600t-frente.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-perfil.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-fundo.webp"
        ]
    },

    {
      id: 201, /* [i5-6600t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i5 6600t 8 Ram 128 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 1.100,00",
      imagens: [
        "imagens/mini/positivo/i5-7600t/i5-7600t-frente.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-perfil.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-fundo.webp"
        ]
    },

    {
      id: 202, /* [i3-7100t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i3 7100t 8 Ram 128 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 1.100,00",
      imagens: [
        "imagens/mini/positivo/i5-7600t/i5-7600t-frente.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-perfil.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-fundo.webp"
        ]
    },

    {
      id: 203, /* [i5-7600t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i5 7600t 8 Ram 256 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 1.100,00",
      imagens: [
        "imagens/mini/positivo/i5-7600t/i5-7600t-frente.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-perfil.webp",
        "imagens/mini/positivo/i5-7600t/i5-7600t-fundo.webp"
        ]
    },

    {
      id: 204, /* [i3-8100t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i3 8100t 8 Ram 256 SSD",
      specs2: "VGA, HDMI e 2 DisplayPort's",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/mini/positivo/i5-8500t/i5-8500t-frente.webp",
        "imagens/mini/positivo/i5-8500t/i5-8500t-perfil.webp",
        "imagens/mini/positivo/i5-8500t/i5-8500t-fundo.webp"
        ]
    },

    {
      id: 205, /* [i5-8500t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i5 8500t 8 Ram 256 SSD",
      specs2: "VGA, HDMI e 2 DisplayPort's",
      preco: "R$ 1.500,00",
      imagens: [
        "imagens/mini/positivo/i5-8500t/i5-8500t-frente.webp",
        "imagens/mini/positivo/i5-8500t/i5-8500t-perfil.webp",
        "imagens/mini/positivo/i5-8500t/i5-8500t-fundo.webp"
        ]
    },

    {
      id: 206, /* [i3-10100t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i3 10100t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e 2 DisplayPort's",
      preco: "R$ 1.400,00",
      imagens: [
        "imagens/mini/positivo/i5-13400t/i5-13400t-frente.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-perfil.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-fundo.webp"
        ]
    },

    {
      id: 207, /* [i5-10400t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i5 10400t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e 2 DisplayPort's",
      preco: "R$ 1.900,00",
      imagens: [
        "imagens/mini/positivo/i5-13400t/i5-13400t-frente.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-perfil.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-fundo.webp"
        ]
    },

    {
      id: 208, /* [i3-12100t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i3 12100t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e 2 DisplayPort's",
      preco: "R$ 2.100,00",
      imagens: [
        "imagens/mini/positivo/i5-13400t/i5-13400t-frente.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-perfil.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-fundo.webp"
        ]
    },

    {
      id: 209, /* [i3-13100t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i3 13100t 8 Ram 256 NVMe",
      specs2: "VGA, HDMI e 2 DisplayPort's",
      preco: "R$ 2.100,00",
      imagens: [
        "imagens/mini/positivo/i5-13400t/i5-13400t-frente.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-perfil.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-fundo.webp"
        ]
    },

    {
      id: 210, /* [i5-13400t] */
      categoria: "mini",
      titulo: "Desktop Positivo Mini",
      modelo: "Positivo",
      specs1: "i5 13400t 8 Ram 128 NVMe",
      specs2: "VGA, HDMI e 2 DisplayPort's",
      preco: "R$ 3.000,00",
      imagens: [
        "imagens/mini/positivo/i5-13400t/i5-13400t-frente.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-perfil.webp",
        "imagens/mini/positivo/i5-13400t/i5-13400t-fundo.webp"
        ]
    },

    /* =====================================
     * HP (ID'S: 250 ~ 274)
     */

    {
      id: 250, /* [i5-4210t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "Hewlett-Packard",
      specs1: "i5 4210u 8 Ram 128 SSD",
      specs2: "6 Usb's, VGA e DisplayPort",
      preco: "R$ 800,00",
      imagens: [
        "imagens/mini/hp/i5-4210u/i5-4210u-frente.webp",
        "imagens/mini/hp/i5-4210u/i5-4210u-perfil.webp",
        "imagens/mini/hp/i5-4210u/i5-4210u-fundo.webp"
        ]
    },

    {
      id: 251, /* [i7-4785t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "EliteDesk",
      specs1: "i7 4785t 8 Ram 1tb HD",
      specs2: "6 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 900,00",
      imagens: [
        "imagens/mini/hp/i7-4785t/i7-4785t-frente.webp",
        "imagens/mini/hp/i7-4785t/i7-4785t-perfil.webp",
        "imagens/mini/hp/i7-4785t/i7-4785t-fundo.webp"
        ]
    },

    {
      id: 252, /* [i5-7500t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "ProDesk",
      specs1: "i5 7500t 8 Ram 128 SSD",
      specs2: "6 Usb's, VGA e DisplayPort",
      preco: "R$ 1.300,00",
      imagens: [
        "imagens/mini/hp/i5-7500t/i5-7500t-frente.webp",
        "imagens/mini/hp/i5-7500t/i5-7500t-perfil.webp",
        "imagens/mini/hp/i5-7500t/i5-7500t-fundo.webp"
        ]
    },

    {
      id: 253, /* [i5-8500t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "ProDesk",
      specs1: "i5 8500t 8 Ram 256 NVMe",
      specs2: "6 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.500,00",
      imagens: [
        "imagens/mini/hp/i5-8500t/i5-8500t-frente.webp",
        "imagens/mini/hp/i5-8500t/i5-8500t-perfil.webp",
        "imagens/mini/hp/i5-8500t/i5-8500t-fundo.webp"
        ]
    },

    {
      id: 254, /* [i5-10500t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "ProDesk",
      specs1: "i5 10500t 8 Ram 256 NVMe",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 1.900,00",
      imagens: [
        "imagens/mini/hp/i5-10500t/i5-10500t-frente.webp",
        "imagens/mini/hp/i5-10500t/i5-10500t-perfil.webp",
        "imagens/mini/hp/i5-10500t/i5-10500t-fundo.webp"
        ]
    },

    {
      id: 255, /* [i5-12500t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "ProDesk",
      specs1: "i5 12500t 8 Ram 256 NVMe",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 2.400,00",
      imagens: [
        "imagens/mini/hp/i5-10500t/i5-10500t-frente.webp",
        "imagens/mini/hp/i5-10500t/i5-10500t-perfil.webp",
        "imagens/mini/hp/i5-10500t/i5-10500t-fundo.webp"
        ]
    },

    {
      id: 256, /* [i7-12700t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "ProDesk",
      specs1: "i7 12700t 16 Ram 256 NVMe",
      specs2: "5 Usb's, HDMI e 2 DisplayPort's",
      preco: "R$ 3.500,00",
      imagens: [
        "imagens/mini/hp/i7-12700t/i7-12700t-frente.webp",
        "imagens/mini/hp/i7-12700t/i7-12700t-perfil.webp",
        "imagens/mini/hp/i7-12700t/i7-12700t-fundo.webp"
        ]
    },

    {
      id: 257, /* [i5-13500t] */
      categoria: "mini",
      titulo: "Desktop HP Mini",
      modelo: "ProDesk",
      specs1: "i5 13500t 8 Ram 256 NVMe",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 2.900,00",
      imagens: [
        "imagens/mini/hp/i5-10500t/i5-10500t-frente.webp",
        "imagens/mini/hp/i5-10500t/i5-10500t-perfil.webp",
        "imagens/mini/hp/i5-10500t/i5-10500t-fundo.webp"
        ]
    },

    /* =====================================
     * Daten (ID'S: 275 ~ 299)
     */

    {
      id: 275, /* [i3-8100t] */
      categoria: "mini",
      titulo: "Desktop Daten Mini",
      modelo: "DC3D-U",
      specs1: "i3 8100u 8 Ram 256 NVMe",
      specs2: "6 Usb's, VGA e HDMI",
      preco: "R$ 1.300,00",
      imagens: [
        "imagens/mini/daten/i3-8100t/i3-8100t-frente.webp",
        "imagens/mini/daten/i3-8100t/i3-8100t-perfil.webp",
        "imagens/mini/daten/i3-8100t/i3-8100t-fundo.webp"
        ]
    },

  ],

  /* ==========================================================================
   * Slim (ID'S: 300 ~ 499)
   */

    slim: [

    /* =====================================
     * Dell (ID'S: 300 ~ 349)
     */

    {
      id: 300, /* [i3-6100] */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3040",
      specs1: "i3 6100 8 Ram 128 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.000,00",
      imagens: [
        "imagens/slim/dell/i5-6500/i5-6500-frente.webp",
        "imagens/slim/dell/i5-6500/i5-6500-fundo.webp"
        ]
    },

    {
      id: 301, /* [i5-6500] */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3040",
      specs1: "i5 6500 8 Ram 256 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/slim/dell/i5-6500/i5-6500-frente.webp",
        "imagens/slim/dell/i5-6500/i5-6500-fundo.webp"
        ]
    },

    {
      id: 302, /* [i7-6700] */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3040",
      specs1: "i7 6700 8 Ram 256 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.500,00",
      imagens: [
        "imagens/slim/dell/i5-6500/i5-6500-frente.webp",
        "imagens/slim/dell/i5-6500/i5-6500-fundo.webp"
        ]
    },

    {
      id: 303, /* [i3-7100] */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3050",
      specs1: "i3 7100 8 Ram 128 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/slim/dell/i3-7100/i3-7100-frente.webp",
        "imagens/slim/dell/i3-7100/i3-7100-fundo.webp"
        ]
    },

    {
      id: 304, /* i5-7500 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3050",
      specs1: "i5 7500 8 Ram 256 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.300,00",
      imagens: [
        "imagens/slim/dell/i3-7100/i3-7100-frente.webp",
        "imagens/slim/dell/i3-7100/i3-7100-fundo.webp"
        ]
    },

    {
      id: 305, /* i7-7700 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3050",
      specs1: "i7 7700 8 Ram 256 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.700,00",
      imagens: [
        "imagens/slim/dell/i3-7100/i3-7100-frente.webp",
        "imagens/slim/dell/i3-7100/i3-7100-fundo.webp"
        ]
    },

    {
      id: 306, /* i3-8100 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3060",
      specs1: "i3 8100 8 Ram 128 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.300,00",
      imagens: [
        "imagens/slim/dell/i5-8500/i5-8500-frente.webp",
        "imagens/slim/dell/i5-8500/i5-8500-fundo.webp"
        ]
    },

    {
      id: 307, /* i5-8500 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3060",
      specs1: "i5 8500 8 Ram 256 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/slim/dell/i5-8500/i5-8500-frente.webp",
        "imagens/slim/dell/i5-8500/i5-8500-fundo.webp"
        ]
    },

    {
      id: 308, /* i7-8700 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3060",
      specs1: "i7 8700 8 Ram 256 SSD",
      specs2: "6 Usb's, HDMI e VGA",
      preco: "R$ 1.800,00",
      imagens: [
        "imagens/slim/dell/i7-8700/i7-8700-frente.webp",
        "imagens/slim/dell/i7-8700/i7-8700-fundo.webp"
        ]
    },

    {
      id: 309, /* i3-9100 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3070",
      specs1: "i3 9100 8 Ram 256 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.400,00",
      imagens: [
        "imagens/slim/dell/i5-9500/i5-9500-frente.webp",
        "imagens/slim/dell/i5-9500/i5-9500-fundo.webp"
        ]
    },

    {
      id: 310, /* i5-9500 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3070",
      specs1: "i5 9500 8 Ram 256 SSD",
      specs2: "8 Usb's, HDMI e DisplayPort",
      preco: "R$ 1.800,00",
      imagens: [
        "imagens/slim/dell/i5-9500/i5-9500-frente.webp",
        "imagens/slim/dell/i5-9500/i5-9500-fundo.webp"
        ]
    },

    {
      id: 311, /* i7-9700 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 7070",
      specs1: "i7 9700 8 Ram 256 SSD",
      specs2: "9 Usb's, Serial e 2 DisplayPort's",
      preco: "R$ 2.000,00",
      imagens: [
        "imagens/slim/dell/i7-9700/i7-9700-frente.webp",
        "imagens/slim/dell/i7-9700/i7-9700-fundo.webp"
        ]
    },

    {
      id: 312, /* i3-10100 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3080",
      specs1: "i3 10100 8 Ram 256 NVMe",
      specs2: "8 Usb's, 2 HDMI's e DisplayPort",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/slim/dell/i3-10100/i3-10100-frente.webp",
        "imagens/slim/dell/i3-10100/i3-10100-fundo.webp"
        ]
    },

    {
      id: 313, /* i5-10500 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3080",
      specs1: "i5 10500 8 Ram 256 SSD",
      specs2: "8 Usb's, 2 HDMI's e DisplayPort",
      preco: "R$ 2.000,00",
      imagens: [
        "imagens/slim/dell/i3-10100/i3-10100-frente.webp",
        "imagens/slim/dell/i3-10100/i3-10100-fundo.webp"
        ]
    },

    {
      id: 314, /* i7-10700 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex 3080",
      specs1: "i7 10700 8 Ram 256 SSD",
      specs2: "8 Usb's, 2 HDMI's e DisplayPort",
      preco: "R$ 2.500,00",
      imagens: [
        "imagens/slim/dell/i3-10100/i3-10100-frente.webp",
        "imagens/slim/dell/i3-10100/i3-10100-fundo.webp"
        ]
    },

    {
      id: 315, /* i7-10700-xps */
      categoria: "slim",
      titulo: "Desktop Dell XPS",
      modelo: "RTX 3060 12 Vram",
      specs1: "i7 10700 16 Ram 512 NVMe",
      specs2: "9 Usb's, HDMI e DisplayPort",
      preco: "R$ 5.500,00",
      imagens: [
        "imagens/slim/dell/i7-10700-xps/i7-10700-xps-frente.webp",
        "imagens/slim/dell/i7-10700-xps/i7-10700-xps-fundo.webp"
        ]
    },

    {
      id: 316, /* i5-14500 */
      categoria: "slim",
      titulo: "Desktop Dell Slim",
      modelo: "OptiPlex",
      specs1: "i5 14500 16 Ram 512 NVMe",
      specs2: "9 Usb's, HDMI e 3 DisplayPort's",
      preco: "R$ 4.200,00",
      imagens: [
        "imagens/slim/dell/i5-14500/i5-14500-frente.webp",
        "imagens/slim/dell/i5-14500/i5-14500-fundo.webp"
        ]
    },

    /* =====================================
     * Lenovo (ID'S: 350 ~ 399)
     */

    {
      id: 350, /* i3-6100 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i3 6100 8 Ram 128 SSD",
      specs2: "6 Usb's, VGA e DisplayPort",
      preco: "R$ 900,00",
      imagens: [
        "imagens/slim/lenovo/i3-6100/i3-6100-frente.webp",
        "imagens/slim/lenovo/i3-6100/i3-6100-fundo.webp"
        ]
    },

    {
      id: 351, /* i5-6500 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i5 6500 8 Ram 256 SSD",
      specs2: "8 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.100,00",
      imagens: [
        "imagens/slim/lenovo/i7-7700/i7-7700-frente.webp",
        "imagens/slim/lenovo/i7-7700/i7-7700-fundo.webp"
        ]
    },

    {
      id: 352, /* i7-6700 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i7 6700 8 Ram 128 SSD",
      specs2: "VGA, Serial e 2 DisplayPort's",
      preco: "R$ 1.500,00",
      imagens: [
        "imagens/slim/lenovo/i7-6700/i7-6700-frente.webp",
        "imagens/slim/lenovo/i7-6700/i7-6700-fundo.webp"
        ]
    },

    {
      id: 353, /* i3-7100 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i3 7100 8 Ram 128 SSD",
      specs2: "8 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.100,00",
      imagens: [
        "imagens/slim/lenovo/i3-7100/i3-7100-frente.webp",
        "imagens/slim/lenovo/i3-7100/i3-7100-fundo.webp"
        ]
    },

    {
      id: 354, /* i5-7400 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "V520S",
      specs1: "i5 7400 8 Ram 256 SSD",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/slim/lenovo/i5-7400/i5-7400-frente.webp",
        "imagens/slim/lenovo/i5-7400/i5-7400-fundo.webp"
        ]
    },

    {
      id: 355, /* i7-7700 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i7 7700 8 Ram 128 SSD",
      specs2: "8 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/slim/lenovo/i7-7700/i7-7700-frente.webp",
        "imagens/slim/lenovo/i7-7700/i7-7700-fundo.webp"
        ]
    },

    {
      id: 356, /* i5-8500 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i5 8500 8 Ram 256 SSD",
      specs2: "8 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.500,00",
      imagens: [
        "imagens/slim/lenovo/i5-8500/i5-8500-frente.webp",
        "imagens/slim/lenovo/i5-8500/i5-8500-fundo.webp"
        ]
    },

    {
      id: 357, /* i7-8700 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i7 8700 8 Ram 256 SSD",
      specs2: "8 Usb's, VGA e 2 DisplayPort's",
      preco: "R$ 1.700,00",
      imagens: [
        "imagens/slim/lenovo/i5-8500/i5-8500-frente.webp",
        "imagens/slim/lenovo/i5-8500/i5-8500-fundo.webp"
        ]
    },

    {
      id: 358, /* i3-12100 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i3 12100 8 Ram 256 SSD",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 2.100,00",
      imagens: [
        "imagens/slim/lenovo/i3-12100/i3-12100-frente.webp",
        "imagens/slim/lenovo/i3-12100/i3-12100-fundo.webp"
        ]
    },

    {
      id: 359, /* i3-13100 */
      categoria: "slim",
      titulo: "Desktop Lenovo Slim",
      modelo: "ThinkCentre",
      specs1: "i3 13100 8 Ram 256 SSD",
      specs2: "HDMI, VGA e DisplayPort",
      preco: "R$ 2.200,00",
      imagens: [
        "imagens/slim/lenovo/i3-12100/i3-12100-frente.webp",
        "imagens/slim/lenovo/i3-12100/i3-12100-fundo.webp"
        ]
    },

    /* =====================================
     * Positivo (ID'S: 400 ~ 449)
     */

    {
      id: 400, /* i5-7500 */
      categoria: "slim",
      titulo: "Desktop Positivo Slim",
      modelo: "Positivo Master",
      specs1: "i5 7500 8 Ram 128 NVMe",
      specs2: "VGA, HDMI e DisplayPort",
      preco: "R$ 950,00",
      imagens: [
        "imagens/slim/positivo/i5-7500/i5-7500-frente.webp",
        "imagens/slim/positivo/i5-7500/i5-7500-fundo.webp"
        ]
    },

    /* =====================================
     * Effect (ID'S: 450 ~ 499)
     */

    {
      id: 450, /* i5-6500 */
      categoria: "slim",
      titulo: "Desktop Effect Slim",
      modelo: "Effect",
      specs1: "i5 6500 8 Ram 128 SSD",
      specs2: "8 Usb's, VGA e HDMI",
      preco: "R$ 850,00",
      imagens: [
        "imagens/slim/effect/i5-6500/i5-6500-frente.webp",
        "imagens/slim/effect/i5-6500/i5-6500-fundo.webp"
        ]
    }

  ],

  /* ==========================================================================
   * Notebook (ID'S: 500 ~ 749)
   */

  notebook: [

    /* =====================================
     * Dell (ID'S: 500 ~ 549)
     */

    {
      id: 500, /* i5-6200u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 3480",
      specs1: "i5 6200u 8 Ram 256 SSD",
      specs2: "3 Usb's, VGA e HDMI",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/notebook/dell/i5-6200u/i5-6200u-frente.webp",
        "imagens/notebook/dell/i5-6200u/i5-6200u-perfil.webp",
        "imagens/notebook/dell/i5-6200u/i5-6200u-cima.webp"
        ]
    },

    {
      id: 501, /* i7-7600u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 7480",
      specs1: "i7 7600u 8 Ram 256 NVMe",
      specs2: "3 Usb's e HDMI",
      preco: "R$ 1.800,00",
      imagens: [
        "imagens/notebook/dell/i7-7600u/i7-7600u-frente.webp",
        "imagens/notebook/dell/i7-7600u/i7-7600u-perfil.webp",
        "imagens/notebook/dell/i7-7600u/i7-7600u-cima.webp"
        ]
    },

    {
      id: 502, /* i7-8665u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 5400",
      specs1: "i7 8665u 8 Ram 256 NVMe",
      specs2: "3 Usb's e HDMI",
      preco: "R$ 2.000,00",
      imagens: [
        "imagens/notebook/dell/i7-8665u/i7-8665u-frente.webp",
        "imagens/notebook/dell/i7-8665u/i7-8665u-perfil.webp",
        "imagens/notebook/dell/i7-8665u/i7-8665u-cima.webp"
        ]
    },

    {
      id: 508, /* i5-1021u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 5400",
      specs1: "i5 1021u 8 Ram 256 NVMe",
      specs2: "???",
      preco: "R$ 1.800,00",
      imagens: [
        "imagens/notebook/dell/i5-1021u/i5-1021u-frente.webp",
        "imagens/notebook/dell/i5-1021u/i5-1021u-perfil.webp",
        "imagens/notebook/dell/i5-1021u/i5-1021u-cima.webp"
        ]
    },

    {
      id: 503, /* i7-1165g7 */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 3420",
      specs1: "i7 1165g7 16 Ram 256 NVMe",
      specs2: "3 Usb's e HDMI",
      preco: "R$ 2.800,00",
      imagens: [
        "imagens/notebook/dell/i7-1165g7/i7-1165g7-frente.webp",
        "imagens/notebook/dell/i7-1165g7/i7-1165g7-perfil.webp",
        "imagens/notebook/dell/i7-1165g7/i7-1165g7-cima.webp"
        ]
    },

    {
      id: 504, /* i5-1245u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 5430",
      specs1: "i5 1245u 16 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 2.800,00",
      imagens: [
        "imagens/notebook/dell/i5-1245u/i5-1245u-frente.webp",
        "imagens/notebook/dell/i5-1245u/i5-1245u-perfil.webp",
        "imagens/notebook/dell/i5-1245u/i5-1245u-cima.webp"
        ]
    },

    {
      id: 509, /* i7-1265u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 5430",
      specs1: "i7 1265u 8 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 5.000,00",
      imagens: [
        "imagens/notebook/dell/i5-1245u/i5-1245u-frente.webp",
        "imagens/notebook/dell/i5-1245u/i5-1245u-perfil.webp",
        "imagens/notebook/dell/i5-1245u/i5-1245u-cima.webp"
        ]
    },

    {
      id: 505, /* i5-1345u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 5440",
      specs1: "i5 1345u 16 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 3.200,00",
      imagens: [
        "imagens/notebook/dell/i5-1345u/i5-1345u-frente.webp",
        "imagens/notebook/dell/i5-1345u/i5-1345u-perfil.webp",
        "imagens/notebook/dell/i5-1345u/i5-1345u-cima.webp"
        ]
    },

    {
      id: 506, /* i7-1355u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 3450",
      specs1: "i7 1355u 16 Ram 512 NVMe",
      specs2: "3 Usb's e HDMI",
      preco: "R$ 5.000,00",
      imagens: [
        "imagens/notebook/dell/i7-1355u/i7-1355u-frente.webp",
        "imagens/notebook/dell/i7-1355u/i7-1355u-perfil.webp",
        "imagens/notebook/dell/i7-1355u/i7-1355u-cima.webp"
        ]
    },

    {
      id: 507, /* ultra7-165u */
      categoria: "notebook",
      titulo: "Notebook Dell",
      modelo: "Latitude 5450",
      specs1: "Ultra 7 165u 16 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 5.500,00",
      imagens: [
        "imagens/notebook/dell/ultra7-165u/ultra7-165u-frente.webp",
        "imagens/notebook/dell/ultra7-165u/ultra7-165u-perfil.webp",
        "imagens/notebook/dell/ultra7-165u/ultra7-165u-cima.webp"
        ]
    },

    /* =====================================
     * Lenovo (ID'S: 550 ~ 599)
     */

    {
      id: 550, /* i5-4300u */
      categoria: "notebook",
      titulo: "Notebook Lenovo",
      modelo: "ThinkPad T440",
      specs1: "i5 4300u 8 Ram 256 NVMe",
      specs2: "2 Usb's e VGA",
      preco: "R$ 1.000,00",
      imagens: [
        "imagens/notebook/lenovo/i5-4300u/i5-4300u-frente.webp",
        "imagens/notebook/lenovo/i5-4300u/i5-4300u-perfil.webp",
        "imagens/notebook/lenovo/i5-4300u/i5-4300u-cima.webp"
        ]
    },

    {
      id: 551, /* i5-6300u */
      categoria: "notebook",
      titulo: "Notebook Lenovo",
      modelo: "ThinkPad T470",
      specs1: "i5 6300u 8 Ram 256 SSD",
      specs2: "3 Usb's e HDMI",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/notebook/lenovo/i5-6300u/i5-6300u-frente.webp",
        "imagens/notebook/lenovo/i5-6300u/i5-6300u-perfil.webp",
        "imagens/notebook/lenovo/i5-6300u/i5-6300u-cima.webp"
        ]
    },

    {
      id: 552, /* i5-8350u */
      categoria: "notebook",
      titulo: "Notebook Lenovo",
      modelo: "ThinkPad T480",
      specs1: "i5 8350u 8 Ram 256 SSD",
      specs2: "3 Usb's e HDMI",
      preco: "R$ 1.600,00",
      imagens: [
        "imagens/notebook/lenovo/i5-8350u/i5-8350u-frente.webp",
        "imagens/notebook/lenovo/i5-8350u/i5-8350u-perfil.webp",
        "imagens/notebook/lenovo/i5-8350u/i5-8350u-cima.webp"
        ]
    },

    {
      id: 553, /* i5-1135g7 */
      categoria: "notebook",
      titulo: "Notebook Lenovo",
      modelo: "V14 G2 ITL",
      specs1: "i5 1135g7 8 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 2.500,00",
      imagens: [
        "imagens/notebook/lenovo/i5-1135g7/i5-1135g7-frente.webp",
        "imagens/notebook/lenovo/i5-1135g7/i5-1135g7-perfil.webp",
        "imagens/notebook/lenovo/i5-1135g7/i5-1135g7-cima.webp"
        ]
    },

    {
      id: 554, /* i5-1245u */
      categoria: "notebook",
      titulo: "Notebook Lenovo",
      modelo: "ThinkPad T14",
      specs1: "i5 1245u 16 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 2.300,00",
      imagens: [
        "imagens/notebook/lenovo/i5-1245u/i5-1245u-frente.webp",
        "imagens/notebook/lenovo/i5-1245u/i5-1245u-perfil.webp",
        "imagens/notebook/lenovo/i5-1245u/i5-1245u-cima.webp"
        ]
    },

    {
      id: 555, /* i5-13420h */
      categoria: "notebook",
      titulo: "Notebook Lenovo",
      modelo: "IdeaPad 15IRH10",
      specs1: "i5 13420h 8 Ram 512 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 2.800,00",
      imagens: [
        "imagens/notebook/lenovo/i5-13420h/i5-13420h-frente.webp",
        "imagens/notebook/lenovo/i5-13420h/i5-13420h-perfil.webp",
        "imagens/notebook/lenovo/i5-13420h/i5-13420h-cima.webp"
        ]
    },

    {
      id: 556, /* i7-13700h */
      categoria: "notebook",
      titulo: "Notebook Lenovo",
      modelo: "ThinkBook 14 G6 IRL",
      specs1: "i7 13700h 16 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 4.500,00",
      imagens: [
        "imagens/notebook/lenovo/i7-13700h/i7-13700h-frente.webp",
        "imagens/notebook/lenovo/i7-13700h/i7-13700h-perfil.webp",
        "imagens/notebook/lenovo/i7-13700h/i7-13700h-cima.webp"
        ]
    },

    /* =====================================
     * HP (ID'S: 600 ~ 649)
     */
    
    {
      id: 600, /* i5-1235u */
      categoria: "notebook",
      titulo: "Notebook HP",
      modelo: "250G9",
      specs1: "i5 1235u 16 Ram 256 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 2.500,00",
      imagens: [
        "imagens/notebook/hp/i5-1235u/i5-1235u-frente.webp",
        "imagens/notebook/hp/i5-1235u/i5-1235u-perfil.webp",
        "imagens/notebook/hp/i5-1235u/i5-1235u-cima.webp"
        ]
    },

    {
      id: 601, /* i7-6600u */
      categoria: "notebook",
      titulo: "Notebook HP",
      modelo: "EliteBook 840 G3",
      specs1: "i7 6600u 8 Ram 256 NVMe",
      specs2: "2 Usb's, VGA e DisplayPort",
      preco: "R$ 1.700,00",
      imagens: [
        "imagens/notebook/hp/i7-6600u/i7-6600u-frente.webp",
        "imagens/notebook/hp/i7-6600u/i7-6600u-perfil.webp",
        "imagens/notebook/hp/i7-6600u/i7-6600u-cima.webp"
        ]
    },

    /* =====================================
     * Daten (ID'S: 650 ~ 699)
     */
    
    {
      id: 650, /* i7-7500u */
      categoria: "notebook",
      titulo: "Notebook Daten",
      modelo: "DCM2B-4",
      specs1: "i7 7500u 8 Ram 128 SSD",
      specs2: "4 Usb's, VGA e HDMI",
      preco: "R$ 1.200,00",
      imagens: [
        "imagens/notebook/daten/i7-7500u/i7-7500u-frente.webp",
        "imagens/notebook/daten/i7-7500u/i7-7500u-perfil.webp",
        "imagens/notebook/daten/i7-7500u/i7-7500u-cima.webp"
        ]
    },

    /* =====================================
     * Acer (ID'S: 700 ~ 749)
     */

    {
      id: 700, /* i5-1335u */
      categoria: "notebook",
      titulo: "Notebook Acer",
      modelo: "TravelMate P2 14",
      specs1: "i5 1335u 8 Ram 512 NVMe",
      specs2: "2 Usb's e HDMI",
      preco: "R$ 2.600,00",
      imagens: [
        "imagens/notebook/acer/i5-1335u/i5-1335u-frente.webp",
        "imagens/notebook/acer/i5-1335u/i5-1335u-perfil.webp",
        "imagens/notebook/acer/i5-1335u/i5-1335u-cima.webp"
        ]
    },

  ],

  /* ==========================================================================
   * Monitor (ID'S: 800 ~ 849)
   */

  monitor: [

    /* =====================================
     * Dell (ID'S: 800 ~ 809)
     */

    {
      id: 800, /* 24" */
      categoria: "monitor",
      titulo: "Monitor Dell",
      modelo: "24 Polegadas, 60Hz, Inclinável",
      specs1: "3 Usb's, VGA, DVI e DisplayPort",
      specs2: "Cabos opcionais (+R$ 25,00)",
      preco: "R$ 550,00",
      imagens: [
        "imagens/monitor/dell/dell-24/dell-24-frente.webp",
        "imagens/monitor/dell/dell-24/dell-24-inclinado.webp",
        "imagens/monitor/dell/dell-24/dell-24-fundo.webp"
      ]
    },

    /* =====================================
     * Lenovo (ID'S: 810 ~ 819)
     */

    {
      id: 810, /* 20" */
      categoria: "monitor",
      titulo: "Monitor Lenovo",
      modelo: "20 Polegadas, 60Hz",
      specs1: "VGA e DVI",
      specs2: "Cabos opcionais (+R$ 25,00)",
      preco: "R$ 250,00",
      imagens: [
        "imagens/monitor/lenovo/lenovo-20/lenovo-20-frente.webp",
        "imagens/monitor/lenovo/lenovo-20/lenovo-20-fundo.webp"
      ]
    },

    /* =====================================
     * Daten (ID'S: 820 ~ 829)
     */

    {
      id: 820, /* 22" */
      categoria: "monitor",
      titulo: "Monitor Daten",
      modelo: "22 Polegadas, 60Hz",
      specs1: "VGA, DVI e HDMI",
      specs2: "Cabos opcionais (+R$ 25,00)",
      preco: "R$ 300,00",
      imagens: [
        "imagens/monitor/daten/daten-22/daten-22-frente.webp",
        "imagens/monitor/daten/daten-22/daten-22-inclinado.webp",
        "imagens/monitor/daten/daten-22/daten-22-fundo.webp"
      ]
    },

    /* =====================================
     * Positivo (ID'S: 830 ~ 839)
     */

    {
      id: 830, /* 18,5" */
      categoria: "monitor",
      titulo: "Monitor Positivo",
      modelo: "18.5 Polegadas, 60Hz",
      specs1: "VGA e DVI",
      specs2: "Cabos opcionais (+R$ 25,00)",
      preco: "R$ 200,00",
      imagens: [
        "imagens/monitor/positivo/positivo-22/positivo-22-frente.webp",
        "imagens/monitor/positivo/positivo-22/positivo-22-inclinado.webp",
        "imagens/monitor/positivo/positivo-22/positivo-22-fundo.webp"
      ]
    },

    {
      id: 831, /* 22" */
      categoria: "monitor",
      titulo: "Monitor Positivo",
      modelo: "22 Polegadas, 60Hz",
      specs1: "VGA, DVI e HDMI",
      specs2: "Cabos opcionais (+R$ 25,00)",
      preco: "R$ 300,00",
      imagens: [
        "imagens/monitor/positivo/positivo-22/positivo-22-frente.webp",
        "imagens/monitor/positivo/positivo-22/positivo-22-inclinado.webp",
        "imagens/monitor/positivo/positivo-22/positivo-22-fundo.webp"
      ]
    }

  ],

  /* ==========================================================================
   * Armazenamento (ID'S: 850 ~ 959)
   */

  armazenamento: [

    /* ======================================================
     * HD (ID'S: 850 ~ 869)
     * 250gb (ID'S: 850 ~ 869)
     */

    {
      id: 850, /* Seagate */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "Seagate",
      specs1: "HD Sata 3.5\"",
      specs2: "250 GB",
      preco: "R$ X0,00",
      imagens: [
        "imagens/armazenamento/hd/250gb/seagate-250.webp"
      ]
    },

    {
      id: 851, /* WD */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "WD",
      specs1: "HD Sata 3.5\"",
      specs2: "250 GB",
      preco: "R$ X0,00",
      imagens: [
        "imagens/armazenamento/hd/250gb/wd-250.webp"
      ]
    },

    /* =====================================
     * 500gb (ID'S: 870 ~ 879)
     */

    {
      id: 870, /* Dell */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "Dell",
      specs1: "HD Sata 3.5\"",
      specs2: "500 GB",
      preco: "R$ 50,00",
      imagens: [
        "imagens/armazenamento/hd/500gb/dell-500.webp"
      ]
    },

    {
      id: 871, /* Seagate */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "Seagate",
      specs1: "HD Sata 3.5\"",
      specs2: "500 GB",
      preco: "R$ 50,00",
      imagens: [
        "imagens/armazenamento/hd/500gb/seagate-500.webp"
      ]
    },

    {
      id: 872, /* WD */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "WD",
      specs1: "HD Sata 3.5\"",
      specs2: "500 GB",
      preco: "R$ 50,00",
      imagens: [
        "imagens/armazenamento/hd/500gb/wd-500.webp"
      ]
    },

    {
      id: 873, /* Toshiba Pequeno */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "Toshiba",
      specs1: "HD Sata 2.5\"",
      specs2: "500 GB",
      preco: "R$ 50,00",
      imagens: [
        "imagens/armazenamento/hd/500gb/toshiba-500-p.webp"
      ]
    },

    {
      id: 874, /* WD Pequeno */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "WD",
      specs1: "HD Sata 2.5\"",
      specs2: "500 GB",
      preco: "R$ 50,00",
      imagens: [
        "imagens/armazenamento/hd/500gb/wd-500-p.webp"
      ]
    },

    /* =====================================
     * 1tb (ID'S: 880 ~ 889)
     */

    {
      id: 880, /* WD */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "WD",
      specs1: "HD Sata 3.5\"",
      specs2: "1 TB",
      preco: "R$ 150,00",
      imagens: [
        "imagens/armazenamento/hd/1tb/wd-1tb.webp"
      ]
    },

    {
      id: 881, /* WD */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "Seagate",
      specs1: "HD Sata 2.5\"",
      specs2: "1 TB",
      preco: "R$ 150,00",
      imagens: [
        "imagens/armazenamento/hd/1tb/seagate-1tb.webp"
      ]
    },

    /* =====================================
     * 4tb (ID'S: 890 ~ 899)
     */

    {
      id: 890, /* Dell */
      categoria: "armazenamento",
      titulo: "Hard Disk",
      modelo: "Dell",
      specs1: "HD Sata 3.5\"",
      specs2: "4 TB",
      preco: "R$ XX0,00",
      imagens: [
        "imagens/armazenamento/hd/4tb/dell-4tb.webp"
      ]
    },

    /* ======================================================
     * NVMe (ID'S: 900 ~ 919)
     * 128gb (ID'S: 900 ~ 904)
     */

    /* IDS RESERVADOS */

    /* =====================================
     * 256gb (ID'S: 905 ~ 909)
     */

    {
      id: 905, /* PCI Express */
      categoria: "armazenamento",
      titulo: "NVMe",
      modelo: "PCI Express",
      specs1: "22mm x 80mm",
      specs2: "256 GB",
      preco: "R$ 429,00",
      imagens: [
        "imagens/armazenamento/NVMe/256gb/pci-256.webp"
      ]
    },

    /* =====================================
     * 512gb (ID'S: 910 ~ 914)
     */

    {
      id: 910, /* Toshiba */
      categoria: "armazenamento",
      titulo: "NVMe",
      modelo: "Toshiba",
      specs1: "22mm x 80mm",
      specs2: "512 GB",
      preco: "R$ 629,00",
      imagens: [
        "imagens/armazenamento/NVMe/512gb/toshiba-512.webp"
      ]
    },

    {
      id: 911, /* Adata Pequeno */
      categoria: "armazenamento",
      titulo: "NVMe",
      modelo: "Adata",
      specs1: "22mm x 30mm",
      specs2: "512 GB",
      preco: "R$ 629,00",
      imagens: [
        "imagens/armazenamento/NVMe/512gb/adata-512-p.webp"
      ]
    },

    /* =====================================
     * 1tb (ID'S: 915 ~ 919)
     */

    {
      id: 915, /* Kingston */
      categoria: "armazenamento",
      titulo: "NVMe",
      modelo: "Kingston",
      specs1: "22mm x 80mm",
      specs2: "1 TB",
      preco: "R$ 700,00",
      imagens: [
        "imagens/armazenamento/NVMe/1tb/kingston-1tb.webp"
      ]
    },

    /* ======================================================
     * M2 Sata (ID'S: 920 ~ 939)
     * 128gb (ID'S: 920 ~ 924)
     */

    {
      id: 920, /* M2 */
      categoria: "armazenamento",
      titulo: "M.2 Sata",
      modelo: "SSD Technology Corporation",
      specs1: "22mm x 80mm",
      specs2: "128 GB",
      preco: "R$ 239,00",
      imagens: [
        "imagens/armazenamento/m2sata/128gb/m2-128.webp"
      ]
    },

    {
      id: 921, /* Skhynix */
      categoria: "armazenamento",
      titulo: "M.2 Sata",
      modelo: "Skhynix",
      specs1: "22mm x 30mm",
      specs2: "128 GB",
      preco: "R$ 239,00",
      imagens: [
        "imagens/armazenamento/m2sata/128gb/skhynix-128-p.webp"
      ]
    },

    /* =====================================
     * 256gb (ID'S: 925 ~ 929)
     */

    {
      id: 925, /* Lite-On */
      categoria: "armazenamento",
      titulo: "M.2 Sata",
      modelo: "Lite-On",
      specs1: "22mm x 80mm",
      specs2: "256 GB",
      preco: "R$ 429,00",
      imagens: [
        "imagens/armazenamento/m2sata/256gb/liteon-256.webp"
      ]
    },

    /* =====================================
     * 512gb (ID'S: 930 ~ 934)
     */

    /* IDS RESERVADOS */

    /* =====================================
     * 1tb (ID'S: 935 ~ 939)
     */

    /* IDS RESERVADOS */

    /* ======================================================
     * SSD (ID'S: 940 ~ 959)
     * 128gb (ID'S: 940 ~ 944)
     */

    {
      id: 940, /* KingFast */
      categoria: "armazenamento",
      titulo: "Solid State Drive",
      modelo: "KingFast",
      specs1: "SSD Sata III 2.5\"",
      specs2: "128 GB",
      preco: "R$ 190,00",
      imagens: [
        "imagens/armazenamento/ssd/128gb/kingston-128.webp",
        "imagens/armazenamento/ssd/128gb/kingston-cima.webp"
      ]
    },

    /* =====================================
     * 240gb (ID'S: 945 ~ 949)
     */

    {
      id: 945, /* KingFast */
      categoria: "armazenamento",
      titulo: "Solid State Drive",
      modelo: "KingFast",
      specs1: "SSD Sata III 2.5\"",
      specs2: "240 GB",
      preco: "R$ 290,00",
      imagens: [
        "imagens/armazenamento/ssd/256gb/kingston-256.webp",
        "imagens/armazenamento/ssd/128gb/kingston-cima.webp"
      ]
    }

    /* =====================================
     * 512gb (ID'S: 950 ~ 954)
     */

    /* IDS RESERVADOS */

    /* =====================================
     * 1tb (ID'S: 955 ~ 959)
     */

    /* IDS RESERVADOS */


  ],

  /* ==========================================================================
   * Cabo (ID'S: 960 ~ 969)
   */

  cabo: [

    /* =====================================
     * DisplayPort (ID: 960)
     */

    {
      id: 960, /* DisplayPort */
      categoria: "cabo",
      titulo: "DisplayPort",
      modelo: "Original",
      specs1: "150cm",
      specs2: "",
      preco: "R$ 30,00",
      imagens: [
        "imagens/cabo/displayport/displayport.webp",
        "imagens/cabo/displayport/displayport-entrada.webp"
      ]
    },

    /* =====================================
     * DVI (ID: 961)
     */

    {
      id: 961, /* DVI */
      categoria: "cabo",
      titulo: "DVI",
      modelo: "Original",
      specs1: "200cm",
      specs2: "",
      preco: "R$ 20,00",
      imagens: [
        "imagens/cabo/dvi/dvi.webp",
        "imagens/cabo/dvi/dvi-entrada.webp"
      ]
    },

    /* =====================================
     * Força (ID: 962)
     */

    {
      id: 962, /* Força */
      categoria: "cabo",
      titulo: "Força",
      modelo: "Original",
      specs1: "150cm",
      specs2: "",
      preco: "R$ 10,00",
      imagens: [
        "imagens/cabo/forca/forca.webp",
        "imagens/cabo/forca/forca-entrada.webp"
      ]
    },

    /* =====================================
     * HDMI (ID: 963)
     */

    {
      id: 963, /* HDMI */
      categoria: "cabo",
      titulo: "HDMI",
      modelo: "Original",
      specs1: "150cm",
      specs2: "",
      preco: "R$ 30,00",
      imagens: [
        "imagens/cabo/hdmi/hdmi.webp",
        "imagens/cabo/hdmi/hdmi-entrada.webp"
      ]
    },

    /* =====================================
     * VGA (ID: 964)
     */

    {
      id: 964, /* VGA */
      categoria: "cabo",
      titulo: "VGA",
      modelo: "Original",
      specs1: "150cm",
      specs2: "",
      preco: "R$ 15,00",
      imagens: [
        "imagens/cabo/vga/vga.webp",
        "imagens/cabo/vga/vga-entrada.webp"
      ]
    },

    {
      id: 965, /* Força e Tripolar */
      categoria: "cabo",
      titulo: "Força e Tripolar",
      modelo: "Original",
      specs1: "180cm",
      specs2: "",
      preco: "R$ 25,00",
      imagens: [
        "imagens/cabo/forca-e-tripolar/forca-tripolar.webp",
        "imagens/cabo/forca-e-tripolar/forca-entrada.webp",
        "imagens/cabo/forca-e-tripolar/tripolar-entrada.webp"
      ]
    }

    /* =====================================
     * Outros (ID'S: 966 ~ 969)
     */

    /* IDS RESERVADOS */


  ],

  /* ==========================================================================
   * Fonte (ID'S: 970 ~ 979)
   */

  fonte: [

    /* =====================================
     * Fonte PC (ID: 970)
     */

    {
      id: 970, /* Fonte PC */
      categoria: "fonte",
      titulo: "Fonte",
      modelo: "VX Pro",
      specs1: "Modelo VX 230SE",
      specs2: "230 watts",
      preco: "R$ 70,00",
      imagens: [
        "imagens/fonte/fonte-pc/fonte.webp"
      ]
    },

    /* =====================================
     * Lehmox Universal (ID: 971)
     */

    {
      id: 971, /* Lehmox Universal */
      categoria: "fonte",
      titulo: "Fonte Universal",
      modelo: "Lehmox",
      specs1: "LEY-668",
      specs2: "3.5A 12V",
      preco: "R$ 35,00",
      imagens: [
        "imagens/fonte/fonte-universal/lehmox-inclinada.webp",
        "imagens/fonte/fonte-universal/lehmox-cima.webp"
      ]
    }

    /* =====================================
     * Outros (ID: 972 ~ 979)
     */

    /* IDS RESERVADOS */


  ],

  /* ==========================================================================
   * Periféricos (ID'S: 980 ~ 999)
   */

  perifericos: [

    /* ======================================================
     * Mouse (ID'S: 980 ~ 989)
     * Mouse Monocron Novo (ID: 980)
     */

    {
      id: 980, /* Mouse Monocron Novo */
      categoria: "periferico",
      titulo: "Mouse",
      modelo: "Monocron",
      specs1: "Cabo USB",
      specs2: "Paralelo, Novo",
      preco: "R$ 15,00",
      imagens: [
        "imagens/periferico/novo/mouse-novo.webp"
      ]
    },

    /* =====================================
     * Mouse Lenovo Seminovo (ID: 981)
     */

    {
      id: 981, /* Mouse Lenovo Seminovo */
      categoria: "periferico",
      titulo: "Mouse",
      modelo: "Lenovo",
      specs1: "Cabo USB",
      specs2: "Original, Seminovo",
      preco: "R$ 25,00",
      imagens: [
        "imagens/periferico/usado/mouse-usado.webp"
      ]
    },

    /* ======================================================
     * Teclado (ID'S: 990 ~ 999)
     * Teclado Bright Novo (ID: 990)
     */

    {
      id: 990, /* Teclado Bright Novo */
      categoria: "periferico",
      titulo: "Teclado",
      modelo: "Bright",
      specs1: "Cabo USB",
      specs2: "Paralelo, Novo",
      preco: "R$ 25,00",
      imagens: [
        "imagens/periferico/novo/teclado-novo-a.webp"
      ]
    },

    /* =====================================
     * Teclado Monocron Novo (ID: 991)
     */

    {
      id: 991, /* Teclado Monocron Novo B */
      categoria: "periferico",
      titulo: "Teclado",
      modelo: "Monocron",
      specs1: "Cabo USB",
      specs2: "Paralelo, Novo",
      preco: "R$ 25,00",
      imagens: [
        "imagens/periferico/novo/teclado-novo-b.webp"
      ]
    },

    /* =====================================
     * Teclado FY Novo (ID: 992)
     */

    {
      id: 992, /* Teclado FY Novo */
      categoria: "periferico",
      titulo: "Teclado",
      modelo: "Modelo FY",
      specs1: "Sem fio",
      specs2: "Paralelo, Novo",
      preco: "R$ X0,00",
      imagens: [
        "imagens/periferico/novo/teclado-novo-c.webp"
      ]
    },

    /* =====================================
     * Teclado Lenovo Seminovo (ID: 993)
     */

    {
      id: 993, /* Teclado Lenovo Seminovo */
      categoria: "periferico",
      titulo: "Teclado",
      modelo: "Lenovo",
      specs1: "Cabo USB",
      specs2: "Original, Seminovo",
      preco: "R$ 35,00",
      imagens: [
        "imagens/periferico/usado/teclado-usado.webp"
      ]
    }

  ],

  /* ==========================================================================
   * Equipamentos (ID'S: 1000 ~ 1099)
   */

  equipamento: [

    /* =====================================
     * Cabo USB (ID: 1000)
     */

    {
      id: 1000, /* Cabo USB */
      categoria: "equipamento",
      titulo: "Cabo P2",
      modelo: "USB Cable",
      specs1: "USB 2.0",
      specs2: "Original, Novo",
      preco: "R$ 15,00",
      imagens: [
        "imagens/equipamento/cabo-usb.webp"
      ]
    },

    /* =====================================
     * Case (ID: 1001)
     */

    {
      id: 1001, /* Case */
      categoria: "equipamento",
      titulo: "Case",
      modelo: "Infokit ECASE-300",
      specs1: "Sata III, USB 3.0",
      specs2: "Original, Novo",
      preco: "R$ 50,00",
      imagens: [
        "imagens/equipamento/case.webp"
      ]
    },

    /* =====================================
     * Pasta Térmica (ID: 1002)
     */

    {
      id: 1002, /* Pasta Térmica */
      categoria: "equipamento",
      titulo: "Pasta Térmica",
      modelo: "D-mix",
      specs1: "PS-05",
      specs2: "Original, Novo",
      preco: "R$ 25,00",
      imagens: [
        "imagens/equipamento/pasta-termica.webp"
      ]
    },

    {
      id: 1003, /* Pasta Térmica Grande */
      categoria: "equipamento",
      titulo: "Pasta Térmica (G)",
      modelo: "Thermal Grease",
      specs1: "GD900",
      specs2: "Original, Novo",
      preco: "R$ 60,00",
      imagens: [
        "imagens/equipamento/pasta-termica-g-cima.webp",
        "imagens/equipamento/pasta-termica-g-tamanho.webp"
      ]
    },

    {
      id: 1004, /* Pen Drive Wifi */
      categoria: "equipamento",
      titulo: "Pen Drive Wifi",
      modelo: "Dual Band USB Adapter",
      specs1: "600 Mbps 2g/5g",
      specs2: "Original, Novo",
      preco: "R$ 60,00",
      imagens: [
        "imagens/equipamento/pendrive-wifi.webp"
      ]
    },

  ],

  /* ==========================================================================
   * Impressora (ID'S: 1100 ~ 1109)
   */

  impressora: [

    /* =====================================
     * Epson Térmica (ID: 1100)
     */

    {
      id: 1100, /* Epson Térmica */
      categoria: "impressora",
      titulo: "Impressora",
      modelo: "Epson TM-T20 Térmica",
      specs1: "Modelo M352AX",
      specs2: "Serial e Rede",
      preco: "R$ 450,00",
      imagens: [
        "imagens/impressora/epson-termica/epson-frente.webp",
        "imagens/impressora/epson-termica/epson-direita.webp",
        "imagens/impressora/epson-termica/epson-fundo.webp",
        "imagens/impressora/epson-termica/epson-cima.webp"
      ]
    }

  ],

  /* ==========================================================================
   * Impressora (ID'S: 1110 ~ 1149)
   */

  kit: [

    /* =====================================
     * Kit Dell (ID's: 1110 ~ 1119)
     */

    {
      id: 1110, /* Kit Dell */
      categoria: "kit",
      titulo: "Kit TSM Dell",
      modelo: "Monitor Dell 24 Polegadas",
      specs1: "Desktop Dell Mini i5 6500t",
      specs2: "Suporte Dell",
      preco: "R$ X.X00,00",
      imagens: [
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-direita.webp",
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-fundo.webp",
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-esquerda.webp",
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-frente.webp"
      ]
    },

    {
      id: 1111, /* Kit Dell */
      categoria: "kit",
      titulo: "Kit TSM Dell",
      modelo: "Monitor Dell 24 Polegadas",
      specs1: "Desktop Dell Mini i5 7500t",
      specs2: "Suporte Dell",
      preco: "R$ X.X00,00",
      imagens: [
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-direita.webp",
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-fundo.webp",
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-esquerda.webp",
        "imagens/kit-tsm/dell-tsm-i5-6500t/dell-tsm-frente.webp"
      ]
    },

    /* =====================================
     * Kit Lenovo (ID's: 1120 ~ 1129)
     */

    {
      id: 1120, /* Kit Lenovo */
      categoria: "kit",
      titulo: "Kit TSM Lenovo",
      modelo: "Monitor Positivo 19 Polegadas",
      specs1: "Desktop Lenovo Mini i5 6500t",
      specs2: "Suporte Lenovo",
      preco: "R$ 1.550,00",
      imagens: [
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-direita.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-fundo.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-esquerda.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-frente.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-inclinado.webp"
      ]
    },

    {
      id: 1121, /* Kit Lenovo */
      categoria: "kit",
      titulo: "Kit TSM Lenovo",
      modelo: "Monitor Positivo 19 Polegadas",
      specs1: "Desktop Lenovo Mini i5 7500t",
      specs2: "Suporte Lenovo",
      preco: "R$ 1.650,00",
      imagens: [
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-direita.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-fundo.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-esquerda.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-frente.webp",
        "imagens/kit-tsm/lenovo-tsm-i5-6500t/lenovo-tsm-inclinado.webp"
      ]
    },

    /* =====================================
     * Servidor (ID's: 1130 ~ 1149)
     */

    {
      id: 1130, /* Servidor Dell */
      categoria: "servidor",
      titulo: "Servidor Dell",
      modelo: "Precision 5820",
      specs1: "Xeon W-2133 8 Ram 512 SSD",
      specs2: "NVIDIA Quadro P2000",
      preco: "R$ 4.500,00",
      imagens: [
        "imagens/servidor/xeon/servidor-xeon-frente.webp",
        "imagens/servidor/xeon/servidor-xeon-fundo.webp"
      ]
    },

    /* =====================================
     * No Break (ID's: 1150 ~ 1169)
     */

    {
      id: 1150, /* No Break PhD Online */
      categoria: "nobreak",
      titulo: "No Break",
      modelo: "PhD Online",
      specs1: "EA 3K BAT 96V",
      specs2: "3 KVA",
      preco: "R$ 2.500,00",
      imagens: [
        "imagens/nobreak/phd-online/phd-online-frente.webp",
        "imagens/nobreak/phd-online/phd-online-fundo.webp"
      ]
    },

    /* =====================================
     * Teste (ID's: 2000 ~ 2010)
     */

    {
      id: 2001, /* Teste */
      categoria: "teste",
      titulo: "Teste",
      modelo: "Modelo Teste",
      specs1: "spec1 teste",
      specs2: "spec2 teste",
      preco: "Teste",
      imagens: [
        "imagens/teste"
      ]
    }

  ]

};


/* ================================ */
/*          Acha o produto          */
/* ================================ */

function buscarProduto(id){

  for (const categoria in produtos){

    const produto = produtos[categoria].find(p => p.id === id);
    if(produto) return produto;
  }

  return null;
}

const produtoAtual = buscarProduto(id);


/****************************************
 * Ativa menu baseado na categoria real
 ****************************************/

document.querySelectorAll(".dropdown-item").forEach(el => {
  el.classList.remove("active");
});

if (produtoAtual && produtoAtual.categorias) {
  const menuId = mapaMenu[produtoAtual.categorias];
  document.getElementById(menuId)?.classList.add("active");
}

/* Evitar erros silenciosos */
if (produtoAtual && produtoAtual.categoria) {
  const menuId = mapaMenu[produtoAtual.categoria];

  if (menuId) {
    const el = document.getElementById(menuId);
    if (el) {
      el.classList.add("active");
    } else {
      console.warn("ID não encontrado:", menuId);
    }
  } else {
    console.warn("Categoria não mapeada:", produtoAtual.categoria);
  }
}


/* ================================= */
/*      Produto não encontrado      */
/* ================================= */

if (!produtoAtual) {

  const carousel = document.getElementById("carousel-imagens");

  if (carousel) {
    carousel.innerHTML = `
      <div class="carousel-item active">
        <img src="imagens/todo-o-site/produto-nao-encontrado.webp" class="img-fluid">
      </div>
    `;
  }

  const info = document.getElementById("produto-info");

  info.innerHTML = `
    <div class="botao-nao-encontrado text-center p-5">
      <h1 class="titulo-nao-encontrado">Ops! Ocorreu um erro </h1>
      <h2 class="texto-nao-encontrado mb-4">❌ Produto não encontrado ❌</h2>
      <a href="tipo-computador.html">
        Voltar
      </a>
    </div>
  `;

  throw new Error("Produto não encontrado");
}



/* ====================================== */
/*    Igual a estrutura antiga do HTML    */
/* ====================================== */

const info = document.getElementById("produto-info");

info.innerHTML = `
<div class="d-flex flex-column justify-content-center botao-hover-link text-center">

  <div class="item-card">
    <p class="titulo-item">${produtoAtual.titulo}</p>
    <p class="texto-item">${produtoAtual.modelo}</p>
    <p class="texto-item">${produtoAtual.specs1}</p>
    <p class="texto-item-dois">${produtoAtual.specs2}</p>
    <p class="texto-preco">
      ${
        produtoAtual.antigo && produtoAtual.novo
          ? `De <span class="preco-antigo">${produtoAtual.antigo}</span>
             por <span class="preco-novo">${produtoAtual.novo}</span>`
          : `${produtoAtual.comum || produtoAtual.preco}`
      }
    </p>
  </div>

  <a class="botao-link" href="contato.html">Quero negociar</a>

</div>
`;



/* ======================================= */
/*   Igual ao carousel antigo de imagens   */
/* ======================================= */

function carregarImagens(imagens) {

  const carousel = document.getElementById("carousel-imagens");

  let html = "";

  imagens.forEach((img, index) => {

    html += `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <a href="contato.html">
          <img src="${img}" class="img-fluid">
          <div class="carousel-caption"></div>
        </a>
      </div>
    `;

  });

  carousel.innerHTML = html;

}

carregarImagens(produtoAtual.imagens);