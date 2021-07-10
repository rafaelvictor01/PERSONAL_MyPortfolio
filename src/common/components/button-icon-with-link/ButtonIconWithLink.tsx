import React from 'react'
import styled from 'styled-components'
import IconsCP from '../styles/icons/Icons'
import { iconNameTP } from '../../types/iconNameTP'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'

interface IButtonIconWithLinkCPProps extends IStandardInterface {
  href: string
  iconName: iconNameTP
  externalLink?: boolean
}

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function ButtonIconWithLinkCP(
  props: IButtonIconWithLinkCPProps
): JSX.Element {
  return (
    <>
      {props.externalLink && (
        <LinkSCP
          href={props.href}
          className={props.className}
          id={props.id}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          <IconsCP iconName={props.iconName} />
        </LinkSCP>
      )}
      {!props.externalLink && (
        <LinkSCP href={props.href} className={props.className} id={props.id}>
          <IconsCP iconName={props.iconName} />
        </LinkSCP>
      )}
    </>
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
