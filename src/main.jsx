import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './firebase.jsx'
import 'bootswatch/dist/quartz/bootstrap.min.css'
//import 'bootswatch-icons/font/bootstrap-icons.css'

//A ui se debe importar el archivo Firebase o otros similares

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
