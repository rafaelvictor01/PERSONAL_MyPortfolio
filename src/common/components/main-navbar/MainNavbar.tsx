import React from 'react'
import styled from 'styled-components'

interface MainNavbarCPProps {
  children: JSX.Element
}

/**
 * @todo - Add description to MainNavbarCP
 * @author rafaelvictor01
 * @return JSX.Element
 */
export default function MainNavbarCP(props: MainNavbarCPProps): JSX.Element {
  return <MainNavbarMainWrapperSCP>{props.children}</MainNavbarMainWrapperSCP>
}

const MainNavbarMainWrapperSCP = styled.div`
  height: ${props => props.theme.defaultSize.headerAndFooter};
  background-color: ${props => props.theme.colors.primary};
`
