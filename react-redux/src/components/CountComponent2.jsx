import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from '@emotion/styled'
import {increment, decrement, setCountByValue} from '../store/count/countRedux'

const Base = styled.div`
  display: flex;
`
const Button = styled.button`
  margin-left: 5px;
`

export default function CountComponent2() {

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Base>
      <span>
        count : {count}
      </span>
      <Button onClick={() => dispatch(increment()) }> 1 ++ </Button>
      <Button onClick={() => dispatch(decrement()) }> 1 -- </Button>
      <Button onClick={() => dispatch(setCountByValue(5)) }> 5 ++ </Button>
    </Base>
  )
}