import { parseCookies } from 'nookies'

/**
 * @author rafaelvictor01
 * @returns - métodos auxiliares à criação do hook personalizado usePersistedState
 * - A criação deste arquivo de utils deve-se principalmente a declaração da função
 * searchCookiesForInitialState que dispõe de uma longa (e necessária) explicação.
 * Deixar este longo comentário no arquivo principal do hook traria complicações para organização e
 * entendimento do código.
 */
export const usePersistedStateUtils = {
  /**
   * - Para fazermos a atribuição do inicialState (do useState) da forma adequada,
   * Devemos verificar se já existe salvo nos cookies algum valor que seja do nosso
   * interesse para usa-lo.
   *
   * - EX: Vamos imaginar que usamos este hook para persistir nos cookies a preferência
   * do usuário quanto ao tema da aplicação. Se o usuário der F5 na tela. Precisamos usar
   * os dados dos cookies como inicialState.
   *
   * - Contudo, acontecerá facilmente casos em que esta busca nos cookies por informação
   * não encontre nada.
   *
   * - EX: Caso a aplicação ainda não tenha registado a preferência do usuário em relação ao tema
   *
   * - Nesse caso usamos como inicialState o próprio valor previsto no código como default. Ou seja
   * a prop.value
   */
  searchCookiesForInitialState(key: string, value: string): string {
    const cookies = parseCookies(null)
    if (cookies[key]) {
      return cookies[key]
    } else {
      return value
    }
  },

  // Os cookies da aplicação serão persistidos por 1 dia (86400 segundos)
  getMaximumAgeForAllApplicationCookies(): number {
    return 86400
  },

  // Os cookies estarão disponíveis na aplicação desde a rota /
  getFirstValidRouteForCookies(): string {
    return '/'
  }
}
