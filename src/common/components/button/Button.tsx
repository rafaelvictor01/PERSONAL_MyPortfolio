import React from 'react'
import IconsCP from 'src/common/components/styles/icons/Icons'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'
import { iconNameTP } from 'src/common/types/iconNameTP'
import styled from 'styled-components'

interface IButtonCPProps extends IStandardInterface {
  onClick: () => void
  children: string
  placeholder?: string
  disabled?: boolean
  iconName?: iconNameTP
}

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function ButtonCP(props: IButtonCPProps): JSX.Element {
  return (
    <ButtonMainWrapperSCP
      type={'button'}
      onClick={props.onClick}
      className={props.className}
      id={props.id}
      key={props.key}
      placeholder={props.placeholder}
      disabled={props.disabled}
    >
      {props.children}
      {props.iconName && (
        <IconsCP iconName={props.iconName} className={'button__icon'} />
      )}
    </ButtonMainWrapperSCP>
  )
}

const ButtonMainWrapperSCP = styled.button`
  display: flex;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.font.fontFamily};
  font-size: ${props => props.theme.fontSizeForSmallDevices.normalFontSize};
  font-weight: ${props => props.theme.font.fontMedium};

  .button__icon {
    margin-left: ${props => props.theme.marginBottom.mb05};
  }

  @media screen and (min-width: 960px) {
    font-size: ${props => props.theme.fontSizeForLargeDevices.normalFontSize};
  }

  &:hover {
    background-color: ${props => props.theme.colors.darkPrimary};
  }
`
