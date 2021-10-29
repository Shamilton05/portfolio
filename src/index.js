import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import './styles.css'
import { App } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://squidgamegame.games" style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        software
        <br />
        digital art
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>spencer hamilton</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>10/28/2021</div>
    </div>
  )
}

ReactDOM.render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
  </>,
  document.getElementById('root')
)
