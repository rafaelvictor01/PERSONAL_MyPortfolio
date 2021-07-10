import React from 'react'
import MainNavbarCP from 'src/common/components/main-navbar/MainNavbar'
import SectionCP from 'src/common/components/section/Section'
import styled from 'styled-components'

interface ILayoutCPProps {
  content: JSX.Element
}

/**
 * @author rafaelvictor01
 * @returns - Componente usado para abstrair a criação de todas as screens do sistema
 * - Ele faz com que todas as screens tenham uma navbar, um footer, uma section, etc...
 */
export function LayoutCP(props: ILayoutCPProps): JSX.Element {
  return (
    <MainWrapperLayoutSCP>
      <MainNavbarCP />
      <SectionCP>{props.content}</SectionCP>
    </MainWrapperLayoutSCP>
  )
}

const MainWrapperLayoutSCP = styled.div``
