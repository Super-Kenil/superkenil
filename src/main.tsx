import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const container = document.getElementById('superkenil')
if (container) {
  const root = createRoot(container)
  root.render(
    <StrictMode>
      <BrowserRouter basename={'/superkenil/'}>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
}
