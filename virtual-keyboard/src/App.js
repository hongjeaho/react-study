import { useState } from 'react'
import Keyboard from './components/Keyboard'
import './css/common.css'

function App() {
  const [input, setInput] = useState('')

  const handlerInput = event => {
    setInput(event.target.value)
  }

  const handlerClickEvent = value => {
    const ignore = ['Backspace', 'Tab', 'CapsLock', 'Enter', 'SHIFT']

    if (ignore.includes(value)) return

    setInput(input + value)
  }

  const handlerTheme = event => {
    const theme = event.target.checked ? 'dark-mode' : ''
    const html = document.querySelector('html')
    html.setAttribute('theme', theme)
  }

  return (
    <>
      <div className="contents">
        <div className="menu">
          <label className="switch">
            <input type="checkbox" onChange={handlerTheme} />
            <span className="slider"></span>
          </label>
        </div>

        <div className="input-group" id="input-group">
          <input
            id="input"
            className="input"
            type="text"
            autoComplete="off"
            value={input}
            onChange={handlerInput}
          />
        </div>

        <Keyboard keyClickEvent={handlerClickEvent} />
      </div>
    </>
  )
}

export default App
