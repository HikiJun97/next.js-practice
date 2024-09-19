import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp from './MyApp.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
