import React from 'react'
import IStandardInterface from 'src/common/interfaces/IStandardInterface'
import styled from 'styled-components'

interface ISectionCPProps extends IStandardInterface {
  children: JSX.Element
}

/**
 * @author rafaelvictor01
 * @return - tag section personalizada para agrupar as screens
 */
export default function SectionCP(props: ISectionCPProps): JSX.Element {
  return (
    <SectionMainWrapperSCP className={props.className} id={props.id}>
      {props.children}
    </SectionMainWrapperSCP>
  )
}

const SectionMainWrapperSCP = styled.section`
  padding: 2rem 0 4rem;
`
