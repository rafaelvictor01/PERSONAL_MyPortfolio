import React, { createContext } from 'react'
import { SettingsConstants } from '../constants/SettingsConstants'
import usePersistedState from '../hooks/persisted-state/usePersistedState'
import globalThemeDark from '../styles/themes/dark-theme/globalThemeDark'
import globalThemeLight from '../styles/themes/light-theme/globalThemeLight'

/** Definição do type personalizado do nosso contexto */
type GlobalContextTP = {
  globalThemeTitle: string
  toggleTheme: () => void
}

/**
 * O type que acabamos de criar para o nosso contexto agora é "tratado".
 * Usando o Partial, fazemos com que tudo definido acima seja opcional.
 * Sendo tudo opcional, inicializamos nosso contexto vazio
 */
export const GlobalContext = createContext<Partial<GlobalContextTP>>({})

/**
 * Cria o contexto global da aplicação por meio da API nativa do React -> React Context.
 * @author rafaelvictor01
 */
export const GlobalContextProvider: React.FC = ({ children }) => {
  const [globalThemeTitle, setGlobalThemeTitle] = usePersistedState(
    SettingsConstants.THEME_COOKIE_ACCESS_KEY,
    globalThemeLight.title
  )

  // Responsável por controlar a troca dos temas da aplicação
  function toggleTheme(): void {
    setGlobalThemeTitle(
      globalThemeTitle === globalThemeDark.title
        ? globalThemeLight.title
        : globalThemeDark.title
    )
  }

  return (
    <GlobalContext.Provider value={{ globalThemeTitle, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}
