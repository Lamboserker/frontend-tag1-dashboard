// Hier startet die React-Anwendung.
// React sucht in der index.html das Element mit der id "root"
// und zeigt darin die Komponente <App /> an.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
