
//PurgeCSS pro site não quebrar
module.exports = {
  content: ['./index.html'],
  css: ['./css/estilo.css'],
  output: './css/purged',
  safelist: [
    'active',
    'show',
    'fade',
    'collapse',
    'collapsing',
    'modal',
    'open',
    'tab-pane',
    'tab-content',
    'carousel',
    'carousel-item',
    'carousel-inner',
    /^nav/,
    /^dropdown/,
    /^carousel/,
    /^btn/,
    /^col/,
    /^row/,
    /^container/,
    /^d-/,
    /^justify-/,
    /^align-/,
      /^coluna/,
      /^formatacao/,
      /^mapa/,
  ]
}