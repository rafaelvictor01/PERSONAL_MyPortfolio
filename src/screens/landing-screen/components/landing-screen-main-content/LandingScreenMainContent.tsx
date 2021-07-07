import React from 'react'
import styled from 'styled-components'
import SectionCP from '../../../../common/components/layout/section/Section'
import MainNavbarCP from '../../../../common/components/main-navbar/MainNavbar'
import LinkButtonIconCP from '../../../../common/components/link-button-icon/LinkButtonIconCP'

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
const LandingScreenWrapperSCP = styled.div``

// home__content
const LandingScreenContentSCP = styled.div``

// home__social
const SocialMediaAreaSCP = styled.div``

// home__data
const DataAreaSCP = styled.div``
