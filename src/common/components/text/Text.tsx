import React from 'react'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'
import styled from 'styled-components'

interface ITextCPProps extends IStandardInterface {
  content: string
  title?: boolean
  subtitle?: boolean
  highlighted?: boolean
}

/**
 * @author rafaelvictor01
 * @return Componente default de texto para a aplicação
 */
export default function TextCP(props: ITextCPProps): JSX.Element {
  return (
    <TextMainWrapperSCP
      highlighted={!!props.highlighted}
      className={props.className}
    >
      {props.title && !props.subtitle && <h1>{props.content}</h1>}
      {!props.title && props.subtitle && <h3>{props.content}</h3>}
      {!props.title && !props.subtitle && <p>{props.content}</p>}
    </TextMainWrapperSCP>
  )
}

const TextMainWrapperSCP = styled.div<{ highlighted: boolean }>`
  font-weight: ${props =>
    props.highlighted ? props.theme.font.fontSemiBold : ''};

  h1 {
    color: ${props => props.theme.colors.title};
    font-size: ${props => props.theme.fontSizeForSmallDevices.bigFontSize};
  }

  h3 {
    font-size: ${props => props.theme.fontSizeForSmallDevices.h3FontSize};
    color: ${props => props.theme.colors.text};
    font-weight: ${props => props.theme.font.fontMedium};
  }

  p {
    font-size: ${props => props.theme.fontSizeForSmallDevices.normalFontSize};
    color: ${props => props.theme.colors.text};
  }

  @media screen and (min-width: 960px) {
    h1 {
      font-size: ${props => props.theme.fontSizeForLargeDevices.bigFontSize};
    }

    h3 {
      font-size: ${props => props.theme.fontSizeForLargeDevices.h3FontSize};
    }

    p {
      font-size: ${props => props.theme.fontSizeForLargeDevices.normalFontSize};
    }
  }
`
