import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const rootElement = document.getElementById('root');
const createRootElement = createRoot(rootElement);

createRootElement.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
