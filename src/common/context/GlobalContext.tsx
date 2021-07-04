import React, { createContext } from 'react'
import usePersistedState from '../hooks/persisted-state/usePersistedState'
import globalThemeDark from '../styles/themes/dark-theme/globalThemeDark'
import globalThemeLight from '../styles/themes/light-theme/globalThemeLight'

const THEME_COOKIE_ACCESS_KEY = 'globalTheme'

/** Definição do type personalizado do nosso contexto */
type GlobalContextTP = {
  globalThemeTittle: string
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
  const [globalThemeTittle, setGlobalThemeTittle] = usePersistedState(
    THEME_COOKIE_ACCESS_KEY,
    globalThemeLight.title
  )

  // Responsável por controlar a troca dos temas da aplicação
  function toggleTheme(): void {
    setGlobalThemeTittle(
      globalThemeTittle === globalThemeDark.title
        ? globalThemeLight.title
        : globalThemeDark.title
    )
  }

  return (
    <GlobalContext.Provider value={{ globalThemeTittle, toggleTheme }}>
      {children}
    </GlobalContext.Provider>
  )
}
