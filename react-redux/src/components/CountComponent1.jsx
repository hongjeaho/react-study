import React from 'react'
import { useSelector } from 'react-redux'

export default function CountComponent1() {
  const count = useSelector(state => state.counter.value)

  return (
    <>
      <span>
        count : {count}
      </span>
    </>
  )
}