import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import { Loader } from '@react-three/drei'
import './styles.css'
import { App } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        software
        <br />
        digital art
      </a>
      <a href="https://www.linkedin.com/in/spencer-h/" target="_blank" style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        spencer hamilton
      </a>
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
    <Loader />
  </>,
  document.getElementById('root')
)
