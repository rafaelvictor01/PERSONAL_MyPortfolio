import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContext } from '../../../context/GlobalContext'
import globalThemeLight from '../../../styles/themes/light-theme/globalThemeLight'
import globalThemeDark from '../../../styles/themes/dark-theme/globalThemeDark'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'

interface IThemeProviderCPProps extends IStandardInterface {
  children: JSX.Element
}

/**
 * @author rafaelvictor01
 * @return Provedor de temas personalizado para a aplicação.
 * Esse componente é fundamental para que a aplicação seja capaz de alternar corretamente entre os
 * temas Light e Dark.
 * Caso deixássemos o componente ThemeProvider, NATIVO DOS STYLED-COMPONENTS, diretamente dentro do
 * arquivo _app.tsx ele não seria capaz de fazer uso do react-context global da aplicação.
 */
export default function ThemeProviderCP(
  props: IThemeProviderCPProps
): JSX.Element {
  const globalContext = useContext(GlobalContext)
  return (
    <ThemeProvider
      theme={
        globalContext.globalThemeTitle === globalThemeLight.title
          ? globalThemeLight
          : globalThemeDark
      }
    >
      {props.children}
    </ThemeProvider>
  )
}
