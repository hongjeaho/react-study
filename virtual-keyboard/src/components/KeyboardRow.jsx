import React from 'react'
import KeyItem from './KeyItem'

export default function KeyboardRow({ keys, keyClickEvent }) {
  return (
    <div className="row">
      {keys.map((item, index) => (
        <KeyItem
          values={item.values}
          code={item.code}
          classNamez={item.className ? item.className : ''}
          key={index}
          keyClickEvent={keyClickEvent}
        />
      ))}
    </div>
  )
}
