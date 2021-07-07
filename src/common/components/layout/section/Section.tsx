import React from 'react'
import styled from 'styled-components'

interface SectionCPProps {
  children: JSX.Element
  className?: string
  id?: string
}

/**
 * @author rafaelvictor01
 * @return - tag section personalizada para agrupar as screens
 */
export default function SectionCP(props: SectionCPProps): JSX.Element {
  return (
    <SectionMainWrapperSCP className={props.className} id={props.id}>
      {props.children}
    </SectionMainWrapperSCP>
  )
}

const SectionMainWrapperSCP = styled.section`
  padding: 2rem 0 4rem;

  .section_title {
    font-size: ${props => props.theme.fontSizeForSmallDevices.h1FontSize};
    @media screen and (min-width: 960px) {
      font-size: ${props => props.theme.fontSizeForLargeDevices.h1FontSize};
    }
  }

  .section_subtitle {
    display: block;
    margin-bottom: ${props => props.theme.marginBottom.mb3};
    font-size: ${props => props.theme.fontSizeForSmallDevices.smallFontSize};
    @media screen and (min-width: 960px) {
      font-size: ${props => props.theme.fontSizeForLargeDevices.smallFontSize};
    }
  }

  .section_title,
  .section_subTitle {
    text-align: center;
  }
`
