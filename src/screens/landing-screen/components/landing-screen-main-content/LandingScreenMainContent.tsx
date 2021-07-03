import React from 'react'
import styled from 'styled-components'
import MainNavbarCP from '../../../../common/components/main-navbar/MainNavbar'

/**
 * @todo - Add description to LandingScreenMainContentCP
 * @author rafaelvictor01
 * @return JSX.Element
 */
export default function LandingScreenMainContentCP(): JSX.Element {
  return (
    <LandingScreenMainContentMainWrapperSCP>
      <MainNavbarCP>
        <button onClick={() => console.log('teste')}>teste</button>
      </MainNavbarCP>
    </LandingScreenMainContentMainWrapperSCP>
  )
}

const LandingScreenMainContentMainWrapperSCP = styled.div``
