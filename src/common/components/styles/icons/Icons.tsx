import React from 'react'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { iconNameTP } from '../../../types/iconNameTP'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'

library.add(fab, fas)
interface IIconsCPProps extends IStandardInterface {
  iconName: iconNameTP
  onClick?: () => void
}

/**
 * @author rafaelvictor01
 * @return - A estrutura necessária para uso de quaisquer ícones na aplicação.
 * - Este componente é ESSENCIAL para evitar o alto acoplamento à biblioteca fortawesome
 */
export default function IconsCP(props: IIconsCPProps): JSX.Element {
  return (
    <IconsMainWrapperSCP onClick={props.onClick}>
      <FontAwesomeIcon
        icon={props.iconName}
        className={props.className}
        id={props.id}
      />
    </IconsMainWrapperSCP>
  )
}

const IconsMainWrapperSCP = styled.div``
