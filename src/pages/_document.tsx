import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import React from 'react'
// eslint-disable-next-line prettier/prettier
import { ServerStyleSheet } from 'styled-components'

/**
 * Esse arquivo é necessário para que o styled-components funcione adequadamente.
 *
 * Explicação: Sem esse arquivo de configurações o navegador, responsável por aplicar os
 * styled-components, teria que esperar o servidor node enviar a tela, esperar a tela ser
 * renderizada para, só então, aplicar o estilo. Isso causaria o glitch na tela.
 *
 * Mantenha esse arquivo sempre. PLS.
 *
 * @see https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
 * Esse arquivo em especial está em dentro do diretório "pages" desse repositório
 *
 * @author rafaelvictor01
 * @todo Add o favicon
 */
export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang={'pt-BR'}>
        <Head>
          <meta charSet={'utf-8'} />
          <meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
          <link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
          <link rel={'preconnect'} href={'https://fonts.gstatic.com'} />
          <link
            href={
              'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
            }
            rel={'stylesheet'}
            // crossOrigin
          />
          {/* Add o favicon */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
