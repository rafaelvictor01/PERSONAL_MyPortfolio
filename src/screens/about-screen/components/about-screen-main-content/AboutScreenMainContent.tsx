import React from 'react'
import SectionSubtitleCP from 'src/common/components/section-subtitle/SectionSubtitle'
import SectionTitleCP from 'src/common/components/section-title/SectionTitle'
import styled from 'styled-components'
import Image from 'next/image'
import TextCP from 'src/common/components/text/Text'
import ButtonCP from 'src/common/components/button/Button'

import srcImage from '../../../../../public/profilePicture.jpg'

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function AboutScreenMainContentCP(): JSX.Element {
  return (
    <ScreenMainWrapperSCP>
      <SectionTitleCP content={'About me'} />
      <SectionSubtitleCP content={'My introduction'} />

      <ContentMainWrapperSCP className={'container'}>
        <Image src={srcImage} className={'aboutImage'} />

        <AboutDataSCP>
          <TextCP
            content={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel nisl vitae est ultrices tempus. Vivamus consectetur ex nec ipsum auctor scelerisque.'
            }
            className={'aboutDescription'}
          />

          <AboutInfoSCP>
            <div>
              <TextCP
                content={'02+'}
                title={true}
                highlighted={true}
                className={'about__info-title'}
              />
              <TextCP
                content={'Lorem ipsum dolor '}
                className={'about__info-name'}
              />
              <TextCP
                content={'Lorem ipsum dolor '}
                className={'about__info-name'}
              />
            </div>
            <div>
              <TextCP
                content={'02+'}
                title={true}
                highlighted={true}
                className={'about__info-title'}
              />
              <TextCP
                content={'Lorem ipsum dolor '}
                className={'about__info-name'}
              />
              <TextCP
                content={'Lorem ipsum dolor '}
                className={'about__info-name'}
              />
            </div>
            <div>
              <TextCP
                content={'02+'}
                title={true}
                highlighted={true}
                className={'about__info-title'}
              />
              <TextCP
                content={'Lorem ipsum dolor '}
                className={'about__info-name'}
              />
              <TextCP
                content={'Lorem ipsum dolor '}
                className={'about__info-name'}
              />
            </div>
          </AboutInfoSCP>

          <AboutButtonsSCP>
            <ButtonCP
              iconName={'download'}
              onClick={() =>
                window.open('./Currículo_RafaelVictor.pdf', '_blank')
              }
            >
              Download CV
            </ButtonCP>
          </AboutButtonsSCP>
        </AboutDataSCP>
      </ContentMainWrapperSCP>
    </ScreenMainWrapperSCP>
  )
}

const ScreenMainWrapperSCP = styled.div``

// about__container container grid
const ContentMainWrapperSCP = styled.div`
  display: grid;
  gap: 1.5rem;

  .aboutImage {
    width: 200px;
    border-radius: 0.5rem;
    justify-self: center;
    align-self: center;
  }
`

// about__data
const AboutDataSCP = styled.div`
  .aboutDescription {
    text-align: center;
    margin-bottom: ${props => props.theme.marginBottom.mb25};
  }
`

// about__info
const AboutInfoSCP = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${props => props.theme.marginBottom.mb25};

  .about__info-title,
  .about__info-name {
    display: block;
    text-align: center;
  }
`

// about__buttons
const AboutButtonsSCP = styled.div`
  display: flex;
  justify-content: center;
`
