import React from 'react'
import styled from 'styled-components'
import ProfilePictureWithBlobCP from '../profile-picture-with-blob/ProfilePictureWithBlob'
import ButtonCP from 'src/common/components/button/Button'
import SocialMediaButtonsCP from 'src/screens/landing-screen/components/social-media-buttons/SocialMediaButtons'
import SectionCP from 'src/common/components/section/Section'
import CoverLetterCP from 'src/screens/landing-screen/components/cover-letter/CoverLetter'

/**
 * @author rafaelvictor01
 * @return Tela de apresentação da aplicação.
 */
export default function LandingScreenMainContentCP(): JSX.Element {
  return (
    <SectionCP>
      <LandingScreenWrapperSCP className={'container'}>
        <SocialMediaButtonsCP />

        <ColumnWithImageSCP>
          <ProfilePictureWithBlobCP />
        </ColumnWithImageSCP>

        <ColumnWithTheCoverLetterSCP>
          <CoverLetterCP />
          <ButtonCP
            iconName={'paper-plane'}
            onClick={() => console.log('create this action')}
          >
            Contact Me
          </ButtonCP>
        </ColumnWithTheCoverLetterSCP>
      </LandingScreenWrapperSCP>
    </SectionCP>
  )
}

const LandingScreenWrapperSCP = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;

  @media screen and (max-width: 350px) {
    grid-template-columns: 0.25fr 3fr;
  }

  @media screen and (min-width: 568px) {
    grid-template-columns: max-content 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    padding-top: 5.5rem;
    column-gap: 2rem;
  }
`

const ColumnWithImageSCP = styled.div`
  display: grid;
  @media screen and (min-width: 568px) {
    justify-self: center;
    order: 1;
  }
`

const ColumnWithTheCoverLetterSCP = styled.div`
  grid-column: span 2;

  h3 {
    margin-bottom: ${props => props.theme.marginBottom.mb075};
  }

  p {
    margin-bottom: ${props => props.theme.marginBottom.mb2};
  }

  @media screen and (min-width: 568px) {
    grid-column: initial;

    image {
      order: 1;
      justify-self: center;
    }
  }
`
