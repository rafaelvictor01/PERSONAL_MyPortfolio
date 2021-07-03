import React from 'react'
import styled from 'styled-components'

export default function Home(): JSX.Element {
  return <Title>My page</Title>
}

const Title = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
