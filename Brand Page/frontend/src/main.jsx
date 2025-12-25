import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(  //render=Generate from root which is in index.html
  <StrictMode>
    <App/>
  </StrictMode>,
)
