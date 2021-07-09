import React from 'react'
import styled from 'styled-components'
import SectionCP from '../../../../common/components/section/Section'
import MainNavbarCP from '../../../../common/components/main-navbar/MainNavbar'
import ProfilePictureWithBlobCP from '../profile-picture-with-blob/ProfilePictureWithBlob'
import TextCP from 'src/common/components/text/Text'
import LinkButtonWithIconCP from 'src/common/components/link-button-with-icon/LinkButtonWithIcon'

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
            <LinkButtonWithIconCP
              href={'www.google.com'}
              iconName={['fab', 'linkedin']}
            />
            <LinkButtonWithIconCP
              href={'www.google.com'}
              iconName={['fab', 'instagram']}
            />
            <LinkButtonWithIconCP
              href={'www.google.com'}
              iconName={['fab', 'github']}
            />
          </SocialMediaAreaSCP>
          <ProfilePictureWithBlobCP />
        </LandingScreenContentSCP>

        {/* Esta faltando a imagem */}

        <DataAreaSCP>
          <TextCP content={'Olá, eu sou o Rafael 😀'} title={true} />
          <TextCP
            subtitle={true}
            content={'Dev Fullstack com uma caidinha pelo Frontend 👀'}
          />
          <TextCP
            content={
              'Estudante de Sistemas da Informação e, atualmente, desenvolvedor web estou sempre ' +
              'aprendendo, ensinando e criando tecnologias que contribuam para um mundo melhor.'
            }
          />
          {/* className: button button--flex */}
          <LinkButtonWithIconCP
            href={'#'}
            className={'contactMeButton'}
            iconName={'paper-plane'}
            text={'Entre em contato'}
          />
        </DataAreaSCP>

        {/* className={'home__scrool'} */}
        {/* 31:27 */}
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
const DataAreaSCP = styled.div`
  grid-column: 1/3;

  h3 {
    margin-bottom: ${props => props.theme.marginBottom.mb075};
  }

  p {
    margin-bottom: ${props => props.theme.marginBottom.mb2};
  }

  .contactMeButton {
    display: inline-block;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: ${props => props.theme.font.fontMedium};
  }
`
