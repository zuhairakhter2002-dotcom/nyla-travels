import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { PackagesProvider } from './contextApi/Package'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <PackagesProvider>
          <BrowserRouter>
             <App />
         </BrowserRouter> 
      </PackagesProvider> 
  </StrictMode>,
)
