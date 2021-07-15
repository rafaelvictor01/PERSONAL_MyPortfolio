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

  /* ==================== Genéricos ==================== */

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    margin: 0 0 ${props => props.theme.defaultHeight.headerHeight} 0;

    background-color: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.text};

    font-family: ${props => props.theme.font.fontFamily};
    font-size: ${props => props.theme.fontSizeForSmallDevices.normalFontSize};

    @media screen and (min-width: 960px) {
      font-size: ${props => props.theme.fontSizeForLargeDevices.normalFontSize};
    }
  }

  h1, h2, h3, h4 {
    color: ${props => props.theme.colors.title};
    font-weight: ${props => props.theme.font.fontSemiBold};
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* ==================== Classes Recicláveis ==================== */

  .container {
    max-width: 768px;
    margin-left: ${props => props.theme.marginBottom.mb15};
    margin-right: ${props => props.theme.marginBottom.mb15};
  }

  /* ==================== MEDIA QUERIES ==================== */

  @media screen and (max-width: 350px) {
    .container {
      margin-left: ${props => props.theme.marginBottom.mb1};
      margin-right: ${props => props.theme.marginBottom.mb1};
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      margin-left: auto;
      margin-right: auto;
    }

    body {
      margin: 0;
    }
  }

  /* ==================== Scroll Bar ==================== */

  ::-webkit-scrollbar {
    width: 0.60rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.colors.scrollBar};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.5rem;
    background-color: ${props => props.theme.colors.scrollBarThumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.colors.lighterText};
  }
`
