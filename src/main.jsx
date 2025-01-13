//node modules 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//components
import './index.css'

//css links
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
