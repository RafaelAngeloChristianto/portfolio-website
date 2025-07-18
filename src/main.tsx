import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomeScreen } from './screens/HomeScreen.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomeScreen />
  </React.StrictMode>,
)
