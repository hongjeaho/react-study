import styled from '@emotion/styled'
import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <Error>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            {error.statusText || error.message}
        </p>
    </Error>
  )
}