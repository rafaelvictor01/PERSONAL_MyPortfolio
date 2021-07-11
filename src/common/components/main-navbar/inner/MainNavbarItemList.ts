import { IMainNavbarData } from 'src/common/components/main-navbar/inner/interfaces/IMainNavbarData'

/**
 * @author rafaelvictor01
 * @returns - Lista com todos os itens do menu principal da aplicação
 */
export const MainNavbarItemList: IMainNavbarData[] = [
  {
    href: '/',
    iconName: 'home',
    text: 'Home',
    key: 'home'
  },
  {
    href: '/about',
    iconName: 'user',
    text: 'About',
    key: 'about'
  },
  {
    href: '/skills',
    iconName: 'file-alt',
    text: 'Skills',
    key: 'skills'
  },
  {
    href: '/services',
    iconName: 'briefcase',
    text: 'Services',
    key: 'services'
  },
  {
    href: '/portfolio',
    iconName: 'mountain',
    text: 'Portfolio',
    key: 'portfolio'
  },
  {
    href: '/contact',
    iconName: 'envelope',
    text: 'Contact-me',
    key: 'contact'
  }
]
