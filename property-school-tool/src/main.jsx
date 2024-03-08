import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { theme } from "./utils/theme.js";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <Provider store={store}> 
         <PersistGate persistor={persistor}>
          <App />
         </PersistGate>
       </Provider>
    </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>,
)


