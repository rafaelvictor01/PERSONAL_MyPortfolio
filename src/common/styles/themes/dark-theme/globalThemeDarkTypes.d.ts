/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'
import globalThemeDark from './globalThemeDark'

// Aqui é criado o tipo do arquivo de temas automaticamente
export type GlobalThemeDark = typeof globalThemeDark

/**
 * Necessário para que o import de temas funcione corretamente
 * com todas as devidas atribuições de tipos.
 * Funcionamento: Sobrescreve a definição de tipos padrão dentro de 'styled-components
 * @author rafaelvictor01
 */
declare module 'styled-components' {
  export interface DefaultTheme extends GlobalThemeDark {}
}
