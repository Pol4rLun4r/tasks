import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Context
import { AuthProvider } from './context/auth'
import { TaskProvider } from './context/task'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <AuthProvider>
    <TaskProvider>
      <App />
    </TaskProvider>
  </AuthProvider>
  // </React.StrictMode>
  ,
)
