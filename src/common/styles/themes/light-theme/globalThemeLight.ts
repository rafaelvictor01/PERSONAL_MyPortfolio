import { SettingsConstants } from '../../../constants/SettingsConstants'

/**
 * Este é o arquivo que contem os TEMAS da aplicação. O arquivo de temas
 * contém recursos que PODEM (e devem) ser utilizados a qualquer momento.
 * Nenhuma cor, nenhum estilo, nenhum espaçamento, etc... NADA deve ser usado
 * diretamente no código. Deve-se registrar TUDO aqui e, depois, importar para o código
 *
 * @author rafaelvictor01
 */
const LightTheme = {
  title: 'LightTheme',

  colors: {
    primary: `hsl(${SettingsConstants.HUE_COLOR}, 69%, 61%)`,
    darkPrimary: `hsl(${SettingsConstants.HUE_COLOR}, 57%, 53%)`,
    lighterPrimary: `hsl(${SettingsConstants.HUE_COLOR}, 92%, 85%)`,

    text: `hsl(${SettingsConstants.HUE_COLOR}, 8%, 45%)`,
    lighterText: `hsl(${SettingsConstants.HUE_COLOR}, 8%, 65%)`,
    title: `hsl(${SettingsConstants.HUE_COLOR}, 8%, 15%)`,

    input: `hsl(${SettingsConstants.HUE_COLOR}, 70%, 96%)`,
    body: `hsl(${SettingsConstants.HUE_COLOR}, 60%, 99%)`,
    container: '#FFF'
  },

  font: {
    fontFamily: 'Poppins, sans-serif',

    /** font weight */
    fontMedium: 500,
    fontSemiBold: 600
  },

  fontSizeForSmallDevices: {
    /** .5rem = 8px, 1rem = 16px, 1.5rem = 24px */

    bigFontSize: '2rem',
    normalFontSize: '.938rem',
    smallFontSize: '.813rem',
    smallerFontSize: '.75rem',

    h1FontSize: '1.5rem',
    h2FontSize: '1.25rem',
    h3FontSize: '1.125rem'
  },

  fontSizeForLargeDevices: {
    /** .5rem = 8px, 1rem = 16px, 1.5rem = 24px */

    bigFontSize: '3rem',
    normalFontSize: '1rem',
    smallFontSize: '.875rem',
    smallerFontSize: '.813rem',

    h1FontSize: '2.25rem',
    h2FontSize: '1.5rem',
    h3FontSize: '1.25rem'
  },

  zIndex: {
    tooltip: 10,
    fixed: 100,
    modal: 1000
  },

  marginBottom: {
    /** .25rem = 4px, .5rem = 8px, .75rem = 12px */

    mb025: '.25rem',
    mb05: '.5rem',
    mb075: '.75rem',
    mb1: '1rem',
    mb15: '1.5rem',
    mb2: '2rem',
    mb25: '2.5rem',
    mb3: '3rem'
  },

  defaultHeight: {
    headerHeight: '3rem'
  }
}

export default LightTheme
