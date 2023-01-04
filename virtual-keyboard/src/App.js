import Keyboard from './components/Keyboard'
import './css/common.css'

function App() {
  return (
    <>
      <div className="contents">
        <div class="input-group" id="input-group">
          <input id="input" class="input" type="text" autocomplete="off" />
          <div class="error-message">한글 입력 불가</div>
        </div>
        <Keyboard />
      </div>
    </>
  )
}

export default App
