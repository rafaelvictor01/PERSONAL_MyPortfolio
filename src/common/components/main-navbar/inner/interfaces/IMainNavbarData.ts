import IStandardInterface from 'src/common/interfaces/IStandardInterface'
import { iconNameTP } from 'src/common/types/iconNameTP'

/**
 * @author rafaelvictor01
 * @returns - Formato dos dados que devem ser passados para a navbar para que ela consiga construir
 * os itens do menu.
 */
export interface IMainNavbarData extends IStandardInterface {
  href: string
  iconName: iconNameTP
  text: string
}
