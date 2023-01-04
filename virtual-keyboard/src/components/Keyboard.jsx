import React from 'react'
import KeyboardRow from './KeyboardRow'
import keyMap from '../data/keyData'
import '../css/keyboard.css'

export default function Keyboard() {
  return (
    <div className="keyboard">
      {keyMap.map(keys => (
        <KeyboardRow keys={keys.data} key={keys.keyIndex} />
      ))}
    </div>
  )
}
