import React, { useState } from 'react'
import styled from 'styled-components'
import IconsCP from '../styles/icons/Icons'
import MainNavbarItemCP from './inner/MainNavbarItem'

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function MainNavbarCP(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderWrapperSCP>
      <NavWrapperSCP className={'container'}>
        <LogoWrapperSCP href={'#'}>rafaelvictor01</LogoWrapperSCP>

        <NavItemsWrapperSCP id={'navItemsWrapper'} showMenu={showMenu}>
          <NavListItensSCP className={'grid'}>
            <MainNavbarItemCP
              href={'#'}
              iconName={'home'}
              text={'Home'}
              onSelect={() => setShowMenu(false)}
            />
            <MainNavbarItemCP
              href={'#'}
              iconName={'user'}
              text={'About'}
              onSelect={() => setShowMenu(false)}
            />
            <MainNavbarItemCP
              href={'#'}
              iconName={'file-alt'}
              text={'Skills'}
              onSelect={() => setShowMenu(false)}
            />
            <MainNavbarItemCP
              href={'#'}
              iconName={'briefcase'}
              text={'Services'}
              onSelect={() => setShowMenu(false)}
            />
            <MainNavbarItemCP
              href={'#'}
              iconName={'mountain'}
              text={'Portfolio'}
              onSelect={() => setShowMenu(false)}
            />
            <MainNavbarItemCP
              href={'#'}
              iconName={'envelope'}
              text={'Contact-me'}
              onSelect={() => setShowMenu(false)}
            />
          </NavListItensSCP>

          <IconsCP
            id={'navClose'}
            iconName={'times'}
            onClick={() => {
              setShowMenu(false)
            }}
          />
        </NavItemsWrapperSCP>

        <BtnsWrapperSCP>
          <IconsCP
            id={'navToggle'}
            iconName={'th-large'}
            onClick={() => setShowMenu(true)}
          />
        </BtnsWrapperSCP>
      </NavWrapperSCP>
    </HeaderWrapperSCP>
  )
}

// className: header; Id: Header
const HeaderWrapperSCP = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${props => props.theme.zIndex.fixed};
  background-color: ${props => props.theme.colors.primary};

  #navClose {
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }

  #navClose:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }
`

// className: nav container
const NavWrapperSCP = styled.nav`
  max-width: 968px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.defaultHeight.headerHeight};
`

// className: nav__menu; id: nav-menu
const NavItemsWrapperSCP = styled.div<{ showMenu: boolean }>`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: ${props => (props.showMenu ? '0' : '-100%')};
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.body};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
`

// className: nav__list grid
const NavListItensSCP = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

const BtnsWrapperSCP = styled.div`
  #navToggle {
    color: ${props => props.theme.colors.title};
    font-weight: ${props => props.theme.font.fontMedium};
    font-size: 1.1rem;
    cursor: pointer;
  }

  #navToggle:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }
`

const LogoWrapperSCP = styled.a`
  color: ${props => props.theme.colors.title};
  font-weight: ${props => props.theme.font.fontMedium};

  &&:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }
`
