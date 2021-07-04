import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContext } from '../../../context/GlobalContext'
import globalThemeLight from '../../themes/light-theme/globalThemeLight'
import globalThemeDark from '../../themes/dark-theme/globalThemeDark'

interface ThemeProviderCPProps {
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
  props: ThemeProviderCPProps
): JSX.Element {
  const globalContext = useContext(GlobalContext)
  return (
    <ThemeProvider
      theme={
        globalContext.globalThemeTittle === globalThemeLight.title
          ? globalThemeLight
          : globalThemeDark
      }
    >
      {props.children}
    </ThemeProvider>
  )
}
