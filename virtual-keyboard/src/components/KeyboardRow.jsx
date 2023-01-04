import React from 'react'
import KeyItem from './KeyItem'

export default function KeyboardRow({ keys }) {
  return (
    <div className="row">
      {keys.map((item, index) => (
        <KeyItem values={item.values} className={item.className} key={index} />
      ))}
    </div>
  )
}
