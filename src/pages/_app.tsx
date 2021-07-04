import { AppProps } from 'next/app'
import React from 'react'
import GlobalStyle from '../common/styles/globalStyle'
import { GlobalContextProvider } from '../common/context/GlobalContext'
import ThemeProviderCP from '../common/styles/components/theme-provider/ThemeProvider'

/**
 * @param AppProps
 * @returns JSX.Element
 * @author rafaelvictor01
 *
 * @todo add description
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
