import React from 'react'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'
import styled from 'styled-components'
import { iconNameTP } from '../../../types/iconNameTP'
import IconsCP from '../../styles/icons/Icons'

interface IMainNavbarItemCPProps extends IStandardInterface {
  href: string
  iconName: iconNameTP
  text: string
  onSelect: () => void
}

/**
 * @author rafaelvictor01
 * @return Abstrai a criação de um item para estar no menu principal da aplicação.
 */
export default function MainNavbarItemCP(
  props: IMainNavbarItemCPProps
): JSX.Element {
  return (
    <MainNavbarItemMainWrapperSCP>
      <NavLinkSCP href={props.href} onClick={props.onSelect}>
        <IconsCP iconName={props.iconName} className={'navIcon'} />
        {props.text}
      </NavLinkSCP>
    </MainNavbarItemMainWrapperSCP>
  )
}

const MainNavbarItemMainWrapperSCP = styled.li`
  .navIcon {
    font-size: 1.2rem;
  }
`

const NavLinkSCP = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.title};
  font-weight: ${props => props.theme.font.fontMedium};

  font-size: ${props => props.theme.fontSizeForSmallDevices.smallFontSize};
  @media screen and (min-width: 960px) {
    font-size: ${props => props.theme.fontSizeForLargeDevices.smallFontSize};
  }

  &&:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }
`
