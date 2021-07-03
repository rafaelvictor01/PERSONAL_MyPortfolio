/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'
import globalTheme from './globalTheme'

// Aqui é criado o tipo do arquivo de temas automaticamente
export type GlobalTheme = typeof globalTheme

/**
 * Necessário para que o import de temas funcione corretamente
 * com todas as devidas atribuições de tipos.
 *
 * @author rafaelvictor01
 */
declare module 'styled-components' {
  export interface DefaultTheme extends GlobalTheme {}
}
