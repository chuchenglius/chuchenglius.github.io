import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const DATA = [
  { id: "CNIT 103", name: "CNIT 103 - Hardware", completed: false },
  { id: "CNIT 131", name: "CNIT 131 - Internet & Intro to HTML, CSS", completed: false },
  { id: "CNIT 106", name: "CNIT 106 - Introduction to Networks", completed: false },
  { id: "CNIT 120", name: "CNIT 120 - Network Security", completed: false },
];


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
  </StrictMode>,
)
