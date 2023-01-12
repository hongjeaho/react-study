import React from 'react'
import styled from '@emotion/styled'
import { Outlet } from 'react-router-dom'

const Base = styled.div`
    width: 100%;
    height: 100%;
`
const Title = styled.h1`
  color: royalblue;
`

const Contents = styled.div``

export default function SampleIndex() {

  return (
    <Base>
    <Title>Sample Title</Title>   
    <Contents>
      <Outlet />
    </Contents>    
    </Base>
  )
}