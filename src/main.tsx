import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MineRunner } from './components/MineRunner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MineRunner />
  </StrictMode>,
)
