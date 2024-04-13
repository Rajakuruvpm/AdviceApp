import React from 'react'
import ReactDOM from 'react-dom/client'
import { AdviceApp } from './AdviceApp.jsx'
// import App from './App.jsx'
// import './index.css'
import'./Advice.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AdviceApp/>
  </React.StrictMode>,
)
