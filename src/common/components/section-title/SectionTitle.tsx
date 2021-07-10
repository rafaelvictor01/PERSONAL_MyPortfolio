import React from 'react'
import styled from 'styled-components'

interface ISectionTitleCPProps {
  content: string
}

/**
 * @author rafaelvictor01
 * @return - Texto formatado para ser CABEÇALHO DE UMA SCREEN
 */
export default function SectionTitleCP(
  props: ISectionTitleCPProps
): JSX.Element {
  return (
    <SectionTitleMainWrapperSCP>{props.content}</SectionTitleMainWrapperSCP>
  )
}

const SectionTitleMainWrapperSCP = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizeForSmallDevices.h1FontSize};
  @media screen and (min-width: 960px) {
    font-size: ${props => props.theme.fontSizeForLargeDevices.h1FontSize};
  }
`
