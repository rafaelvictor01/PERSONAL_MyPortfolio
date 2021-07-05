import React, { useContext } from 'react'
import styled from 'styled-components'
import MainNavbarCP from '../../../../common/components/main-navbar/MainNavbar'
import { GlobalContext } from '../../../../common/context/GlobalContext'

/**
 * @todo - Add description to LandingScreenMainContentCP
 * @author rafaelvictor01
 * @return JSX.Element
 */
export default function LandingScreenMainContentCP(): JSX.Element {
  const globalContext = useContext(GlobalContext)
  return (
    <LandingScreenMainContentMainWrapperSCP>
      <MainNavbarCP>
        <button onClick={globalContext.toggleTheme}>teste</button>
      </MainNavbarCP>
      <h1>teste h1</h1>
      <p>teste p</p>
    </LandingScreenMainContentMainWrapperSCP>
  )
}

const LandingScreenMainContentMainWrapperSCP = styled.div``
