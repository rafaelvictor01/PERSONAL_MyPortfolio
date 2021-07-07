import React from 'react'
import styled from 'styled-components'
import MainNavbarCP from '../../../../common/components/main-navbar/MainNavbar'

/**
 * @author rafaelvictor01
 * @return Add description to LandingScreenMainContentCP
 */
export default function LandingScreenMainContentCP(): JSX.Element {
  return (
    <LandingScreenMainContentMainWrapperSCP>
      <MainNavbarCP />
      <h1>teste h1</h1>
      <p>teste p</p>
    </LandingScreenMainContentMainWrapperSCP>
  )
}

const LandingScreenMainContentMainWrapperSCP = styled.div``
