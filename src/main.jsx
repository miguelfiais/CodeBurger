import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './Styles/globalStyles'
import Router from './routes'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>
)
