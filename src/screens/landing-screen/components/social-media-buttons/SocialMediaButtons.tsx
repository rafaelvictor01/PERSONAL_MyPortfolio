import React from 'react'
import ButtonIconWithLinkCP from 'src/common/components/button-icon-with-link/ButtonIconWithLink'
import { UserConstants } from 'src/common/constants/UserConstants'
import styled from 'styled-components'

/**
 * @author rafaelvictor01
 * @return Elemento de composição da landing screen.
 * - Area que agrupa os botões das mídias sociais.
 */
export default function SocialMediaButtonsCP(): JSX.Element {
  return (
    <SocialMediaButtonsMainWrapperSCP>
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
    </SocialMediaButtonsMainWrapperSCP>
  )
}

const SocialMediaButtonsMainWrapperSCP = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;

  // svg-inline--fa == Todos os icons
  .svg-inline--fa {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary};
  }

  .svg-inline--fa:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }

  @media screen and (min-width: 1024px) {
    transform: translateX(-6rem);
  }
`
