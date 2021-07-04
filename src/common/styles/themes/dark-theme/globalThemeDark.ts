/**
 * Este é o arquivo que contem os TEMAS da aplicação. O arquivo de temas
 * contém recursos que PODEM (e devem) ser utilizados a qualquer momento.
 * Nenhuma cor, nenhum estilo, nenhum espaçamento, etc... NADA deve ser usado
 * diretamente no código. Deve-se registrar TUDO aqui e, depois, importar para o código
 *
 * @author rafaelvictor01
 */
const DarkTheme = {
  title: 'DarkTheme',

  colors: {
    primary: '#4447E2',
    secondary: '#5F5F6E',

    mainBackground: '#101012',
    mainTextColor: '#f5f5f5',

    redError: '#ff4d4f',
    greenSuccess: '#52c41a',
    yellowAlert: '#faad14',

    headerAndFooter: '#1C1C24',
    headerAndFooterDivisor: '#262631',
    card: '#2D2D3A'
  },

  zIndex: {
    headerAndFooter: 1000
  },

  defaultSize: {
    headerAndFooter: '50px',
    inputFieldHeight: '50px',
    fontSize: '14px'
  },

  other: {
    defaultBorderRadius: '15px'
  }
}

export default DarkTheme
