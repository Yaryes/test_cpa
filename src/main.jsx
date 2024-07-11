import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { App } from './App'
import ReactDOM from 'react-dom/client'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider>
     <div style={{ backgroundColor: '#04051D' }}>
        <App />
      </div>
      <div>
        
      </div>
     </ChakraProvider>
  </React.StrictMode>,
)
