import React, { useState } from 'react'
import styled from 'styled-components'
import IconsCP from '../styles/icons/Icons'
import { motion } from 'framer-motion'
import MainNavbarItemCP from './inner/components/MainNavbarItem'
import { MainNavbarItemList } from 'src/common/components/main-navbar/inner/MainNavbarItemList'

/**
 * @author rafaelvictor01
 * @return ADD DESCRIPTION
 */
export default function MainNavbarCP(): JSX.Element {
  const [showMenu, setShowMenu] = useState(false)

  const container = {
    visible: { opacity: 1 },
    hidden: {
      opacity: 0,
      transition: { when: 'afterChildren' }
    }
  }

  const item = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <HeaderWrapperSCP>
      <NavWrapperSCP className={'container'}>
        <LogoWrapperSCP href={'/'}>rafaelvictor01</LogoWrapperSCP>

        <motion.div
          variants={container}
          animate={showMenu ? 'visible' : 'hidden'}
        >
          <DrawerContentWrapperSCP showMenu={showMenu}>
            <ListItensSCP className={'grid'}>
              {MainNavbarItemList.map(currentChildren => (
                <motion.div variants={item} key={currentChildren.key}>
                  <MainNavbarItemCP
                    href={currentChildren.href}
                    iconName={currentChildren.iconName}
                    text={currentChildren.text}
                    onSelect={() => setShowMenu(false)}
                  />
                </motion.div>
              ))}
            </ListItensSCP>

            {showMenu && (
              <IconsCP
                id={'navClose'}
                iconName={'times'}
                onClick={() => {
                  setShowMenu(false)
                }}
              />
            )}
          </DrawerContentWrapperSCP>
        </motion.div>

        {!showMenu && (
          <IconsCP
            id={'navToggle'}
            iconName={'th-large'}
            onClick={() => setShowMenu(true)}
          />
        )}
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
  /* background-color: ${props => props.theme.colors.primary}; */
`

// className: nav container
const NavWrapperSCP = styled.nav`
  max-width: 968px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${props => props.theme.defaultHeight.headerHeight};

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

// className: nav__menu; id: nav-menu
const DrawerContentWrapperSCP = styled.div<{ showMenu: boolean }>`
  @media screen and (max-width: 767px) {
    position: fixed;
    bottom: ${props => (props.showMenu ? '0' : '-100%')};
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.body};
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    /* transition: 0.3s; */
  }
`

// className: nav__list grid
const ListItensSCP = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

const LogoWrapperSCP = styled.a`
  color: ${props => props.theme.colors.title};
  font-weight: ${props => props.theme.font.fontMedium};

  &&:hover {
    color: ${props => props.theme.colors.darkPrimary};
  }
`
