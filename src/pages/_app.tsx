import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import globalThemeDark from '../common/styles/themes/dark-theme/globalThemeDark'
import globalThemeLight from '../common/styles/themes/light-theme/globalThemeLight'
import GlobalStyle from '../common/styles/globalStyle'

/**
 * @param AppProps
 * @returns JSX.Element
 * @author rafaelvictor01
 *
 * @todo add description
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={globalThemeDark}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
