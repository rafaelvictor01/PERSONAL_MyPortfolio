import React from 'react'
import styled from 'styled-components'
import SectionCP from '../../../../common/components/layout/section/Section'
import MainNavbarCP from '../../../../common/components/main-navbar/MainNavbar'
import LinkButtonIconCP from '../../../../common/components/link-button-icon/LinkButtonIconCP'
import ProfilePictureWithBlobCP from '../profile-picture-with-blob/ProfilePictureWithBlob'

/**
 * @author rafaelvictor01
 * @return Add description to LandingScreenMainContentCP
 */
export default function LandingScreenMainContentCP(): JSX.Element {
  return (
    <SectionCP>
      <LandingScreenWrapperSCP className={'container grid'}>
        <MainNavbarCP />

        <LandingScreenContentSCP className={'grid'}>
          <SocialMediaAreaSCP>
            <LinkButtonIconCP
              href={'www.google.com'}
              iconName={['fab', 'linkedin']}
            />
            <LinkButtonIconCP
              href={'www.google.com'}
              iconName={['fab', 'instagram']}
            />
            <LinkButtonIconCP
              href={'www.google.com'}
              iconName={['fab', 'github']}
            />
          </SocialMediaAreaSCP>
          <ProfilePictureWithBlobCP />
        </LandingScreenContentSCP>

        {/* Esta faltando a imagem */}

        <DataAreaSCP>
          <h1>Olá, eu sou o Rafael 😀</h1>
          <h3>Dev Fullstack com uma caidinha pelo Frontend 👀</h3>
          <p>
            Estudante de Sistemas da Informação e, atualmente, desenvolvedor web
            estou sempre aprendendo, ensinando e criando tecnologias que
            contribuam para um mundo melhor.
          </p>

          {/* className: button button--flex */}
          <LinkButtonIconCP
            href={'#'}
            iconName={'paper-plane'}
            text={'Entre em contato'}
          />
        </DataAreaSCP>
      </LandingScreenWrapperSCP>
    </SectionCP>
  )
}

// home__container
const LandingScreenWrapperSCP = styled.div`
  gap: 1rem;
`

// home__content
const LandingScreenContentSCP = styled.div`
  grid-template-columns: 0.5fr 3fr;
  padding-top: 3.5rem;
  align-items: center;
`

// home__social
const SocialMediaAreaSCP = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  .svg-inline--fa {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
  }

  .svg-inline--fa:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }
`

// home__data
const DataAreaSCP = styled.div``
