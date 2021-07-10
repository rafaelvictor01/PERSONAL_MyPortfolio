import React from 'react'
import SectionSubtitleCP from 'src/common/components/section-subtitle/SectionSubtitle'
import SectionTitleCP from 'src/common/components/section-title/SectionTitle'
import styled from 'styled-components'

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function AboutScreenMainContentCP(): JSX.Element {
  return (
    <ScreenMainWrapperSCP>
      <SectionTitleCP content={'About me'} />
      <SectionSubtitleCP content={'My introduction'} />

      {/* Rafael do futuro: já da pra tentar aplicar o framer-motion */}

      <ContentMainWrapperSCP className={'container grid'}>
        38:51
      </ContentMainWrapperSCP>
    </ScreenMainWrapperSCP>
  )
}

const ScreenMainWrapperSCP = styled.div``

// about__container container grid
const ContentMainWrapperSCP = styled.div``
