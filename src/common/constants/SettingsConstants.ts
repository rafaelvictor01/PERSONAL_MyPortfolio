/**
 * @author rafaelvictor01
 * @returns Lista de constantes importantes para a configuração do sistema
 */
export const SettingsConstants = {
  // Define a cor padrão do sistema
  HUE_COLOR: 250 /** Purple 250; Green 142; Blue 230; Pink 340 */,

  // Os cookies estarão disponíveis na aplicação desde a rota '/'
  FIRST_VALID_ROUTE_FOR_COOKIES: '/',

  // Os cookies da aplicação serão persistidos por 1 dia (86400 segundos)
  MAXIMUM_AGE_FOR_ALL_APPLICATION_COOKIES: 86400,

  // Chave de acesso para encontrar o registro da preferência de tema do usuário nos cookies do browser
  THEME_COOKIE_ACCESS_KEY: 'globalTheme'
}
