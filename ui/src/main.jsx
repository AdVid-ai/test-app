import { StrictMode } from 'react'
// React 18+ root API for concurrent features and improved rendering
import { createRoot } from 'react-dom/client'
// Tailwind styles and custom global CSS
import './index.css'
import App from './App.jsx'

// Mount the React app inside the #root div in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
