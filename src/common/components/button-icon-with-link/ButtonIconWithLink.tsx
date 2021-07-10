import React from 'react'
import styled from 'styled-components'
import IconsCP from '../styles/icons/Icons'
import { iconNameTP } from '../../types/iconNameTP'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'

interface IButtonIconWithLinkCPProps extends IStandardInterface {
  href: string
  iconName: iconNameTP
  text?: string
  target?: string
}

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function ButtonIconWithLinkCP(
  props: IButtonIconWithLinkCPProps
): JSX.Element {
  return (
    <LinkSCP
      href={props.href}
      className={props.className}
      id={props.id}
      target={props.target ?? '_blank'}
    >
      {props.text && <TextWrapperSCP>{props.text}</TextWrapperSCP>}
      <IconsCP iconName={props.iconName} />
    </LinkSCP>
  )
}

/** Rever */
const LinkSCP = styled.a`
  display: flex;
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

const TextWrapperSCP = styled.div`
  padding-right: 0.5rem;
`
