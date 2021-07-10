import React from 'react'
import styled from 'styled-components'

interface ISectionSubtitleCPProps {
  content: string
}

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function SectionSubtitleCP(
  props: ISectionSubtitleCPProps
): JSX.Element {
  return (
    <SectionSubtitleMainWrapperSCP>
      {props.content}
    </SectionSubtitleMainWrapperSCP>
  )
}

const SectionSubtitleMainWrapperSCP = styled.div`
  text-align: center;
  display: block;
  margin-bottom: ${props => props.theme.marginBottom.mb3};
  font-size: ${props => props.theme.fontSizeForSmallDevices.smallFontSize};
  @media screen and (min-width: 960px) {
    font-size: ${props => props.theme.fontSizeForLargeDevices.smallFontSize};
  }
`
