import React from 'react'

export default function KeyItem({ values, className }) {
  return (
    <div className={'key ' + className}>
      {values.map(item => (
        <span className="value" key={item.value}>
          {item.value}
        </span>
      ))}
    </div>
  )
}
