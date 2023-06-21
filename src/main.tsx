import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootswatch/dist/yeti/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App title='Lista de Tareas TS' />
  </React.StrictMode>,
)
