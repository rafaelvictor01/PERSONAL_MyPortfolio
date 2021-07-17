import React from 'react'
import TextCP from 'src/common/components/text/Text'

/**
 * @author rafaelvictor01
 * @return Wrapper dos textos a serem exibidos da Landing Screen
 */
export default function CoverLetterCP(): JSX.Element {
  return (
    <>
      <TextCP content={"Hi, i'm Rafael 😀"} title={true} />
      <TextCP subtitle={true} content={'Dev Full Stack '} />
      <TextCP
        content={
          'Estudante de Sistemas da Informação e, atualmente, desenvolvedor web estou sempre ' +
          'aprendendo, ensinando e criando tecnologias que contribuam para um mundo melhor.'
        }
      />
    </>
  )
}
