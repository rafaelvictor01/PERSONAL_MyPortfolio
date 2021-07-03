/**
 * Necessário para que os styled-components funcionem corretamente.
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
 * Esse arquivo em especial está em dentro do diretório raiz desse repositório. (.babelrc)
 */
module.exports = {
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
