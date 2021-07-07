import { AppProps } from 'next/app'
import React from 'react'
import GlobalStyle from '../common/styles/globalStyle'
import { GlobalContextProvider } from '../common/context/GlobalContext'
import ThemeProviderCP from '../common/components/styles/theme-provider/ThemeProvider'

/**
 * @author rafaelvictor01
 * @returns - add description
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GlobalContextProvider>
      <ThemeProviderCP>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProviderCP>
    </GlobalContextProvider>
  )
}
