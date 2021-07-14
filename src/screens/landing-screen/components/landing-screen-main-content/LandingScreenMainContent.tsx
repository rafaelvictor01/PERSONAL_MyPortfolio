import React from 'react'
import styled from 'styled-components'
import ProfilePictureWithBlobCP from '../profile-picture-with-blob/ProfilePictureWithBlob'
import TextCP from 'src/common/components/text/Text'
import ButtonIconWithLinkCP from 'src/common/components/button-icon-with-link/ButtonIconWithLink'
import { UserConstants } from 'src/common/constants/UserConstants'
import ButtonCP from 'src/common/components/button/Button'

/**
 * @author rafaelvictor01
 * @todo Componentizar direito as coisas por aqui.
 * @return Add description to LandingScreenMainContentCP
 */
export default function LandingScreenMainContentCP(): JSX.Element {
  return (
    <LandingScreenWrapperSCP className={'container grid'}>
      <LandingScreenContentSCP className={'grid'}>
        <SocialMediaAreaSCP>
          <ButtonIconWithLinkCP
            iconName={['fab', 'linkedin']}
            href={UserConstants.URL_LINKEDIN}
            externalLink={true}
          />
          <ButtonIconWithLinkCP
            iconName={['fab', 'instagram']}
            href={UserConstants.URL_INSTAGRAM}
            externalLink={true}
          />
          <ButtonIconWithLinkCP
            iconName={['fab', 'github']}
            href={UserConstants.URL_GITHUB}
            externalLink={true}
          />
        </SocialMediaAreaSCP>
        <ProfilePictureWithBlobCP className={'profilePicture'} />
        <DataAreaSCP>
          <TextCP content={"Hi, I'am Rafael 😀"} title={true} />
          <TextCP subtitle={true} content={'Dev Fullstack '} />
          <TextCP
            content={
              'Estudante de Sistemas da Informação e, atualmente, desenvolvedor web estou sempre ' +
              'aprendendo, ensinando e criando tecnologias que contribuam para um mundo melhor.'
            }
          />
          {/* className: button button--flex */}
          <ButtonCP
            onClick={() => console.log('create this action')}
            iconName={'paper-plane'}
          >
            Contact Me
          </ButtonCP>
        </DataAreaSCP>
      </LandingScreenContentSCP>

      {/* className={'home__scrool'} 31:27 */}
    </LandingScreenWrapperSCP>
  )
}

// section -> className={'home section'} id={'home'}

// home__container container grid
const LandingScreenWrapperSCP = styled.div`
  gap: 1rem;
`

// home__content grid
const LandingScreenContentSCP = styled.div`
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;

  @media screen and (max-width: 350px) {
    grid-template-columns: 0.25fr 3fr;
  }

  @media screen and (min-width: 568px) {
    grid-template-columns: max-content 1fr 1fr;
  }
`

// home__social
const SocialMediaAreaSCP = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  // Para todos os icons
  .svg-inline--fa {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
  }

  .svg-inline--fa:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }
`

// home__data
const DataAreaSCP = styled.div`
  grid-column: 1/3;

  h3 {
    margin-bottom: ${props => props.theme.marginBottom.mb075};
  }

  p {
    margin-bottom: ${props => props.theme.marginBottom.mb2};
  }

  @media screen and (max-width: 568px) {
    grid-column: initial;
  }
`
