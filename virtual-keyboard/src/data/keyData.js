const keyMap = [
  {
    keyIndex: 1,
    data: [
      { code: 'Backquote', values: [{ value: '~' }, { value: '₩' }] },
      { code: 'Digit1', values: [{ value: '!' }, { value: '1' }] },
      { code: 'Digit2', values: [{ value: '@' }, { value: '2' }] },
      { code: 'Digit3', values: [{ value: '#' }, { value: '3' }] },
      { code: 'Digit4', values: [{ value: '$' }, { value: '4' }] },
      { code: 'Digit5', values: [{ value: '%' }, { value: '5' }] },
      { code: 'Digit6', values: [{ value: '^' }, { value: '6' }] },
      { code: 'Digit7', values: [{ value: '&' }, { value: '7' }] },
      { code: 'Digit8', values: [{ value: '*' }, { value: '8' }] },
      { code: 'Digit9', values: [{ value: '(' }, { value: '9' }] },
      { code: 'Digit0', values: [{ value: ')' }, { value: '0' }] },
      { code: 'Minus', values: [{ value: '_' }, { value: '+' }] },
      { code: 'Equal', values: [{ value: '-' }, { value: '=' }] },
      {
        code: 'Backspace',
        className: 'back-space-key',
        values: [{ value: 'Backspace' }],
      },
    ],
  },
  {
    keyIndex: 2,
    data: [
      { code: 'Tab', className: 'tab-key', values: [{ value: 'Tab' }] },
      { code: 'KeyQ', values: [{ value: 'Q' }] },
      { code: 'KeyW', values: [{ value: 'W' }] },
      { code: 'KeyE', values: [{ value: 'E' }] },
      { code: 'KeyR', values: [{ value: 'R' }] },
      { code: 'KeyT', values: [{ value: 'T' }] },
      { code: 'KeyY', values: [{ value: 'Y' }] },
      { code: 'KeyU', values: [{ value: 'U' }] },
      { code: 'KeyI', values: [{ value: 'I' }] },
      { code: 'KeyO', values: [{ value: 'O' }] },
      { code: 'KeyP', values: [{ value: 'P' }] },
      { code: 'BracketLeft', values: [{ value: '{' }, { value: '[' }] },
      { code: 'BracketRight', values: [{ value: '}' }, { value: ']' }] },
      {
        code: 'Backslash',
        className: 'back-slash-key',
        values: [{ value: '|' }, { value: '\\' }],
      },
    ],
  },
  {
    keyIndex: 3,
    data: [
      {
        code: 'CapsLock',
        className: 'caps-lock-key',
        values: [{ value: 'CapsLock' }],
      },
      { code: 'KeyA', values: [{ value: 'A' }] },
      { code: 'KeyS', values: [{ value: 'S' }] },
      { code: 'KeyD', values: [{ value: 'D' }] },
      { code: 'KeyF', values: [{ value: 'F' }] },
      { code: 'KeyG', values: [{ value: 'G' }] },
      { code: 'KeyH', values: [{ value: 'H' }] },
      { code: 'KeyJ', values: [{ value: 'J' }] },
      { code: 'KeyK', values: [{ value: 'K' }] },
      { code: 'KeyL', values: [{ value: 'L' }] },
      { code: 'Semicolon', values: [{ value: ':' }, { value: ';' }] },
      { code: 'Quote', values: [{ value: '"' }, { value: ',' }] },
      { code: 'Enter', className: 'enter-key', values: [{ value: 'ENTER' }] },
    ],
  },
  {
    keyIndex: 4,
    data: [
      {
        code: 'ShiftLeft',
        className: 'left-shift-key',
        values: [{ value: 'SHIFT' }],
      },
      { code: 'KeyZ', values: [{ value: 'Z' }] },
      { code: 'KeyX', values: [{ value: 'X' }] },
      { code: 'KeyC', values: [{ value: 'C' }] },
      { code: 'KeyV', values: [{ value: 'V' }] },
      { code: 'KeyB', values: [{ value: 'B' }] },
      { code: 'KeyN', values: [{ value: 'N' }] },
      { code: 'KeyM', values: [{ value: 'M' }] },
      { code: 'Comma', values: [{ value: '<' }, { value: ',' }] },
      { code: 'Period', values: [{ value: '>' }, { value: '.' }] },
      { code: 'Slash', values: [{ value: '?' }, { value: '/' }] },
      {
        code: 'ShiftRight',
        className: 'right-shift-key',
        values: [{ value: 'SHIFT' }],
      },
    ],
  },
  {
    keyIndex: 5,
    data: [
      { code: '', className: 'fn-key', values: [{ value: 'fn' }] },
      {
        code: 'ControlLeft',
        className: 'fn-key',
        values: [{ value: 'control' }],
      },
      { code: 'AltLeft', className: 'fn-key', values: [{ value: 'option' }] },
      { code: 'MetaLeft', className: 'fn-key', values: [{ value: 'command' }] },
      { code: 'Space', className: 'space-key', values: [{ value: 'Space' }] },
      {
        code: 'MetaRight',
        className: 'fn-key',
        values: [{ value: 'command' }],
      },
      { code: '', className: 'fn-key', values: [{ value: '-' }] },
      { code: 'AltRight', className: 'fn-key', values: [{ value: 'option' }] },
    ],
  },
]

export default keyMap
