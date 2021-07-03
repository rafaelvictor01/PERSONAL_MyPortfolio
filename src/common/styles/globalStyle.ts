import { createGlobalStyle } from 'styled-components'

/**
 * Este é o arquivo que contem as configurações globais de CSS da aplicação
 * OBS: Não confundir com o arquivo de TEMAS.
 * O arquivo de temas contém recursos que PODEM (e devem) ser utilizados a qualquer momento.
 * Este arquivo define o que necessáriamente SERÁ aplicado em todas as telas
 *
 * @author rafaelvictor01
 */
export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
  }
`
