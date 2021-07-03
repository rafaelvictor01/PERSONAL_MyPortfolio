import { AppProps } from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../common/styles/globalTheme'
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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
