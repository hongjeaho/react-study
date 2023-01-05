import React from 'react'

export default function KeyItem({ values, classNamez, code, keyClickEvent }) {
  return (
    <div
      className={`key ${classNamez}`}
      code={code}
      onClick={() =>
        keyClickEvent(
          classNamez === 'fn-key' ? '' : values[values.length - 1].value,
        )
      }
    >
      {values.map((item, index) => (
        <span className="value" key={index}>
          {item.value}
        </span>
      ))}
    </div>
  )
}
