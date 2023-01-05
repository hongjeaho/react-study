import React, { useEffect } from 'react'
import KeyboardRow from './KeyboardRow'
import keyMap from '../data/keyData'
import '../css/keyboard.css'

export default function Keyboard({ keyClickEvent }) {
  useEffect(() => {
    const html = document.querySelector('.input-group .input')
    const keyupEvent = event => {
      document
        .querySelector(`div.key[code=${event.code}]`)
        .classList.remove('active')
    }

    const keydownEvent = event => {
      document
        .querySelector(`div.key[code=${event.code}]`)
        .classList.add('active')
    }

    html.addEventListener('keyup', keyupEvent)
    html.addEventListener('keydown', keydownEvent)

    return () => {
      html.removeEventListener('keyup', keyupEvent)
      html.removeEventListener('keydown', keydownEvent)
    }
  }, [])

  return (
    <div className="keyboard">
      {keyMap.map(keys => (
        <KeyboardRow
          keys={keys.data}
          key={keys.keyIndex}
          keyClickEvent={keyClickEvent}
        />
      ))}
    </div>
  )
}
